import { useState } from 'react';

// Custom SVG Icons (replacing lucide-react)
const ChevronRight = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 18 6-6-6-6" />
  </svg>
);

const Code = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

const Shield = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Heart = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const Users = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
  </svg>
);

const Lightbulb = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
  </svg>
);

const tracks = [
  {
    title: "EcoUrban – Sustainable Cities for a Smarter Tomorrow",
    desc: "Innovate for sustainable urban living with cutting-edge green technology solutions.",
    icon: <Lightbulb className="w-6 h-6" />,
    subItems: [
      "Renewable Energy Solutions",
      "Smart Infrastructure (IoT)",
      "Urban Farming & Agriculture",
      "Eco-friendly Transportation",
      "Smart Waste & Water Management",
    ],
  },
  {
    title: "CodeCure – Healthcare & Wellbeing Tech",
    desc: "Transform healthcare delivery through innovative technology and AI-driven solutions.",
    icon: <Heart className="w-6 h-6" />,
    subItems: [
      "Remote Health Monitoring",
      "Mental Health AI Solutions",
      "Hospital Resource Management",
      "Interactive Health Dashboards",
      "Disease Forecasting & Prevention",
    ],
  },
  {
    title: "Fortify – Cybersecurity & Digital Trust",
    desc: "Build robust cybersecurity frameworks to protect our digital future.",
    icon: <Shield className="w-6 h-6" />,
    subItems: [
      "Advanced Secure Authentication",
      "AI-Powered Threat Detection",
      "Privacy Protection Tools",
      "Blockchain Identity Management",
      "Cybercrime Prevention Applications",
    ],
  },
  {
    title: "Tech4Good – Tech for Social Impact",
    desc: "Leverage technology to create meaningful positive change in communities worldwide.",
    icon: <Users className="w-6 h-6" />,
    subItems: [
      "NGO Technology Solutions",
      "Governance & Transparency Tools",
      "Community Building Platforms",
      "Education & Empowerment Systems",
    ],
  },
  {
    title: "Code Canvas – Open Innovation",
    desc: "Unleash creativity through experimental technology and innovative digital experiences.",
    icon: <Code className="w-6 h-6" />,
    subItems: [
      "Smart Campus Management Tools",
      "Immersive AR/VR Experiences",
      "Productivity & Creativity Applications",
      "Next-Gen Social Media Platforms",
    ],
  },
];

const TrackCard = ({ track, index, isExpanded, onToggle }) => {
  return (
    <div className="group relative overflow-hidden bg-gray-900/80 rounded-2xl border border-gray-800 hover:border-[#6ebe44]/40 transition-all duration-300 shadow-xl">
      
      {/* Subtle Background Gradient on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-[#6ebe44] to-[#dddf23]"></div>
      
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#6ebe44]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 p-6">
        {/* Header Section */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-[#6ebe44] to-[#dddf23] text-black shadow-lg flex-shrink-0">
            {track.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6ebe44] transition-colors duration-300 leading-tight font-mono">
              {track.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {track.desc}
            </p>
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isExpanded ? 'max-h-80 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-700/50 pt-4">
            <h4 className="text-xs font-semibold text-[#dddf23] mb-3 tracking-widest uppercase">
              Focus Areas
            </h4>
            <div className="space-y-2">
              {track.subItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group/item py-1">
                  <div className="w-1 h-1 bg-[#6ebe44] rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200"></div>
                  <span className="text-gray-300 text-sm group-hover/item:text-white transition-colors duration-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => onToggle(index)}
          className="mt-4 flex items-center gap-2 text-[#6ebe44] hover:text-[#dddf23] transition-colors duration-300 font-medium text-sm group/btn w-full justify-center py-2 rounded-lg hover:bg-gray-800/50"
        >
          <span>{isExpanded ? 'Show Less' : 'Explore Track'}</span>
          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
            isExpanded ? 'rotate-90' : 'group-hover/btn:translate-x-1'
          }`} />
        </button>
      </div>
    </div>
  );
};

const Tracks = () => {
  const [expandedTrack, setExpandedTrack] = useState(null);

  const toggleTrack = (index) => {
    setExpandedTrack(expandedTrack === index ? null : index);
  };

  return (
    <section id="tracks" className="py-20 px-6 max-w-7xl mx-auto bg-black min-h-screen">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-mono tracking-wider">
            TRACKS
          </h2>
          <div className="h-1 w-full bg-gradient-to-r from-[#6ebe44] to-[#dddf23] rounded-full mb-8"></div>
        </div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Choose your innovation pathway and build solutions that shape tomorrow's world
        </p>
      </div>

      {/* Tracks Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {tracks.map((track, index) => (
          <TrackCard
            key={index}
            track={track}
            index={index}
            isExpanded={expandedTrack === index}
            onToggle={toggleTrack}
          />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-4 text-gray-400 text-sm">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#6ebe44] to-transparent"></div>
          <span className="font-mono tracking-wider">CHOOSE YOUR PATH TO INNOVATION</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#dddf23] to-transparent"></div>
        </div>
        
        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-[#6ebe44] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#dddf23] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-[#6ebe44] rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;