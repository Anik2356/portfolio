import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.jpg';

const About = () => {
  return (
    <div className='about'>
      {/* Title */}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      {/* Main Sections */}
      <div className='about-sections'>
        {/* Left Section */}
        <div className='about-left'>
          <img src={profile_img} alt="Profile" />
        </div>

        {/* Right Section */}
        <div className='about-right'>
          {/* Client-focused Introduction */}
          <div className='about-pera'>
            <p>Hello! I’m a full-stack web developer passionate about building websites that not only look stunning but also are highly functional and user-friendly.</p>
            <p>I am currently pursuing a <strong>Diploma in Information Technology at SEGi College Kuala Lumpur, Malaysia</strong>, where I continue to strengthen my knowledge in programming, database systems, and software development practices.</p>
            <p>With experience in both frontend and backend technologies, I create responsive, interactive, and well-structured web applications tailored to various projects and challenges.</p>
            <p>My goal is to continually improve my skills and deliver quality web solutions that showcase modern design and technical excellence.</p>
          </div>

          {/* Skills Section */}
          <div className='about-skills'>
            <div className='skill'><p>HTML & CSS</p><hr style={{ width: "95%" }} /></div>
            <div className='skill'><p>JavaScript</p><hr style={{ width: "90%" }} /></div>
            <div className='skill'><p>React</p><hr style={{ width: "85%" }} /></div>
            <div className='skill'><p>Node.js & Express</p><hr style={{ width: "80%" }} /></div>
            <div className='skill'><p>UI/UX Design</p><hr style={{ width: "75%" }} /></div>
            <div className='skill'><p>Digital Marketing & SEO</p><hr style={{ width: "70%" }} /></div>
          </div>
        </div>
      </div>

      {/* Education Section */}
{/* Education Section */}
<div className="about-education">
  <h2>Education</h2>
  <ul>
    <li>
      <strong>Diploma in Information Technology</strong> – SEGi College Kuala Lumpur, Malaysia (Ongoing)  
      <br />Specializing in programming, database management, and web development
    </li>
    <li>
      <strong>Higher Secondary Certificate (HSC) Level</strong> – Notre Dame College, Mymensingh, Bangladesh (Incomplete)  
      <br />Transitioned to pursue studies in Malaysia
    </li>
    <li>
      <strong>Secondary School Certificate (SSC)</strong> – Bhaluka Pilot High School, Mymensingh, Bangladesh
    </li>
  </ul>
</div>




      {/* Achievements */}
      <div className="about-achievements">
        <div className='about_achievement'>
          <h1>3+</h1>
          <p>Years of Experience</p>
        </div>
        <div className='about_achievement'>
          <h1>15+</h1>
          <p>Projects Completed</p>
        </div>
        <div className='about_achievement'>
          <h1>5+</h1>
          <p>Technologies Mastered</p>
        </div>
        <div className='about_achievement'>
          <h1>6+</h1>
          <p>Certifications Completed</p>
        </div>
      </div>
    </div>
  );
}

export default About;
