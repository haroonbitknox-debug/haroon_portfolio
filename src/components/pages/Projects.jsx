import python from '../../assets/python_project.svg'
import js from '../../assets/js_project.svg'
import gear from '../../assets/gear.svg'
import code from '../../assets/code.svg'

import { Link } from "react-router-dom";



function Projects() {
  return (
    <div className="container my-5 text-center">
  <h1 className="fw-bold my-5">
    My Projects <span className="text-warning">.</span>
  </h1>

  <div className="d-grid gap-5 col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">

    <Link
    to="/python-projects"
    className='btn btn-info fw-bold d-flex align-items-center justify-content-center fs-5'>
      <img src={python} alt="Python" className="me-2" style={{ width: "40px" }} />
      Python Projects
    </Link>
    <Link 
      to="/javascript-projects" 
      
      className="btn btn-info fw-bold d-flex align-items-center justify-content-center fs-5"
    >
      <img src={js} alt="Javascript" className="me-2" style={{ width: "40px" }} />
      Javascript Projects
    </Link>

    <Link 
      to="/company-projects" 
      
      className="btn btn-info fw-bold d-flex align-items-center justify-content-center fs-5"
    >
      <img src={gear} alt="Other" className="me-2" style={{ width: "40px" }} />
      Company Projects
    </Link>

    <Link 
      to="/other-projects" 
      
      className="btn btn-info fw-bold d-flex align-items-center justify-content-center fs-5"
    >
      <img src={code} alt="Other" className="me-2" style={{ width: "40px" }} />
      Other Projects
    </Link>

  </div>
</div>
  )
}

export default Projects
