import React from 'react';
import { getLanguageColor } from '../../utils/languageColor';
import styles from './LanguageBadge.module.css';

export const LanguageBadge = ({ language }) => {
  if (!language) return null;

  const dotStyle = {
    backgroundColor: getLanguageColor(language),
  };

  return (
    <span className={styles.badge}>
      <span className={styles.dot} style={dotStyle} />
      <span className={styles.name}>{language}</span>
    </span>
  );
};

export default LanguageBadge;
