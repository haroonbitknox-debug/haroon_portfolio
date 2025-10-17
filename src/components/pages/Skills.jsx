

import js from '../../assets/js.svg'
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
function Skills() {
  return (
    <div className="container my-5 p-5">
  <div className="text-center">
    <h1 className="fw-bold py-3 mb-5">
      My Super Powers <b className="text-warning">.</b>
    </h1>

    <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-5">
      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>HTML</b>
        <img src={html} alt="HTML" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>CSS</b>
        <img src={css} alt="CSS" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>JavaScript</b>
        <img src={js} alt="JavaScript" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>React</b>
        <img src={react} alt="React" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>Redux</b>
        <img src={redux} alt="Redux" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>Tailwind</b>
        <img src={tailwind} alt="Tailwind" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>Bootstrap</b>
        <img src={bootstrap} alt="Bootstrap" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>SASS</b>
        <img src={sass} alt="SASS" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>SQL</b>
        <img src={sql} alt="SQL" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>GitHub</b>
        <img src={github} alt="GitHub" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>Firebase</b>
        <img src={firebase} alt="Firebase" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>GraphQL</b>
        <img src={graphql} alt="GraphQL" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>NPM</b>
        <img src={npm} alt="NPM" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>Material UI</b>
        <img src={materialui} alt="Material UI" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>jQuery</b>
        <img src={jquery} alt="jQuery" className="tech-logo" />
      </li>

      <li className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm bg-light">
        <b>PNPM</b>
        <img src={pnpm} alt="PNPM" className="tech-logo" />
      </li>
    </ul>
  </div>
</div>

  )
}

export default Skills

