const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-5xl font-bold mb-16 text-center">
        <span className="bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-mono tracking-wider">
          SPONSORS
        </span>
        <div className="w-32 h-1 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] mx-auto mt-4"></div>
      </h2>
      
      {/* Platform Partner Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">
          Platform Partner
        </h3>
        
        <div className="flex justify-center">
          <div className="relative group">
            {/* Glowing background effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#6ebe44]/20 to-[#dddf23]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Main card */}
            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 py-12 px-16 rounded-2xl flex flex-col items-center justify-center hover:scale-105 hover:border-[#6ebe44]/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#6ebe44]/10">
              
              {/* UNSTOP logo/text */}
              <div className="text-center">
                <span className="text-4xl font-mono bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-black tracking-wider">
                  UNSTOP
                </span>
                <p className="text-gray-400 mt-4 text-lg font-medium">
                  India's Largest Platform for Competitions & Hackathons
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#6ebe44] rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#dddf23] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sponsors Section (for future sponsors) 
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-8 text-gray-300">
          Other Sponsors
        </h3>
        
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 py-16 px-8 rounded-2xl border-dashed">
          <div className="text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p className="text-xl font-medium mb-2">Interested in Sponsoring?</p>
            <p className="text-gray-400">Contact us to become a sponsor of Nexovate 2025</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Sponsors;