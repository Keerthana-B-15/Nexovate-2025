import { useEffect, useRef } from 'react';

const teamMembers = [
  { name: "Kuwar", role: "Logistics Core", image: "/images/kuwar.jpg", bgColor: "bg-green-500", badgeColor: "text-red-500" },
  { name: "Suhana", role: "Sponsorship Lead", image: "/images/suhana.jpg", bgColor: "bg-orange-500", badgeColor: "text-red-500" },
  { name: "Ayushi Kabra", role: "Sponsorship Core", image: "/images/ayushi.jpg", bgColor: "bg-orange-500", badgeColor: "text-red-500" },
  { name: "Harsh Dubey", role: "Sponsorship Core", image: "/images/harsh.jpg", bgColor: "bg-orange-500", badgeColor: "text-red-500" },
  { name: "Azlaan Khan", role: "Sponsorship Core", image: "/images/azlaan.jpg", bgColor: "bg-orange-500", badgeColor: "text-red-500" },
  { name: "Sakina Passwala", role: "Sponsorship Core", image: "/images/sakina.jpg", bgColor: "bg-orange-500", badgeColor: "text-red-500" },
];

const Team = () => {
  const scrollRef = useRef(null);
  let direction = 1; // 1 for forward, -1 for backward

  useEffect(() => {
    const scroll = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (scrollLeft >= maxScroll) {
          direction = -1; // Start moving backward
        } else if (scrollLeft <= 0) {
          direction = 1; // Start moving forward
        }
        scrollRef.current.scrollLeft += 1 * direction; // Move based on direction
      }
    }, 20);

    return () => clearInterval(scroll);
  }, []);

  return (
    <section id="team" className="py-20 px-6 max-w-7xl mx-auto bg-dark">
      <h2 className="text-4xl font-bold mb-12 text-primary text-center font-mono tracking-wider">OUR TEAM</h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
          style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-56 h-72 ${member.bgColor}/20 rounded-2xl p-4 shadow-lg flex flex-col items-center text-center`}
            >
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs ${member.badgeColor} font-mono`}>
                  SPONSORSHIP CORE
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-100">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
            </div>
          ))}
          {/* Duplicate items for seamless looping */}
          {teamMembers.map((member, i) => (
            <div
              key={`dup-${i}`}
              className={`flex-shrink-0 w-56 h-72 ${member.bgColor}/20 rounded-2xl p-4 shadow-lg flex flex-col items-center text-center`}
            >
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs ${member.badgeColor} font-mono`}>
                  SPONSORSHIP CORE
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-100">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;