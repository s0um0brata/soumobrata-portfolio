
import { motion } from "motion/react";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaCode,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";

import {
  FaArrowUpRightFromSquare,
  FaArrowRight,
  FaLaptopCode,
} from "react-icons/fa6";

import { IoSparkles } from "react-icons/io5";

import "./Hero.css";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/s0um0brata",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/soumobrata-chanda-51991b244",
  },
  {
    name: "Email",
    icon: <FaArrowRight />,
    url: "mailto:chandadeep8@gmail.com",
  },
];

const technologies = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-greeting">
            <IoSparkles />
            <span>WELCOME TO MY PORTFOLIO</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span>Soumobrata Chanda</span>
          </h1>

          <h2 className="hero-subtitle">
            Software Engineer & Website Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive, and user-friendly web applications
            with a passion for clean design and meaningful digital
            experiences. I have 3+ years of experience working with
            React.js, Next.js, blockchain technologies, and AI-powered
            applications.
          </p>

          {/* ACTION BUTTONS */}
          <div className="hero-buttons">
            <a href="#projects" className="hero-btn hero-btn-primary">
              Explore My Work
              <FaArrowUpRightFromSquare />
            </a>

            <a
              href="/files/Soumobrata_Chanda_CV.pdf"
              download
              className="hero-btn hero-btn-secondary"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">
            <span className="hero-social-label">Find me on</span>

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={
                  social.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={social.name}
                className="hero-social-link"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* EXPERIENCE DETAILS */}
          <div className="hero-highlights">
            <div className="hero-highlight">
              <FaCode />
              <div>
                <strong>3+ Years</strong>
                <span>Development Experience</span>
              </div>
            </div>

            <div className="hero-highlight">
              <FaLaptopCode />
              <div>
                <strong>Web & Blockchain</strong>
                <span>Development Expertise</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>

            <div className="hero-image-frame">
              <img
                src="/images/profile.png"
                alt="Soumobrata Chanda"
                className="hero-profile-image"
              />
            </div>

            {/* FLOATING CARD - DEVELOPER */}
            <motion.div
              className="hero-floating-card hero-card-developer"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="floating-card-icon">
                <FaCode />
              </div>
              <div>
                <strong>Developer</strong>
                <span>Building the Web</span>
              </div>
            </motion.div>

            {/* FLOATING CARD - EXPERIENCE */}
            <motion.div
              className="hero-floating-card hero-card-experience"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <IoSparkles />
              <div>
                <strong>Creative Mind</strong>
                <span>Problem Solver</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* TECHNOLOGY STRIP */}
      <motion.div
        className="hero-tech-strip"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="hero-tech-label">
          TECHNOLOGIES I WORK WITH
        </span>

        <div className="hero-tech-list">
          {technologies.map((tech) => (
            <div className="hero-tech-item" key={tech.name}>
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
