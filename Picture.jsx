// components/Picture.jsx
import React from 'react';
import cvPhoto from '../cv__photo.jpg'; // Adjust the path based on your actual project structure

const Picture = ({ alt, caption }) => {
  return (
    <div className="picture-feed">
      <img src={cvPhoto} alt={alt} style={{ maxWidth: '30%', height: 'auto' }}/>
      <p>{caption}</p>
    </div>
  );
}

export default Picture;
