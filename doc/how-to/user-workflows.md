# User Workflows in GitPeek

This guide explains how to effectively use the GitPeek interface to find GitHub users, explore their statistics, authenticate, compare profiles, and utilize our advanced AI integrations.

## 1. Searching for a User

1. **Locate the Search Bar:** Open the GitPeek application. The search bar is prominently displayed at the top of the interface or on the home screen.
2. **Enter Username:** Type the exact GitHub username of the developer you wish to explore (e.g., `torvalds`).
3. **Submit:** Press the **Enter** key or click the search icon.
4. **View Results:** The application will navigate to the `/profile/:username` route and display the user's data.

## 2. Navigating Repositories and PDF Exports

Below the profile overview, you will find the **Repositories** section.

### Repository Details
- **Clicking a Repository:** Each repository in the list is clickable. Clicking a repository card navigates you to a dedicated repository detail route (`/repo/:owner/:repo`).
- **AI Summaries:** Within the repository detail view, GitPeek utilizes the OpenRouter API to automatically generate and display a concise and detailed summary of the repository's codebase and purpose.
- **Export to PDF:** You can click the "Export PDF" button on any repository page to generate a downloadable PDF document containing the AI summary and key statistics.

### Sorting and Filtering
- **Sorting:** Use the dropdown to order repositories by Recently Updated, Most Stars, Most Forks, or Size.
- **Filtering:** Type in the text box to filter by name/description, or use the language dropdown to filter by primary programming language.

## 3. GitHub Authentication and Profile Comparison

To unlock advanced mentorship and comparison features, you must authenticate.

1. **Log In:** Click the "Sign in with GitHub" button in the navigation bar. This uses secure OAuth authentication.
2. **View Your Profile:** Once logged in, your profile becomes the baseline for comparisons.
3. **Compare Profiles:** Navigate to any other user's profile. You will see a new "Compare with Me" button. Clicking this triggers a side-by-side comparison of your statistics, languages, and repository metrics against the viewed user.

## 4. AI Mentorship and Recommendations

After initiating a profile comparison, you can leverage AI to help bridge the skill gap between you and the viewed developer.

- **Request Recommendations:** Click the "Get Recommendations" button within the comparison view or on specific repositories.
- **AI Analysis:** The OpenRouter LLM will analyze the viewed developer's top projects and your own public footprint.
- **Actionable Output:** The AI will generate a tailored mentorship summary, suggesting specific types of projects, architectures, or languages you should build next to emulate their coding style and expertise.
