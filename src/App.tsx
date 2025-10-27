import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Menu, 
  X, 
  ArrowUpRight, 
  Award, 
  CheckCircle, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';

/* This file contains all your components. 
  The styling is in a separate file (index.css).
*/

// --- TYPE Definitions for TypeScript ---
// This defines the "shape" of our project object, fixing the "any" type error.
type Project = {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
};


// --- COMPONENT: Navbar ---
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        
        {/* Logo/Name */}
        <div className="navbar-brand">
          <a href="#">
            Vedant Singh
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="navbar-menu-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href="/Vedant_Singh_Resume.pdf" // <-- Add your resume PDF to 'public' folder
            download
            className="button button-primary"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-menu-mobile-toggle">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="navbar-menu-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="nav-link-mobile"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Vedant_Singh_Resume.pdf" // <-- Add your resume PDF to 'public' folder
            download
            className="button button-primary-mobile"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

// --- COMPONENT: Hero ---
const Hero = () => {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-headline">
            Vedant Singh
          </h1>
          <h2 className="hero-subheadline">
            Electronics & Computer Engineer
          </h2>
          <p className="hero-description">
            B.Tech student at VIT Chennai (9.09 CGPA) with a passion for JAVA, Data Science, and creating optimized, real-world solutions with AI.
          </p>
          
          {/* Social Links */}
          <div className="hero-socials">
            <a href="https://github.com/VedantSingh4108" target="_blank" rel="noopener noreferrer">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/vedantsingh0841" target="_blank" rel="noopener noreferrer">
              <Linkedin size={28} />
            </a>
            <a href="mailto:vedantsingh4108@gmail.com">
              <Mail size={28} />
            </a>
            <a href="tel:+916307927337">
              <Phone size={28} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a
              href="#projects"
              className="button button-primary"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="button button-secondary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Skills ---
const Skills = () => {
  const skillCategories = [
    { 
      title: "Programming Languages", 
      skills: ["Python", "C/C++", "Java", "HTML", "CSS", "JavaScript"] 
    },
    { 
      title: "Data Science & Analytics", 
      skills: ["Pandas", "SQL"] 
    },
    { 
      title: "Cloud & AI", 
      skills: ["Microsoft Azure", "Azure AI", "Machine Learning"] 
    },
    { 
      title: "UI/UX", 
      skills: ["Figma"] 
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          My Tech Stack
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category-card">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Project Card ---
// We use the "Project" type we defined at the top to fix the TypeScript error.
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card">
      {/* Placeholder for project image/visual */}
      <div className="project-card-visual">
        <Briefcase size={40} />
        <span style={{ marginLeft: '8px' }}>Project Visual</span>
      </div>
      
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        
        {/* Tech Tags */}
        <div className="skill-tags">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="skill-tag project-tag"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          View on GitHub
          <ArrowUpRight size={16} style={{ marginLeft: '4px' }} />
        </a>
      </div>
    </div>
  );
};

// --- COMPONENT: Projects ---
const Projects = () => {
  // We tell TypeScript that this array matches the "Project" type.
  const projectData: Project[] = [
    {
      title: "RockGuard AI: Rockfall Prediction System",
      description: "AI-powered system developed for Smart India Hackathon 2025 to predict rockfall events and improve safety in vulnerable areas,using synthethic data to train the model.",
      tags: ["AI/ML", "Python", "Data Analysis", "SIH 2025"],
      githubLink: "https://github.com/VedantSingh4108" // <-- Update this link
    },
    {
      title: "Cronos - AI -> Personalized AI Chatbot",
      description: "Cronos AI: An intelligent personal voice assistant built with Python. Features offline hotword detection ('Cronos') using Porcupine, voice command recognition via Google Speech Recognition, and integration with the Google Gemini API for handling complex queries. Capable of opening local applications and websites, providing the current time and date, and answering natural language questions.",
      tags: ["Python", "AI", "NLP", "In Progress"],
      githubLink: "https://github.com/VedantSingh4108/Cronos-AI"
    },
    {
      title: "Diabetes Predictor using Machine Learning",
      description: "This project predicts diabetes using the PIMA dataset. After thorough EDA, I addressed challenges like hidden missing values (imputing zeros with medians), outliers (using IQR capping), and class imbalance (applying SMOTE to training data). Features were scaled using StandardScaler. A Logistic Regression model was trained and evaluated using accuracy, confusion matrix, and classification report metrics.",
      tags: ["Python", "Data Analysis", "Machine Learning", "Pandas", "Scikit-Learn"],
      githubLink: "https://github.com/VedantSingh4108" // <-- Update this link
    },
    {
      title: "Traffic Management Simulation",
      description: "Interactive C++ simulation of a city grid with an adaptive algorithm to optimize traffic signal switching.",
      tags: ["C++", "OOP", "Data Structures", "Optimization"],
      githubLink: "https://github.com/VedantSingh4108/Traffic-Management-System" 
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projectData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Education ---
const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          Education & Credentials
        </h2>
        <div className="education-grid">
          
          {/* Education Column */}
          <div className="education-column">
            <h3 className="education-column-title">
              <GraduationCap size={28} style={{ marginRight: '12px', color: '#60a5fa' }} />
              Education
            </h3>
            <div className="education-timeline">
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <div className="timeline-content">
                  <h4 className="timeline-title">VIT Chennai</h4>
                  <p className="timeline-subtitle">B.Tech, Electronics & Computer Engineering</p>
                  <p className="timeline-date">Aug 2023 - Present | CGPA: 9.09</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <div className="timeline-content">
                  <h4 className="timeline-title">Chinmaya Vidyalaya, NTPC Unchahar</h4>
                  <p className="timeline-subtitle">Class 12 | Percentage: 89.8%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Column */}
          <div className="education-column">
            <h3 className="education-column-title">
              <Award size={28} style={{ marginRight: '12px', color: '#60a5fa' }} />
              Certifications
            </h3>
            <div className="certifications-list">
              <div className="certification-item">
                <CheckCircle size={20} style={{ flexShrink: 0, marginRight: '12px', marginTop: '4px', color: '#4ade80' }} />
                <div>
                  <h4 className="certification-title">Microsoft Azure AI Associate</h4>
                  <p className="certification-description">Certified by Microsoft, validating expertise in designing and deploying AI solutions on Azure.</p>
                </div>
              </div>
              <div className="certification-item">
                <CheckCircle size={20} style={{ flexShrink: 0, marginRight: '12px', marginTop: '4px', color: '#4ade80' }} />
                <div>
                  <h4 className="certification-title">Spoken Tutorial Programming Test</h4>
                  <p className="certification-description">IIT Bombay Certified (2024) in Python, C, and C++.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Contact ---
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <h2 className="section-title">
          Get In Touch
        </h2>
        <p className="contact-description">
          I'm currently seeking new opportunities. My inbox is always open, whether you have a question or just want to say hi.
        </p>
        <div className="contact-buttons">
          <a
            href="mailto:vedantsingh4108@gmail.com"
            className="button button-primary"
          >
            <Mail size={20} style={{ marginRight: '8px' }} />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/vedantsingh0841"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            <Linkedin size={20} style={{ marginRight: '8px' }} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Footer ---
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Vedant Singh. All rights reserved.
        </p>
        <div className="footer-socials">
          <a href="https://github.com/VedantSingh4108" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/vedantsingh0841" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="mailto:vedantsingh4108@gmail.com">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---
// This brings all the components together.
export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
