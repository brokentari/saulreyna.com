import React, { useEffect, useState, useRef } from 'react';
import './ScrollingText.css';

const ScrollingText = ({ text }) => {
  const [duration, setDuration] = useState(5); // Default duration
  const scrollingTextRef = useRef(null);

  useEffect(() => {
    if (scrollingTextRef.current) {
      const textLength = scrollingTextRef.current.offsetWidth;
      const containerWidth = scrollingTextRef.current.parentElement.offsetWidth;
      const newDuration = textLength / containerWidth * 8; // Adjust speed multiplier as needed
      setDuration(newDuration);
    }
  }, [text]);

  return (
    <div className="scroll-container" >
      <div 
        className="scrolling-text" 
        ref={scrollingTextRef}
        style={{ animationDuration: `${duration}s` }}
      >
        
        { Array(50).fill(text).join(' \u00A0')}
        {/* {text} &nbsp;&nbsp; {text} &nbsp;&nbsp; {text} &nbsp;&nbsp;  */}
      </div>
    </div>
  );
};

export default ScrollingText;