import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import "./VideoSidebar.css";

function VideoSidebar({ likes, shares, comments, isLiked }) {
  const [liked, setLiked] = useState(isLiked);
  const toggleLiked = (st) => {
    setLiked(st);
  };
  return (
    <div className="video__sidebar">
      <div className="sidebar__element">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={() => toggleLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={() => toggleLiked(true)}
          />
        )}
        <span>{liked ? likes + 1 : likes}</span>
      </div>
      <div className="sidebar__element">
        <CommentIcon fontSize="large" />
        <span>{comments}</span>
      </div>
      <div className="sidebar__element">
        <ShareIcon fontSize="large" />
        <span>{shares}</span>
      </div>
    </div>
  );
}

export default VideoSidebar;
