import "bootstrap/dist/css/bootstrap.min.css";
import { FaStackExchange } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhone, FaHouse, FaBars, FaXmark, FaGithub } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Other_Projects from "./pages/Other_Projects";
import Company_Projects from "./pages/Company_Projects";
import JS_Projects from "./pages/JS_Projects";
import Python_Projects from "./pages/Python_Projects";
import AI_Projects from "./pages/AI_Projects";
import ChatWidget from "./ChatWidget";
import ParticlesBackground from "./ParticlesBackground";
import { SITE } from "../siteConfig";
import "../style.css";

// Scroll to the top whenever the page changes.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // braces on purpose: an effect must not return anything but a cleanup function
  }, [pathname]);
  return null;
}

const NAV = [
  { to: "/", label: "Home", icon: <FaHouse /> },
  // { to: "/about", label: "About", icon: <FaInfoCircle /> },
  { to: "/resume", label: "Experience", icon: <FaUser /> },
  { to: "/skills", label: "Skills", icon: <ImPower /> },
  { to: "/projects", label: "Projects", icon: <FaStackExchange /> },
  { to: "/contact", label: "Contact", icon: <FaPhone /> },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <ScrollToTop />
      {SITE.background === "particles" && <ParticlesBackground />}

      <div className="d-flex flex-column min-vh-100">
        {/* HEADER */}
        <header className="navbar-container-fluid sticky-top">
          <div className="navbar-content container d-flex justify-content-between align-items-center">
            <button
              type="button"
              className="icon-btn hamburger d-lg-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>

            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
              {NAV.map((item) => (
                <NavLink key={item.to} to={item.to} className="nav-item" onClick={() => setMenuOpen(false)}>
                  {item.label} {item.icon}
                </NavLink>
              ))}
            </nav>

            <div className="nav-actions">
              <a
                className="icon-btn"
                href="https://github.com/haroonbitknox-debug"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-projects" element={<AI_Projects />} />
            <Route path="/other-projects" element={<Other_Projects />} />
            <Route path="/company-projects" element={<Company_Projects />} />
            <Route path="/javascript-projects" element={<JS_Projects />} />
            <Route path="/python-projects" element={<Python_Projects />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="p-3 text-center">
          <b className="footer-accent">© 2026 </b>
          <b>Haroon Ali. All Rights Reserved.</b>
        </footer>

        <ChatWidget />
      </div>
    </Router>
  );
}

export default Portfolio;
