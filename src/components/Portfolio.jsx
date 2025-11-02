import "bootstrap/dist/css/bootstrap.min.css";
import github from "../assets/github.svg";
import { FaStackExchange } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { FaHouse } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Resume from './pages/Resume'
import '../../src/style.css'
import { useState } from "react";

function Portfolio() {
const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* HEADER */}
        <header className="navbar-container-fluid sticky-top bg-white shadow-lg p-3 ">
        <div className="navbar-content container d-flex justify-content-between align-items-center ">

        {/* Hamburger Icon (visible on mobile) */}
        <div className="hamburger d-lg-none" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="fs-3 text-dark" />
        </div>

          <nav className={`nav-links align-items-center flex-wrap ${menuOpen ? "open" : ""}`}>



          <NavLink to="/" className="nav-item px-5 mx-2" onClick={() => setMenuOpen(false)}>Home <FaHouse  /></NavLink>
          <NavLink to="/about" className="nav-item px-5 mx-2" onClick={() => setMenuOpen(false)}>About <FaInfoCircle  /></NavLink>
          <NavLink to="/resume" className="nav-item px-5 mx-2" onClick={() => setMenuOpen(false)}>Resume <FaUser  /></NavLink>
          <NavLink to="/skills" className="nav-item px-5 mx-2" onClick={() => setMenuOpen(false)}>Skills <ImPower  /></NavLink>
          <NavLink to="/projects" className="nav-item px-5 mx-2" onClick={() => setMenuOpen(false)}>Projects <FaStackExchange className="mx-1" /></NavLink>
          <NavLink to="/contact" className="nav-item" onClick={() => setMenuOpen(false)}>Contact <FaPhone  /></NavLink>
        </nav>

        {/* GitHub Icon */}
        <a href="https://github.com/haroonbitknox-debug" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="github-icon" />
        </a>
      </div>
</header>


        {/* MAIN CONTENT */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-white text-white p-3 text-center shadow-lg">
          <b className="text-danger">© 2025 </b>
          <b className="text-dark">All Rights Reserved.</b>
        </footer>
      </div>
    </Router>
  );
}


export default Portfolio;
