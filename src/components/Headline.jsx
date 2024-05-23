import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './courses.css'; // Import your CSS file

function Headline() {
  const headlineRef = useRef(null); // Create a ref for the headline
  const [isVisible, setIsVisible] = useState(false); // State to track visibility of the headline

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY; // Get current scroll position
      const headlineOffset = headlineRef.current.offsetTop; // Get offset of the headline from the top of the page

      // Check if the headline is in the viewport
      if (currentScroll > headlineOffset - window.innerHeight / 2) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener once the headline is visible
      }
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    // Call handleScroll once on initial render to check if the headline is already in view
    handleScroll();

    // Clean up by removing the scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className={`courses-headline ${isVisible ? 'appear' : ''}`} ref={headlineRef}>
        <h1>Our courses</h1>
      </div>
      
    </div>    
  );
}

export default Headline;
