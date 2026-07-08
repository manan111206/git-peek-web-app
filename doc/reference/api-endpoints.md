# API Endpoints Reference

The GitPeek Express backend exposes an internal API for the React frontend to consume. This backend acts as a proxy to the official GitHub REST API.

Base URL (Local Development): `http://localhost:5000/api`

---

## 1. Get User Profile

Fetches the core profile data for a specific GitHub user.

**Endpoint:** `/users/:username`  
**Method:** `GET`

### Path Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | String | The exact GitHub handle of the user. |

### Successful Response (200 OK)
Returns a JSON object containing the user's profile information.

```json
{
  "login": "torvalds",
  "id": 1024025,
  "avatar_url": "https://avatars.githubusercontent.com/u/1024025?v=4",
  "name": "Linus Torvalds",
  "company": "Linux Foundation",
  "blog": "",
  "location": "Portland, OR",
  "bio": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 210000,
  "following": 0,
  "created_at": "2011-09-03T15:26:22Z",
  "hireable": false
}
```

### Error Response (404 Not Found)
```json
{
  "message": "Not Found"
}
```

---

## 2. Get User Repositories

Fetches a list of public repositories owned by the specified GitHub user.

**Endpoint:** `/users/:username/repos`  
**Method:** `GET`

### Path Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | String | The exact GitHub handle of the user. |

### Query Parameters
*The backend currently requests `?per_page=100&sort=updated` from GitHub by default.*

### Successful Response (200 OK)
Returns an array of repository objects.

```json
[
  {
    "id": 2325298,
    "name": "linux",
    "full_name": "torvalds/linux",
    "html_url": "https://github.com/torvalds/linux",
    "description": "Linux kernel source tree",
    "fork": false,
    "created_at": "2011-09-04T22:48:12Z",
    "updated_at": "2024-03-10T12:00:00Z",
    "size": 4500000,
    "stargazers_count": 165000,
    "watchers_count": 165000,
    "language": "C",
    "forks_count": 52000,
    "topics": ["kernel", "linux"]
  }
]
```
