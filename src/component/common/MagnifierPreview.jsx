import React from 'react';

const MagnifierPreview = ({ show, src, backgroundPosition, backgroundSize }) => {
  if (!show || !src) return null;

  return (
    <div
      className="absolute top-0  left-0 z-50  w-[500px] h-[500px] pointer-events-none"
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition,
        backgroundSize,
      }}
    />
  );
};

export default MagnifierPreview;
