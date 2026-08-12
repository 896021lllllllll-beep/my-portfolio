import { useEffect, useState } from "react";
import "./App.css";
import profileImage from "./assets/profile.jpeg";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    { name: "HTML", icon: "🌐", level: 90 },
    { name: "CSS", icon: "🎨", level: 85 },
    { name: "Tailwind CSS", icon: "💨", level: 85 },
    { name: "JavaScript", icon: "JS", level: 85 },
    { name: "React.js", icon: "⚛️", level: 80 },
    { name: "Node.js", icon: "🟢", level: 78 },
    { name: "Express.js", icon: "🚀", level: 80 },
    { name: "MySQL", icon: "🗄️", level: 75 },
    { name: "Git & GitHub", icon: "🐙", level: 80 },
    { name: "C / Java", icon: "💻", level: 70 },
  ];

  const projects = [
    {
      title: "DevDashboard",
      image: "/projects/dashboard.png",
      description:
        "A modern responsive developer dashboard with a clean user interface.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/",
      live: "#",
    },
    {
      title: "Task Manager",
      image: "/projects/task-manager.png",
      description:
        "Full-stack task management application with authentication and database.",
      tech: ["React", "Node.js", "MySQL"],
      github: "https://github.com/",
      live: "#",
    },
    {
      title: "Weather App",
      image: "/projects/weather.png",
      description:
        "Weather application that displays real-time weather information.",
      tech: ["JavaScript", "API"],
      github: "https://github.com/",
      live: "#",
    },
    {
      title: "Portfolio Website",
      image: "/projects/portfolio.png",
      description:
        "Personal portfolio website showcasing skills, projects and certificates.",
      tech: ["React", "CSS"],
      github: "https://github.com/",
      live: "#",
    },
    {
      title: "Blog Website",
      image: "/projects/blog.png",
      description:
        "Full-stack blog platform where users can create and read posts.",
      tech: ["Node.js", "Express", "MySQL"],
      github: "https://github.com/",
      live: "#",
    },
  ];

  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2026",
      image: "/certificates/certificate1.png",
    },
    {
      title: "JavaScript Development",
      issuer: "Udemy",
      date: "2026",
      image: "/certificates/certificate2.png",
    },
    {
      title: "React.js Bootcamp",
      issuer: "Great Learning",
      date: "2026",
      image: "/certificates/certificate3.png",
    },
    {
      title: "Node.js & Express.js",
      issuer: "Udemy",
      date: "2026",
      image: "/certificates/certificate4.png",
    },
  ];

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            Aman<span>.</span>
          </a>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#certificates" onClick={closeMenu}>Certificates</a>
            <a href="#resume" onClick={closeMenu}>Resume</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="nav-actions">

            <button
              className="theme-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <div className="hello">
              👋 Hello, I'm
            </div>

            <h1>
              Aman <span>Yadav</span>
            </h1>

            <h2>
              Full Stack <span>Web Developer</span>
            </h2>

            <p>
              BCA student passionate about building modern web applications
              and learning new technologies. I love turning ideas into
              real-world digital products.
            </p>

            <div className="hero-buttons">

              <a
                href="/resume.pdf"
                download
                className="btn primary"
              >
                📄 Download Resume
              </a>

              <a href="#contact" className="btn secondary">
                ✉️ Contact Me
              </a>

            </div>

            <div className="social-links">

              <span>Connect with me</span>

              <div>
                <a href="https://github.com/896021lllllllll-beep" target="_blank">GH</a>
                <a href="https://www.linkedin.com/in/amanyadav9559/" target="_blank">in</a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=2007amanil@gmail.com" target="_blank" rel="noopener noreferrer">✉</a>
              </div>

            </div>

          </div>


          <div className="hero-image">

            <div className="image-circle"></div>

            <img
              src={profileImage}
              alt="Aman Yadav"
              />

            <div className="floating-icon react-icon">
              ⚛️
            </div>

            <div className="floating-icon js-icon">
              JS
            </div>

            <div className="floating-icon node-icon">
              🟢
            </div>

            <div className="code-icon">
              &lt;/&gt;
            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <div className="section-container">

          <div className="section-title">
            <span>About Me</span>
            <h2>Know Me Better</h2>
          </div>

          <div className="about-grid">

            <div className="about-content">

              <div className="section-icon">
                👨‍💻
              </div>

              <h3>I'm Aman Yadav</h3>

              <p>
                I am a BCA student interested in Full Stack Web Development.
                My goal is to become a skilled developer who can build
                scalable, responsive and user-friendly applications.
              </p>

              <p>
                I enjoy working with JavaScript technologies and continuously
                improving my programming and problem-solving skills.
              </p>

              <div className="about-info">

                <p>
                  <strong>Name:</strong> Aman Yadav
                </p>

                <p>
                  <strong>Education:</strong> BCA
                </p>

                <p>
                  <strong>Semester:</strong> 5th Semester
                </p>

                <p>
                  <strong>Location:</strong> Uttar Pradesh, India
                </p>

                <p>
                  <strong>Role:</strong> Full Stack Web Developer
                </p>

              </div>

            </div>


            <div className="stats-card">

              <div className="stat">
                <div className="stat-icon">🎓</div>
                <h3>BCA</h3>
                <p>5th Semester</p>
              </div>

              <div className="stat">
                <div className="stat-icon">💻</div>
                <h3>5+</h3>
                <p>Projects</p>
              </div>

              <div className="stat">
                <div className="stat-icon">🏆</div>
                <h3>6+</h3>
                <p>Certificates</p>
              </div>

              <div className="stat">
                <div className="stat-icon">🚀</div>
                <h3>Goal</h3>
                <p>Full Stack Developer</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">

        <div className="section-container">

          <div className="section-title">
            <span>My Skills</span>
            <h2>Technologies I Use</h2>
          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div className="skill-card" key={index}>

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h3>{skill.name}</h3>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <span>{skill.level}%</span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <div className="section-container">

          <div className="section-title">
            <span>My Work</span>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">

            {projects.map((project, index) => (

              <div className="project-card" key={index}>

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                </div>

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-tags">

                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}

                  </div>

                  <div className="project-links">

                    <a
                      href={project.live}
                      target="_blank"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATES ================= */}

      <section
        id="certificates"
        className="section certificates-section"
      >

        <div className="section-container">

          <div className="section-title">
            <span>Achievements</span>
            <h2>My Certificates</h2>
          </div>

          <div className="certificates-grid">

            {certificates.map((certificate, index) => (

              <div className="certificate-card" key={index}>

                <div className="certificate-image">

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                  />

                </div>

                <div className="certificate-content">

                  <h3>{certificate.title}</h3>

                  <p>{certificate.issuer}</p>

                  <small>{certificate.date}</small>

                  <a
                    href={certificate.image}
                    target="_blank"
                    className="certificate-btn"
                  >
                    View Certificate
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= RESUME ================= */}

      <section id="resume" className="section resume-section">

        <div className="section-container">

          <div className="resume-card">

            <div className="resume-content">

              <span className="resume-label">
                My Resume
              </span>

              <h2>
                Want to know more about me?
              </h2>

              <p>
                Download my resume to know more about my education,
                technical skills, projects and experience.
              </p>

              <a
                href="/resume.pdf"
                download
                className="btn primary"
              >
                📄 Download Resume
              </a>

            </div>

            <div className="resume-icon">
              📄
            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="section">

        <div className="section-container">

          <div className="section-title">
            <span>Get In Touch</span>
            <h2>Contact Me</h2>
          </div>

          <div className="contact-grid">

            <div className="contact-info">

              <h3>Let's work together</h3>

              <p>
                Have a project idea, job opportunity or simply want
                to say hello? Feel free to contact me.
              </p>

              <div className="contact-item">
                <span>📧</span>
                <div>
                  <strong>Email</strong>
                  <p>2007amanil@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <span>📱</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 9559152972</p>
                </div>
              </div>

              <div className="contact-item">
                <span>📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Varanasi, Uttar Pradesh, India</p>
                </div>
              </div>

            </div>


           
          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-container">

          <div className="footer-brand">

            <h2>Aman<span>.</span></h2>

            <p>
              Full Stack Web Developer
            </p>

          </div>


          <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>

          </div>


          <div className="footer-social">

            <h3>Connect With Me</h3>

            <div>

              <a href="https://github.com/" target="_blank">
                GitHub
              </a>

              <a href="https://linkedin.com/" target="_blank">
                LinkedIn
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=2007amanil@gmail.com"
                target="_blank"
                rel="noopener noreferrer">Email</a>
            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Aman Yadav. All rights reserved.
          </p>

          <a href="#home">
            ↑ Back to Top
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;