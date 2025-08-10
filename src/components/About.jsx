const About = () => (
  <section id="about" className="py-20 px-6 max-w-6xl mx-auto relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#6ebe44] to-[#dddf23] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-[#dddf23] to-[#6ebe44] rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-10">
      {/* Enhanced heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-mono tracking-wider">
            ABOUT NEXOVATE
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Where innovation meets opportunity
        </p>
      </div>

      {/* Main content with enhanced styling */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Main description */}
        <div className="space-y-6">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-[#6ebe44]/30 transition-all duration-300 group">
            <p className="text-gray-100 text-lg leading-relaxed">
              <span className="text-[#6ebe44] font-semibold">Nexovate 2025</span> is the premier hackathon bringing together 
              <span className="text-[#dddf23] font-medium"> coders, innovators, and problem solvers</span> from across the globe 
              to tackle real-world challenges and win exciting prizes.
            </p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-[#dddf23]/30 transition-all duration-300 group">
            <p className="text-gray-100 text-lg leading-relaxed">
              Join us for <span className="text-[#6ebe44] font-medium">workshops, networking,</span> and 
              <span className="text-[#dddf23] font-medium"> world-class mentorship</span> that will elevate your skills 
              and connect you with industry leaders.
            </p>
          </div>
        </div>

        {/* Right side - Feature highlights */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation Challenge</h3>
              <p className="text-gray-300">Solve real-world problems with cutting-edge technology</p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#dddf23] to-[#6ebe44] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Global Network</h3>
              <p className="text-gray-300">Connect with developers and innovators worldwide</p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Amazing Prizes</h3>
              <p className="text-gray-300">Compete for exciting rewards and recognition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;