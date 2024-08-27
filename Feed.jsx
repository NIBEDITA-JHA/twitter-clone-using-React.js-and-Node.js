// components/Feed.jsx
import React from 'react';
import Picture from './Picture'; // Import Picture component
import Tweet from './Tweet'; // Import Tweet component
import cvPhoto from '../cv__photo.jpg'; // Import the image file

const Feed = () => {
  return (
    <div className="feed">
      <Picture src={cvPhoto} alt="CV Photo" caption="Feeling great :)" />
      <Tweet username="Nibs@123" text="Nibedita Jha" />
    </div>
  );
}

export default Feed;
