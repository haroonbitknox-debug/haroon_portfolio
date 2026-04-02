import bitknox from '../../../public/bit_intern.png'
import bits from '../../../public/bits.pdf'
import bano_qabil from '../../../public/bano_qabil.png'
function Resume() {
  return (
  
    <>
      <div className="row g-4 m-3">
  
  <div className="col-md-4">
    <div className="card  h-100">
      <img 
        src={bitknox} 
        className="card-img-top" 
        alt="Bitknox"
        style={{ height: "100%", objectFit: "cover" }}
      />
      <div className="card-body">
        <h4 className="card-title">
          Full Stack Developer 
          <span className="text-muted fs-6"> (Bitknox Global)</span>
        </h4>
        <hr />
        <p className="card-text">
          I learned React.js for frontend and PHP Laravel for backend. I developed a complete CRUD system for the HR module and implemented company stats and attendance dashboards using graphs and charts UI.
        </p>
      </div>
    </div>
  </div>

<div className="col-md-4">
    <div className="card shadow-sm h-100">
      <img 
        src={bano_qabil} 
        className="card-img-top" 
        alt="Bitknox"
        style={{ height: "78%", objectFit: "cover" }}
      />
      <div className="card-body">
        <h4 className="card-title">
          React.js Developer 
          <span className="text-muted fs-6"> (Alkhidmat Foundation)</span>
        </h4>
        <hr />
        <p className="card-text">
          I learned React.js for frontend and developed my portfolio website alongwith multiple high-end projects which involves integrating third-party APIs. 
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card h-100 ">
      <iframe
  src={bits}
  title="Bitknox Document"
  className="card-img-top"
  style={{ height: "100%", width: "100%", border: "none" }}
></iframe>
      <div className="card-body">
        <h4 className="card-title">
          Laravel Developer 
          <span className="text-muted fs-6"> (Business Innovation & Tech Solutions)</span>
        </h4>
        <hr />
        <p className="card-text">
          I worked in PHP Laravel as a backend developer where I made RESTful APIs for an admin app for the society "Anchorage Islamabad", where admins can see the complaints of residents and set their current status like pending, assigned and resolved.
        </p>
      </div>
    </div>
  </div>

</div>
      
    </>
  )
}

export default Resume
