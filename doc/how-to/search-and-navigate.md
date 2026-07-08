# How to Search and Navigate GitPeek

This guide explains how to effectively use the GitPeek interface to find GitHub users, explore their statistics, and filter their public repositories.

## Searching for a User

1. **Locate the Search Bar:** Open the GitPeek application. The search bar is prominently displayed at the top of the interface or on the home screen.
2. **Enter Username:** Type the exact GitHub username of the developer you wish to explore (e.g., `torvalds`).
3. **Submit:** Press the **Enter** key or click the search icon.
4. **View Results:** The application will navigate to the `/profile/:username` route and display the user's data.

## Understanding the Profile Overview

Once a user is loaded, the top section provides a high-level overview:
- **Avatar & Bio:** The user's profile picture, bio, location, and company.
- **Key Statistics:** Four main metrics are displayed: Total Repositories, Followers, Following, and Public Gists.
- **Hireable Status:** A badge indicating if the user is currently open to job opportunities.

## Navigating Repositories

Below the profile overview, you'll find the **Repositories** section.

### Sorting
You can change the order of the repositories using the dropdown menu:
- **Recently Updated:** Sorts by the latest push date (default).
- **Most Stars:** Sorts by the highest number of stars.
- **Most Forks:** Sorts by the highest number of forks.
- **Size:** Sorts by the repository size (largest first).

### Filtering
Use the filter inputs to narrow down the list of repositories:
- **By Name:** Type in the text box to instantly filter repositories by their name or description.
- **By Language:** Use the language dropdown to show only repositories written in a specific primary language (e.g., JavaScript, Python).

## Direct Navigation
If you know the username, you can bypass the search bar by navigating directly to the URL:
`http://localhost:5173/profile/USERNAME`
