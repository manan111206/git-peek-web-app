import React from 'react';
import styles from './Card.module.css';

export const Card = ({
  children,
  className = '',
  hover = false,
  glass = true,
  onClick,
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${styles.card} 
        ${glass ? styles.glass : ''} 
        ${hover ? styles.hover : ''} 
        ${onClick ? styles.clickable : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
