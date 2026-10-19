import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaDownload,
  FaGraduationCap,
  FaHandPeace,
  FaLinkedin,
  FaRobot,
  FaSchool,
  FaTrophy,
} from "react-icons/fa6";
import Typewriter from "../Typewriter";
import ProjectCard from "../ProjectCard";
import { AI_PROJECTS, openChat } from "../../data/aiProjects";
import cv from "../../../public/cv.pdf";
import dp from "../../assets/dp3.jpeg";
import edu from "../../assets/edu.png";
import story from "../../assets/story.png";
import qasimPhoto from "../../assets/qasim-ali-shah.jpeg";

const ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "AI Engineer",
  "AI Automation",
  "Chatbots",
];

const STATS = [
  { value: "2+", label: "Years of experience" },
  { value: "20+", label: "REST APIs delivered" },
  { value: "5s → 2s", label: "Site load time" },
];

const EDUCATION = [
  {
    icon: <FaGraduationCap />,
    title: "Bachelor's of Science (Computer Science)",
    detail: "Virtual University of Pakistan, 2026",
  },
  {
    icon: <FaBookOpen />,
    title: "Intermediate (FSc. Pre-Engineering)",
    detail: "Aspire Group of Colleges, 2021",
  },
  {
    icon: <FaSchool />,
    title: "Matric (Computer Science)",
    detail: "Govt. Comprehensive Higher Secondary School, 2019",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <div className="hello-row fade-up">
            <img className="avatar" src={dp} alt="" />
            <p className="hero-hello">
              <FaHandPeace /> Hey, I am
            </p>
          </div>
          <h1 className="hero-name fade-up" style={{ "--d": "0.08s" }}>
            Haroon <span>Ali</span>
          </h1>
          <div className="hero-role fade-up" style={{ "--d": "0.16s" }}>
            <Typewriter words={ROLES} />
          </div>
          <p className="hero-copy fade-up" style={{ "--d": "0.24s" }}>
            I build full-stack web apps with React, Laravel and the MERN stack,
            and AI products like RAG chatbots with Python, LangChain and
            FastAPI.
          </p>

          <div className="btn-row fade-up" style={{ "--d": "0.32s" }}>
            <button
              type="button"
              className="btn-cta primary"
              onClick={openChat}
            >
              <FaRobot /> Ask my AI assistant
            </button>
            <a className="btn-cta ghost" href={cv} download>
              <FaDownload /> Download CV
            </a>
            <a
              className="btn-cta ghost icon"
              href="https://www.linkedin.com/in/haroon-ali-02266b236"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin /> <span className="label">LinkedIn</span>
            </a>
          </div>

          <div className="stats fade-up" style={{ "--d": "0.4s" }}>
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <figure className="hero-achievement fade-up" style={{ "--d": "0.2s" }}>
          <img
            src={qasimPhoto}
            alt="Teacher Award plaque held by Haroon Ali and Qasim Ali Shah"
          />
          <figcaption>
            <span>
              <FaTrophy /> AI Instructor Award
            </span>
            <strong>With Qasim Ali Shah</strong>
          </figcaption>
        </figure>
      </section>

      {/* AI WORK */}
      <section className="container page-section reveal">
        <div className="head-row">
          <h2 className="section-title">
            AI Projects <span className="dot">.</span>
          </h2>
          <Link className="btn-cta ghost small" to="/ai-projects">
            See all AI work <FaArrowRight />
          </Link>
        </div>
        <div className="project-grid">
          {AI_PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={{ ...p, featured: false }} />
          ))}
        </div>
      </section>

      {/* QUALIFICATION */}
      <section className="container page-section reveal">
        <h2 className="section-title">
          Qualification <span className="dot">.</span>
        </h2>
        <div className="split">
          <div className="illus-frame">
            <img src={edu} alt="Education illustration" />
          </div>
          <div className="edu-list">
            {EDUCATION.map((e) => (
              <div className="edu-card" key={e.title}>
                <span className="icon-box">{e.icon}</span>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section className="container page-section reveal">
        <div className="split reverse">
          <div>
            <h2 className="section-title">
              My Story <span className="dot">.</span>
            </h2>
            <div className="story-text">
              <p>
                I’m Haroon Ali, a full-stack developer and Computer Science
                graduate who is moving into AI engineering. I build web apps
                with React and Laravel, and AI products such as RAG chatbots
                with Python, LangChain and FastAPI. I’m currently completing the
                HCCDA-AI program at UET.
              </p>
              <p>
                Beyond coding, I’m also enjoying my hobbies, where I aim to
                always remain fit. Reading financial books and gaining knowledge
                about the stock exchange is my passion. I love music, and guitar
                has been my friend for over 4 years now. I believe in
                maintaining a perfect balance between work, hobbies, and
                learning advanced skills. These give me motivation to keep both
                a healthy lifestyle and a stable professional life.
              </p>
            </div>
          </div>
          <div className="illus-frame">
            <img src={story} alt="My story illustration" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
