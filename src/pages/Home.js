import React from 'react';
import profilePic from '../assets/profile.jpg';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const sectionStyle = {
    marginBottom: '4rem'
  };

  const headingStyle = {
    fontSize: '1.2rem',
    fontFamily: "'JetBrains Mono', monospace",
    color: 'var(--accent-purple)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '1.5rem',
    borderBottom: '1px solid var(--border-subtle)',
    paddingBottom: '0.5rem'
  };

  return (
    <div>
      {/* Header Section */}
      <div style={{ ...sectionStyle, display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        <div style={{
          width: '180px',
          height: '180px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, var(--bg-card), var(--bg-dark))',
          border: '2px solid var(--accent-cyan)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <img 
            src={profilePic} 
            alt="Anirudh Vuppala" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
        
        <div>
          <h1 className="gradient-text glitch-hover" style={{ fontSize: '3.5rem', marginBottom: '0.5rem', cursor: 'default' }}>
            Anirudh Vuppala
          </h1>
          {/* Mod 1: Live Terminal Typewriter */}
          <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", height: '60px', marginTop: '0.5rem' }}>
            <span style={{ color: 'var(--accent-cyan)' }}>root@av-server:~$</span>{' '}
            <TypeAnimation
              sequence={[
                './load_profile.sh',
                1000,
                'AI Researcher.',
                1000,
                'Software Development Engineer.',
                1000,
                'Specializing in Evolutionary Algorithms.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>01. Professional_Synopsis</h2>
        <div style={{ 
          background: 'var(--bg-card)', 
          borderLeft: '3px solid var(--accent-cyan)', 
          padding: '2rem', 
          borderRadius: '0 8px 8px 0',
          maxWidth: '900px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <span style={{ color: 'var(--accent-cyan)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
              [LOC: HYDERABAD, IN] // [AFFILIATION: MAHINDRA_UNIVERSITY]
            </span>
            Currently completing my B.Tech in Computer Science Engineering. 
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            My engineering philosophy centers on constructing intelligent, scalable systems. I specialize in translating complex, real-world optimization problems into computational models using advanced <strong style={{color: 'var(--text-main)'}}>machine learning frameworks</strong> and rigorous algorithmic design.
          </p>
        </div>
      </section>

      {/* Research Section */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>02. Core_Research_Domains</h2>
        <div style={{ 
          background: 'var(--bg-card)', 
          borderLeft: '3px solid var(--accent-purple)', 
          padding: '2rem', 
          borderRadius: '0 8px 8px 0',
          maxWidth: '900px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            My core technical fascination lies in analyzing how biological mechanisms can be computationally modeled. 
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            This distinct perspective drives my research into the biological inspiration underpinning both <strong style={{color: 'var(--text-main)'}}>Evolutionary Algorithms</strong> and <strong style={{color: 'var(--text-main)'}}>Deep Learning</strong> architectures.
          </p>
          
          {/* Tag Array for visual break */}
          <div style={{ 
            marginTop: '2rem', 
            paddingTop: '1.5rem', 
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            flexWrap: 'wrap' 
          }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: 'var(--accent-purple)' }}>
              {'>'} CURRENT_INVESTIGATIONS:
            </span>
            <span className="tech-tag">Reinforcement Learning</span>
            <span className="tech-tag">Many-Objective Optimization (Evolutionary Algorithms)</span>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>03. Technical_Stack</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
            <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem', fontSize: '1rem' }}>Languages</h3>
            <div className="tech-tag">Python</div>
            <div className="tech-tag">Java</div>
            <div className="tech-tag">C</div>
          </div>
          <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
            <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1rem', fontSize: '1rem' }}>AI/ML Libraries</h3>
            <div className="tech-tag">PyTorch</div>
            <div className="tech-tag">TensorFlow</div>
            <div className="tech-tag">Keras</div>
            <div className="tech-tag">PyMoo</div>
          </div>
          <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1rem' }}>Systems & Frameworks</h3>
            <div className="tech-tag">Express.js</div>
            <div className="tech-tag">React</div>
            <div className="tech-tag">MySQL</div>
            <div className="tech-tag">Unix Shell</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>04. Professional_Contact</h2>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-muted)' }}>
          <p><strong style={{color: 'var(--text-main)'}}>Phone:</strong> +91 6281753474</p>
          <p><strong style={{color: 'var(--text-main)'}}>Institutional Email:</strong> se23ucse007@mahindrauniversity.edu.in</p>
          <p><strong style={{color: 'var(--text-main)'}}>Personal Email:</strong> anirudhvuppala2005@gmail.com</p>
          <p><strong style={{color: 'var(--text-main)'}}>Location:</strong> Hyderabad, India</p>
        </div>
      </section>
    </div>
  );
};

export default Home;