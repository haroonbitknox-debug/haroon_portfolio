import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa6";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="container page-section">
      <div className="contact-grid">
        <div>
          
          <h1 className="section-title">
            Lets talk <span className="dot">.</span>
          </h1>
          <p className="page-lead">
            Looking to partner or work together? Reach out through the following platforms and I'll
            get back to you in the next 24 hours.
          </p>

          <div className="contact-list">
            <a className="contact-item" href="mailto:harryharoon2942@gmail.com">
              <span className="icon-box"><FaEnvelope /></span>
              <span>harryharoon2942@gmail.com</span>
            </a>
            <a className="contact-item" href="tel:+923134195255">
              <span className="icon-box"><FaPhone /></span>
              <span>0313-4195255</span>
            </a>
            
            <a className="contact-item" href="https://www.linkedin.com/in/haroon-ali-02266b236" target="_blank" rel="noopener noreferrer">
              <span className="icon-box"><FaLinkedin /></span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
