# Core Features

GitPeek was built to provide a focused, high-performance experience for analyzing GitHub profiles. Here are the core features that drive the application.

## 1. Rate-Limit Circumventing Architecture
The primary challenge of using the GitHub REST API on the frontend is the strict unauthenticated rate limit (60 requests per hour per IP). GitPeek solves this by routing all requests through a custom Node.js backend proxy. By injecting a developer's Personal Access Token server-side, GitPeek safely elevates the API limit to 5,000 requests per hour without exposing credentials to the client browser.

## 2. GitHub Authentication & Profile Comparison
Users can authenticate using standard OAuth with GitHub. Once authenticated, GitPeek provides a "Compare with Me" feature, allowing developers to view side-by-side metrics of their own profile versus any other GitHub user.

## 3. AI Mentorship and Recommendations
Through integration with the OpenRouter API, GitPeek can ingest profile data from both the authenticated user and a target user to generate tailored mentorship insights. The AI engine recommends specific projects, programming languages, and architecture patterns to help the user grow their skillset to match their peers.

## 4. Repository Detail Views & PDF Exports
Clicking into any repository brings the user to a dedicated detail route. Here, GitPeek utilizes AI to generate a detailed summary of the repository's codebase and purpose. Users can instantly export these comprehensive summaries as highly formatted PDF documents.

## 5. Dynamic Repository Filtering and Sorting
Because developers can have hundreds of repositories, GitPeek implements a client-side data processing layer.
- **Sorting:** Users can dynamically re-order repositories based on Stars, Forks, Size, and Updated Date.
- **Filtering:** Users can search repository names and descriptions in real-time, or filter the list down to specific programming languages.

## 6. Immersive Aesthetic
Instead of the standard stark-white analytical tools, GitPeek uses a highly polished, Spotify-inspired UI. The interface prioritizes deep dark backgrounds, subtle drop shadows, pill-shaped geometries, and precise typography to make exploring data a visually enjoyable experience.
