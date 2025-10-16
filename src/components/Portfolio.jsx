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
import '../../src/style.css'


function Portfolio() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* HEADER */}
        <header className="container-fluid sticky-top bg-white shadow-lg py-3 ">
  <nav className="container d-flex justify-content-center align-items-center flex-wrap">
    <Link to="/" className="text-dark fw-bold text-decoration-none mx-3 d-flex align-items-center px-4 link-hover">
      Home <FaHouse className="mx-1 fs-5" />
    </Link>

    <Link to="/about" className="text-dark fw-bold text-decoration-none mx-3 d-flex align-items-center px-4 link-hover">
      About <FaInfoCircle className="mx-1 fs-5" />
    </Link>

    <Link to="/resume" className="text-dark fw-bold text-decoration-none mx-3 d-flex align-items-center px-4 link-hover">
      Resume <FaUser className="mx-1 fs-5" />
    </Link>

    <Link to="/skills" className="text-dark fw-bold text-decoration-none mx-3 d-flex align-items-center px-4 link-hover">
      Skills <ImPower className="mx-1 fs-5" />
    </Link>

    <Link to="/projects" className="text-dark fw-bold text-decoration-none mx-3 d-flex align-items-center px-4 link-hover">
      Projects <FaStackExchange className="mx-1 fs-5" />
    </Link>

    <Link to="/contact" className="text-dark fw-bold text-decoration-none mx-3 d-flex align-items-center px-4 link-hover">
      Contact <FaPhone className="mx-1 fs-5" />
    </Link>

    <a
      href="https://github.com/haroonbitknox-debug"
      target="_blank"
      rel="noopener noreferrer"
      className="d-flex align-items-center mx-3 px-4"
    >
      <img src={github} alt="GitHub" style={{ width: "35px" }} />
    </a>
  </nav>
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
