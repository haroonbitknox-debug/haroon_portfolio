import { FaArrowUpRightFromSquare, FaCalculator, FaCloudSun, FaListCheck } from "react-icons/fa6";

const PROJECTS = [
  { icon: <FaCalculator />, title: "Calculator App", text: "A simple and responsive calculator built using JavaScript with basic arithmetic operations.", href: "https://haroon-calculator.netlify.app/" },
  { icon: <FaCloudSun />, title: "Weather App", text: "A weather forecasting app that fetches real-time data using API and displays it beautifully.", href: "https://haroon-weather.netlify.app/" },
  { icon: <FaListCheck />, title: "ToDo App", text: "A task management app with add, delete, and mark-as-complete functionality.", href: "https://haroon-todo.netlify.app/" },
];

function Other_Projects() {
  return (
    <div className="container page-section">
      <div className="page-head">
        <h1 className="section-title">
          Other Projects <span className="dot">.</span>
        </h1>
      </div>
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <article className="project-card" key={p.title}>
            <span className="icon-box">{p.icon}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <div className="card-actions">
              <a className="btn-cta primary small" href={p.href} target="_blank" rel="noreferrer">
                View Project <FaArrowUpRightFromSquare />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Other_Projects;
