const prizes = [
  { 
    title: "1st Prize", 
    amount: "₹50,000", 
    extras: "Swags + Goodies + Certificate",
    position: "🥇",
    gradient: "from-yellow-400 via-yellow-500 to-amber-600",
    bgGlow: "from-yellow-400/20 to-amber-600/20",
    borderGlow: "shadow-yellow-500/50"
  },
  { 
    title: "2nd Prize", 
    amount: "₹30,000", 
    extras: "Certificate",
    position: "🥈",
    gradient: "from-gray-300 via-gray-400 to-gray-600",
    bgGlow: "from-gray-300/20 to-gray-600/20",
    borderGlow: "shadow-gray-400/50"
  },
  { 
    title: "3rd Prize", 
    amount: "₹20,000", 
    extras: "Certificate",
    position: "🥉",
    gradient: "from-orange-400 via-orange-500 to-amber-700",
    bgGlow: "from-orange-400/20 to-amber-700/20",
    borderGlow: "shadow-orange-500/50"
  },
];

const Trophy = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 2h12v6c0 5.5-4.5 10-10 10S2 13.5 2 8V2h4zm0 2v6c0 2.2 1.8 4 4 4s4-1.8 4-4V4H6zm-4 0v4c0 1.1.9 2 2 2V4H2zm20 0v4c0-1.1-.9-2-2-2V4h2zM8 16h8v2H8v-2zm2 4h4v2h-4v-2z"/>
  </svg>
);

const Star = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const PrizeCard = ({ prize, index, isCenter }) => (
  <div className={`group relative ${isCenter ? 'md:-mt-4 md:scale-110' : ''} transition-all duration-500 hover:scale-105`}>
    {/* Animated Background Glow */}
    <div className={`absolute inset-0 bg-gradient-to-br ${prize.bgGlow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
    
    {/* Main Card */}
    <div className={`relative bg-gray-900/95 rounded-xl p-6 border border-gray-700/50 group-hover:border-[#6ebe44]/40 transition-all duration-300 shadow-2xl ${prize.borderGlow} group-hover:shadow-2xl backdrop-blur-sm overflow-visible min-h-[320px]`}>
      
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, currentColor 2px, transparent 2px), radial-gradient(circle at 80% 50%, currentColor 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Top Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${prize.gradient} flex items-center justify-center shadow-lg border-4 border-gray-900`}>
          <span className="text-2xl">{prize.position}</span>
        </div>
      </div>

      {/* Floating Stars */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <Star className="w-4 h-4 text-[#6ebe44] animate-pulse" />
      </div>
      <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <Star className="w-3 h-3 text-[#dddf23] animate-pulse" style={{animationDelay: '0.5s'}} />
      </div>

      <div className="relative z-10 text-center pt-6">
        {/* Prize Title */}
        <h3 className={`text-xl font-bold mb-3 font-mono bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
          {prize.title}
        </h3>

        {/* Trophy Icon */}
        <div className="mb-4 flex justify-center">
          <Trophy className={`w-10 h-10 text-[#6ebe44] group-hover:text-[#dddf23] transition-colors duration-300 group-hover:scale-110 group-hover:rotate-12`} />
        </div>

        {/* Prize Amount */}
        <div className="mb-3">
          <div className="text-3xl font-bold text-white mb-2 group-hover:text-[#6ebe44] transition-colors duration-300">
            {prize.amount}
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full mx-auto"></div>
        </div>

        {/* Extras */}
        <div className="space-y-2">
          <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm">
            {prize.extras}
          </p>
        </div>

        {/* Bottom Accent */}
        <div className="mt-5 pt-3 border-t border-gray-600/30">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-mono">
            <div className="w-2 h-2 rounded-full bg-[#6ebe44] animate-pulse"></div>
            <span>Winner Takes All</span>
            <div className="w-2 h-2 rounded-full bg-[#dddf23] animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>

      {/* Hover Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
    </div>
  </div>
);

const Prizes = () => {
  // Reorder prizes: 2nd, 1st, 3rd
  const orderedPrizes = [prizes[1], prizes[0], prizes[2]];

  return (
    <section id="prizes" className="py-20 px-6 max-w-4xl mx-auto">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <div className="inline-block relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#6ebe44] font-mono tracking-wider">
            PRIZES
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full"></div>
        </div>
        <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
          Compete for amazing rewards and recognition for your innovative solutions
        </p>
        {/* Prize Pool Total - Made bigger */}
        <div className="mt-10 p-8 bg-gray-900/50 rounded-2xl border border-[#6ebe44]/20 inline-block hover:border-[#6ebe44]/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <div className="text-[#6ebe44] font-mono text-sm uppercase tracking-wider mb-3 opacity-80">Total Prize Pool</div>
          <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent">₹1,00,000</div>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Prizes Grid */}
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {orderedPrizes.map((prize, index) => (
          <PrizeCard 
            key={prize.title} 
            prize={prize} 
            index={index}
            isCenter={index === 1} // Make the middle card (1st prize) the center highlight
          />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-4 text-gray-400 text-sm">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#6ebe44]"></div>
          <span className="font-mono tracking-wider text-xs uppercase">May the best team win!</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#dddf23]"></div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;