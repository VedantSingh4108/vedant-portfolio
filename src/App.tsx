import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  GraduationCap,
  Trophy,        
  ExternalLink,
  Check,
  Copy,
  Sun,   
  Moon   
} from 'lucide-react';

// --- TYPESCRIPT DEFINITIONS ---
type Project = {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  image: string;
  workingLink?: string;
};

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
  showThemeNotif: boolean;
  dismissNotif: () => void;
}

// --- COMPONENT: Navbar ---
const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, showThemeNotif, dismissNotif }) => {
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
          <a href="#">Vedant Singh</a>
        </div>

        {/* Desktop Nav Links */}
        <div className="navbar-menu-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href="/Vedant_Singh_Resume.pdf" 
            download
            className="button button-primary"
          >
            Download Resume
          </a>
        </div>

        {/* Actions Right (Theme Toggle + Mobile Menu) */}
        <div className="navbar-actions">
          
          {/* THEME TOGGLE & TOOLTIP WRAPPER */}
          <div className="theme-toggle-wrapper">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* BOUNCING NOTIFICATION TOOLTIP */}
            {showThemeNotif && (
              <div className="theme-tooltip">
                <p><strong>New!</strong> Try Light & Dark modes! ✨</p>
                <button className="tooltip-close" onClick={dismissNotif}>
                  Got it
                </button>
              </div>
            )}
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
            href="/Vedant_Singh_Resume.pdf" 
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
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-headline">Vedant Singh</h1>
          <h2 className="hero-subheadline">Electronics & Computer Engineer</h2>
          <p className="hero-description">
            B.Tech student at VIT Chennai (9.14 CGPA) with a passion for JAVA, Data Science, and creating optimized, real-world solutions with AI.
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
            <a href="#projects" className="button button-primary">My Projects</a>
            <a href="#contact" className="button button-secondary">Contact Me</a>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-blob">
            {!imgFailed ? (
              <img 
                src="/images/Profile.jpg" 
                alt="Vedant Singh" 
                className="hero-img"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="hero-img-fallback">
                <span>Vedant<br/>Singh</span>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- COMPONENT: Skills ---
const Skills = () => {
  const skillCategories = [
    { 
      title: "Programming Languages", 
      skills: ["Python", "C/C++", "Java", "JavaScript", "OracleSQL/MySQL"] 
    },
    { 
      title: "Data Science", 
      skills: ["Pandas & NumPy", "Scikit-Learn", "Matplotlib & Seaborn", "Statistical Analysis(R)","LIME & SHAP"] 
    },
    { 
      title: "AI & Machine Learning", 
      skills: ["Machine Learning", "Deep Learning", "NLP", "NLTK","SVM"] 
    },
    { 
      title: "Web,Cloud & Tools", 
      skills: ["HTML/CSS","React & NodeJS","Streamlit","Microsoft Azure","AWS Basics","Git & GitHub"] 
    },
    
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My Tech Stack
        </motion.h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title} 
              className="skill-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Project Card ---
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="project-card-visual" style={{ padding: 0, overflow: 'hidden' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        
        <div className="skill-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-tag project-tag">
              {tag}
            </span>
          ))}
        </div>

        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          {/* GitHub Link (Always shows) */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            style={{ marginTop: '0' }}
          >
            View on GitHub
            <Github size={16} style={{ marginLeft: '6px' }} />
          </a>

          {/* Working Link (Only shows if you added it to the project data) */}
          {project.workingLink && (
            <a
              href={project.workingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
              style={{ marginTop: '0', color: 'var(--color-brand)' }}
            >
              Live Demo
              <ArrowUpRight size={16} style={{ marginLeft: '2px' }} />
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
};

// --- COMPONENT: Projects ---
const Projects = () => {
  const projectData: Project[] = [
    {
      title: "Real-Time Sentiment Analysis Web App",
      description: "Built a real-time sentiment analysis web app using Streamlit and deployed it to the cloud. Engineered a custom NLP pipeline (NLTK, TF-IDF) with idiom and negation detection, and trained a Linear SVM on 150,000+ reviews to achieve 82.17% accuracy",
      tags: ["NLP", "Python", "Streamlit", "TF-IDF", "SVM"],
      githubLink: "https://github.com/VedantSingh4108/sentiment-api",
      image:"/images/Sentiment.png",
      workingLink: "https://sentiment-api-7e96wp3akqlayqhcmtd8xv.streamlit.app/"
    },
    {
      title: "Cronos - Personalized AI Chatbot",
      description: "Cronos AI: An intelligent personal voice assistant built with Python. Features offline hotword detection ('Cronos') using Porcupine, voice command recognition via Google Speech Recognition, and integration with the Google Gemini API for handling complex queries.",
      tags: ["Python", "AI", "NLP"],
      githubLink: "https://github.com/VedantSingh4108/Cronos-AI",
      image:"/images/Chatbot.png"
    },
    {
      title: "Diabetes Predictor using Machine Learning",
      description: "Built a machine learning pipeline to predict diabetes onset using the PIMA Indians Diabetes dataset. Addressed critical data issues like missing values and class imbalance (SMOTE). Implemented SHAP (Shapley Additive Explanations) to provide robust explanations for feature importance.",
      tags: ["Python", "Machine Learning", "Pandas", "Scikit-Learn","Lime-Shap Analysis"],
      githubLink: "https://github.com/VedantSingh4108/Diabetes-predictor",
      image:"/images/Diabetes.png"
    },
    {
      title: "RockGuard AI: Rockfall Prediction System",
      description: "AI-powered system developed for Smart India Hackathon 2025 to predict rockfall events and improve safety in vulnerable areas, using synthetic data to train the model.",
      tags: ["AI/ML", "Python", "Data Analysis", "SIH 2025"],
      githubLink: "https://github.com/VedantSingh4108/Open_Pit_Rockfall",
      image:"/images/Rockfall.png"
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Featured Projects
        </motion.h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Education ---
const Education = () => {
  const certList = [
    {
      title: "Microsoft Azure AI Associate",
      issuer: "Microsoft",
      description: "Validated expertise in designing and deploying AI solutions on Azure.",
      link: "https://drive.google.com/file/d/1c9y_D8OrfbavlCWqSW7IuVRVSM9iv4TH/view?usp=sharing" 
    },
    {
      title: "Spoken Tutorial Programming Test",
      issuer: "IIT Bombay",
      description: "IIT Bombay Certified (2024) in Python, C, and C++.",
      link: "https://drive.google.com/file/d/1b95kU_xwlv0jwmaMoVefmgDZaQZ66nhj/view?usp=sharing" 
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          Education & Credentials
        </h2>
        <div className="education-grid">
          
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
                  <p className="timeline-date">Aug 2023 - Present | CGPA: 9.14</p>
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

          <div className="education-column">
            <h3 className="education-column-title">
              <Award size={28} style={{ marginRight: '12px', color: '#60a5fa' }} />
              Achievements & Certifications
            </h3>
            <div className="certifications-list">
              
              <div className="certification-item hackathon-highlight" style={{ 
                background: 'rgba(96, 165, 250, 0.1)', 
                padding: '16px', 
                borderRadius: '8px',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                marginBottom: '8px'
              }}>
                <Trophy size={24} style={{ flexShrink: 0, marginRight: '12px', marginTop: '4px', color: '#facc15' }} />
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 className="certification-title">2nd Rank - International Online NetSim 24hrs Hackathon</h4>
                    <a 
                      href="https://drive.google.com/file/d/1xSt1RrKPaiIFsJ0zj5Ap9Fd5L9qBld5f/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="verify-link"
                      style={{ 
                        color: '#60a5fa', 
                        display: 'flex', 
                        alignItems: 'center', 
                        fontSize: '0.85rem', 
                        marginLeft: '10px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      View Cert <ExternalLink size={14} style={{ marginLeft: '4px' }} />
                    </a>
                  </div>
                  <p className="certification-description" style={{ color: 'var(--color-text-primary)', opacity: 0.8, marginBottom: '4px'}}>
                     NetSim Simulation Challenge
                  </p>
                  <p className="certification-description">
                    Designed and simulated networks using NetSim, optimizing network performance parameter and secured 2nd place.
                  </p>
                </div>
              </div>

              {certList.map((cert, index) => (
                <div key={index} className="certification-item" style={{ padding: '8px 0' }}>
                  <CheckCircle size={20} style={{ flexShrink: 0, marginRight: '12px', marginTop: '4px', color: 'var(--color-success)' }} />
                  <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 className="certification-title">{cert.title}</h4>
                      {cert.link !== "#" && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="verify-link" style={{ color: '#60a5fa', display: 'flex', alignItems: 'center', fontSize: '0.75rem', marginLeft: '8px' }}>
                          Verify <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                        </a>
                      )}
                    </div>
                    <p className="certification-description">{cert.description}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Contact ---
const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vedantsingh4108@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          I'm currently seeking new opportunities. My inbox is always open, whether you have a question or just want to say hi.
        </p>
        <div className="contact-buttons">
          <button
            onClick={handleCopyEmail}
            className="button button-primary"
            style={{ minWidth: '150px' }} 
          >
            {copied ? (
              <><Check size={20} style={{ marginRight: '8px' }} />Copied!</>
            ) : (
              <><Copy size={20} style={{ marginRight: '8px' }} />Copy Email</>
            )}
          </button>
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
export default function App() {
  const [theme, setTheme] = useState('dark');
  const [showThemeNotif, setShowThemeNotif] = useState(true);

  // Apply theme to HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Dismiss tooltip automatically
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThemeNotif(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setShowThemeNotif(false); 
  };

  return (
    <div className="app-wrapper">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        showThemeNotif={showThemeNotif}
        dismissNotif={() => setShowThemeNotif(false)}
      />
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