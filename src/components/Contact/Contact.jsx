
import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

import "./Contact.css";

const contactDetails = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "chandadeep8@gmail.com",
    link: "mailto:chandadeep8@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 7003668305",
    link: "tel:+917003668305",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Kolkata, West Bengal, India",
    link: null,
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus("");
    setIsSuccess(false);

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Email service configuration is missing.");
      }

      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      setIsSuccess(true);
      setStatus("Message sent successfully! I'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setIsSuccess(false);
      setStatus(
        "Sorry, your message could not be sent. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* SECTION HEADING */}

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-eyebrow">
            LET'S CONNECT
          </span>

          <h2>
            Get In <span>Touch</span>
          </h2>

          <p>
            Have a project in mind, an opportunity, or just
            want to connect? I'd love to hear from you.
          </p>
        </motion.div>

        {/* CONTACT GRID */}

        <div className="contact-grid">

          {/* LEFT SIDE */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's start a conversation</h3>

            <p className="contact-info-description">
              I'm open to discussing new opportunities,
              interesting projects and collaborations.
              Feel free to reach out.
            </p>

            {/* CONTACT DETAILS */}

            <div className="contact-details-list">
              {contactDetails.map((item) => (
                <div
                  className="contact-detail-item"
                  key={item.title}
                >
                  <div className="contact-detail-icon">
                    {item.icon}
                  </div>

                  <div>
                    <span>{item.title}</span>

                    {item.link ? (
                      <a href={item.link}>
                        {item.value}
                      </a>
                    ) : (
                      <strong>{item.value}</strong>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* SOCIAL LINKS */}

            <div className="contact-socials">
              <h4>Find me on</h4>

              <div className="contact-social-links">
                <a
                  href="https://github.com/s0um0brata"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/soumobrata-chanda-51991b244"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTACT FORM */}

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Send me a message</h3>

            <p>
              Fill in the details below and I'll get back to you.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">

                <div className="contact-form-group">
                  <label htmlFor="contact-name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-email">
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={150}
                  />
                </div>

              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={200}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                />
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}

                <FaPaperPlane />
              </button>

              {status && (
                <p
                  className="contact-form-status"
                  role="status"
                  style={{
                    color: isSuccess ? "#16a34a" : "#dc2626",
                  }}
                >
                  {status}
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
