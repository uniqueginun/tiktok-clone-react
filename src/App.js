import React, { useState, useEffect } from "react";
import "./App.css";
import VideoComponent from "./components/VideoComponent";
import db from "./firebase";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

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
