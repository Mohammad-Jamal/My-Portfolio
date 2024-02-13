import React, { useState } from 'react';
const ToggleFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const fullscreenToggle = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } 

    setIsFullscreen(!isFullscreen);
  }
  return (
    <div
      onClick={fullscreenToggle}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,

      }}
    />
  );
};

export default ToggleFullscreen;
