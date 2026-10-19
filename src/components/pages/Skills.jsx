import { FaBrain, FaComments, FaDatabase, FaRobot } from "react-icons/fa6";
import {
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGooglegemini,
  SiHuggingface,
  SiLangchain,
  SiNumpy,
  SiPandas,
  SiStreamlit,
} from "react-icons/si";

import js from "../../assets/js.svg";
import php from "../../assets/php.png";
import laravel from "../../assets/laravel.png";
import python from "../../assets/python.jfif";
import node from "../../assets/node.png";
import claude from "../../assets/claude.png";
import django from "../../assets/django.png";
import mongo from "../../assets/mongo.png";
import mysql from "../../assets/mysql.png";
import postman from "../../assets/postman.png";
import github from "../../assets/github.svg";
import firebase from "../../assets/firebase.svg";
import tailwind from "../../assets/tailwind.svg";
import graphql from "../../assets/graphql.svg";
import npm from "../../assets/npm.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import html from "../../assets/html.svg";
import pnpm from "../../assets/pnpm.svg";
import materialui from "../../assets/materialui.svg";
import css from "../../assets/css.svg";
import jquery from "../../assets/jquery.svg";
import bootstrap from "../../assets/bootstrap.svg";
import sass from "../../assets/sass.svg";
import sql from "../../assets/sql.svg";

// Each skill has either an image (img) or a react-icons component (Icon).
const GROUPS = [
  {
    title: "AI & LLMs",
    icon: <FaRobot />,
    skills: [
      { name: "LangChain", Icon: SiLangchain },
      { name: "RAG pipelines", Icon: FaBrain },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Gemini API", Icon: SiGooglegemini },
      { name: "Claude", img: claude },
      { name: "Hugging Face", Icon: SiHuggingface },
      { name: "Vector databases", Icon: FaDatabase },
      { name: "NLP", Icon: FaComments },
      { name: "Machine learning", Icon: FaBrain },
      { name: "Agentic AI", Icon: FaRobot },
      { name: "Streamlit", Icon: SiStreamlit },
      { name: "Flask", Icon: SiFlask },
      { name: "NumPy", Icon: SiNumpy },
      { name: "Pandas", Icon: SiPandas },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", img: html },
      { name: "CSS", img: css },
      { name: "JavaScript", img: js },
      { name: "React", img: react },
      { name: "Redux", img: redux },
      { name: "Tailwind", img: tailwind },
      { name: "Bootstrap", img: bootstrap },
      { name: "SASS", img: sass },
      { name: "Material UI", img: materialui },
      { name: "jQuery", img: jquery },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", img: python },
      { name: "Laravel", img: laravel },
      { name: "PHP", img: php },
      { name: "Node JS", img: node },
      { name: "Django", img: django },
      { name: "GraphQL", img: graphql },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", img: mysql },
      { name: "MongoDB", img: mongo },
      { name: "SQL", img: sql },
      { name: "Firebase", img: firebase },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", img: github },
      { name: "Docker", Icon: SiDocker },
      { name: "Postman", img: postman },
      { name: "NPM", img: npm },
      { name: "PNPM", img: pnpm },
    ],
  },
];

function Skills() {
  return (
    <div className="container page-section">
      <div className="page-head">
        <h1 className="section-title">
          My Super Powers <span className="dot">.</span>
        </h1>
        <p className="page-lead">
          The tools I use to build web apps and AI products.
        </p>
      </div>

      <div className="skill-groups">
        {GROUPS.map((g) => (
          <section className="panel skill-group" key={g.title}>
            <h2>
              {g.icon && <span className="icon-box">{g.icon}</span>}
              {g.title}
            </h2>
            <ul className="skill-list">
              {g.skills.map(({ name, img, Icon }) => (
                <li className="skill" key={name}>
                  {img ? (
                    <img src={img} alt="" className="tech-logo" />
                  ) : (
                    <Icon aria-hidden="true" />
                  )}
                  {name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Skills;
