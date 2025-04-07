import React, { useState, useRef } from 'react';

const ImageMagnifier = ({ src, zoom = 2, alt = '' }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierStyle, setMagnifierStyle] = useState({});
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { top, left, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    const backgroundX = (x / width) * 100;
    const backgroundY = (y / height) * 100;

    setMagnifierStyle({
      display: 'block',
      left: `${x - 75}px`,
      top: `${y - 75}px`,
      backgroundPosition: `${backgroundX}% ${backgroundY}%`,
    });
  };

  return (
    <div
      className="relative w-full h-full object-contain "
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        src={src}
        className="w-full h-full object-cover"
      />
      {showMagnifier && (
        <div
          className="absolute pointer-events-none border-2 border-gray-300 rounded-full"
          style={{
            ...magnifierStyle,
            width: '150px',
            height: '150px',
            position: 'absolute',
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${zoom * 100}%`,
            zIndex: 50,
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
