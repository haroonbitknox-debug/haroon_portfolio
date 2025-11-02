import { useState } from "react"


function ContactForm() {
    const [formData, setFormData] = useState(
        {
            username: "",
            useremail: "",
            usermessage: ""
        }
    )
    const [success, setSuccess] = useState("Waiting")
    const [error,setError] = useState("")
    const handleInputChange = (e) => 
    {
        const {name, value} = e.target;
        setFormData(
            (prev) => ({...prev,[name]: value})
        )
    }
  const handleFormSubmit = (e) => {
        e.preventDefault()
        setSuccess("Loading");
  const formUrl  = 
  "https://docs.google.com/forms/d/e/1FAIpQLSf5q1D0iOOU0UP1hhXlEz-SKmLNLXub3eXDSrnpIhwlJ_-2Cg/formResponse";

  const formBody = new FormData();
  formBody.append("entry.913963108", formData.username);
  formBody.append("entry.1633724083", formData.useremail);
  formBody.append("entry.1764647277", formData.usermessage);
  fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: formBody
  }).then(()=>{
    setSuccess("Form Submitted");
    setFormData({
            username: "",
            useremail: "",
            usermessage: ""
        })
  }).catch((error)=>{setError(error.message)})
    }
    return (
    <>
    <div className="container col-4 text-center border rounded bg-light p-3" >
      <h3 className="fw-bold">Got a question? Just Ask 😄</h3>
      <form onSubmit={handleFormSubmit}>
      <input 
      type="text" 
      name="username" 
      placeholder="Enter your name" 
      value={formData.username}
      onChange={handleInputChange}
      required
      className="d-flex my-3 form-control required border rounded "/>

      <input 
      type="email" 
      name="useremail" 
      placeholder="Enter your email" 
      value={formData.useremail}
      onChange={handleInputChange}
      required
      className="d-flex my-3 form-control required border rounded"/>

      <textarea 
      type="text" 
      name="usermessage" 
      placeholder="Enter your message" 
      value={formData.usermessage}
      onChange={handleInputChange}
      required
      className="d-flex my-3 form-control required border rounded" style={{height: "100px"}}/>

      <button type="submit" className="btn btn-dark my-2">Send Message</button>
      </form>
      </div>
    </>
  )
}

export default ContactForm
