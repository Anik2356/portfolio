import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [modalMsg, setModalMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setModalMsg("Please enter your email!");
      setShowModal(true);
      return;
    }

    emailjs
      .send(
        "Anikqwer@12",          // Your EmailJS service ID
        "template_aisuzmo",     // Your EmailJS template ID
        {
          email: email,                       
          from_name: email.split("@")[0],     
        },
        "Q9nN8U9lW6oikDuE_"    
      )
      .then(() => {
        setModalMsg("Thank you for subscribing! 🎉 Check your inbox.");
        setShowModal(true);
        setEmail("");
      })
      .catch(() => {
        setModalMsg("Oops! Something went wrong. Try again later.");
        setShowModal(true);
      });
  };

  return (
    <footer className="footer">
      {/* Left: About */}
      <div className="footer-left">
        <h2>Anik</h2>
        <p>
          I am a frontend developer from Bangladesh with experience in building
          modern and responsive web applications.
        </p>
      </div>

      {/* Center: Social Icons */}
      <div className="footer-center">
        <div className="social-icons">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/anikmdrazwan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/anikmdrazwan?t=LKpQ8Fp0hsq0EpfHcYlgOw&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/nahuel_anik?igsh=MXRvN2t4YWk1Ym1kZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/an.ik.619868" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
      </div>

      {/* Right: Newsletter */}
      <div className="footer-right">
        <form className="newsletter" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2025 NaHuel Anik. All rights reserved.</p>
      </div>

      {/* Floating background shapes */}
      <div className="footer-shapes">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{modalMsg}</p>
            <button onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
