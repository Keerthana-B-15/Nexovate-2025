import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const events = [
  { stage: "Domain and Problem Statements Released", date: "31 July - 1 Aug", color: "border-primary", hoverColor: "hsl(90, 70%, 70%)" },
  { stage: "Idea Submission Deadline", date: "31st August", color: "border-pink-500", hoverColor: "hsl(340, 70%, 70%)" },
  { stage: "Results Announcement", date: "2nd Week of September", color: "border-primary", hoverColor: "hsl(90, 70%, 70%)" },
];

const Timeline = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="timeline" className="py-20 px-6 max-w-4xl mx-auto bg-dark">
      <h2 className="text-4xl font-bold mb-12 text-secondary text-center font-mono tracking-wider">TIMELINE</h2>
      <div ref={ref} className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700" />
        {events.map((ev, i) => (
          <motion.div
            key={i}
            className={`mb-16 flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={itemVariants}
          >
            <motion.div
              className={`p-4 rounded-xl w-[45%] text-${i % 2 === 0 ? 'left' : 'right'} ${ev.color}`}
              style={{ borderWidth: '4px', borderStyle: 'solid', borderColor: 'transparent' }}
              whileHover={{ borderColor: ev.hoverColor }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-primary text-sm font-mono">{ev.date}</p>
              <p className="text-gray-300 text-lg font-semibold mt-2">{ev.stage}</p>
              {i === 1 && <p className="text-gray-500 text-sm mt-1">Registration Closes (Can be extended if needed)</p>}
              {i === 0 && <p className="text-gray-500 text-sm mt-1">Registrations Open PPT submission and voice over</p>}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;