import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-main">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="navbar-logo">
              <span className="logo-bracket">&lt;</span>
              <span>SC</span>
              <span className="logo-bracket">/&gt;</span>
            </a>

            <h3>Soumobrata Chanda</h3>

            <p>
              Building modern, responsive, and meaningful digital experiences
              through code and creativity.
            </p>
          </motion.div>

          <div className="footer-navigation">
            <h4>Quick Links</h4>

            <ul>
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>

            <p>
              Let's connect and discuss opportunities, ideas, or exciting
              projects.
            </p>

            <div className="footer-social-links">
              <a
                href="https://github.com/s0um0brata"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/soumobrata-chanda-51991b244"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Soumobrata Chanda. All rights reserved.</p>

          <button
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to top <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
