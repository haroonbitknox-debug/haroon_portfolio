import bitknox from '../../../public/bit_intern.png'
import bits from '../../../public/bits.pdf'
import bano_qabil from '../../../public/bano_qabil.png'
function Resume() {
  return (
  
   <>
      <div className="container my-5 ">
  <div className="row g-4 justify-content-center">

    {/* Card 1 */}
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card h-100 shadow-sm border-0 bg-dark text-white">
        <img 
          src={bitknox} 
          className="card-img-top " 
          alt="Bitknox"
          style={{ height: "80%", objectFit: "cover" }}
        />
        <div className="card-body text-center ">
          <h5 className="card-title">
            Full Stack Developer 
            <span className="text-light fs-6 d-block">(Bitknox Global)</span>
          </h5>
          <hr />
          <p className="card-text small">
            Developed HR module CRUD system using React.js & Laravel, including dashboards for attendance and company stats.
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card h-100 shadow-sm border-0 bg-dark text-white">
        <img 
          src={bano_qabil} 
          className="card-img-top p-1" 
          alt="Bano Qabil"
          style={{ height: "80%", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">
            React Js Developer 
            <span className="text-light fs-6 d-block">(Alkhidmat Foundation)</span>
          </h5>
          <hr />
          <p className="card-text small">
            Built portfolio and multiple projects using React with API integrations and modern UI design.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card h-100 shadow-sm border-0 bg-dark text-white">
        <iframe
          src={bits}
          title="BITS Document"
          className="card-img-top p-1"
          style={{ height: "80%", width: "100%", border: "none" }}
        ></iframe>
        <div className="card-body text-center">
          <h5 className="card-title">
            Laravel Developer 
            <span className="text-light fs-6 d-block">(Business Innovation and Tech Solution)</span>
          </h5>
          <hr />
          <p className="card-text small">
            Developed RESTful APIs for Anchorage Islamabad admin system to manage resident complaints and statuses.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
   </>
  )
}

export default Resume
