import React from "react";
import "./App.css";
import VideoComponent from "./components/VideoComponent";
import videos from "./store";

const App = () => {
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map((video) => (
          <VideoComponent video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
