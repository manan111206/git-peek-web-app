import React from 'react';
import { FaSortAmountDown } from 'react-icons/fa';
import styles from './RepoSort.module.css';

export const RepoSort = ({ sortBy, setSortBy }) => {
  const options = [
    { value: 'updated', label: 'Recently Updated' },
    { value: 'newest', label: 'Newest Created' },
    { value: 'oldest', label: 'Oldest Created' },
    { value: 'stars', label: 'Stars Count' },
    { value: 'forks', label: 'Forks Count' },
    { value: 'alphabetical', label: 'Alphabetical (A-Z)' },
  ];

  return (
    <div className={styles.sortContainer}>
      <span className={styles.label}>
        <FaSortAmountDown className={styles.sortIcon} />
        <span>Sort by</span>
      </span>
      
      <div className={styles.selectWrapper}>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={styles.select}
          aria-label="Sort Repositories"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RepoSort;
