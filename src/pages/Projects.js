import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
const projectsData = [
    {
      title: "Many-Objective Optimization Research",
      status: "Active Research",
      tech: ["Python", "PyMoo", "Evolutionary Computing"],
      description: "Conducting core research under Prof. Kalyanmoy Deb to architect novel evolutionary algorithms. The project focuses on navigating high-dimensional optimization spaces to achieve equilibrium across competing objectives via advanced Pareto front approximation.",
      link: "https://github.com/Anirudh-Vuppala",
      linkText: "View Profile // Proprietary Research"
    },
    {
      title: "OPSD Time-Series Neural Forecasting",
      status: "Completed",
      tech: ["Python", "SARIMA", "LSTM", "Deep Learning"],
      description: "Developed a dual-engine forecasting architecture leveraging classical SARIMA and deep Long Short-Term Memory (LSTM) networks to predict multi-national energy grid loads. Integrated a rolling z-score statistical pipeline for autonomous anomaly detection.",
      link: "https://github.com/Anirudh-Vuppala", 
      linkText: "Repository Local // Pending Upload"
    },
    {
      title: "Fintech Fraud Anomaly Detection",
      status: "In Progress",
      tech: ["Python", "Deep Learning", "Neural Networks"],
      description: "Designing a high-throughput, real-time inference pipeline for the financial sector. Utilizing deep neural networks to autonomously classify transactional anomalies and isolate high-variance, fraudulent vectors from live data streams.",
      link: "https://github.com/Anirudh-Vuppala",
      linkText: "System Architecture (WIP)"
    },
    {
      title: "Hostel Management Auth & Architecture",
      status: "Active Development",
      tech: ["Express.js", "JWT", "Database Design"],
      description: "Leading system architecture and backend security protocols for a large-scale application. Engineered a resilient API gateway featuring JWT-based cryptographic authentication, strict role-based access controls, and optimized relational schemas.",
      link: "https://github.com/Anirudh-Vuppala", 
      linkText: "Internal Deployment // Code Local"
    }
  ];

  return (
    <div>
      <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Deployed_Architectures
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', fontFamily: "'JetBrains Mono', monospace" }}>
        {'>'} Executing payload: Array of academic research and system engineering projects.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            status={project.status}
            tech={project.tech}
            description={project.description}
            link={project.link}
            linkText={project.linkText}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;