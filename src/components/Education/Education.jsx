
import { motion } from "motion/react";

import {
  FaGraduationCap,
  FaBookOpen,
  FaSchool,
  FaCalendarAlt,
  FaUniversity,
  FaAward,
} from "react-icons/fa";

import "./Education.css";

const educationList = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    specialization: "Computer Science & Engineering",
    institution: "Budge Budge Institute of Technology",
    year: "2019 – 2022",
    score: "9.0 CGPA",
    scoreLabel: "Academic Performance",
    icon: <FaGraduationCap />,
    level: "Undergraduate",
  },
  {
    id: 2,
    degree: "Diploma",
    specialization: "Computer Science & Technology",
    institution: "Budge Budge Institute of Technology",
    year: "2016 – 2019",
    score: "6.8 CGPA",
    scoreLabel: "Academic Performance",
    icon: <FaBookOpen />,
    level: "Diploma",
  },
  {
    id: 3,
    degree: "ICSE – Class 10",
    specialization: "Secondary Education",
    institution: "National Gems Higher Secondary School",
    year: "2016",
    score: "60%",
    scoreLabel: "Academic Performance",
    icon: <FaSchool />,
    level: "School",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        {/* SECTION HEADING */}

        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="education-eyebrow">
            MY ACADEMIC BACKGROUND
          </span>

          <h2>
            Education & <span>Qualifications</span>
          </h2>

          <p>
            My academic journey and educational foundation
            in computer science and engineering.
          </p>
        </motion.div>

        {/* EDUCATION TIMELINE */}

        <div className="education-timeline">

          {educationList.map((item, index) => (
            <motion.article
              className="education-card"
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
            >

              {/* EDUCATION ICON */}

              <div className="education-icon">
                {item.icon}
              </div>

              {/* EDUCATION CONTENT */}

              <div className="education-content">

                <div className="education-card-top">
                  <span className="education-level">
                    {item.level}
                  </span>

                  <span className="education-year">
                    <FaCalendarAlt />
                    {item.year}
                  </span>
                </div>

                <h3>{item.degree}</h3>

                <h4>{item.specialization}</h4>

                <div className="education-institution">
                  <FaUniversity />
                  <span>{item.institution}</span>
                </div>

                <div className="education-score">
                  <FaAward />

                  <div>
                    <strong>{item.score}</strong>
                    <span>{item.scoreLabel}</span>
                  </div>
                </div>

              </div>
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;
