import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Calendar, Trophy, Shield, FileText, Clock, MapPin, Code } from 'lucide-react';

const RulesSection = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const rulesSections = [
    {
      id: 'about',
      title: 'About the Hackathon',
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Nexovate'25 is a 24-hour national-level cross-domain hackathon aimed at empowering students to solve real-world challenges through innovation, creativity, and rapid prototyping.
          </p>
          <p className="text-gray-300">
            The event focuses on technology-driven problem-solving across diverse tracks such as Sustainability, Healthcare, Cybersecurity, and Social Impact. Participants work in teams to develop functional prototypes or impactful ideas evaluated by industry experts and researchers.
          </p>
        </div>
      )
    },
    {
      id: 'team',
      title: 'Team Composition',
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-gray-300">Teams must consist of exactly 4 undergraduate students</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-gray-300">Interdisciplinary and cross-institutional teams are encouraged</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-gray-300">Each student can participate in only one team</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-gray-300">No changes to team members are allowed after registration</p>
          </div>
        </div>
      )
    },
    {
      id: 'registration',
      title: 'Registration & Selection Process',
      icon: <Calendar className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-green-500 font-semibold mb-3">Registration</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Teams must register exclusively via Unstop</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Registration is free for all applicants</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Each team must upload a project proposal using the official PPT template</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Only one submission per team is allowed</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-green-500 font-semibold mb-3">Selection</h4>
            <div className="space-y-3">
              <p className="text-gray-300">A total of 25 teams will be shortlisted (5 teams per track) based on:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-300">Innovation & Originality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-300">Relevance to Chosen Theme</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-300">Practical Feasibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-300">Social or Technological Impact</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-green-500 font-semibold mb-3">Post-Shortlisting Requirements</h4>
            <div className="bg-gray-800 p-4 rounded-lg space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Join the official WhatsApp group</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Pay a non-refundable fee of ₹800 per team</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Submit a signed Parental Consent Form (mandatory for all team members)</p>
              </div>
              <p className="text-red-400 text-sm font-medium mt-3">
                ⚠️ Failure to complete any of these steps by the deadline will result in automatic disqualification
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'schedule',
      title: 'Event Schedule & Logistics',
      icon: <Clock className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-green-500 font-semibold mb-3">Venue & Access</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1" />
                <p className="text-gray-300">The hackathon will take place in-person at Presidency University, Bengaluru</p>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-red-500 mt-1" />
                <p className="text-gray-300">Participants will not be allowed to leave campus during the hackathon for safety and integrity reasons</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-green-500 font-semibold mb-3">Facilities Provided</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📶</div>
                <p className="text-gray-300 text-sm">Wi-Fi access for all participants</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-gray-300 text-sm">24-hour power backup</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🏢</div>
                <p className="text-gray-300 text-sm">Secure working spaces and rest zones</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-green-500 font-semibold mb-3">Food & Refreshments</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="text-white font-medium mb-2">Day 1</h5>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>• Lunch</p>
                  <p>• Dinner</p>
                  <p>• Midnight snacks</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="text-white font-medium mb-2">Day 2</h5>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>• Breakfast</p>
                  <p>• Lunch</p>
                  <p>• Beverages/Snacks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'development',
      title: 'Project Development Rules',
      icon: <Code className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-gray-300">Teams may brainstorm and ideate before the event, but all implementation (coding, design, hardware assembly) must begin only after the hackathon starts</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-gray-300">Both software and hardware projects are allowed</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-gray-300">The use of Open-source libraries, APIs, Public datasets is permitted with proper attribution</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
            <p className="text-gray-300">Plagiarism in any form or submitting previously completed work is not allowed</p>
          </div>
          <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-200 font-medium">Submission Requirements:</p>
            <p className="text-gray-300 mt-2">Each team must submit source code repo on GitHub or equivalent, and create an optional demo video or presentation. Submissions must be completed by the end of the 24-hour period.</p>
          </div>
        </div>
      )
    },
    {
      id: 'judging',
      title: 'Judging Process',
      icon: <Trophy className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-gray-300">A panel of 5 expert judges (one per track) from industry will evaluate all teams in their respective tracks.</p>
            <p className="text-gray-300">A live pitching/demo round will be held after the build phase, where the top team from each track will present their solution to all jury members.</p>
          </div>
          <div>
            <h4 className="text-green-500 font-semibold mb-4">Judging Criteria</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                <span className="text-white">Innovation & Creativity</span>
                <span className="text-green-500 font-bold">25%</span>
              </div>
              <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                <span className="text-white">Technical Complexity</span>
                <span className="text-green-500 font-bold">25%</span>
              </div>
              <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                <span className="text-white">Relevance to Track</span>
                <span className="text-green-500 font-bold">20%</span>
              </div>
              <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                <span className="text-white">Implementation & Functionality</span>
                <span className="text-green-500 font-bold">20%</span>
              </div>
              <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                <span className="text-white">Presentation & Communication</span>
                <span className="text-green-500 font-bold">10%</span>
              </div>
            </div>
          </div>
          <div className="bg-red-900/30 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-200 font-medium">Important Note:</p>
            <p className="text-gray-300 mt-2">Judges' decisions are final and non-negotiable.</p>
          </div>
        </div>
      )
    },
    {
      id: 'awards',
      title: 'Awards & Recognition',
      icon: <Trophy className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-green-500 mb-2">₹1,00,000</h4>
            <p className="text-gray-300">Total Cash Prize Pool</p>
          </div>

          <div>
            <h4 className="text-green-500 font-semibold mb-3">Additional Perks</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Winners will be announced during closing ceremony</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Certificates will be provided for all participants</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Opportunities to network with judges, mentors, and guests for potential incubation/follow-up support</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'conduct',
      title: 'Code of Conduct & Disqualification',
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-green-900/30 border-l-4 border-green-500 p-4 rounded">
            <h4 className="text-green-400 font-semibold mb-3">Expected Behaviour</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Maintain professionalism and respect with peers, mentors, and staff</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Follow all campus, event, and hackathon rules</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Cooperate with volunteers and organizers at all times</p>
              </div>
            </div>
          </div>

          <div className="bg-red-900/30 border-l-4 border-red-500 p-4 rounded">
            <h4 className="text-red-400 font-semibold mb-3">Prohibited Behaviour</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Harassment, discrimination, or inappropriate conduct</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Use of alcohol, tobacco, or banned substances</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Leaving the venue without approval</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Plagiarism, cheating, or code misrepresentation</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="text-yellow-400 font-semibold mb-3">Consequences</h4>
            <div className="space-y-2">
              <p className="text-gray-300">• Immediate disqualification</p>
              <p className="text-gray-300">• Removal from campus</p>
              <p className="text-gray-300">• Notification to home institution (if required)</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-white">RULES & </span>
            <span className="text-green-500">GUIDELINES</span>
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know to participate in Nexovate 2025
          </p>
        </div>

        {/* Rules Sections */}
        <div className="max-w-4xl mx-auto space-y-4">
          {rulesSections.map((section, index) => (
            <div key={section.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg">
                    <div className="text-green-500">
                      {section.icon}
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                    <div className="text-sm text-green-500 font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
                <div className="text-green-500">
                  {openSections[section.id] ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </div>
              </button>
              
              {openSections[section.id] && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-800 pt-6">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-green-500 mb-4">Need Help?</h3>
          <p className="text-gray-300 mb-4">
            For any queries or support, reach out to us:
          </p>
          <a 
            href="mailto:harvestclub.presidency@gmail.com" 
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <span>📧</span>
            <span>harvestclub.presidency@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RulesSection;