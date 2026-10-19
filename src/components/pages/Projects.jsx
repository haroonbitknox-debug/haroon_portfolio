import { Link } from "react-router-dom";
import { FaArrowRight, FaRobot } from "react-icons/fa6";
import python from "../../assets/python_project.svg";
import js from "../../assets/js_project.svg";
import gear from "../../assets/gear.svg";
import code from "../../assets/code.svg";

const HUBS = [
  { to: "/python-projects", icon: python, title: "Python Projects", text: "15+ core Python projects with notes and code to download." },
  { to: "/javascript-projects", icon: js, title: "Javascript Projects", text: "15+ core JavaScript projects with code and e-notes." },
  { to: "/company-projects", icon: gear, title: "Company Projects", text: "HR system, housing society website and mobile app APIs." },
  { to: "/other-projects", icon: code, title: "Other Projects", text: "Calculator, weather and todo apps built with React." },
];

function Projects() {
  return (
    <div className="container page-section">
      <div className="page-head">
        <h1 className="section-title">
          My Projects <span className="dot">.</span>
        </h1>
        <p className="page-lead">Pick a category to explore.</p>
      </div>

      <div className="hub-grid">
        <Link to="/ai-projects" className="hub-card ai">
          <span className="icon-box"><FaRobot /></span>
          <h3>AI Projects</h3>
          <p>RAG chatbots, Gemini assistants and my portfolio AI built with LangChain and FastAPI.</p>
          <span className="go">Explore <FaArrowRight /></span>
        </Link>
        {HUBS.map((h) => (
          <Link key={h.to} to={h.to} className="hub-card">
            <img src={h.icon} alt="" />
            <h3>{h.title}</h3>
            <p>{h.text}</p>
            <span className="go">Explore <FaArrowRight /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
