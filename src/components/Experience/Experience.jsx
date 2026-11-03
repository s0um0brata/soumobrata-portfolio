
import { motion } from "motion/react";

import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCode,
  FaGlobe,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";

import "./Experience.css";

const responsibilities = [
  "Developed responsive and interactive frontend interfaces using React.js and modern JavaScript.",
  "Contributed to KaanchScan, a blockchain explorer, implementing interfaces for blocks, transactions, wallet addresses, search and data visualization.",
  "Developed frontend features for the Kaanch web application, including wallet connectivity, transaction interfaces, token management and dashboards.",
  "Integrated backend services and blockchain RPC APIs to display and manage application data.",
  "Worked with wallet integrations and Web3 technologies, including MetaMask and WalletConnect.",
  "Focused on reusable components, responsive layouts, UI consistency and improving user experience.",
];

const technologies = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Redux",
  "REST APIs",
  "Blockchain RPC APIs",
  "Ethers.js",
  "Web3.js",
  "MetaMask",
  "WalletConnect",
  "Git",
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* SECTION HEADING */}

        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="experience-eyebrow">
            MY PROFESSIONAL JOURNEY
          </span>

          <h2>
            Work <span>Experience</span>
          </h2>

          <p>
            My professional journey, responsibilities and
            contributions to real-world software products.
          </p>
        </motion.div>

        {/* EXPERIENCE TIMELINE */}

        <div className="experience-timeline">

          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >

            {/* TIMELINE MARKER */}

            <div className="experience-marker">
              <FaBriefcase />
            </div>

            {/* EXPERIENCE CONTENT */}

            <div className="experience-content">

              <div className="experience-top">
                <div>
                  <span className="experience-type">
                    PROFESSIONAL EXPERIENCE
                  </span>

                  <h3>Software Engineer</h3>

                  <h4>
                    Metavy (OPC) Private Limited
                  </h4>
                </div>

                <span className="experience-current-badge">
                  Previous Role
                </span>
              </div>

              {/* EXPERIENCE META */}

              <div className="experience-meta">
                <span>
                  <FaCalendarAlt />
                  Jan 2023 – Sep 2026
                </span>

                <span>
                  <FaMapMarkerAlt />
                  India
                </span>

                <span>
                  <FaBriefcase />
                  Full-time
                </span>
              </div>

              <div className="experience-divider"></div>

              {/* RESPONSIBILITIES */}

              <div className="experience-responsibilities">
                <h5>
                  <FaCode />
                  Key Responsibilities & Contributions
                </h5>

                <ul>
                  {responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                    >
                      <FaCheckCircle />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* PRODUCTS */}

              <div className="experience-products">
                <h5>
                  <FaLaptopCode />
                  Products I Worked On
                </h5>

                <div className="experience-product-grid">

                  <a
                    href="https://www.kaanchscan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-product"
                  >
                    <div className="product-icon">
                      <FaGlobe />
                    </div>

                    <div>
                      <strong>KaanchScan</strong>
                      <span>
                        Blockchain Explorer
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://app.kaanch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-product"
                  >
                    <div className="product-icon">
                      <FaLaptopCode />
                    </div>

                    <div>
                      <strong>Kaanch App</strong>
                      <span>
                        Blockchain Web Application
                      </span>
                    </div>
                  </a>

                </div>
              </div>

              {/* TECHNOLOGIES */}

              <div className="experience-technologies">
                <h5>Technologies & Tools</h5>

                <div className="experience-tech-list">
                  {technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
