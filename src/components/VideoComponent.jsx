import React, { useRef, useState } from 'react'
import './VideoComponent.css'

export default function VideoComponent() {

    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePress = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    }

    return (
        <div className="video__container">
            <video
                onClick={handlePress}
                loop
                ref={videoRef}
                className="video__player"
                src="https://www.w3schools.com/html/mov_bbb.mp4" />
        </div>
    )
}
