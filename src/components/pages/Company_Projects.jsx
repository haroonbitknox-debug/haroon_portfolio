import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const PROJECTS = [
  {
    title: "HR Management System",
    org: "Bitknox Global (internship)",
    text: "Designed and built the HR module: online attendance tracking, leave management, and employee CRUD that only HR can access. React frontend with Laravel APIs and MySQL.",
    tags: ["React", "Laravel", "MySQL"],
  },
  {
    title: "Bitknox Global Website",
    org: "Bitknox Global",
    text: "Designed the Figma UI for the landing page of the company website.",
    tags: ["Figma", "UI design"],
    href: "https://bitknoxltd.com/",
  },
  {
    title: "Business Innovation and Tech Solutions Website",
    org: "BITS",
    text: "Optimized the company's main website, mostly the Laravel backend.",
    tags: ["Laravel", "Performance"],
    href: "https://bitsolution.tech/home",
  },
  {
    title: "Anchorage Islamabad Website and Admin App APIs",
    org: "BITS",
    text: "Cut the housing society website's load time from 5s to 2s and upgraded it from Laravel 8 to 10. Delivered 20+ REST APIs for the admin mobile app, plus complaint management, picture upload and bill payment modules.",
    tags: ["Laravel 10", "REST APIs", "MySQL"],
    href: "https://anchorageislamabad.com/",
  },
];

function Company_Projects() {
  return (
    <div className="container page-section">
      <div className="page-head">
        <h1 className="section-title">
          Company Projects <span className="dot">.</span>
        </h1>
      </div>
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <article className="project-card" key={p.title}>
            <h3>{p.title}</h3>
            <p className="kicker">{p.org}</p>
            <p>{p.text}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li className="tag" key={t}>{t}</li>
              ))}
            </ul>
            {p.href && (
              <div className="card-actions">
                <a className="btn-cta primary small" href={p.href} target="_blank" rel="noreferrer">
                  View Project <FaArrowUpRightFromSquare />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Company_Projects;
