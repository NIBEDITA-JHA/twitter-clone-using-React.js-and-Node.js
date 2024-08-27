import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={styles.container}>
      <h3>Navigation</h3>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/explore">Explore</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/feed">Feed</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/profile">profile</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/home">Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/messages">Messages</Link>
        </li>
        
      </ul>
    </div>
  );
};

const styles = {
  container: {
    flex: '0 0 250px',
    background: '#f0f0f0',
    padding: '20px'
  },
  navList: {
    listStyleType: 'none',
    padding: '0'
  },
  navItem: {
    marginBottom: '10px'
  }
};

export default Sidebar;
