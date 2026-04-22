import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const shapeRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target;
      if (
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * 0.10;
      delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * 0.10;

      if (shapeRef.current) {
        shapeRef.current.style.transform = `translate3d(${delayedMouse.current.x}px, ${delayedMouse.current.y}px, 0)`;
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      {/* The Instant Aiming Dot */}
      <div 
        ref={dotRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#00b4d8', /* Hardcoded Icy Blue */
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          /* mixBlendMode REMOVED! */
        }} 
      />
      
      {/* The Physics Wrapper for the Morphing Shape */}
      <div 
        ref={shapeRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          /* mixBlendMode REMOVED! */
        }} 
      >
        {/* The Actual Morphing Shape */}
        <div style={{
          width: isHovering ? '72px' : '24px',  /* 36px is your new, larger diamond */
          height: isHovering ? '72px' : '24px', /* 36px is your new, larger diamond */
          backgroundColor: isHovering ? 'rgba(0, 180, 216, 0.05)' : 'transparent',
          border: isHovering ? '1.5px solid #0077b6' : '2px solid #00b4d8',
          borderRadius: isHovering ? '8px' : '3px',
          transform: `translate(-50%, -50%) rotate(${isHovering ? '90deg' : '45deg'})`,
          transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          backdropFilter: isHovering ? 'blur(1px)' : 'none',
        }} />
      </div>
    </>
  );
};

export default CustomCursor;