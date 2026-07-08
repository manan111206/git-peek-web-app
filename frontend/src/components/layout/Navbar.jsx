import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaInfoCircle, FaHome } from 'react-icons/fa';
import styles from './Navbar.module.css';
import Container from './Container';

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className={styles.header}>
      <Container className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <FaGithub className={styles.logoIcon} />
          <span>Git<span className={styles.logoAccent}>Peek</span></span>
        </Link>
        
        <nav className={styles.nav}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
          >
            <FaHome className={styles.linkIcon} />
            <span>Home</span>
          </Link>
          <Link 
            to="/about" 
            className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
          >
            <FaInfoCircle className={styles.linkIcon} />
            <span>About</span>
          </Link>
          
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
