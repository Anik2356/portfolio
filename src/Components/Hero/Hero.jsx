import React from "react";
import "./Hero.css";
import Profile_img from "../../assets/profile_img.jpg";

const Hero = () => {
  return (
    <section className="hero">
      {/* Profile Image */}
      <img src={Profile_img} alt="Profile" className="hero-img" />

      {/* Headline */}
      <h1>
        I am <span className="highlight">NaHuel Anik</span>, <br />
        Diploma Student & Aspiring Full-Stack Developer
      </h1>

      {/* Description */}
      <p>
        Passionate about building modern, responsive web applications using <strong>React</strong>, <strong>Node.js</strong>, and <strong>Express.js</strong>. 
        Completed multiple projects and actively participated in leadership and academic programs.
      </p>

      

      {/* Action Buttons */}
      <div className="hero-action">
        <a href="#contact" className="hero-connect">Connect With Me</a>
        <a href="/Nahuel-anik.pdf" download className="hero-resume">Download CV</a>
      </div>
    </section>
  );
};

export default Hero;
