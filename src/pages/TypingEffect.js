import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText(''); // Reset the displayed text when the text prop changes

    const intervalId = setInterval(() => {
      // Check if the index is within the bounds of the text length
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId); // Clear the interval when done
      }
    }, speed);

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts or text changes
    };
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
