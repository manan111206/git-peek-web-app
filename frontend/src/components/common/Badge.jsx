import React from 'react';
import styles from './Badge.module.css';

export const Badge = ({
  children,
  variant = 'neutral', // neutral, primary, success, warning, danger, outline
  size = 'md', // sm, md
  className = '',
}) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
