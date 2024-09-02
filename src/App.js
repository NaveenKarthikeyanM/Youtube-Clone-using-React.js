import React from 'react';
import Sidebar from './Components/Sidebar';
import VideoGrid from './Components/VideoGrid';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <VideoGrid />
    </div>
  );
}

export default App;
