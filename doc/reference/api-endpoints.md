# API Endpoints Reference

The GitPeek Express backend exposes an internal API for the React frontend to consume. This backend acts as a proxy to the official GitHub REST API and integrates with OpenRouter for AI features.

Base URL (Local Development): `http://localhost:5000/api`

---

## 1. Authentication

**Endpoint:** `/auth/github`  
**Method:** `POST`

Handles the OAuth 2.0 callback from GitHub and establishes an authenticated user session.

---

## 2. Get User Profile

Fetches the core profile data for a specific GitHub user.

**Endpoint:** `/users/:username`  
**Method:** `GET`

### Path Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | String | The exact GitHub handle of the user. |

---

## 3. Get User Repositories

Fetches a list of public repositories owned by the specified GitHub user.

**Endpoint:** `/users/:username/repos`  
**Method:** `GET`

### Path Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | String | The exact GitHub handle of the user. |

---

## 4. Get Repository AI Summary

Uses OpenRouter to parse a specific repository and return an AI-generated summary of the project.

**Endpoint:** `/repos/:owner/:repo/summary`  
**Method:** `GET`

### Path Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `owner`    | String | The GitHub username of the repository owner. |
| `repo`     | String | The name of the repository. |

---

## 5. Compare Profiles

Compares the currently authenticated user's metrics with a target user.

**Endpoint:** `/profile/compare`  
**Method:** `GET`

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `target`  | String | The GitHub username to compare against. |

---

## 6. Get AI Recommendations

Generates mentorship insights and project recommendations based on a profile comparison.

**Endpoint:** `/ai/recommendations`  
**Method:** `POST`

### Request Body
Should contain the metrics of the authenticated user and the target profile to serve as context for the OpenRouter LLM.
