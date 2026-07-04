import React from 'react';
import styles from './Loader.module.css';

/**
 * Standard spinner loader
 */
export const Loader = ({ message = 'Loading...' }) => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

/**
 * Generic Shimmer skeleton block
 */
export const Skeleton = ({ width, height, circle = false, className = '' }) => {
  const style = {
    width: width || '100%',
    height: height || '16px',
    borderRadius: circle ? '50%' : 'var(--border-radius-sm)',
  };

  return <div className={`shimmer-bg ${styles.skeleton} ${className}`} style={style} />;
};

/**
 * Shimmer placeholder matching ProfileCard layout
 */
export const ProfileSkeleton = () => {
  return (
    <div className={styles.profileSkeleton}>
      <div className={styles.avatarRow}>
        <Skeleton width="110px" height="110px" circle />
        <div className={styles.metaCol}>
          <Skeleton width="180px" height="24px" />
          <Skeleton width="120px" height="16px" className={styles.mt8} />
          <Skeleton width="90px" height="24px" className={styles.mt12} />
        </div>
      </div>
      <div className={styles.bioCol}>
        <Skeleton width="100%" height="45px" className={styles.mt16} />
      </div>
      <div className={styles.detailsCol}>
        <Skeleton width="80%" height="16px" className={styles.mt16} />
        <Skeleton width="60%" height="16px" className={styles.mt12} />
        <Skeleton width="70%" height="16px" className={styles.mt12} />
      </div>
    </div>
  );
};

/**
 * Shimmer placeholder matching RepoCard layout
 */
export const RepoSkeleton = () => {
  return (
    <div className={styles.repoSkeleton}>
      <div className={styles.headerRow}>
        <Skeleton width="70%" height="20px" />
        <Skeleton width="60px" height="20px" />
      </div>
      <Skeleton width="100%" height="32px" className={styles.mt12} />
      <div className={styles.footerRow}>
        <Skeleton width="80px" height="16px" />
        <Skeleton width="100px" height="16px" />
      </div>
    </div>
  );
};

/**
 * Grid of RepoSkeletons
 */
export const ReposGridSkeleton = ({ count = 6 }) => {
  return (
    <div className={styles.reposGrid}>
      {Array.from({ length: count }).map((_, idx) => (
        <RepoSkeleton key={idx} />
      ))}
    </div>
  );
};

export default Loader;
