import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import RepoCard from './RepoCard';
import EmptyState from '../common/EmptyState';
import styles from './RepoList.module.css';

export const RepoList = ({ repos = [] }) => {
  if (repos.length === 0) {
    return (
      <EmptyState
        title="No repositories found"
        message="This profile has no public repositories or none match your search/filter parameters."
        icon={FaFolderOpen}
      />
    );
  }

  return (
    <div className={styles.repoGrid}>
      {repos.map((repo) => (
        <RepoCard key={repo.githubRepoId} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
