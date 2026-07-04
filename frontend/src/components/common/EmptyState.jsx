import React from 'react';
import { FaInbox } from 'react-icons/fa';
import styles from './EmptyState.module.css';

export const EmptyState = ({
  title = 'No results found',
  message = 'Try adjusting your search filters or check your spelling.',
  icon: Icon = FaInbox,
}) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default EmptyState;
