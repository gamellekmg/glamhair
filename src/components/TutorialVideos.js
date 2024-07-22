// src/components/TutorialVideos.js

import React from 'react';
import './TutorialVideos.css';

function TutorialVideos() {
  return (
    <div className="tutorial-videos-container">
      <h1>Tutorial Videos</h1>
      <video controls className="tutorial-video">
        <source src={process.env.PUBLIC_URL + '/videos/tuto.mov'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Watch our step-by-step videos guide to learn how to flawlessly install your wig. Whether you're a beginner or looking to perfect your technique, these tips will help you achieve a natural and secure fit. Enjoy your beautiful new look!</p>
      <div className="video-links">
        <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
        <a href="/services">Back to Services</a>
        <a href="https://www.youtube.com/watch?v=example1" target="_blank" rel="noopener noreferrer">How to Install a Lace Front Wig</a>
        <a href="https://www.youtube.com/watch?v=example2" target="_blank" rel="noopener noreferrer">Wig Care and Maintenance</a>
        <a href="https://www.youtube.com/watch?v=example3" target="_blank" rel="noopener noreferrer">Styling Tips for Your Wig</a>
        <a href="https://www.youtube.com/watch?v=example1" target="_blank" rel="noopener noreferrer">How to Install a Lace Front Wig</a>
        <a href="https://www.youtube.com/watch?v=example2" target="_blank" rel="noopener noreferrer">Wig Care and Maintenance</a>
        <a href="https://www.youtube.com/watch?v=example3" target="_blank" rel="noopener noreferrer">Styling Tips for Your Wig</a>
        <a href="https://www.youtube.com/watch?v=example1" target="_blank" rel="noopener noreferrer">How to Install a Lace Front Wig</a>
        <a href="https://www.youtube.com/watch?v=example2" target="_blank" rel="noopener noreferrer">Wig Care and Maintenance</a>
        <a href="https://www.youtube.com/watch?v=example3" target="_blank" rel="noopener noreferrer">Styling Tips for Your Wig</a>



      </div>
    </div>
  );
}

export default TutorialVideos;
