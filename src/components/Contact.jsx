import { useState } from "react";
import "./Contact.css";

function Contact3() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const whatsappNumber = "918817289144"; // country code + number

    const text = `Hello Priyanshi 👋%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
       <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          // marginBottom: "50px",
        }}
      >
        Contact us
      </h2>
    <section className="contact-section">
      
      <div className="contact-container">
        

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>
            Let’s <span>Connect</span>
          </h2>

          <p className="subtitle">
            Have a project in mind or want to collaborate?
            I’d love to hear from you.
          </p>

          <div className="info-block">
            <h4>📍 Location</h4>
            <p>Ratlam, India</p>
          </div>

          <div className="info-block">
            <h4>📧 Email</h4>
            <p>priyanshij251@gmail.com</p>
          </div>

          <div className="info-block">
            <h4>📞 Phone</h4>
            <p>+91 88172 89144</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Message</h3>

            <div className="input-group">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>

            <div className="input-group">
              <textarea
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label>Message</label>
            </div>

            <button type="submit">Send Message 🚀</button>
          </form>
        </div>

      </div>
    </section>
    </>
  );
}

export default Contact3;