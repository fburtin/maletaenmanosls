import React from 'react';

const DriveVideo = () => (
  <video width="100%" height="auto" controls>
    <source
      src="https://drive.google.com/uc?id=YOUR_FILE_ID&export=download"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
);

export default HeroVideo;
