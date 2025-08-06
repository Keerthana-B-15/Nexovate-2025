const sponsors = [
  { name: "OpenAI", logo: "", url: "#" }, // Put the sponsor logo paths in assets, or use placeholders
  { name: "GitHub", logo: "", url: "#" },
  { name: "Polygon", logo: "", url: "#" },
];

const Sponsors = () => (
  <section id="sponsors" className="py-20 max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8 text-primary font-mono">Sponsors</h2>
    <div className="grid md:grid-cols-3 gap-8 items-center">
      {sponsors.map((s, i) => (
        <a href={s.url} key={i} className="bg-accent py-8 px-6 rounded-xl flex flex-col items-center hover:scale-105 transition">
          {/* <img src={s.logo} alt={s.name} className="h-12 mb-2" /> */}
          <span className="text-xl font-mono text-primary">{s.name}</span>
        </a>
      ))}
    </div>
  </section>
);

export default Sponsors;
