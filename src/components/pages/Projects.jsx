import python from '../../assets/python_project.svg'
import js from '../../assets/js_project.svg'
import gear from '../../assets/gear.svg'
import code from '../../assets/code.svg'

function Projects() {
  return (
    <div>
    <div className="m-5 text-center ">
        <h1 className="fw-bold my-3">
          My Projects <b className="text-warning">.</b>
        </h1>


        <button className="btn  btn-info my-2 p-4 w-25 fw-bold fs-5">
          <img src={python} alt="Python-logo" className="tech-logo " />
          <a
            href="#"
            target="blank"
            className="text-decoration-none text-white mx-2"
          >
            Python Projects
          </a>
        </button> <br />

        <button className="btn  btn-info my-2 p-4 w-25 fw-bold fs-5">
        <img src={js} alt="Javascript-logo" className="tech-logo " />
          <a
            href="#"
            target="blank"
            className="text-decoration-none text-white mx-2"
          >
            JavaScript Projects
          </a>
        </button> <br />

        <button className="btn  btn-info my-2 p-4 w-25 fw-bold fs-5">
        <img src={gear} alt="gear-logo" className="tech-logo " />
          <a
            href="#"
            target="blank"
            className="text-decoration-none text-white mx-2"
          >
            Company Projects
          </a>
        </button> <br />

        <button className="btn  btn-info my-2 p-4 w-25 fw-bold fs-5">
        <img src={code} alt="code-logo" className="tech-logo " />  
          <a
            href="#"
            target="blank"
            className="text-decoration-none text-white mx-2"
          >
            Other Projects
          </a>
        </button> <br />
      

        {/* <button className="btn  btn-info my-2 p-4 w-25 fw-bold fs-5">
          {" "}
          <a
            href="https://haroon-calculator.netlify.app/"
            target="blank"
            className="text-decoration-none text-white"
          >
            🧮 Calculator App
          </a>
        </button> <br />


        <button className="btn  btn-info my-2 p-4 w-25 fw-bold fs-5 ">
          {" "}
          <a
            href="https://haroon-weather.netlify.app/"
            target="blank"
            className="text-decoration-none text-white"
          >
            🌈 Weather App
          </a>{" "}
        </button> <br />


        <button className="btn  btn-info my-2 p-4 w-25 fw-bold fs-5  ">
          {" "}
          <a
            href="https://haroon-todo.netlify.app/"
            target="blank"
            className="text-decoration-none text-white"
          >
            📝 ToDo App
          </a>{" "}
        </button> */}


      </div>
    </div>
  )
}

export default Projects
