const prizes = [
  { title: "1st Prize", desc: "₹50,000 + Swags", color: "bg-gradient-to-r from-primary to-accent" },
  { title: "2nd Prize", desc: "₹30,000 + Swags", color: "bg-gradient-to-r from-accent to-primary" },
  { title: "3rd Prize", desc: "₹20,000 + Swags", color: "bg-gradient-to-r from-accent to-primary" },
];

const Prizes = () => (
  <section id="prizes" className="py-20 px-6 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-primary font-mono">Prizes</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {prizes.map((p, i) => (
        <div key={i} className={`text-center rounded-2xl p-8 shadow-lg ${p.color} hover:scale-105 transition`}>
          <h3 className="text-2xl mb-2 text-dark font-mono font-bold">{p.title}</h3>
          <p className="text-lg text-dark">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Prizes;
