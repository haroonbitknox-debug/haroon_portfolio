

function ContactForm() {
  return (
    <>
    <div className="container col-4 text-center border rounded bg-light p-3" >
      <h3 className="fw-bold">Got a question? Just Ask 😄</h3>
      <input 
      type="text" 
      name="username" 
      placeholder="Enter your name" 
      className="d-flex my-3 form-control required border rounded "/>

      <input 
      type="email" 
      name="useremail" 
      placeholder="Enter your email" 
      className="d-flex my-3 form-control required border rounded"/>

      <textarea 
      type="text" 
      name="usermessage" 
      placeholder="Enter your message" 
      className="d-flex my-3 form-control required border rounded" style={{height: "100px"}}/>

      <button className="btn btn-dark my-2">Send Message</button>
      
      </div>
    </>
  )
}

export default ContactForm
