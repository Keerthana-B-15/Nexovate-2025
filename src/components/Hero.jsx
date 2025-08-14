import React from 'react';
import logo from '../assests/logo.png';
import bg from '../assests/bg.jpg';

const Hero = () => (
  <section
    id="home"
    className="relative flex flex-col items-center text-center py-32 overflow-hidden"
    style={{ minHeight: '600px' }}
  >
    {/* Background with parallax effect */}
    <div className="absolute inset-0 w-full h-full">
      <img
        src={bg}
        aria-hidden="true"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-110 animate-pulse"
        style={{ 
          pointerEvents: 'none',
          animation: 'subtle-zoom 20s ease-in-out infinite alternate'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 z-10"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30 z-15">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6ebe44]/20 via-transparent to-[#dddf23]/20 animate-pulse"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-15">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#6ebe44]/40 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </div>

    <div className="relative z-20 flex flex-col items-center max-w-6xl mx-auto px-6">
      {/* Logo with enhanced animations */}
      <div className="relative mb-12">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6ebe44]/30 to-[#dddf23]/30 blur-3xl animate-pulse"></div>
        <img 
          src={logo} 
          alt="Nexovate 2025 Logo" 
          className="relative w-64 h-64 md:w-72 md:h-72 drop-shadow-2xl transform hover:scale-110 transition-all duration-500 ease-out filter brightness-110"
          style={{
            animation: 'float 6s ease-in-out infinite, glow 3s ease-in-out infinite alternate'
          }}
        />
      </div>

      {/* Main heading with gradient text */}
      <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-none">
        <span className="bg-gradient-to-r from-[#6ebe44] via-[#8bc34a] to-[#dddf23] bg-clip-text text-transparent drop-shadow-lg">
          Nexovate
        </span>
        <br />
        <span className="text-white font-mono text-2xl md:text-3xl tracking-wider opacity-90">
          2025
        </span>
      </h1>

      {/* Enhanced subtitle */}
      <div className="relative mb-12">
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100 font-light leading-relaxed">
          <span className="font-mono text-[#6ebe44]">Unleash</span> your creativity at the ultimate hackathon experience.
          <br />
          <span className="text-[#dddf23] font-semibold">Code.</span> 
          <span className="text-[#6ebe44] font-semibold"> Build.</span> 
          <span className="text-white font-semibold"> Innovate!</span>
        </p>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full"></div>
      </div>

      {/* Enhanced CTA button */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:blur-md animate-pulse"></div>
        <a
          href="https://unstop.com/p/nexovate25-presidency-university-bengaluru-1538192"
          className="relative bg-gradient-to-r from-[#6ebe44] to-[#dddf23] text-black px-10 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-xl group-hover:from-[#5aa838] group-hover:to-[#c9ca1f] flex items-center gap-3"
        >
          <span>Register Now</span>
          <svg 
            className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>

    {/* Custom CSS animations */}
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
      }
      
      @keyframes glow {
        0% { filter: brightness(110%) drop-shadow(0 0 20px rgba(110, 190, 68, 0.3)); }
        100% { filter: brightness(120%) drop-shadow(0 0 30px rgba(110, 190, 68, 0.5)); }
      }
      
      @keyframes subtle-zoom {
        0% { transform: scale(1.1); }
        100% { transform: scale(1.15); }
      }
    `}</style>
  </section>
);

export default Hero;