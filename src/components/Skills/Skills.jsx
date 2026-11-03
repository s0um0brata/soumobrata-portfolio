
import { motion } from "motion/react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiTailwindcss,
  SiSass,
  SiTypescript,
  SiWeb3Dotjs,
  SiEthereum,
  SiAxios,
  SiVite,
  SiFigma,
} from "react-icons/si";

import { FaCode, FaDatabase, FaWandMagicSparkles } from "react-icons/fa6";

import "./Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    description: "The languages I use to build applications.",
    icon: <FaCode />,
    skills: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: <FaReact />,
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "SCSS", icon: <SiSass /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    title: "Backend & Database",
    description: "Working with APIs, servers and data management.",
    icon: <FaDatabase />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Axios", icon: <SiAxios /> },
    ],
  },
  {
    title: "Blockchain & Web3",
    description: "Exploring decentralized applications and wallet integration.",
    icon: <SiEthereum />,
    skills: [
      { name: "Ethers.js", icon: <SiEthereum /> },
      { name: "Web3.js", icon: <SiWeb3Dotjs /> },
      { name: "MetaMask", icon: <FaCode /> },
      { name: "WalletConnect", icon: <FaCode /> },
      { name: "Blockchain RPC APIs", icon: <SiEthereum /> },
    ],
  },
  {
    title: "Tools & Design",
    description: "Tools that support my everyday development workflow.",
    icon: <FaWandMagicSparkles />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Syncfusion", icon: <FaCode /> },
      { name: "Material UI", icon: <FaCode /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
  {
    title: "AI & Productivity",
    description: "Using AI tools to improve development and productivity.",
    icon: <FaWandMagicSparkles />,
    skills: [
      { name: "Google Gemini", icon: <FaWandMagicSparkles /> },
      { name: "ChatGPT", icon: <FaWandMagicSparkles /> },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* SECTION HEADING */}
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills-eyebrow">MY TECHNICAL EXPERTISE</span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies, frameworks and tools I use to
            develop modern digital experiences.
          </p>
        </motion.div>

        {/* SKILL CATEGORIES */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-category-card"
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.1,
              }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {category.icon}
                </div>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className="skill-items">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-item-icon">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
