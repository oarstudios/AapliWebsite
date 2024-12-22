


import React, { useEffect, useState } from "react";
import "../Components/Cursor.css"; // Import the CSS for the cursor

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Attach event listener for mousemove
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Toggle inversion based on the cursor position or another condition (optional)
  useEffect(() => {
    const handleColorInversion = () => {
      // Check if the cursor position is in a particular region to invert colors
      setIsInverted((prev) => !prev); // Example: Toggle every time mouse moves
    };

    handleColorInversion();
  }, [position]); // Trigger when position changes

  return (
    <div
      className={`cursor ${isInverted ? "inverted" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
