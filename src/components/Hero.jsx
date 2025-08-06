import React from 'react';
import logo from '../assests/logo.png';
import bg from '../assests/bg.jpg';

const Hero = () => (
  <section
    id="home"
    className="relative flex flex-col items-center text-center py-28 overflow-hidden"
    style={{
      minHeight: '600px',
    }}
  >
    {/* Background image */}
    <img
      src={bg}
      aria-hidden="true"
      alt=""
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
      style={{ pointerEvents: 'none' }}
    />
    {/* Overlay for opacity */}
    <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

    {/* Foreground content */}
    <div className="relative z-20 flex flex-col items-center">
      <img src={logo} alt="Nexovate 2025 Logo" className="w-64 h-64 mb-8 animate-pulse" />
      <h1 className="text-5xl md:text-6xl font-bold text-primary drop-shadow mb-4 tracking-wide">
        Nexovate 2025
      </h1>
      <p className="text-lg max-w-xl mx-auto mb-8 text-gray-200 font-mono">
        Unleash your creativity at the ultimate hackathon experience. Code. Build. Innovate!
      </p>
      <a
        href="#register"
        className="bg-primary text-dark px-10 py-3 rounded-xl font-bold transition hover:scale-105 hover:bg-green-400 shadow-lg text-xl"
      >
        Register Now
      </a>
    </div>
  </section>
);

export default Hero;