# Core Features

GitPeek was built to provide a focused, high-performance experience for analyzing GitHub profiles. Here are the core features that drive the application.

## 1. Rate-Limit Circumventing Architecture
The primary challenge of using the GitHub REST API on the frontend is the strict unauthenticated rate limit (60 requests per hour per IP). GitPeek solves this by routing all requests through a custom Node.js backend proxy. By injecting a developer's Personal Access Token server-side, GitPeek safely elevates the API limit to 5,000 requests per hour without exposing credentials to the client browser.

## 2. Real-time Profile Searching
GitPeek features a robust Search Context that manages the asynchronous fetching of profile data. When a user is queried, the app concurrently requests their base profile data (`/users/:username`) and their public repositories (`/users/:username/repos`). Errors (e.g., 404 User Not Found) are caught gracefully and presented to the user via toast notifications.

## 3. Dynamic Repository Filtering and Sorting
Because developers can have hundreds of repositories, GitPeek implements a client-side data processing layer in the `RepoFilter` component.
- **Sorting:** Users can dynamically re-order repositories based on Stars, Forks, Size, and Updated Date.
- **Filtering:** Users can search repository names and descriptions in real-time, or filter the list down to specific programming languages using the auto-generated language dropdown.

## 4. Immersive Aesthetic
Instead of the standard stark-white analytical tools, GitPeek uses a highly polished, Spotify-inspired UI. The interface prioritizes deep dark backgrounds, subtle drop shadows, pill-shaped geometries, and precise typography to make exploring data a visually enjoyable experience.
