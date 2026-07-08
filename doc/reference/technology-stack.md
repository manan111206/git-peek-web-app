# Technology Stack

GitPeek is a full-stack JavaScript monorepo utilizing modern web technologies. This reference document details the libraries, frameworks, and APIs that power the application.

## Frontend (Client)

The frontend is a React-based Single Page Application (SPA).

- **Framework:** [React](https://reactjs.org/) (v18.x) - UI library for building component-based interfaces.
- **Build Tool:** [Vite](https://vitejs.dev/) - Lightning-fast frontend build tool and development server.
- **Routing:** [React Router](https://reactrouter.com/) (v6.x) - Declarative routing for React.
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (specifically FontAwesome `Fa` icons) - Standardized SVG icon delivery.
- **Styling:** CSS Modules - Strictly scoped CSS files (`.module.css`) to prevent global namespace pollution, adhering to a Spotify-inspired dark theme via CSS variables.

## Backend (Server)

The backend is a lightweight Node.js proxy server.

- **Runtime:** [Node.js](https://nodejs.org/) - JavaScript runtime environment.
- **Framework:** [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework.
- **HTTP Client:** [Axios](https://axios-http.com/) - Promise-based HTTP client used to interface with the GitHub API.
- **Authentication:** [Passport.js](http://www.passportjs.org/) - Authentication middleware for Node.js (handling GitHub OAuth).
- **PDF Generation:** [Puppeteer](https://pptr.dev/) or [PDFKit](https://pdfkit.org/) - For rendering and exporting AI repository summaries as PDFs.
- **Middleware:**
  - `cors`: Handles Cross-Origin Resource Sharing.
  - `dotenv`: Loads environment variables from a `.env` file.

## External APIs

- **[GitHub REST API (v3)](https://docs.github.com/en/rest)**
  - Core endpoints for profile metadata and repository queries.
- **[OpenRouter API](https://openrouter.ai/)**
  - Advanced LLM integration for processing repository codebases, generating summaries, and providing AI mentorship recommendations.
