import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const sourcePath = path.join(projectRoot, "public/brand/fidere-logo.png");
const publicDirectory = path.join(projectRoot, "public");
const alphaThreshold = 8;

async function findBrandMarkBounds() {
  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const occupiedColumns = Array.from({ length: info.width }, () => false);
  for (let x = 0; x < info.width; x += 1) {
    for (let y = 0; y < info.height; y += 1) {
      if (data[(y * info.width + x) * 4 + 3] > alphaThreshold) {
        occupiedColumns[x] = true;
        break;
      }
    }
  }

  const firstColumn = occupiedColumns.findIndex(Boolean);
  const lastColumn = occupiedColumns.length - 1 - occupiedColumns.toReversed().findIndex(Boolean);
  if (firstColumn < 0 || lastColumn < firstColumn) {
    throw new Error("The source logo contains no visible pixels.");
  }

  const gaps = [];
  let gapStart = null;
  for (let x = firstColumn; x <= lastColumn + 1; x += 1) {
    const occupied = x <= lastColumn && occupiedColumns[x];
    if (!occupied && gapStart === null) gapStart = x;
    if (occupied && gapStart !== null) {
      gaps.push({ left: gapStart, width: x - gapStart });
      gapStart = null;
    }
  }

  const separator = gaps.sort((a, b) => b.width - a.width)[0];
  if (!separator || separator.width < info.height * 0.15) {
    throw new Error("Could not isolate the brand mark from the wordmark.");
  }

  const markRight = separator.left;
  let top = info.height;
  let bottom = -1;
  for (let y = 0; y < info.height; y += 1) {
    for (let x = firstColumn; x < markRight; x += 1) {
      if (data[(y * info.width + x) * 4 + 3] > alphaThreshold) {
        top = Math.min(top, y);
        bottom = Math.max(bottom, y);
      }
    }
  }

  return {
    left: firstColumn,
    top,
    width: markRight - firstColumn,
    height: bottom - top + 1,
  };
}

async function renderSquare(size, bounds) {
  const innerSize = Math.max(1, Math.round(size * 0.92));
  const mark = await sharp(sourcePath)
    .extract(bounds)
    .resize(innerSize, innerSize, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9 })
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

function encodeIco(images) {
  const directorySize = 6 + images.length * 16;
  const header = Buffer.alloc(directorySize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  let offset = directorySize;
  images.forEach(({ size, buffer }, index) => {
    const entryOffset = 6 + index * 16;
    header.writeUInt8(size === 256 ? 0 : size, entryOffset);
    header.writeUInt8(size === 256 ? 0 : size, entryOffset + 1);
    header.writeUInt8(0, entryOffset + 2);
    header.writeUInt8(0, entryOffset + 3);
    header.writeUInt16LE(1, entryOffset + 4);
    header.writeUInt16LE(32, entryOffset + 6);
    header.writeUInt32LE(buffer.length, entryOffset + 8);
    header.writeUInt32LE(offset, entryOffset + 12);
    offset += buffer.length;
  });

  return Buffer.concat([header, ...images.map(({ buffer }) => buffer)]);
}

const bounds = await findBrandMarkBounds();
const icoSizes = [16, 32, 48, 64, 128, 256];
const icoImages = await Promise.all(
  icoSizes.map(async (size) => ({ size, buffer: await renderSquare(size, bounds) })),
);
const icoBuffer = encodeIco(icoImages);

await Promise.all([
  writeFile(path.join(publicDirectory, "favicon.ico"), icoBuffer),
  writeFile(path.join(publicDirectory, "fidere-mark.ico"), icoBuffer),
  writeFile(path.join(publicDirectory, "favicon-16x16.png"), await renderSquare(16, bounds)),
  writeFile(path.join(publicDirectory, "favicon-32x32.png"), await renderSquare(32, bounds)),
  writeFile(path.join(publicDirectory, "fidere-mark-48.png"), await renderSquare(48, bounds)),
  writeFile(path.join(publicDirectory, "fidere-mark-96.png"), await renderSquare(96, bounds)),
  writeFile(path.join(publicDirectory, "apple-touch-icon.png"), await renderSquare(180, bounds)),
  writeFile(path.join(publicDirectory, "icon-192.png"), await renderSquare(192, bounds)),
  writeFile(path.join(publicDirectory, "icon-512.png"), await renderSquare(512, bounds)),
]);

console.log(
  `Generated favicon assets from ${path.relative(projectRoot, sourcePath)} using mark bounds ${JSON.stringify(bounds)}.`,
);
