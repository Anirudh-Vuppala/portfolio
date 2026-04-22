import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    padding: '1.5rem',
    background: 'var(--bg-card)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border-subtle)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: 'var(--text-muted)',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'all 0.2s ease'
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: 'var(--accent-cyan)',
    boxShadow: 'inset 0 -2px 0 var(--accent-cyan)'
  };

  return (
    <nav style={navStyle}>
      <NavLink 
        to="/" 
        className="levitate-link"
        style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
      >
        {'// Profile'}
      </NavLink>
      <NavLink 
        to="/projects" 
        className="levitate-link"
        style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
      >
        {'// Architecture'}
      </NavLink>
    </nav>
  );
}; // <-- This was the missing brace!

export default Navbar;