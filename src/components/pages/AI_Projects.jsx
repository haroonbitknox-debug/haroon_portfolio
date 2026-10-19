import { FaArrowUpRightFromSquare, FaBrain, FaChalkboardUser } from "react-icons/fa6";
import ProjectCard from "../ProjectCard";
import { AI_PROJECTS, AI_TOPICS, STUDENT_BOTS } from "../../data/aiProjects";

function AI_Projects() {
  return (
    <div className="container page-section">
      <div className="page-head">
        <h1 className="section-title">
          AI Projects <span className="dot">.</span>
        </h1>
        <p className="page-lead">
          From Gemini chatbots to RAG systems served through FastAPI. Everything here is built,
          deployed and ready to try.
        </p>
      </div>

      <div className="project-grid">
        {AI_PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <div className="stack">
        <section className="panel">
          <h3 className="d-flex align-items-center gap-2">
            <FaBrain className="text-accent" /> What I'm learning in HCCDA-AI
          </h3>
          <p>
            I'm completing the HCCDA-AI program (NAVTTC, at UET). These are the topics I've worked
            through and built with.
          </p>
          <div className="topic-cloud">
            {AI_TOPICS.map((t) => (
              <span className="topic" key={t}>{t}</span>
            ))}
          </div>
        </section>

        <section className="panel">
          <h3 className="d-flex align-items-center gap-2">
            <FaChalkboardUser className="text-accent" /> Built by my students
          </h3>
          <p>
            At Brains College I taught 40+ lectures on AI with Python. My students built and
            deployed their own chatbots on Vercel using the same approach.
          </p>
          <div className="student-bots">
            {STUDENT_BOTS.map((b) => (
              <a key={b.name} className="btn-cta ghost small" href={b.href} target="_blank" rel="noopener noreferrer">
                {b.name} <FaArrowUpRightFromSquare />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AI_Projects;
