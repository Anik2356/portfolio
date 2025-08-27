import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '/src/assets/theme_pattern.svg';

import ssc from '/src/assets/ssc_certificate.jpg';
import deansList from '/src/assets/deans_list.jpg';
import taboo from '/src/assets/taboo.jpg';
import sustainableLeader from '/src/assets/sustainable_leader.png';

const Services = () => {
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    { 
      id: "01", 
      title: "SSC Certificate", 
      desc: "GPA 5 – Bhaluka Pilot High School, Bangladesh", 
      details: "Completed Secondary School Certificate (SSC) with an outstanding GPA of 5, demonstrating strong academic foundation.", 
      color: "orange",
      image: ssc
    },
    { 
      id: "02", 
      title: "Dean's List", 
      desc: "Academic Excellence", 
      details: "Recognized for outstanding academic performance in the Diploma in Information Technology program at SEGi College Kuala Lumpur.", 
      color: "purple",
      image: deansList
    },
    { 
      id: "03", 
      title: "Taboo Participation", 
      desc: "College Event Participation", 
      details: "Participated in Taboo event demonstrating creativity, teamwork, and problem-solving skills.", 
      color: "blue",
      image: taboo
    },
    { 
      id: "04", 
      title: "Sustainable Leader Participation", 
      desc: "Leadership Event Certificate", 
      details: "Participation certificate for 'What It Takes to Be a Sustainable Leader' program, focusing on leadership and sustainability.", 
      color: "green",
      image: sustainableLeader
    }
  ];

  return (
    <div className='services'>
      {/* Title */}
      <div className="services-title">
        <h1>Certificates & Achievements</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      {/* Cards Grid */}
      <div className="services-container">
        {items.map((item) => (
          <div key={item.id} className="service-card">
            <img src={item.image} alt={item.title} className="card-image"/>
            <h2>{item.id}</h2>
            <h3 className={`service-title ${item.color}`}>{item.title}</h3>
            <p>{item.desc}</p>
            <button 
              className="read-more"
              onClick={() => setActiveItem(item)}
            >
              Read More →
            </button>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {activeItem && (
        <div className="modal-overlay" onClick={() => setActiveItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeItem.image} alt={activeItem.title} className="modal-image"/>
            <h2 className={`modal-title ${activeItem.color}`}>{activeItem.title}</h2>
            <p className="modal-desc">{activeItem.details}</p>
            <button className="close-btn" onClick={() => setActiveItem(null)}>Close ✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
