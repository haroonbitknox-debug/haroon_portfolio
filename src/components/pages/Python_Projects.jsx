import React from 'react'

function Python_Projects() {
  return (
   <div className='container mt-5'>
  <h2 className="text-center fw-bold mb-4">
    Python Projects <span className="text-warning">.</span>
  </h2>

  <div className="card bg-light text-dark py-5 mt-5 shadow-lg border-rounded text-center d-flex align-items-center justify-content-center">
    
    <h2 className="fw-bold">Core Python Projects</h2>

    <h5 className="my-3 px-3">
      I have made 15+ basic projects using core Python with notes and code available for download.
    </h5>

    <a 
      href="/python-projects.zip"
      download
      className="btn btn-dark p-3 mt-3"
    >
      Download Project Folder
    </a>

  </div>
</div>
  )
}

export default Python_Projects
