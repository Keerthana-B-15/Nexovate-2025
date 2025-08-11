import { useState } from "react";

const faqs = [
  { q: "Who can participate?", a: "Only UG students are eligible to participate." },
  { q: "Is there any fee?", a: "Yes, the fee is ₹800 per team for shortlisted teams only." },
  { q: "How do teams work?", a: "Teams must consist of 4 members, and interdisciplinary as well as cross-institutional teams are encouraged." },
  { q: "What is the event format?", a: "24 hours Offline Hackathon." },
  { q: "Where is the venue?", a: "The event will be held at Presidency University, Bengaluru." },
];



const FAQ = () => (
  <section id="faq" className="py-20 max-w-4xl mx-auto px-6">
    {/* Enhanced Header */}
    <div className="text-center mb-16">
      <div className="inline-block relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-mono tracking-wider">
          FAQs
        </h2>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-[#dddf23] rounded-full"></div>
      </div>
      <p className="text-gray-300 mt-6 text-lg">
        Got questions? We've got answers!
      </p>
    </div>

    {/* FAQ List */}
    <div className="space-y-4">
      {faqs.map(({ q, a }, i) => (
        <FAQItem key={i} question={q} answer={a} index={i} />
      ))}
    </div>

    {/* Bottom Decoration */}
    <div className="text-center mt-16">
      <div className="inline-flex items-center space-x-4 text-gray-400 text-sm">
        <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary"></div>
        <span className="font-mono tracking-wider text-xs uppercase">Still have questions? Contact us!</span>
        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#dddf23]"></div>
      </div>
    </div>
  </section>
);

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="group relative">
      {/* Animated Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-[#dddf23]/20 to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      
      <div className="relative bg-accent rounded-xl border border-gray-700/50 group-hover:border-primary/30 transition-all duration-300 overflow-hidden">
        {/* Question Button */}
        <button 
          onClick={() => setOpen(o => !o)} 
          className="flex justify-between items-center w-full px-6 py-5 text-left transition-all duration-300 group-hover:bg-primary/5 relative z-10"
        >
          <div className="flex items-center gap-4">
            {/* Question Number */}
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-sm">
              {String(index + 1).padStart(2, '0')}
            </div>
            <span className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
              {question}
            </span>
          </div>
          
          {/* Enhanced Toggle Icon */}
          <div className={`text-primary transition-all duration-300 ${open ? 'rotate-180 text-[#dddf23]' : 'rotate-0'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Answer Container with Improved Animation */}
        <div className={`transition-all ease-in-out duration-300 ${
          open 
            ? "max-h-48 opacity-100 pb-6" 
            : "max-h-0 opacity-0 pb-0 overflow-hidden"
        }`}>
          <div className="px-6">
            {/* Decorative Line */}
            <div className="w-full h-px bg-gradient-to-r from-primary/40 via-[#dddf23]/40 to-transparent mb-4"></div>
            
            {/* Answer Text with Icon */}
            <div className="flex gap-4">
              <div className="w-1 h-auto bg-gradient-to-b from-primary to-[#dddf23] rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-gray-200 leading-relaxed text-base">
                {answer}
              </p>
            </div>
          </div>
        </div>

        {/* Subtle Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-[#dddf23]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
      </div>
    </div>
  );
}

export default FAQ;