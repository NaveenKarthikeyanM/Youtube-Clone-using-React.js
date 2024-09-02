import React from 'react';
import { FaHome, FaCompass, FaPlay, FaHistory, FaThumbsUp } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube Logo" />
      </div>
      <div className="sidebar__option">
        <FaHome />
        <span>Home</span>
      </div>
      <div className="sidebar__option">
        <FaCompass />
        <span>Explore</span>
      </div>
      <div className="sidebar__option">
        <FaPlay />
        <span>Subscriptions</span>
      </div>
      <hr />
      <div className="sidebar__option">
        <FaHistory />
        <span>History</span>
      </div>
      <div className="sidebar__option">
        <FaThumbsUp />
        <span>Liked Videos</span>
      </div>
    </div>
  );
}

export default Sidebar;