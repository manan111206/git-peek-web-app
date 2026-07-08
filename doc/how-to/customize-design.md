# How to Customize the Design

GitPeek employs a strict, immersive dark theme inspired by Spotify. The design system relies heavily on CSS Modules and global CSS variables, making it straightforward to customize colors, spacing, and typography.

## Modifying Global Theme Variables

The core of the design system lives in `frontend/src/styles/globals.css`. To change the overall color palette, you only need to modify the variables defined in the `:root` pseudo-class.

1. Open `frontend/src/styles/globals.css`.
2. Locate the `:root` block.
3. Modify the desired hex codes:

```css
:root {
  /* Core Backgrounds */
  --bg-primary: #121212;   /* The deepest background (e.g., page body) */
  --bg-surface: #181818;   /* Slightly elevated (e.g., cards, panels) */
  --bg-elevated: #1f1f1f;  /* Highly elevated (e.g., dropdowns, inputs) */

  /* The Accent Color */
  --accent-color: #1ed760; /* Spotify Green */
  --accent-hover: #1fdf64;
}
```

*Note: Changing `--accent-color` will automatically update all primary buttons, active links, and highlighted text elements.*

## Adjusting Typography

GitPeek uses the `SpotifyMixUITitle` and `SpotifyMixUI` fonts, falling back to `CircularSp` and `sans-serif`.

To change the fonts globally:
1. Update the `--font-family-base` and `--font-family-heading` variables in `globals.css`.
2. Ensure you import the new web fonts in `index.html` or at the top of `globals.css` (e.g., via Google Fonts).

## Customizing Specific Components

Because we use CSS Modules, component styles are isolated and scoped locally. To change the geometry or specific interactions of a component:

1. Locate the component's directory (e.g., `frontend/src/components/common/`).
2. Open its corresponding `.module.css` file (e.g., `Button.module.css`).
3. Modify the styles. For example, to change the pill-shaped buttons back to standard rounded rectangles, adjust the `border-radius`:

```css
/* In Button.module.css */
.btn {
  /* Change from var(--border-radius-pill) to var(--border-radius-md) */
  border-radius: var(--border-radius-md); 
}
```

By leveraging global variables inside component-specific CSS modules, you maintain a scalable and easily customizable design architecture.
