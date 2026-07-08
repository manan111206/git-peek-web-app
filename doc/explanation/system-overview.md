# System Overview

GitPeek is designed as a full-stack, decoupled monorepo application. Its primary goal is to provide a seamless, aesthetically pleasing interface for exploring GitHub user data without running into the strict unauthenticated rate limits imposed by the public GitHub REST API.

## Architecture Architecture

The project is split into two primary domains:

1. **The Frontend Client (`/frontend`)**
2. **The Backend Proxy (`/server`)**

### The Frontend Client
The user interface is a Single Page Application (SPA) built with **React**, bootstrapped via **Vite**. It handles all client-side routing, state management, and user interactions.

- **Data Fetching:** The frontend does *not* talk to the GitHub API directly. Instead, it sends HTTP requests to our local backend server.
- **State Management:** Handled largely via React Context (e.g., `SearchContext`) and local component state.
- **Styling:** CSS Modules are used strictly alongside a set of global CSS tokens to ensure a pristine, encapsulated dark theme.

### The Backend Proxy
The backend is a lightweight Node.js application built with **Express**. Its primary responsibility is to securely proxy requests from the frontend client to the official GitHub API.

- **Rate Limit Management:** By injecting a server-side Personal Access Token (PAT) into the proxied requests, the backend bypasses the severe 60-requests-per-hour limit for unauthenticated users, raising it to 5,000 requests per hour.
- **Data Forwarding:** The backend performs minimal transformation of the data; it primarily acts as a secure middleware layer.

## The Data Flow

1. **User Action:** A user types `torvalds` into the search bar and hits Enter.
2. **Client Request:** The React application makes an API call to `http://localhost:5000/api/users/torvalds`.
3. **Server Proxy:** The Express backend receives the request, attaches the `GITHUB_TOKEN` to the headers, and forwards the request to `https://api.github.com/users/torvalds`.
4. **GitHub Response:** GitHub returns the JSON profile data to the Express server.
5. **Client Response:** The Express server relays the exact JSON back to the React frontend.
6. **UI Update:** React updates the DOM to display the fetched profile data.

By isolating the GitHub API communication in the backend, GitPeek ensures that authentication tokens remain secure and cannot be scraped from the frontend application bundle.
