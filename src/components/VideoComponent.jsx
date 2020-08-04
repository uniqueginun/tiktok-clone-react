import React, { useRef, useState } from "react";
import "./VideoComponent.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

export default function VideoComponent({ video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const { likes, shares, comments, isLiked } = video;

  return (
    <div className="video__container">
      <video
        onClick={handlePress}
        loop
        ref={videoRef}
        className="video__player"
        src={video.src}
      ></video>
      <VideoFooter video={video} />
      <VideoSidebar
        likes={likes}
        shares={shares}
        comments={comments}
        isLiked={isLiked}
      />
    </div>
  );
}
