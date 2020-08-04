import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import "./VideoFooter.css";

const VideoFooter = ({ video }) => {
  const { username, song, description } = video;
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h5>{username}</h5>
        <p>{description}</p>
      </div>
      <div className="vidoeFooter__footer">
        <div className="song">
          <MusicNoteIcon />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <div>{song}</div>
              </>
            )}
          </Ticker>
        </div>
        <img
          alt="spinning desc"
          src="https://bestanimations.com/Computers/Discs/cd-animated-gif-9.gif"
        />
      </div>
    </div>
  );
};

export default VideoFooter;
