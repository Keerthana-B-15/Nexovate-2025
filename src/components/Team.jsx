import { useState, useCallback, memo } from 'react';

const teamMembers = [
  { name: "Dr. ZAFAR ALI KHAN N", role: "Club Convenor", image: "assets/zafar.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "faculty" },
  { name: "Ms. JOSEPHINE R", role: "Club Coordinator", image: "assets/josephine.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "faculty" },
  { name: "Mr. JAI KUMAR B", role: "Club Coordinator", image: "assets/jaikumar.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "faculty" }, 
  { name: "NAVANEETH A D", role: "President", image: "assets/navaneeth.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "leadership" },
  { name: "HIDA FATHIMA P H", role: "Vice President", image: "assets/hida.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "leadership" },
  { name: "CHANDREYI AVIJIT GHOSH", role: "Secretary", image: "assets/chandreyi.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "leadership" },
  { name: "SYED MOHAMMED UMAR", role: "Community Outreach In-Charge", image: "assets/umar.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "core" },
  { name: "JAHNU TANAI KUMAR HINDUPUR", role: "Event Coordinator", image: "assets/tanai.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "core" },
  { name: "KEERTHANA B", role: "Web Developer", image: "assets/keerthana.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "core" },
  { name: "SARAH FAROOQUI", role: "Sponsorship In-Charge", image: "assets/sarah.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "core" },
  { name: "PRAVEEN SALAME", role: "Designer", image: "assets/praveen.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "core" },
  { name: "RUDRA BAJARIYA", role: "Marketing In-Charge", image: "assets/rudra.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "core" },
  { name: "RISHABH REDDY G C", role: "Core Member", image: "assets/rishabh.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "core" },
  { name: "SHRUJANYA M", role: "Core Member", image: "assets/shrujanya.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "core" },
  { name: "SHREERAKSHA R ADIGA", role: "Core Member", image: "assets/shreeraksha.png", bgGradient: "from-[#6ebe44] to-[#dddf23]", category: "core" },
];

// Memoized Team Member Card with proper alignment
const TeamMemberCard = memo(({ member, index, isHovered, onHover, onLeave }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group relative h-full flex"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      <div className={`
        relative overflow-hidden rounded-2xl p-6 shadow-2xl transition-all duration-300 ease-out transform 
        ${isHovered ? 'scale-105 -translate-y-2' : 'hover:scale-102'}
        bg-gray-900/80 backdrop-blur-sm
        border border-gray-800 hover:border-[#6ebe44]/30
        will-change-transform w-full flex flex-col justify-between
      `}>
        
        {/* Optimized Background Gradient */}
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300
          bg-gradient-to-br ${member.bgGradient}
        `}></div>
        
        {/* Simplified Floating Effects */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#6ebe44] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center flex-1 justify-center">
          {/* Image Container with Loading State */}
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-3 border-gray-700 shadow-xl transition-all duration-300 group-hover:border-[#6ebe44]/60 bg-gray-800 mx-auto">
              {!imageLoaded && !imageError && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-[#6ebe44] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#6ebe44] to-[#dddf23] text-black font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
              ) : (
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    imageLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  loading="lazy"
                  decoding="async"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transform: 'scale(2.5) translate(7px, -11px)',
                    transformOrigin: 'center center'
                  }}
                />
              )}
            </div>
            
            {/* Status Indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-[#6ebe44] to-[#dddf23] rounded-full flex items-center justify-center shadow-lg">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Name - Fixed height container */}
          <div className="mb-4 min-h-[4rem] flex items-center justify-center px-2">
            <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#6ebe44] leading-tight text-center">
              {member.name}
            </h3>
          </div>

          {/* Role Badge - Consistent styling */}
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gray-800/80 border border-gray-700 group-hover:border-[#6ebe44]/40 transition-all duration-300 mb-6 min-h-[2.5rem] w-full max-w-[200px]">
            <span className="text-sm font-medium text-gray-300 group-hover:text-[#dddf23] transition-colors duration-300 text-center">
              {member.role}
            </span>
          </div>

          {/* Hover Effect - Animated Line */}
          <div className={`
            h-0.5 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] transition-all duration-300 rounded-full
            ${isHovered ? 'w-16' : 'w-0'}
          `}></div>
        </div>
      </div>
    </div>
  );
});

const Team = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredMember, setHoveredMember] = useState(null);

  const filteredMembers = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === filter);

  const filterButtons = [
    { key: 'all', label: 'All Members', count: teamMembers.length },
    { key: 'faculty', label: 'Faculty', count: teamMembers.filter(m => m.category === 'faculty').length },
    { key: 'leadership', label: 'Leadership', count: teamMembers.filter(m => m.category === 'leadership').length },
    { key: 'core', label: 'Core Team', count: teamMembers.filter(m => m.category === 'core').length },
  ];

  const handleHover = useCallback((index) => {
    setHoveredMember(index);
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredMember(null);
  }, []);

  return (
    <section id="team" className="py-20 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-mono tracking-wider">
              OUR TEAM
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full mb-8"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Meet the passionate individuals who drive innovation and excellence in our community
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((button) => (
            <button
              key={button.key}
              onClick={() => setFilter(button.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 border ${
                filter === button.key
                  ? 'bg-gradient-to-r from-[#6ebe44] to-[#dddf23] text-black shadow-lg shadow-[#6ebe44]/25 border-transparent'
                  : 'bg-transparent text-white hover:bg-gradient-to-r hover:from-[#6ebe44]/20 hover:to-[#dddf23]/20 border-gray-700 hover:border-[#6ebe44]/50'
              }`}
            >
              {button.label}
              <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                filter === button.key ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-300'
              }`}>
                {button.count}
              </span>
            </button>
          ))}
        </div>

        {/* Team Grid with Proper Alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {filteredMembers.map((member, i) => (
            <div key={`${member.name}-${i}`} className="w-full max-w-sm">
              <TeamMemberCard
                member={member}
                index={i}
                isHovered={hoveredMember === i}
                onHover={handleHover}
                onLeave={handleLeave}
              />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-400 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#6ebe44] to-transparent"></div>
            <span className="font-mono tracking-wider">BUILDING THE FUTURE TOGETHER</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#dddf23] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;