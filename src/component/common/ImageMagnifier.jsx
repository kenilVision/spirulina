import React, { useState, useRef, useEffect } from 'react';

const ImageMagnifier = ({ src, zoom = 2, alt = '', onZoomDataChange }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [backgroundPos, setBackgroundPos] = useState('0% 0%');
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const pos = `${x}% ${y}%`;
    setBackgroundPos(pos);

    if (onZoomDataChange) {
      onZoomDataChange({
        show: true,
        backgroundPosition: pos,
        backgroundSize: `${zoom * 100}%`,
        src
      });
    }
  };

  const handleLeave = () => {
    setShowMagnifier(false);
    if (onZoomDataChange) {
      onZoomDataChange({ show: false });
    }
  };

  const handleEnter = () => {
    setShowMagnifier(true);
    if (onZoomDataChange) {
      onZoomDataChange(prev => ({ ...prev, show: true }));
    }
  };

  return (
    <div className="w-full h-full relative">
      <div
        className="w-full h-full"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onMouseMove={handleMouseMove}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ImageMagnifier;
