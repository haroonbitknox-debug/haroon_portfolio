import { useState } from "react";
import { FaPaperPlane, FaRegFaceSmile } from "react-icons/fa6";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf5q1D0iOOU0UP1hhXlEz-SKmLNLXub3eXDSrnpIhwlJ_-2Cg/formResponse";

const EMPTY = { username: "", useremail: "", usermessage: "" };

function ContactForm() {
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const body = new FormData();
    body.append("entry.913963108", formData.username);
    body.append("entry.1633724083", formData.useremail);
    body.append("entry.1764647277", formData.usermessage);

    // no-cors: the browser can't read Google's reply, so "sent" means the request went out.
    fetch(FORM_URL, { method: "POST", mode: "no-cors", body })
      .then(() => {
        setStatus("sent");
        setFormData(EMPTY);
      })
      .catch(() => setStatus("error"));
  };

  return (
    <div className="form-card">
      <h3>Got a question? Just ask! </h3>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          value={formData.username}
          onChange={handleInputChange}
          required
          className="my-2 form-control"
        />
        <input
          type="email"
          name="useremail"
          placeholder="Enter your email"
          value={formData.useremail}
          onChange={handleInputChange}
          required
          className="my-3 form-control"
        />
        <textarea
          name="usermessage"
          placeholder="Enter your message"
          value={formData.usermessage}
          onChange={handleInputChange}
          required
          rows={4}
          className="mb-3 form-control"
        />
        <button
          type="submit"
          className="btn-cta primary w-100"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            "Sending…"
          ) : (
            <>
              <FaPaperPlane /> Send Message
            </>
          )}
        </button>
        {status === "sent" && (
          <p className="form-note ok" role="status">
            Thanks! Haroon has received your message.
          </p>
        )}
        {status === "error" && (
          <p className="form-note err" role="alert">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
