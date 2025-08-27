import React, { useState } from 'react';
import "./Contact.css";
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
// Social Media Icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "60175649311"; // <-- Your WhatsApp number
    const text = `Hello, my name is ${formData.name}. My email is ${formData.email}. \n\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="contact-section">
        {/* ---------- Left Info ---------- */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Have a project in mind or just want to say hi? Reach out via WhatsApp or this form.</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>shahariaranik470@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="phone" />
              <p>+6017-5649311</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Kuala Lumpur, Malaysia</p>
            </div>
          </div>

          {/* ---------- Social Media ---------- */}
          <div className="contact-socials">
            <a href="https://www.facebook.com/an.ik.619868" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/nahuel_anik?igsh=MXRvN2t4YWk1Ym1kZA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/anikmdrazwan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            {/* New Icons */}
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://x.com/anikmdrazwan?t=LKpQ8Fp0hsq0EpfHcYlgOw&s=09" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* ---------- Right Form ---------- */}
        <form className='contact-right' onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />

          <label htmlFor="email">Your Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />

          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Write your message..." 
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message via WhatsApp</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
