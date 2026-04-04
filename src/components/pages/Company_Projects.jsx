

function Company_Projects() {
  return (
     <div className="container my-5">
  <h2 className="text-center fw-bold mb-4">
    Company Projects <span className="text-warning">.</span>
  </h2>

  <div className="d-flex flex-column gap-4 col-12 col-md-8 mx-auto">

    {/* Project 1 */}
    <div className="card shadow-sm p-3 border-0">
      <h4 className="fw-bold">Bitknox Global</h4>
      <p className="mb-2">
        I designed and developed the Figma design UI of the landing page of this website.
      </p>
      <a 
        href="https://bitknoxltd.com/" 
        target="_blank" 
        rel="noreferrer"
        className="btn btn-info w-100"
      >
        View Project
      </a>
    </div>

    {/* Project 2 */}
    <div className="card shadow-sm p-3 border-0">
      <h4 className="fw-bold">Business Innovation and Tech Solutions</h4>
      <p className="mb-2">
        I optimized the company's main website code mostly backend side developed in laravel. 
      </p>
      <a 
        href="https://bitsolution.tech/home" 
        target="_blank" 
        rel="noreferrer"
        className="btn btn-info w-100"
      >
        View Project
      </a>
    </div>

    {/* Project 3 */}
    <div className="card shadow-sm p-3 border-0">
      <h4 className="fw-bold">Anchorage Islamabad Admin App</h4>
      <p className="mb-2">
        I developed and tested the complete mobile app exclusively designed for anchorage Islamabad admin portal. 
      </p>
      <a 
        href="https://anchorageislamabad.com/" 
        target="_blank" 
        rel="noreferrer"
        className="btn btn-info w-100"
      >
        View Project
      </a>
    </div>

  </div>
</div>
  )
}

export default Company_Projects
