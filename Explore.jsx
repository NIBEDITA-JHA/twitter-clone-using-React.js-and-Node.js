import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
  const [selectedUser, setSelectedUser] = useState(null); // State to track selected user

  // Sample suggested users data (replace with your actual data)
  const suggestedUsers = [
    { id: 1, username: 'alice_wonder', profilePicture: '/profile1.jpg', bio: 'Software Engineer' },
    { id: 2, username: 'bob_builder', profilePicture: '/profile2.jpg', bio: 'Web Developer' },
    { id: 3, username: 'charlie_chaplin', profilePicture: '/profile3.jpg', bio: 'Tech Enthusiast' }
  ];

  // Function to handle clicking on a user
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  // Function to handle adding a friend (dummy function, replace with actual logic)
  const addFriend = (userId) => {
    // Add logic to add the user as a friend
    console.log(`Added ${userId} as a friend`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Explore</h2>
      {selectedUser ? (
        // Display user profile when selectedUser is set
        <div style={styles.profileContainer}>
          <img src={selectedUser.profilePicture} alt={selectedUser.username} style={styles.profilePicture} />
          <div>
            <h3>{selectedUser.username}</h3>
            <p>{selectedUser.bio}</p>
            <button onClick={() => addFriend(selectedUser.id)}>Add Friend</button>
            <button onClick={() => setSelectedUser(null)}>Close Profile</button>
          </div>
        </div>
      ) : (
        // Display suggested users list
        <ul style={styles.list}>
          {suggestedUsers.map((user) => (
            <li key={user.id} style={styles.listItem}>
              <div onClick={() => handleUserClick(user)}>
                <img src={user.profilePicture} alt={user.username} style={styles.profilePicture} />
                <span>{user.username}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px'
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0'
  },
  listItem: {
    marginBottom: '10px',
    cursor: 'pointer'
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  },
  profilePicture: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px'
  }
};

export default Explore;
