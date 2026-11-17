import { motion } from "motion/react";

import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
  FaGraduationCap,
  FaPuzzlePiece,
} from "react-icons/fa";

import "./About.css";

const highlights = [
  {
    icon: <FaCode />,
    number: "3+",
    title: "Years of Experience",
    description: "Building modern web applications",
  },
  {
    icon: <FaLaptopCode />,
    number: "2+",
    title: "Major Products",
    description: "Real-world product development",
  },
  {
    icon: <FaGraduationCap />,
    number: "9.0",
    title: "B.Tech CGPA",
    description: "Computer Science & Engineering",
  },
];

const values = [
  {
    icon: <FaLightbulb />,
    title: "Creative Thinking",
    description:
      "I enjoy exploring new ideas and finding practical solutions to challenging development problems.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Problem Solving",
    description:
      "I focus on understanding problems deeply and building reliable, maintainable solutions.",
  },
  {
    icon: <FaRocket />,
    title: "Continuous Growth",
    description:
      "I believe in continuously learning new technologies and improving my development skills.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* SECTION HEADING */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-eyebrow">GET TO KNOW ME</span>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            A little introduction about my journey, experience,
            and passion for technology.
          </p>
        </motion.div>

        {/* ABOUT INTRODUCTION */}
        <div className="about-intro-grid">

          <motion.div
            className="about-main-content"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-card-label">
              <FaCode />
              <span>WHO I AM</span>
            </div>

            <h3>
              Turning Ideas Into
              <span> Digital Experiences</span>
            </h3>

            <p>
              I'm Soumobrata Chanda, a Software Engineer and
              Frontend Developer from Kolkata, India, with 3+
              years of professional development experience.
            </p>

            <p>
              I worked at Metavy (OPC) Private Limited, where
              I contributed to building blockchain-based
              products, including KaanchScan and the Kaanch
              web application. My work involved developing
              responsive user interfaces, integrating APIs,
              and working with blockchain technologies.
            </p>

            <p>
              My primary interests are React.js, Next.js,
              JavaScript, frontend architecture, and creating
              smooth, intuitive user experiences. I also enjoy
              exploring backend development and AI-powered
              applications.
            </p>

            <p>
              I love learning, experimenting with new
              technologies, and turning complex ideas into
              practical digital solutions.
            </p>

            <div className="about-personal-details">
              <div>
                <span>Location</span>
                <strong>Kolkata, India</strong>
              </div>

              <div>
                <span>Specialization</span>
                <strong>Frontend Development</strong>
              </div>

              <div>
                <span>Education</span>
                <strong>B.Tech in Computer Science</strong>
              </div>

              <div>
                <span>Current Focus</span>
                <strong>React, Next.js & Web3</strong>
              </div>
            </div>
          </motion.div>

          {/* PROFESSIONAL HIGHLIGHTS */}
          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                className="about-highlight-card"
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="about-highlight-icon">
                  {item.icon}
                </div>

                <div className="about-highlight-info">
                  <strong>{item.number}</strong>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* MY APPROACH */}
        <motion.div
          className="about-values-section"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-values-heading">
            <span className="about-eyebrow">WHAT DRIVES ME</span>
            <h3>My Approach to Development</h3>
            <p>
              The principles that guide the way I learn,
              think, and build software.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((item, index) => (
              <motion.div
                className="about-value-card"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="about-value-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
