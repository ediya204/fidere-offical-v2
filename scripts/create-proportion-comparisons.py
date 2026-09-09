"""Create equally scaled Hero comparison sheets without changing source captures.

Run after all screenshots have been captured at 1440 x 1000 (desktop) or
390 x 844 (mobile). Requires Pillow. A mismatched viewport fails explicitly
instead of stretching or cropping one side to make it appear comparable.
"""

from functools import lru_cache
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "artifacts" / "proportion-correction"
REFERENCE = ROOT / "artifacts" / "visual-validation"
PAGES = (
    ("About", "about", "about"),
    ("Wealth management", "wealth", "wealth"),
    ("Advisory / Private trust", "advisory", "private-trust"),
)
VIEWPORTS = {"desktop": (1440, 1000), "mobile": (390, 844)}
DISPLAY_WIDTHS = {"desktop": 720, "mobile": 390}
INK = "#172c3b"
MUTED = "#52616b"
LINE = "#d9d7d3"


@lru_cache(maxsize=None)
def font(size):
    for path in (
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ):
        if Path(path).is_file():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def load_inputs():
    """Read and validate every input before producing any output."""
    images = {}
    errors = []
    for device, expected_size in VIEWPORTS.items():
        for _, reference_slug, local_slug in PAGES:
            sources = {
                "reference": REFERENCE / f"reference-{reference_slug}-{device}-top.png",
                "after": BASE / "after" / f"{local_slug}-{device}-top.jpg",
            }
            if device == "desktop":
                sources["before"] = BASE / "before" / f"{local_slug}-desktop.png"
            for version, path in sources.items():
                if not path.is_file():
                    errors.append(f"Missing screenshot: {path.relative_to(ROOT)}")
                    continue
                try:
                    with Image.open(path) as source:
                        if source.size != expected_size:
                            errors.append(
                                f"Wrong viewport: {path.relative_to(ROOT)} is "
                                f"{source.width} x {source.height}; expected "
                                f"{expected_size[0]} x {expected_size[1]}"
                            )
                            continue
                        # Conversion is in memory only. Source bytes remain unchanged.
                        images[(version, local_slug, device)] = source.convert("RGB")
                except OSError as error:
                    errors.append(f"Cannot read {path.relative_to(ROOT)}: {error}")
    if errors:
        raise SystemExit("Comparison inputs are not ready:\n" + "\n".join(errors))
    return images


def create_sheet(images, device, versions, captions, output):
    viewport_width, viewport_height = VIEWPORTS[device]
    width = DISPLAY_WIDTHS[device]
    height = round(viewport_height * width / viewport_width)
    padding, column_gap, header_height, row_gap = 24, 24, 84, 28
    row_height = header_height + height
    canvas = Image.new(
        "RGB",
        (
            padding * 2 + width * 2 + column_gap,
            padding * 2 + len(PAGES) * row_height + (len(PAGES) - 1) * row_gap,
        ),
        "white",
    )
    draw = ImageDraw.Draw(canvas)
    for row, (title, _, local_slug) in enumerate(PAGES):
        y = padding + row * (row_height + row_gap)
        draw.text(
            (padding, y),
            f"{title} | {viewport_width} x {viewport_height}",
            font=font(22),
            fill=INK,
        )
        for column, (version, caption) in enumerate(zip(versions, captions)):
            x = padding + column * (width + column_gap)
            draw.text((x, y + 35), caption, font=font(16), fill=MUTED)
            source = images[(version, local_slug, device)]
            displayed = source.resize((width, height), Image.Resampling.LANCZOS)
            canvas.paste(displayed, (x, y + header_height))
            draw.rectangle(
                (x, y + header_height, x + width - 1, y + header_height + height - 1),
                outline=LINE,
            )
    canvas.save(output, format="PNG")


def main():
    images = load_inputs()
    BASE.mkdir(parents=True, exist_ok=True)
    outputs = []
    for device in VIEWPORTS:
        output = BASE / f"comparison-{device}.png"
        create_sheet(
            images,
            device,
            ("reference", "after"),
            ("Lighthouse Canton", "FIDERE TRUST - corrected proportions"),
            output,
        )
        outputs.append(output)
    output = BASE / "before-after-desktop.png"
    create_sheet(
        images,
        "desktop",
        ("before", "after"),
        ("FIDERE TRUST - before", "FIDERE TRUST - corrected proportions"),
        output,
    )
    outputs.append(output)
    print(json.dumps({"created": [str(path) for path in outputs]}, indent=2))


if __name__ == "__main__":
    main()
