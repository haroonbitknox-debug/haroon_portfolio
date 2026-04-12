import { MdDownload } from "react-icons/md";

function JS_Projects() {
  return (
            <div className='container mt-5'>
  <h2 className="text-center fw-bold mb-4">
    Javascript Projects <span className="text-warning">.</span>
  </h2>

  <div className="card bg-light text-dark py-5 mt-5 shadow-lg border-rounded text-center d-flex align-items-center justify-content-center">
    
    <h2 className="fw-bold">Core Javascript Projects</h2>

    <h5 className="my-3 px-3">
      I have made 15+ basic to advance level projects using core Javascript with notes and code available for download.
    </h5>

<div className="d-flex gap-3">
    
    
    <a 
      href="/website.zip"
      
      download
      className="btn btn-dark p-3 mt-3"
    >
      <MdDownload /> Projects 
    </a>

    <a 
      href="/javascript-projects.zip"
      
      download
      className="btn btn-dark p-3 mt-3"
    >
      <MdDownload /> E-Notes
    </a>

    
</div>
  </div>
</div>
  )
}

export default JS_Projects
