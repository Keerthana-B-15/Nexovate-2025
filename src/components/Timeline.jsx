import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const events = [
  { 
    stage: "Domain & Problem Statements Released", 
    date: "14th August", 
    details: "Registrations Open • PPT submission",
    color: "border-[#6ebe44]", 
    bgColor: "bg-[#6ebe44]/10",
    icon: "📋",
    status: "active"
  },
  { 
    stage: "Registration Deadline", 
    date: "20th August", 
    details: "Final day for team registration and initial submissions",
    color: "border-red-500", 
    bgColor: "bg-red-500/10",
    icon: "⏰",
    status: "active"
  },
  { 
    stage: "Evaluation Phase", 
    date: "21st - 22nd August", 
    details: "Evaluation done on all submissions",
    color: "border-orange-500", 
    bgColor: "bg-orange-500/10",
    icon: "⚖️",
    status: "upcoming"
  },
  { 
    stage: "Results Declaration", 
    date: "23rd August, 10 AM", 
    details: "Shortlisted teams announced",
    color: "border-blue-500", 
    bgColor: "bg-blue-500/10",
    icon: "🎯",
    status: "upcoming"
  },
  { 
    stage: "Main Hackathon Event", 
    date: "29th Aug 09:30 AM - 30th Aug 4 PM", 
    details: "Presidency University, Bengaluru • 24 hours of coding",
    color: "border-[#dddf23]", 
    bgColor: "bg-[#dddf23]/10",
    icon: "🚀",
    status: "upcoming"
  },
];

const Timeline = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        bounce: 0.3
      } 
    },
  };

  // Pill Status Component
  const PillStatus = ({ status }) => {
    const getConfig = (status) => {
      switch(status) {
        case 'completed':
          return {
            bg: 'bg-emerald-500/20',
            border: 'border-emerald-400',
            text: 'text-emerald-300',
            dot: 'bg-emerald-400',
            icon: '✓'
          };
        case 'active':
          return {
            bg: 'bg-amber-500/20',
            border: 'border-amber-400',
            text: 'text-amber-300',
            dot: 'bg-amber-400 animate-pulse',
            icon: '⚡'
          };
        case 'upcoming':
          return {
            bg: 'bg-slate-500/20',
            border: 'border-slate-400',
            text: 'text-slate-300',
            dot: 'bg-slate-400',
            icon: '⏳'
          };
        default:
          return {
            bg: 'bg-gray-500/20',
            border: 'border-gray-400',
            text: 'text-gray-300',
            dot: 'bg-gray-400',
            icon: '○'
          };
      }
    };

    const config = getConfig(status);

    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider ${config.bg} ${config.text} ${config.border} border backdrop-blur-sm`}>
        <div className={`w-2 h-2 rounded-full ${config.dot}`}></div>
        <span>{config.icon}</span>
        <span>{status}</span>
      </div>
    );
  };

  return (
    <section id="timeline" className="py-20 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#6ebe44] to-[#dddf23] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-[#dddf23] to-[#6ebe44] rounded-full blur-3xl"></div>
      </div>

      {/* Enhanced Header */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-mono tracking-wider">
            TIMELINE
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Your roadmap to Nexovate 2025 • Mark your calendars
        </p>
      </div>

      <div ref={ref} className="relative">
        {/* Main timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#6ebe44] via-gray-700 to-[#dddf23] rounded-full" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative z-10"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full relative`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-20">
                <div className={`w-16 h-16 ${event.bgColor} border-4 ${event.color} rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-2xl">{event.icon}</span>
                </div>
              </div>

              {/* Event card */}
              <motion.div
                className={`group relative w-[45%] ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Arrow pointing to timeline */}
                <div className={`absolute top-8 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-4 h-4 bg-gray-900 border-l border-b border-gray-700 transform rotate-45`}></div>
                
                {/* Main card */}
                <div className={`bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-xl group-hover:border-[#6ebe44]/50 transition-all duration-300 group-hover:shadow-2xl ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  {/* Status badge - Now using PillStatus component */}
                  <div className="mb-3">
                    <PillStatus status={event.status} />
                  </div>

                  {/* Date */}
                  <div className={`text-lg font-bold mb-3 font-mono ${event.color.replace('border-', 'text-')} group-hover:scale-105 transition-transform duration-300`}>
                    {event.date}
                  </div>

                  {/* Stage title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#6ebe44] transition-colors duration-300">
                    {event.stage}
                  </h3>

                  {/* Details */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {event.details}
                  </p>

                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6ebe44]/5 via-transparent to-[#dddf23]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Bottom accent with smaller lines */}
      <div className="text-center mt-2 relative z-10">
        <div className="inline-flex items-center space-x-3 text-gray-400 text-sm">
          <div className="w-3 h-px bg-gradient-to-r from-transparent via-[#6ebe44] to-transparent"></div>
          <span className="font-mono tracking-wider text-xs uppercase px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800">
            🏆 Ready to compete?
          </span>
          <div className="w-3 h-px bg-gradient-to-l from-transparent via-[#dddf23] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;