import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="portfolio"><MyWork /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default App;
