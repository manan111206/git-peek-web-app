import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <Container className={styles.centerContainer}>
      <div className={styles.iconWrapper}>
        <FaExclamationTriangle className={styles.icon} />
      </div>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found</h2>
      <p className={styles.message}>
        The dashboard path you are trying to visit does not exist or has been relocated.
      </p>
      <Link to="/">
        <Button variant="primary" icon={FaHome} size="md">
          Go Back Home
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;
