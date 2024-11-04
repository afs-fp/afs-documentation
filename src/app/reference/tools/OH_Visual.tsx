import React from 'react';

interface RectangleProps {
  length1: number;
  length2: number;
}

const OH_Visual: React.FC<RectangleProps> = ({ length1, length2 }) => {
  // Calculate dimensions based on length1 and length2
  const width = 2 * length2;
  const height = 2 * length1;
  
  // Style objects
  const rectangleStyle = {
    width: `${width}px`,
    height: `${height}px`,
    position: 'relative' as const,  // Use `as const` for literal assertion
    border: '2px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const circleStyle = {
    width: '20px', // Fixed circle size
    height: '20px',
    borderRadius: '50%',
    border: '2px solid black',
    position: 'absolute' as const,  // Use `as const` for literal assertion
  };

  return (
    <div style={rectangleStyle}>
      <div style={circleStyle}></div>
    </div>
  );
};

export default OH_Visual;
