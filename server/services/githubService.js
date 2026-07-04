import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GITHUB_API_URL = process.env.GITHUB_API || 'https://api.github.com';

const getHeaders = () => {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
};

/**
 * Fetches user profile from GitHub API
 * @param {string} username 
 * @returns {Promise<object>} User data
 */
export const fetchUserFromGithub = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetches user repositories from GitHub API
 * Fetching up to 100 repositories per page to ensure a complete view of active projects.
 * @param {string} username 
 * @returns {Promise<Array>} List of repositories
 */
export const fetchReposFromGithub = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`, {
      headers: getHeaders(),
      params: {
        per_page: 100,
        sort: 'updated',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
