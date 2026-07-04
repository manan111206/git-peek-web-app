import React from 'react';
import styles from './Footer.module.css';
import Container from './Container';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} GitShield. All rights reserved.
        </p>
        <p className={styles.subtext}>
          Powered by React, Vite, Node.js, Express, MongoDB, and the GitHub REST API.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
