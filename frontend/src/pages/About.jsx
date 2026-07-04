import React from 'react';
import { FaDatabase, FaReact, FaNodeJs, FaServer, FaCode } from 'react-icons/fa';
import Container from '../components/layout/Container';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import styles from './About.module.css';

export const About = () => {
  const techStack = [
    {
      title: 'Vite & React.js',
      category: 'Frontend',
      description: 'Used for reactive UI, component design, routing, custom hooks, and dynamic layouts.',
      icon: FaReact,
      color: '#61dafb',
    },
    {
      title: 'Node.js & Express.js',
      category: 'Backend',
      description: 'Serves backend APIs, validates queries, filters endpoints, and interfaces with MongoDB.',
      icon: FaNodeJs,
      color: '#339933',
    },
    {
      title: 'MongoDB & Mongoose',
      category: 'Database',
      description: 'Caches user schemas and repository rows dynamically to optimize requests.',
      icon: FaDatabase,
      color: '#47a248',
    },
  ];

  return (
    <Container className={`${styles.aboutContainer} animate-fade-in`}>
      {/* Title Header */}
      <section className={styles.header}>
        <h1 className={styles.title}>About GitShield Explorer</h1>
        <p className={styles.subtitle}>
          GitShield Explorer is a professional developer dashboard and full-stack API integration designed to explore GitHub metrics while optimizing API request budgets.
        </p>
      </section>

      {/* Caching Explainer */}
      <Card className={styles.explainerCard} glass>
        <div className={styles.explainerLayout}>
          <div className={styles.iconWrapper}>
            <FaDatabase className={styles.explainerIcon} />
          </div>
          <div className={styles.explainerText}>
            <h2 className={styles.explainerTitle}>24-Hour Caching Strategy</h2>
            <p className={styles.explainerDesc}>
              The GitHub REST API caps unauthenticated users at 60 requests per hour. GitShield intercepts search requests and queries a local MongoDB database first. If profile cache is younger than 24 hours, data is returned instantly. If stale or missing, the backend fetches updates from GitHub, updates MongoDB, and refreshes the cache dynamically.
            </p>
            <div className={styles.badgeRow}>
              <Badge variant="primary" size="md">Fast Load Times</Badge>
              <Badge variant="success" size="md">Bypasses API Capping</Badge>
              <Badge variant="warning" size="md">Automatic Refresh</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Tech Stack Listing */}
      <section className={styles.stackSection}>
        <h2 className={styles.sectionTitle}>Technology Stack</h2>
        <div className={styles.stackGrid}>
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <Card key={idx} className={styles.techCard} hover>
                <div className={styles.cardHeader}>
                  <Icon className={styles.techIcon} style={{ color: tech.color }} />
                  <Badge variant="outline" size="sm">{tech.category}</Badge>
                </div>
                <h3 className={styles.techTitle}>{tech.title}</h3>
                <p className={styles.techDesc}>{tech.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Architecture Flow Chart */}
      <section className={styles.architecture}>
        <h2 className={styles.sectionTitle}>Application Architecture</h2>
        <Card className={styles.flowCard} glass>
          <div className={styles.flowGrid}>
            <div className={styles.flowStep}>
              <div className={styles.stepNum}>1</div>
              <h4 className={styles.stepTitle}>React UI</h4>
              <p className={styles.stepDesc}>User initiates search queries or sorting actions.</p>
            </div>
            <div className={styles.flowArrow}>&rarr;</div>
            <div className={styles.flowStep}>
              <div className={styles.stepNum}>2</div>
              <h4 className={styles.stepTitle}>Express API</h4>
              <p className={styles.stepDesc}>Backend checks MongoDB for cached datasets.</p>
            </div>
            <div className={styles.flowArrow}>&rarr;</div>
            <div className={styles.flowStep}>
              <div className={styles.stepNum}>3</div>
              <h4 className={styles.stepTitle}>MongoDB Cache</h4>
              <p className={styles.stepDesc}>Returns fresh data if found within 24 hours.</p>
            </div>
            <div className={styles.flowArrow}>&rarr;</div>
            <div className={styles.flowStep}>
              <div className={styles.stepNum}>4</div>
              <h4 className={styles.stepTitle}>GitHub REST API</h4>
              <p className={styles.stepDesc}>Polled on cache misses, updating database.</p>
            </div>
          </div>
        </Card>
      </section>
    </Container>
  );
};

export default About;
