import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

function Python_Projects() {
  return (
    <div className="container page-section">
      <div className="page-head">
        <h1 className="section-title">
          Python Projects <span className="dot">.</span>
        </h1>
      </div>
      <div className="download-card">
        <h2>Core Python Projects</h2>
        <p>I have made 15+ basic projects using core Python with notes and code available for download.</p>
        <div className="btn-row">
          <a href="/python-projects.zip" download className="btn-cta primary">
            <MdDownload /> Download Project Folder
          </a>
          <Link to="/ai-projects" className="btn-cta ghost">
            See my AI projects <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Python_Projects;
