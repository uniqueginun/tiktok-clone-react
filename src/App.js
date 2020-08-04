import React from 'react';
import './App.css';
import VideoComponent from './components/VideoComponent';

const App = () => {
  return (
    <div className="app">
      <div className="app_videos">
        <VideoComponent />
      </div>
    </div>
  );
}

export default App;
