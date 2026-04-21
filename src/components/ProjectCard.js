import React, { useState, useRef } from 'react';

const ProjectCard = ({ title, status, tech, description, link, linkText }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const cardStyle = {
    position: 'relative',
    background: 'var(--bg-card)',
    backdropFilter: 'blur(10px)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '12px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'crosshair',
  };

  // The glowing radial gradient that follows the mouse
  const glowStyle = {
    position: 'absolute',
    top: mousePosition.y,
    left: mousePosition.x,
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 0,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  };

  return (
    <div 
      ref={cardRef}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.borderColor = 'var(--accent-cyan)';
        e.currentTarget.querySelector('.glow-effect').style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.querySelector('.glow-effect').style.opacity = '0';
      }}
    >
      <div className="glow-effect" style={glowStyle}></div>
      
      {/* Content wrapper to keep text above the glow */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{
          fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800',
          color: status === 'Active Research' || status === 'In Progress' ? '#fbbf24' : '#34d399',
          marginBottom: '1rem'
        }}>
          [{status}]
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{title}</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          {tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>
        
        <p style={{ color: 'var(--text-muted)', flexGrow: 1, marginBottom: '2rem' }}>
          {description}
        </p>
        
        <a href={link} target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--accent-purple)', textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.9rem', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
        }}>
          {linkText} <span style={{ fontSize: '1.2rem' }}>→</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;