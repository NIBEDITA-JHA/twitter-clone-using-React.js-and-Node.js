import React from 'react';
import { useParams } from 'react-router-dom';

const HashtagSearch = ({ posts }) => {
  const { hashtag } = useParams();

  const filteredPosts = posts.filter(post => post.content.includes(`#${hashtag}`));

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Posts with #{hashtag}</h2>
      {filteredPosts.length > 0 ? (
        <ul style={styles.list}>
          {filteredPosts.map((post, index) => (
            <li key={index} style={styles.postItem}>
              <strong>{post.username}</strong>
              <p style={styles.postContent}>{post.content}</p>
              <span style={styles.timestamp}>{post.timestamp}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found for #{hashtag}</p>
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
  postItem: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    marginBottom: '10px'
  },
  postContent: {
    margin: '5px 0'
  },
  timestamp: {
    fontSize: '12px',
    color: '#999'
  }
};

export default HashtagSearch;
