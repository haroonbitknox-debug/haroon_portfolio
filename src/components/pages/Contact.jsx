import ContactForm from "./ContactForm"

function Contact() {
  return (

<>
    
   <div className="container mt-5 pt-5">
  <div className="row align-items-start g-4">

    {/* LEFT SIDE */}
    <div className="col-12 col-lg-6">
      <h2 className="fw-bold">
        Interested in working together?
      </h2>

      <h1 className="fw-bold mt-3">
        Lets talk <span className="text-warning">.</span>
      </h1>

      <p className="fs-4 mt-4">
        Looking to partner or work together? Reach out through the following
        platforms and I'll get back to you in the next 24 hours.
      </p>

      {/* Email */}
      <div className="d-flex align-items-center my-3">
        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary mx-2" > <rect width="20" height="15" x="2" y="4" rx="2"></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> </svg>
        <p className="mb-0 fs-4">harryharoon2942@gmail.com</p>
      </div>

      {/* Phone */}
      <div className="d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  className="text-primary mx-2 lucide lucide-phone-call " > <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> <path d="M14.05 2a9 9 0 0 1 8 7.94"></path> <path d="M14.05 6A5 5 0 0 1 18 10"></path> </svg>
        <p className="mb-0 fs-4">+92 3268594299 (Whatsapp)</p>
      </div>
    </div>
    
    <div className="col-12 col-lg-6">
      <ContactForm />

    </div>
    
  </div>
</div>

</>


  )
}

export default Contact

