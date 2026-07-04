import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaGithub, FaSun, FaMoon, FaInfoCircle, FaHome } from 'react-icons/fa';
import styles from './Navbar.module.css';
import Container from './Container';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className={styles.header}>
      <Container className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <FaGithub className={styles.logoIcon} />
          <span>Git<span className={styles.logoAccent}>Shield</span></span>
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
          
          <button 
            onClick={toggleTheme} 
            className={styles.themeToggle}
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun className={styles.sunIcon} /> : <FaMoon className={styles.moonIcon} />}
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
