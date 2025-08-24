import { useState} from 'react';

const Results = () => {
  const [showResults, setShowResults] = useState(false);

  // Sample qualified teams data - replace with actual data
  const qualifiedTeams = [
    { name: "Visionary Sparks", leader: "Sakshi Birajdar", track: "EcoUrban" },
    { name: "Code_Phantoms", leader: "Nachiketh VS", track: "EcoUrban" },
    { name: "Team Codogram", leader: "Sahil Kumar", track: "EcoUrban" },
    { name: "IdeaStromers", leader: "M Bhavya Sai", track: "EcoUrban" },
    { name: "Duct Tape", leader: "Saurav Singh", track: "EcoUrban" },
    { name: "Cosmos", leader: "Sangam K K", track: "Codecure" },
    { name: "Trailblazers", leader: "Mahesh Kumar Pandey", track: "Codecure" },
    { name: "Nonch", leader: "Ashish Mohanty", track: "Codecure" },
    { name: "Bug-Busters", leader: "Yash Kumar", track: "Codecure" },
    { name: "Team Basement", leader: "Swami Agnivesh Shaga", track: "Codecure" },
    { name: "Team Fenrion", leader: "Najya Ahmed", track: "Fortify" },
    { name: "Dedsec", leader: "Chinmay A", track: "Fortify" },
    { name: "Final commit", leader: "Rohith G", track: "Fortify" },
    { name: "Cyber Walruses", leader: "Ayush Hegde", track: "Fortify" },
    { name: "INFINITECH", leader: "Sanath R", track: "Fortify" },
    { name: "Techies", leader: "Lokesh Ls", track: "Tech4Good" },
    { name: "Fantastic_Four", leader: "Ajey K", track: "Tech4Good" },
    { name: "The Page not Found", leader: "Somesh P", track: "Tech4Good" },
    { name: "Team Vantablack", leader: "Sarvatarshan Sankar", track: "Tech4Good" },
    { name: "Tech Titans", leader: "Mohammed Aqib Talib", track: "Tech4Good" },
    { name: "TheScreenWarriors", leader: "Shreyas A", track: "CodeCanvas" },
    { name: "The Rebellions", leader: "E Sharan Prasad", track: "CodeCanvas" },
    { name: "Master Minds", leader: "Thanmayi K", track: "CodeCanvas" },
    { name: "QUANTUM SPARKS", leader: "Soudhar Mendra", track: "CodeCanvas" },
    { name: "SLaYnTax Error", leader: "Alok Raj", track: "CodeCanvas" },
  ];

  const getDomainColor = (track) => {
    const colors = {
      "EcoUrban": "from-green-500 to-emerald-600",
      "Codecure": "from-blue-500 to-cyan-600", 
      "Fortify": "from-red-500 to-orange-600",
      "Tech4Good": "from-purple-500 to-indigo-600",
      "CodeCanvas": "from-pink-500 to-rose-600",
    };
    return colors[track] || "from-gray-500 to-gray-600";
  };

  return (
    <section id="results" className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden bg-gray-950 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#6ebe44] to-[#dddf23] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-[#dddf23] to-[#6ebe44] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-[#6ebe44]/30 to-[#dddf23]/30 rounded-full blur-2xl"></div>
      </div>

      {/* Enhanced Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-mono tracking-wider">
              QUALIFIED TEAMS
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] mx-auto mb-8"></div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Congratulations to the <span className="text-[#6ebe44] font-bold">25 teams</span> that have qualified for the main hackathon event!
            </p>
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-3 bg-green-900/30 border border-green-500/30 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-mono text-sm uppercase tracking-wider">
                Results Announced • 24th August 2024
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="text-center mb-12 relative z-10">
        <button
          onClick={() => setShowResults(!showResults)}
          className="group bg-gradient-to-r from-[#6ebe44] to-[#dddf23] text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
        >
          <svg 
            className={`w-5 h-5 transition-transform duration-300 ${showResults ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {showResults ? 'Hide Qualified Teams' : 'View Qualified Teams'}
        </button>
      </div>

      {/* Results Grid */}
      {showResults && (
        <div className="relative z-10 animate-fade-in">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualifiedTeams.map((team, index) => (
              <div
                key={index}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Rank badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#6ebe44] to-[#dddf23] rounded-full flex items-center justify-center font-bold text-black text-sm z-10 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>

                {/* Main card */}
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full hover:border-[#6ebe44]/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl relative overflow-hidden">
                  
                  {/* Domain badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4 bg-gradient-to-r ${getDomainColor(team.track)} text-white`}>
                    {team.track}
                  </div>

                  {/* Team name */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#6ebe44] transition-colors duration-300">
                    {team.name}
                  </h3>

                  {/* Team leader */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#6ebe44] to-[#dddf23] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">Team Leader</p>
                        <p className="text-white font-semibold">{team.leader}</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#dddf23] rounded-full animate-pulse opacity-50"></div>
                  <div className="absolute bottom-4 right-6 w-1 h-1 bg-[#6ebe44] rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6ebe44]/5 via-transparent to-[#dddf23]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#6ebe44]/30 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent mb-2">25</div>
              <div className="text-gray-300 text-sm">Qualified Teams</div>
            </div>
            
            <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#dddf23]/30 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#dddf23] to-[#6ebe44] bg-clip-text text-transparent mb-2">25</div>
              <div className="text-gray-300 text-sm">Team Leaders</div>
            </div>
            
            <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#6ebe44]/30 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent mb-2">5</div>
              <div className="text-gray-300 text-sm">Tracks Covered</div>
            </div>
          </div>
        </div>
      )}

      {/* Call to action for non-qualified teams */}
      <div className="text-center mt-16 relative z-10">
        <div className="max-w-2xl mx-auto bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Didn't make it this time?
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Don't worry! Keep innovating and stay tuned for future hackathons. 
            Every attempt makes you stronger! 🚀
          </p>
          <div className="inline-flex items-center space-x-4 text-gray-400 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#6ebe44] to-transparent"></div>
            <span className="font-mono tracking-wider text-xs uppercase">Never give up!</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent via-[#dddf23] to-transparent"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default Results;