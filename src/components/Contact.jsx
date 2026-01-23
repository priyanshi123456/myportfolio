import React, { useEffect } from "react";
import gsap from "gsap";
import "./Contact.css";
import "remixicon/fonts/remixicon.css";

const Contact = () => {
  useEffect(() => {
    gsap.fromTo(
      ".contact-left h1",
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      ".contact-item",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, delay: 0.4 }
    );

    gsap.fromTo(
      ".contact-form-glass",
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.3 }
    );
  }, []);

  return (
    <section className="contact-section">
      {/* LEFT */}
      <div className="contact-left">
        <h1>
          wanna<br />work<br />with us?
        </h1>
        <p>feel free to contact anytime 🚀</p>
      </div>

      {/* RIGHT */}
      <div className="contact-right">
        <a className="contact-item" href="mailto:priyanshij251@gmail.com">
          <i className="ri-mail-line"></i>
          <span>priyanshij251@gmail.com</span>
        </a>

        <a className="contact-item" href="https://wa.me/8817289144">
          <i className="ri-whatsapp-line"></i>
          <span>whatsApp</span>
        </a>

        <a
          className="contact-item"
          href="https://instagram.com/codewithpriyanshi_"
        >
          <i className="ri-instagram-line"></i>
          <span>@codewithpriyanshi_</span>
        </a>
      </div>

      {/* CENTER FORM */}
      <div className="contact-form-glass">
        <h3>let's connect ✨</h3>
        <p>we wil connect u fastly 🤝</p>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="tel" placeholder="Mobile Number" />

        <button>
          submit <i className="ri-arrow-right-line"></i>
        </button>
      </div>

      <footer className="contact-footer">
  <p>
    © {new Date().getFullYear()} manav~codewithpriyanshi · built with ❤️
  </p>
</footer>
    </section>
  );
};

export default Contact;
