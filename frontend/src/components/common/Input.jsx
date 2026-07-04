import React from 'react';
import styles from './Input.module.css';

export const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  icon: Icon,
  error = '',
  className = '',
  ...props
}) => {
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <div className={`${styles.inputContainer} ${error ? styles.hasError : ''}`}>
        {Icon && <Icon className={styles.icon} />}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles.input} ${Icon ? styles.hasIcon : ''}`}
          {...props}
        />
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Input;
