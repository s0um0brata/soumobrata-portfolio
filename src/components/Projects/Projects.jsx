import { motion } from "motion/react";

import {
  FaExternalLinkAlt,
  FaGithub,
  FaLaptopCode,
  FaCode,
} from "react-icons/fa";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "RUDD Private Limited",
    category: "Company Website",
    description:
      "A modern and responsive company website designed to showcase software development services, company information and professional digital solutions.",
    images: ["/images/projects/rudd-website.png"],
    technologies: ["Next.js", "JavaScript", "Motion", "Syncfusion", "CSS"],
    liveUrl: "https://rudd-website.netlify.app",
    githubUrl: "",
    type: "Personal Project",
  },
  {
    id: 2,
    title: "AI Interview Generator",
    category: "AI-Powered Application",
    description:
      "An AI-powered interview preparation platform that generates interview questions and helps users prepare for technical interviews using Google's Gemini AI.",
    images: [
      "/images/projects/interview-generator-1.png",
      "/images/projects/interview-generator-2.png",
    ],
    technologies: ["React.js", "Node.js", "Google Gemini", "Zod", "Puppeteer"],
    liveUrl: "",
    githubUrl: "",
    type: "Personal Project",
  },
  {
    id: 3,
    title: "KaanchScan",
    category: "Blockchain Explorer",
    description:
      "A blockchain explorer that provides access to blockchain information, including blocks, transactions, wallet addresses, search functionality and data visualization.",
    images: ["/images/projects/kaanchscan.png"],
    technologies: [
      "React.js",
      "JavaScript",
      "REST APIs",
      "Blockchain RPC",
      "CSS",
      "WebSocket"
    ],
    liveUrl: "https://www.kaanchscan.com",
    githubUrl: "",
    type: "Professional Project",
  },
  {
    id: 4,
    title: "Kaanch Web Application",
    category: "Web3 Application",
    description:
      "A blockchain-based web application featuring wallet connectivity, transaction interfaces, token management and interactive dashboards.",
    images: ["/images/projects/kaanch-app.png"],
    technologies: [
      "React.js",
      "JavaScript",
      "Web3.js",
      "Ethers.js",
      "WalletConnect",
      "WebSocket",
      "CSS",
    ],
    liveUrl: "https://app.kaanch.com",
    githubUrl: "",
    type: "Professional Project",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* SECTION HEADING */}

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects-eyebrow">MY RECENT WORK</span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A selection of projects that demonstrate my experience, technical
            skills and passion for building digital products.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (index % 2) * 0.12,
              }}
            >
              {/* PROJECT IMAGE */}

              {/* PROJECT IMAGES */}

              <div
                className={`project-image-wrapper ${
                  project.images.length > 1 ? "multiple-project-images" : ""
                }`}
              >
                {project.images.map((image, imageIndex) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${project.title} screenshot ${imageIndex + 1}`}
                    className="project-image"
                    loading="lazy"
                  />
                ))}

                <span className="project-type">{project.type}</span>
              </div>

              {/* PROJECT CONTENT */}

              <div className="project-content">
                <span className="project-category">
                  <FaLaptopCode />
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* TECHNOLOGIES */}

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* PROJECT LINKS */}

                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-link"
                    >
                      Live Preview
                      <FaExternalLinkAlt />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-link"
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <motion.div
          className="projects-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaCode />

          <p>Interested in working together on something great?</p>

          <a href="#contact">
            Let's Talk
            <FaArrowUpRightFromSquare />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
