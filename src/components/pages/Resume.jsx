import { FaChalkboardUser, FaRobot } from "react-icons/fa6";

// Media is optional: use `image` for a photo, or `icon` for a placeholder.
const EXPERIENCE = [
  {
    role: "AI Engineering Program",
    org: "HCCDA-AI, NAVTTC at UET",
    text: "Building RAG pipelines, LangChain and FastAPI services, plus ML, NLP and computer vision projects. Currently enrolled.",
    icon: <FaRobot />,
  },
  {
    role: "Instructor (AI with Python)",
    org: "Brains College",
    text: "Taught 40+ lectures from core Python and OOP to NumPy, Pandas and Flask, and guided students to build and deploy Gemini chatbots on Vercel.",
    icon: <FaChalkboardUser />,
  },
  {
    role: "Full Stack Developer",
    org: "Bitknox Global",
    text: "Built the HR management module with React and Laravel: attendance tracking, leave management, HR-only employee CRUD and dashboards for attendance and company stats.",
    image: "/bitknox.PNG",
  },
  {
    role: "Laravel Developer",
    org: "Business Innovation and Tech Solutions",
    text: "Delivered 20+ RESTful APIs for the Anchorage Islamabad admin app, including complaint management with department-based notifications, and cut the website load time from 5s to 2s.",
    image: "/bits-preview.png",
    link: { href: "/bits.pdf", label: "View document" },
  },
  {
    role: "React Js Developer",
    org: "Alkhidmat Foundation (Bano Qabil)",
    text: "Built this portfolio and multiple projects using React with API integrations and modern UI design, and won first position in the course.",
    image: "/banoqabil.jpeg",
  },
];

function Resume() {
  return (
    <div className="container page-section">
      <div className="page-head">
        <h1 className="section-title">
          Experience <span className="dot">.</span>
        </h1>
        <p className="page-lead">Where I've worked, taught and learned.</p>
      </div>

      <div className="xp-grid">
        {EXPERIENCE.map((x) => (
          <article className="xp-card" key={x.role + x.org}>
            {x.image ? (
              <img className="xp-media" src={x.image} alt={x.org} loading="lazy" />
            ) : (
              <div className="xp-media icon" aria-hidden="true">{x.icon}</div>
            )}
            <div className="xp-body">
              <h3>{x.role}</h3>
              <p className="xp-org">{x.org}</p>
              <p>{x.text}</p>
              {x.link && (
                <a href={x.link.href} target="_blank" rel="noopener noreferrer">
                  {x.link.label} →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Resume;
