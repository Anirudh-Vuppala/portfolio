import React, { useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import CustomCursor from './components/CustomCursor';

function App() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <HashRouter>
      <div className="app-container" style={{ cursor: 'none' }}> {/* Hides default cursor */}
        <CustomCursor /> {/* The new Hatke cursor */}

        {/* The Neural Network Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
              },
              modes: {
                grab: { distance: 140, links: { opacity: 0.5 } },
              },
            },
            particles: {
              color: { value: "#00b4d8" },
              links: {
                color: "#0077b6",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.8,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 40,
              },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%' }}
        />

        <Navbar />
        <main className="page-content" style={{ zIndex: 1, position: 'relative' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;