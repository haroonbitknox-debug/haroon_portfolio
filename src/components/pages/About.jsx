import { FaDownload, FaHandPeace, FaLinkedin } from "react-icons/fa6";
import cv from "../../../public/cv.pdf";

const FOCUS = [
  {
    title: "Web apps",
    text: "Responsive, fast interfaces and full products built with React, Laravel and the MERN stack.",
  },
  {
    title: "APIs and backends",
    text: "Clean REST APIs, role-based access, database design and performance tuning.",
  },
  {
    title: "AI and chatbots",
    text: "RAG assistants and chatbots built with Python, LangChain, FastAPI and Gemini.",
  },
];

function About() {
  return (
    <section className="container page-section">
      <div className="about-card fade-up">
        <span className="eyebrow">About me</span>
        <h1 className="section-title">
          <FaHandPeace className="title-icon" />
          Hey, I am Haroon <span className="dot">.</span>
        </h1>
        <p className="about-role">Full Stack and AI Developer</p>
        <p className="about-text">
          I'm a full stack developer with 2+ years of experience in{" "}
          <b>MERN, </b>
          <b>Laravel</b> and <b>Python</b>, now building AI products with{" "}
          <b>LangChain, FastAPI</b> and <b>RAG</b>. I'm dedicated to helping you
          build something meaningful that your users will love, and I'm looking
          for opportunities to enhance my skill set and gain valuable
          experience.
        </p>
        <div className="btn-row">
          <a className="btn-cta primary" href={cv} download>
            <FaDownload /> Download CV
          </a>
          <a
            className="btn-cta ghost"
            href="https://www.linkedin.com/in/haroon-ali-02266b236"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <div className="feature-grid">
        {FOCUS.map((f, i) => (
          <div
            className="feature fade-up"
            style={{ "--d": `${0.1 + i * 0.1}s` }}
            key={f.title}
          >
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
