import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import Input from '../common/Input';
import styles from './RepoFilter.module.css';

export const RepoFilter = ({
  searchQuery,
  setSearchQuery,
  selectedLanguage,
  setSelectedLanguage,
  languages = [],
}) => {
  return (
    <div className={styles.filterBar}>
      <div className={styles.searchCol}>
        <Input
          placeholder="Search repositories by name or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={FaSearch}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.languageCol}>
        <div className={styles.selectWrapper}>
          <FaFilter className={styles.filterIcon} />
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className={styles.select}
            aria-label="Filter by Language"
          >
            <option value="">All Languages</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default RepoFilter;
