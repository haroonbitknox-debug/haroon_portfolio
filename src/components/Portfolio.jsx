import "bootstrap/dist/css/bootstrap.min.css";
import github from "../assets/github.svg";
import { FaStackExchange } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { FaHouse } from "react-icons/fa6";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Resume from './pages/Resume'

function Portfolio() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* HEADER */}
        <header className="container-fluid d-flex align-items-center text-center sticky-top bg-white shadow-lg p-3">

          <div className="container">
          <Link to="/" className="text-dark fw-bold link-danger text-decoration-none mx-5">
            Home <FaHouse className="mx-1 fs-5" />
          </Link>

          <Link to="/about" className="text-dark fw-bold link-danger text-decoration-none mx-5">
            About <FaInfoCircle className="mx-1 fs-5" />
          </Link>

          <Link to="/resume" className="text-dark fw-bold link-danger text-decoration-none mx-5">
            Resume <FaUser className="mx-1 fs-5" />
          </Link>

          <Link to="/skills" className="text-dark fw-bold link-danger text-decoration-none mx-5">
            Skills <ImPower className="mx-1 fs-5" />
          </Link>

          <Link to="/projects" className="text-dark fw-bold link-danger text-decoration-none mx-5">
            Projects <FaStackExchange className="mx-1 fs-5" />
          </Link>

          <Link to="/contact" className="text-dark fw-bold link-danger text-decoration-none mx-5">
            Contact <FaPhone className="mx-1 fs-5" />
          </Link>

          <a href="https://github.com/haroonbitknox-debug" target="_blank" rel="noopener noreferrer">
            <img src={github} className="px-5" />
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
        <footer className="bg-white  text-white p-3 text-center shadow-lg">
          <b className="text-danger">© 2025 </b>
          <b className="text-dark">All Rights Reserved.</b>
        </footer>
      </div>
    </Router>
  );
}


export default Portfolio;
