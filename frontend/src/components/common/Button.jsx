import React from 'react';
import styles from './Button.module.css';

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // primary, secondary, danger, ghost, outline
  size = 'md', // sm, md, lg
  disabled = false,
  loading = false,
  icon: Icon,
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {loading && <span className={styles.spinner}></span>}
      {!loading && Icon && <Icon className={styles.icon} />}
      <span className={styles.content}>{children}</span>
    </button>
  );
};

export default Button;
