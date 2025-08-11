const CollegeMap = () => {

  // College details - Update these with your actual college information
  const collegeInfo = {
    name: "Presidency University, Bengaluru ",
    address: "Itgalpur Rajanakunte, Yelahanka, Bengaluru, Karnataka 560064",
    coordinates: "13.1724724,77.5289109", // Yelahanka coordinates
  };


  return (
    <section id="location" className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-mono tracking-wider">
              FIND US
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full mb-8"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Located in the heart of Yelahanka, easily accessible from all parts of Bengaluru
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="space-y-6">
            {/* Interactive Map Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6ebe44]/20 to-[#dddf23]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-[#6ebe44]/30 transition-all duration-300">
                
                {/* Map Placeholder with embedded Google Maps */}
                <div className="w-full h-80 rounded-xl overflow-hidden border-2 border-gray-700 hover:border-[#6ebe44]/50 transition-all duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4234567890123!2d77.5339595!3d13.1717796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae21be4ad63a55%3A0x1008adb771c3d236!2sPresidency%20University!5e0!3m2!1sen!2sin!4v1692875432109!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="College Location Map - Interactive map showing the location of our college campus"
                  ></iframe>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href="https://www.google.com/maps/dir//Itgalpur+Rajanakunte,+Yelahanka,+Bengaluru,+Karnataka+560064/@13.1717665,77.4537576,27135m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bae21be4ad63a55:0x1008adb771c3d236!2m2!1d77.5361595!2d13.1717796?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[#6ebe44]/10 hover:bg-[#6ebe44]/20 border border-[#6ebe44]/30 text-[#6ebe44] px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <span>📍</span>
                    <span>Open in Maps</span>
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText(collegeInfo.address)}
                    className="flex items-center space-x-2 bg-[#dddf23]/10 hover:bg-[#dddf23]/20 border border-[#dddf23]/30 text-[#dddf23] px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <span>📋</span>
                    <span>Copy Address</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="space-y-6">
            {/* College Details */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-[#6ebe44]/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6ebe44] to-[#dddf23] rounded-xl flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-xl">🏫</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{collegeInfo.name}</h3>
                  <p className="text-gray-400">Yelahanka, Bengaluru</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-[#6ebe44] mt-1">📍</span>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300 text-sm">{collegeInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-[#dddf23] mt-1">🌐</span>
                  <div>
                    <p className="text-white font-medium">Coordinates</p>
                    <p className="text-gray-300 text-sm font-mono">{collegeInfo.coordinates}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-400 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#6ebe44] to-transparent"></div>
            <span className="font-mono tracking-wider">SEE YOU THERE!</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#dddf23] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeMap;