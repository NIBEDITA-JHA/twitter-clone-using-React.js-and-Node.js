// components/Tweet.jsx
import React from 'react';


const Tweet = ({ username, text }) => {
  return (
    <div className="tweet-feed">
      <div className="tweet-header">
        <p className="username"><strong>@{username}</strong></p>
      </div>
      <p className="tweet-text">{text}</p>
    </div>
  );
}

export default Tweet;
