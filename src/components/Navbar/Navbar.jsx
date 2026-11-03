
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";

import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import { motion, AnimatePresence } from "motion/react";

import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.mode);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleMobileNavigation = (e, href) => {
    e.preventDefault();

    const targetId = href.substring(1);

    setMenuOpen(false);

    // Wait for the mobile menu to close before scrolling
    setTimeout(() => {
      const target = document.getElementById(targetId);

      if (target) {
        const navbarHeight =
          document.querySelector(".navbar")?.offsetHeight || 70;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight -
          12;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        window.history.replaceState(null, "", href);
      }
    }, 300);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* LOGO */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="logo-bracket">&lt;</span>
          <span>SC</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* DESKTOP NAVIGATION */}

        <nav className="desktop-navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* NAVBAR ACTIONS */}

        <div className="navbar-actions">

          {/* THEME TOGGLE */}

          <motion.button
            className="theme-toggle"
            onClick={handleThemeToggle}
            whileTap={{ scale: 0.85 }}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
            title={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? (
                  <Sun size={19} />
                ) : (
                  <Moon size={19} />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* HIRE BUTTON */}

          <a href="#contact" className="hire-button">
            Let's Talk
            <ArrowUpRight size={16} />
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

        </div>
      </div>

      {/* MOBILE NAVIGATION */}

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
                onClick={(e) =>
                  handleMobileNavigation(e, link.href)
                }
              >
                {link.name}
                <ArrowUpRight size={15} />
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

    </header>
  );
}

export default Navbar;
