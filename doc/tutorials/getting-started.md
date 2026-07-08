# Getting Started

Welcome to GitPeek! This tutorial will guide you through setting up and running GitPeek on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A [GitHub account](https://github.com/) to generate a Personal Access Token.

## Step 1: Obtain a GitHub Personal Access Token

GitPeek uses the GitHub API to fetch user profiles and repository data. To bypass strict rate limits, you need a Personal Access Token.

1. Log in to your GitHub account.
2. Go to **Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**.
3. Click **Generate new token (classic)**.
4. Give it a descriptive note (e.g., "GitPeek Local Dev").
5. You don't need any specific scopes/permissions for public data, but checking `public_repo` and `read:user` is recommended.
6. Generate the token and **copy it immediately** (you won't be able to see it again).

## Step 2: Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/your-username/gitpeek.git
cd gitpeek
```

## Step 3: Set Up the Backend Server

The Express backend acts as a proxy to the GitHub API.

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add your GitHub token:
   ```env
   PORT=5000
   GITHUB_TOKEN=your_copied_personal_access_token
   ```
4. Start the server in development mode:
   ```bash
   npm run dev
   ```
   *The server should now be running on `http://localhost:5000`.*

## Step 4: Set Up the Frontend Client

The Vite React application serves as the user interface.

1. Open a new terminal window/tab and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The client should now be accessible at `http://localhost:5173`.*

## Step 5: Start Peeking!

Open your browser and navigate to `http://localhost:5173`. You can now search for any GitHub username and explore their profile and repositories with the beautiful Spotify-inspired interface.
