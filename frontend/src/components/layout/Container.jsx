import React from 'react';
import styles from './Container.module.css';

export const Container = ({ children, className = '' }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
