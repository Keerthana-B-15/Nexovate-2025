import React from 'react';
import { Star, Award, Users, Heart, Lightbulb, Globe } from 'lucide-react';

const ChiefGuest = () => (
  <section id="chief-guest" className="py-20 px-6 max-w-6xl mx-auto relative overflow-hidden">
    {/* Background decorative elements - matching About section */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#6ebe44] to-[#dddf23] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-[#dddf23] to-[#6ebe44] rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-10">
      {/* Enhanced heading - matching About section style */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <Star className="text-[#dddf23] w-8 h-8 animate-pulse mr-4" />
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-mono tracking-wider">
              CHIEF GUEST
            </span>
          </h2>
          <Star className="text-[#dddf23] w-8 h-8 animate-pulse ml-4" />
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Welcoming our esteemed Chief Guest of Honour
        </p>
      </div>

      {/* Main content grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        
        {/* Left side - Photo and basic info */}
        <div className="text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-[#6ebe44]/30 transition-all duration-300 group">
            <div className="relative mb-6">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-gray-700 to-gray-800 border-4 border-gradient-to-r from-[#6ebe44] to-[#dddf23]">
                {/* Replace with actual image */}
                <img 
                  src="assets/Kishore.png" 
                  alt="Mr. Kishore Chandran"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-[#6ebe44]/20 to-[#dddf23]/20 flex items-center justify-center text-white text-lg font-semibold" style={{display: 'none'}}>
                  <div className="text-center">
                    <Users className="w-16 h-16 mx-auto mb-4 text-[#6ebe44]" />
                    <div className="text-[#dddf23]">Mr. Kishore Chandran</div>
                    <div className="text-sm text-gray-300 mt-2">Photo Placeholder</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Name and title */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                Mr. Kishore Chandran
              </h3>
              <p className="text-[#6ebe44] font-semibold text-lg mb-4">
                Founder & President
              </p>
              <p className="text-[#dddf23] font-medium">
                Dr. Kalam Foundation
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Details and attributes */}
        <div className="space-y-6">
          {/* Description card */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-[#6ebe44]/30 transition-all duration-300 group">
            <p className="text-gray-100 text-lg leading-relaxed mb-4">
              <span className="text-[#6ebe44] font-semibold">Mr. Kishore Chandran</span> brings exceptional leadership and 
              <span className="text-[#dddf23] font-medium"> visionary insights</span> to inspire the next generation of innovators.
            </p>
            <p className="text-gray-100 text-lg leading-relaxed">
              As the <span className="text-[#6ebe44] font-medium">Founder & President of Dr. Kalam Foundation,</span> he embodies the perfect synergy of 
              <span className="text-[#dddf23] font-medium"> education, innovation, and social impact</span> that NEXOVATE'25 represents.
            </p>
          </div>

          {/* Key attributes */}
          <div className="space-y-4">
            {/* Leadership */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Leadership Excellence</h4>
                <p className="text-gray-300">Visionary insights inspiring next-gen innovators with Dr. Kalam's ideals</p>
              </div>
            </div>

            {/* Social Impact */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#dddf23] to-[#6ebe44] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Social Impact Focus</h4>
                <p className="text-gray-300">Expertise in CSR and sustainability projects aligned with UN SDGs</p>
              </div>
            </div>

            {/* Community Empowerment */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Community Empowerment</h4>
                <p className="text-gray-300">Dedicated to education, health, and environmental sustainability</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role at event section */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-[#dddf23]/30 transition-all duration-300 mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent">
            Role at NEXOVATE'25
          </span>
        </h3>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎤</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Inaugural Ceremony</h4>
            <p className="text-gray-400 text-sm">Opening address and event launch</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#dddf23] to-[#6ebe44] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">👥</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Team Interactions</h4>
            <p className="text-gray-400 text-sm">Direct engagement with participants</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-white font-semibold mb-2">Technical Talk</h4>
            <p className="text-gray-400 text-sm">Inspiring innovation insights</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#dddf23] to-[#6ebe44] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🏆</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Prize Distribution</h4>
            <p className="text-gray-400 text-sm">Recognizing outstanding innovations</p>
          </div>
        </div>
      </div>

      {/* Inspirational message */}
      <div className="text-center bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-[#6ebe44]/30 transition-all duration-300">
        <div className="text-lg italic text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
          "Your presence as our esteemed <span className="text-[#6ebe44] font-semibold">Chief Guest of Honour</span> would serve as a source of great inspiration and motivation for the young innovators participating in this event, encouraging them to <span className="text-[#dddf23] font-semibold">shape the future with creativity and purpose.</span>"
        </div>
        <div className="text-sm text-gray-500">— NEXOVATE'25 Team</div>
      </div>
    </div>
  </section>
);

export default ChiefGuest;