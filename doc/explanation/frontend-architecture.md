# Frontend Architecture

The GitPeek frontend is built as a single-page application (SPA) using React, styled heavily with CSS Modules, and managed by Vite.

## Component Hierarchy

The application follows a standard React component folder structure to encourage modularity and reusability:

- **`src/components/common/`**: Reusable base components (e.g., `Button`, `Input`, `Card`, `Badge`, `Spinner`). These are "dumb" components that strictly rely on props.
- **`src/components/layout/`**: Structural components representing the macro-layout of the application (e.g., `Navbar`, `Footer`, `Container`).
- **`src/components/profile/`**: Domain-specific components dealing with GitHub user data (e.g., `ProfileCard`, `UserStats`).
- **`src/components/repository/`**: Domain-specific components dealing with GitHub repositories (e.g., `RepoList`, `RepoCard`, `RepoFilter`).
- **`src/pages/`**: Top-level route components (`Home`, `About`, `Profile`, `NotFound`) that piece together the smaller components.

## Routing

Routing is managed via `react-router-dom`. The routing logic is centralized in `src/routes/AppRoutes.jsx`, which dynamically loads pages based on the current URL.
Key routes include:
- `/` - The landing page and search form.
- `/about` - Information about GitPeek.
- `/profile/:username` - The dynamic profile overview for a specific GitHub user.

## Styling Strategy: CSS Modules

GitPeek enforces a strictly scoped styling approach using **CSS Modules** (`[name].module.css`).

### Why CSS Modules?
1. **Isolation:** Styles defined in `Card.module.css` will never leak and affect elements in `Button.module.css`.
2. **Predictability:** Class names are hashed during the Vite build process (e.g., `_btn_x92a`), ensuring zero global namespace collisions.
3. **Integration:** CSS Modules work seamlessly with React's component-based architecture.

### Global CSS Tokens
While components are isolated, they all draw from a single source of truth for design parameters (colors, fonts, radii, shadows). These are defined as CSS variables in `src/styles/globals.css` and injected into the `:root` pseudo-class.

Example inside a component CSS file:
```css
/* RepoCard.module.css */
.card {
  background-color: var(--bg-surface); /* Pulls #181818 from globals */
  border-radius: var(--border-radius-lg);
}
```

This ensures that the immersive, Spotify-inspired dark aesthetic remains perfectly consistent across the entire application.
