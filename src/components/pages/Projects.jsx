

function Projects() {
  return (
    <div>
<div className="m-5 py-3 text-center">
        <h1 className="fw-bold my-3">
          My Projects <b className="text-warning">.</b>
        </h1>


        <button className="btn  btn-info my-2 p-4 w-25 fw-bold fs-5">
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
        </button>


      </div>
    </div>
  )
}

export default Projects
