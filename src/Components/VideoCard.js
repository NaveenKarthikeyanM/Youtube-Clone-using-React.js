import React from 'react';
import './VideoCard.css';

function VideoCard({ title, channel, views, timestamp, image }) {
  return (
    <div className="videoCard">
      <img src={image} alt={title} className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} • {timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;