import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import Button from './Button';
import styles from './ErrorState.module.css';

export const ErrorState = ({
  title = 'Something went wrong',
  message = 'Failed to fetch developer data from GitHub or database.',
  onRetry,
  retryLabel = 'Try Again',
}) => {
  return (
    <div className={styles.errorState}>
      <div className={styles.iconWrapper}>
        <FaExclamationTriangle className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>
      
      {onRetry && (
        <Button onClick={onRetry} variant="outline" className={styles.btn}>
          {retryLabel}
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
