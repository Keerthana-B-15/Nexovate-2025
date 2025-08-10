const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-5xl font-bold mb-16 text-center">
        <span className="bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-mono tracking-wider">
          SPONSORS
        </span>
        <div className="w-32 h-1 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] mx-auto mt-4"></div>
      </h2>
      
      <div className="flex justify-center">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 py-8 px-12 rounded-xl flex items-center justify-center hover:scale-105 hover:border-[#6ebe44]/50 transition-all duration-300 group">
          <span className="text-3xl font-mono bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-bold">
            UNSTOP
          </span>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;