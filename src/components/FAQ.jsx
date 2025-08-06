import { useState } from "react";

const faqs = [
  { q: "Who can participate?", a: "Only UG students are eligible to participate." },
  { q: "Is there any fee?", a: "Yes, the fee is ₹800 per team for selected teams only." },
  { q: "How do teams work?", a: "Teams must consist of 4 members, with no inter-college teams allowed." },
  { q: "What is the event format?", a: "Offline hackathon with on-ground finale." },
  { q: "Where is the venue?", a: "The event will be held at Presidency University, Bengaluru." },
];

const FAQ = () => (
  <section id="faq" className="py-20 max-w-3xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-6 text-primary font-mono">FAQs</h2>
    <ul>
      {faqs.map(({ q, a }, i) => (
        <FAQItem key={i} question={q} answer={a} />
      ))}
    </ul>
  </section>
);

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="mb-4">
      <button onClick={() => setOpen((o) => !o)} className="flex justify-between w-full bg-accent px-6 py-4 rounded-xl text-left text-lg font-semibold transition hover:bg-primary/20">
        {question} <span>{open ? "-" : "+"}</span>
      </button>
      <div className={`transition-all ease-in duration-200 ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <p className="mt-3 px-6 text-gray-200">{answer}</p>
      </div>
    </li>
  );
}

export default FAQ;