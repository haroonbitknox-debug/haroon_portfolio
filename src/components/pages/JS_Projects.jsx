import { MdDownload } from "react-icons/md";

function JS_Projects() {
  return (
    <div className="container page-section">
      <div className="page-head">
        <h1 className="section-title">
          Javascript Projects <span className="dot">.</span>
        </h1>
      </div>
      <div className="download-card">
        <h2>Core Javascript Projects</h2>
        <p>I have made 15+ basic to advance level projects using core Javascript with notes and code available for download.</p>
        <div className="btn-row">
          <a href="/javascript-projects.zip" download className="btn-cta ghost">
            <MdDownload /> Projects
          </a>
          {/* the file in /public is named Website.zip (capital W); Vercel is case-sensitive */}
          <a href="/Website.zip" download className="btn-cta ghost">
            <MdDownload /> E-Notes
          </a>
        </div>
      </div>
    </div>
  );
}

export default JS_Projects;
