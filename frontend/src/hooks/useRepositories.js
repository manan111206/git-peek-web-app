import { useState, useMemo, useEffect } from 'react';

const ITEMS_PER_PAGE = 20;

export const useRepositories = (repos = []) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [sortBy, setSortBy] = useState('updated'); // Default sorting: Recently Updated
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedLanguage, sortBy]);

  // Extract all unique languages available in this repos set (useful for filtering options)
  const languages = useMemo(() => {
    const langs = new Set();
    repos.forEach(repo => {
      if (repo.language && repo.language.trim() !== '') {
        langs.add(repo.language);
      }
    });
    return Array.from(langs).sort();
  }, [repos]);

  // Apply filters and sorting
  const processedRepos = useMemo(() => {
    let result = [...repos];

    // 1. Filter by search query (case-insensitive name or description match)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        repo =>
          repo.name.toLowerCase().includes(query) ||
          (repo.description && repo.description.toLowerCase().includes(query))
      );
    }

    // 2. Filter by language
    if (selectedLanguage) {
      result = result.filter(
        repo => repo.language && repo.language.toLowerCase() === selectedLanguage.toLowerCase()
      );
    }

    // 3. Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAtGithub || b.updatedAtGithub) - new Date(a.createdAtGithub || a.updatedAtGithub);
        case 'oldest':
          return new Date(a.createdAtGithub || a.updatedAtGithub) - new Date(b.createdAtGithub || b.updatedAtGithub);
        case 'stars':
          return b.stars - a.stars;
        case 'forks':
          return b.forks - a.forks;
        case 'alphabetical':
          return a.name.localeCompare(b.name);
        case 'updated':
        default:
          return new Date(b.updatedAtGithub) - new Date(a.updatedAtGithub);
      }
    });

    return result;
  }, [repos, searchQuery, selectedLanguage, sortBy]);

  // Sliced repos for current page
  const paginatedRepos = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return processedRepos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [processedRepos, currentPage]);

  const totalPages = Math.ceil(processedRepos.length / ITEMS_PER_PAGE) || 1;

  return {
    searchQuery,
    setSearchQuery,
    selectedLanguage,
    setSelectedLanguage,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    languages,
    filteredRepos: paginatedRepos,
    totalItems: processedRepos.length,
    totalPages,
    itemsPerPage: ITEMS_PER_PAGE,
  };
};

export default useRepositories;
