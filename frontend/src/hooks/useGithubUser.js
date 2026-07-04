import { useState, useEffect, useCallback } from 'react';
import { searchProfile, refreshProfile } from '../services/githubApi';

export const useGithubUser = (username) => {
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [source, setSource] = useState(null);

  const fetchProfile = useCallback(async (isRefresh = false) => {
    if (!username) return;

    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      const response = isRefresh 
        ? await refreshProfile(username)
        : await searchProfile(username);
      
      setUserData(response.user);
      setReposData(response.repos || []);
      setSource(response.source);
    } catch (err) {
      console.error('Error fetching github user:', err);
      const msg = err.response?.data?.message || err.message || 'An unexpected error occurred';
      setError(msg);
      // Keep existing data to avoid sudden blank state if refresh fails
      if (!isRefresh) {
        setUserData(null);
        setReposData([]);
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [username]);

  useEffect(() => {
    if (username) {
      fetchProfile(false);
    } else {
      setUserData(null);
      setReposData([]);
      setError(null);
      setSource(null);
    }
  }, [username, fetchProfile]);

  const forceRefresh = useCallback(() => {
    return fetchProfile(true);
  }, [fetchProfile]);

  return {
    userData,
    reposData,
    loading,
    refreshing,
    error,
    source,
    forceRefresh,
  };
};
export default useGithubUser;
