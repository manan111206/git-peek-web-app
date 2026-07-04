import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getSearchHistory, getCachedUsers, deleteCachedUser } from '../services/githubApi';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [recentSearches, setRecentSearches] = useState([]);
  const [cachedUsers, setCachedUsers] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorite_users');
    return saved ? JSON.parse(saved) : [];
  });
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [loadingCached, setLoadingCached] = useState(false);

  // Sync favorites to local storage
  useEffect(() => {
    localStorage.setItem('favorite_users', JSON.stringify(favorites));
  }, [favorites]);

  const fetchHistory = useCallback(async () => {
    setLoadingHistory(true);
    try {
      const data = await getSearchHistory();
      setRecentSearches(data || []);
    } catch (error) {
      console.error('Failed to load search history:', error);
    } finally {
      setLoadingHistory(false);
    }
  }, []);

  const fetchCached = useCallback(async () => {
    setLoadingCached(true);
    try {
      const data = await getCachedUsers();
      setCachedUsers(data || []);
    } catch (error) {
      console.error('Failed to load cached users:', error);
    } finally {
      setLoadingCached(false);
    }
  }, []);

  const toggleFavorite = useCallback((username, avatar) => {
    const nameLower = username.toLowerCase();
    setFavorites(prev => {
      const exists = prev.find(fav => fav.username.toLowerCase() === nameLower);
      if (exists) {
        return prev.filter(fav => fav.username.toLowerCase() !== nameLower);
      } else {
        return [...prev, { username, avatar }];
      }
    });
  }, []);

  const isFavorite = useCallback((username) => {
    if (!username) return false;
    return favorites.some(fav => fav.username.toLowerCase() === username.toLowerCase());
  }, [favorites]);

  const removeUserFromCache = useCallback(async (id, username) => {
    try {
      await deleteCachedUser(id);
      // Update local states
      setCachedUsers(prev => prev.filter(user => user._id !== id));
      setRecentSearches(prev => prev.filter(item => item.username.toLowerCase() !== username.toLowerCase()));
      // Also remove from favorites if they want, but let's keep favorites separate or check
    } catch (error) {
      console.error('Failed to delete cached user:', error);
      throw error;
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{
        recentSearches,
        cachedUsers,
        favorites,
        loadingHistory,
        loadingCached,
        fetchHistory,
        fetchCached,
        toggleFavorite,
        isFavorite,
        removeUserFromCache,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
