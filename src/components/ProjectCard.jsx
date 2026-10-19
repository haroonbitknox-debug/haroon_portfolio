import { FaArrowUpRightFromSquare, FaRobot } from "react-icons/fa6";
import { openChat } from "../data/aiProjects";

export default function ProjectCard({ project }) {
  const { title, tagline, description, tags, links = [], featured } = project;
  return (
    <article className={`project-card${featured ? " featured" : ""}`}>
      <span className="icon-box"><FaRobot /></span>
      <h3>{title}</h3>
      {tagline && <p className="kicker">{tagline}</p>}
      <p>{description}</p>
      <ul className="tags">
        {tags.map((t) => (
          <li className="tag" key={t}>{t}</li>
        ))}
      </ul>
      <div className="card-actions">
        {links.map((l, i) =>
          l.action === "chat" ? (
            <button key={l.label} type="button" className="btn-cta primary small" onClick={openChat}>
              <FaRobot /> {l.label}
            </button>
          ) : (
            <a
              key={l.label}
              className={`btn-cta small ${i === 0 ? "primary" : "ghost"}`}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label} <FaArrowUpRightFromSquare />
            </a>
          )
        )}
      </div>
    </article>
  );
}
