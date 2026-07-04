import React from 'react';
import { FaFolder, FaUsers, FaUserFriends, FaCode } from 'react-icons/fa';
import { formatNumber } from '../../utils/numberFormatter';
import Card from '../common/Card';
import styles from './UserStats.module.css';

export const UserStats = ({ user }) => {
  const stats = [
    {
      label: 'Repositories',
      value: user.publicRepos,
      icon: FaFolder,
      colorClass: styles.blue,
    },
    {
      label: 'Followers',
      value: user.followers,
      icon: FaUsers,
      colorClass: styles.violet,
    },
    {
      label: 'Following',
      value: user.following,
      icon: FaUserFriends,
      colorClass: styles.teal,
    },
    {
      label: 'Public Gists',
      value: user.publicGists,
      icon: FaCode,
      colorClass: styles.coral,
    },
  ];

  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <Card key={idx} className={`${styles.statCard} ${stat.colorClass}`} glass>
            <div className={styles.iconWrapper}>
              <Icon className={styles.icon} />
            </div>
            <div className={styles.meta}>
              <span className={styles.value}>{formatNumber(stat.value)}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default UserStats;
