# Setup Instructions for College Logos and New Logo

## College Logos

1. **Create the colleges directory** (if it doesn't exist):
   ```bash
   mkdir -p public/assets/colleges
   ```

2. **Add your 28 college logos** to `public/assets/colleges/` with the following names:
   - `I1.png`, `I2.png`, `I4.png`, `I5.png`, ... `I29.png`
   - **Note:** Skip `I3.png` as mentioned (no I3 image)
   - Logos should be in PNG format
   - Recommended size: 200x100px or similar aspect ratio

## New Main Logo

1. **Add your new logo** to `src/assets/` directory
   - Supported formats: `.svg`, `.png`
   - Recommended: SVG for best quality
   - Name it clearly (e.g., `adzzat-logo.svg` or `new-logo.svg`)

2. **Update the Navbar component** to use the new logo:
   - Open `src/components/landing/Navbar.tsx`
   - Change line 3 from: `import mainLogo from "@/assets/main-logo.svg";`
   - To: `import mainLogo from "@/assets/YOUR_NEW_LOGO_NAME.svg";`

## Color Scheme

The primary color has been changed to **#0A1538** (dark navy blue) throughout the application:
- All buttons, links, and accents now use this color
- Gradients and shadows have been updated to match
- The color is defined in `src/index.css` as HSL(226, 70%, 13%)

## Testing

After adding the logos, run:
```bash
npm run dev
```

The site should now display:
- Your 28 college logos scrolling in the College Logos section
- The new main logo in the top-left navbar
- All UI elements in the new dark blue color (#0A1538)
