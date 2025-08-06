const tracks = [
  {
    title: "EcoUrban – Sustainable Cities for a Smarter Tomorrow",
    desc: "Innovate for sustainable urban living.",
    subItems: [
      "Renewable Energy",
      "Smart Infrastructure (IoT)",
      "Urban Farming",
      "Eco-friendly Transport",
      "Smart Waste & Water Management",
    ],
  },
  {
    title: "CodeCure – Healthcare & Wellbeing Tech",
    desc: "Enhance healthcare with technology.",
    subItems: [
      "Remote Health Monitoring",
      "Mental Health AI",
      "Hospital Resource Management",
      "Health Dashboards",
      "Disease Forecasting",
    ],
  },
  {
    title: "Fortify – Cybersecurity & Digital Trust",
    desc: "Strengthen cybersecurity solutions.",
    subItems: [
      "Secure Authentication",
      "AI Threat Detection",
      "Data Privacy Tools",
      "Blockchain Identity",
      "Cybercrime Prevention Apps",
    ],
  },
  {
    title: "Tech4Good – Tech for Social Impact",
    desc: "Tech for positive social change.",
    subItems: [
      "NGO Tech",
      "Governance & Transparency",
      "Community Platforms",
      "Education & Empowerment",
    ],
  },
  {
    title: "Code Canvas – Open Innovation",
    desc: "Explore creative tech solutions.",
    subItems: [
      "Smart Campus Tools",
      "AR/VR Tools",
      "Productivity & Creativity Apps",
      "Social Media Platforms",
    ],
  },
];

const Tracks = () => (
  <section id="tracks" className="py-20 max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8 text-primary font-mono">Tracks</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {tracks.map((t, i) => (
        <div key={i} className="bg-accent rounded-2xl p-8 shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl mb-2 text-primary font-bold font-mono">{t.title}</h3>
          <p className="text-gray-100 mb-4">{t.desc}</p>
          <ul className="list-disc list-inside text-gray-300">
            {t.subItems.map((item, idx) => (
              <li key={idx} className="ml-4">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Tracks;