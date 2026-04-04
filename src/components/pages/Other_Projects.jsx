
function Other_Projects() {
  return (
    <div className="container my-5">
  <h2 className="text-center fw-bold mb-4">
    Other Projects <span className="text-warning">.</span>
  </h2>

  <div className="d-flex flex-column gap-4 col-12 col-md-8 mx-auto">

    {/* Project 1 */}
    <div className="card shadow-sm p-3 border-0">
      <h4 className="fw-bold">🧮 Calculator App</h4>
      <p className="mb-2">
        A simple and responsive calculator built using JavaScript with basic arithmetic operations.
      </p>
      <a 
        href="https://haroon-calculator.netlify.app/" 
        target="_blank" 
        rel="noreferrer"
        className="btn btn-info w-100"
      >
        View Project
      </a>
    </div>

    {/* Project 2 */}
    <div className="card shadow-sm p-3 border-0">
      <h4 className="fw-bold">🌈 Weather App</h4>
      <p className="mb-2">
        A weather forecasting app that fetches real-time data using API and displays it beautifully.
      </p>
      <a 
        href="https://haroon-weather.netlify.app/" 
        target="_blank" 
        rel="noreferrer"
        className="btn btn-info w-100"
      >
        View Project
      </a>
    </div>

    {/* Project 3 */}
    <div className="card shadow-sm p-3 border-0">
      <h4 className="fw-bold">📝 ToDo App</h4>
      <p className="mb-2">
        A task management app with add, delete, and mark-as-complete functionality.
      </p>
      <a 
        href="https://haroon-todo.netlify.app/" 
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

export default Other_Projects
