import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertCircle } from 'lucide-react';

// Announcement Banner Component
const AnnouncementBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#6ebe44] via-red-500 to-[#dddf23] text-white py-4 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-lg">LIVE UPDATE</span>
          </div>
          <div className="hidden md:block w-1 h-8 bg-white/50"></div>
          <div className="text-sm md:text-base font-medium text-center">
            Kindly wait for the shortlisted teams announcement. We will ensure to make the announcement as soon as possible. We thank you for your patience.
          </div>
        </div>
      </div>
    </div>
  );
};

const events = [
  { 
    stage: "Tracks are Released", 
    date: "14th August", 
    details: "Registrations Open • PPT submission",
    color: "border-[#6ebe44]", 
    bgColor: "bg-[#6ebe44]/10",
    icon: "📋",
    status: "completed"
  },
  { 
    stage: "Registration Deadline", 
    date: "21st August, 11:59 PM", 
    details: "Final day for team registration and initial submissions",
    color: "border-red-500", 
    bgColor: "bg-red-500/10",
    icon: "⏰",
    status: "completed"
  },
  { 
    stage: "Evaluation Phase", 
    date: "22nd - 23rd August", 
    details: "Evaluation done on all submissions",
    color: "border-orange-500", 
    bgColor: "bg-orange-500/10",
    icon: "⚖️",
    status: "completed"
  },
  { 
    stage: "Results Declaration", 
    date: "24th August, 10 AM", 
    details: "Shortlisted teams announcement - HAPPENING SOON!",
    color: "border-red-500", 
    bgColor: "bg-gradient-to-r from-red-500/10 to-[#dddf23]/10",
    icon: "🎯",
    status: "pending-today"
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

  // Enhanced Pill Status Component
  const PillStatus = ({ status }) => {
    const getConfig = (status) => {
      switch(status) {
        case 'completed':
          return {
            bg: 'bg-emerald-500/20',
            border: 'border-emerald-400',
            text: 'text-emerald-300',
            dot: 'bg-emerald-400',
            icon: '✓',
            label: 'COMPLETED'
          };
        case 'pending-today':
          return {
            bg: 'bg-gradient-to-r from-red-500/20 to-[#dddf23]/20',
            border: 'border-red-400',
            text: 'text-red-300',
            dot: 'bg-gradient-to-r from-red-400 to-[#dddf23] animate-pulse',
            icon: '⚡',
            label: 'LIVE NOW'
          };
        case 'active':
          return {
            bg: 'bg-amber-500/20',
            border: 'border-amber-400',
            text: 'text-amber-300',
            dot: 'bg-amber-400 animate-pulse',
            icon: '⚡',
            label: 'ACTIVE'
          };
        case 'upcoming':
          return {
            bg: 'bg-slate-500/20',
            border: 'border-slate-400',
            text: 'text-slate-300',
            dot: 'bg-slate-400',
            icon: '⏳',
            label: 'UPCOMING'
          };
        default:
          return {
            bg: 'bg-gray-500/20',
            border: 'border-gray-400',
            text: 'text-gray-300',
            dot: 'bg-gray-400',
            icon: '○',
            label: 'PENDING'
          };
      }
    };

    const config = getConfig(status);

    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider ${config.bg} ${config.text} ${config.border} border backdrop-blur-sm`}>
        <div className={`w-2 h-2 rounded-full ${config.dot}`}></div>
        <span>{config.icon}</span>
        <span>{config.label}</span>
      </div>
    );
  };

  return (
    <>
      <AnnouncementBanner />
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
            Your roadmap to Nexovate 2025 • <span className="text-[#dddf23] font-bold">Live Status Updates</span>
          </p>
        </div>

        {/* Current Status Alert */}
        <div className="mb-16 bg-gradient-to-r from-red-500/10 via-[#6ebe44]/10 to-[#dddf23]/10 border border-red-400/30 rounded-2xl p-6 relative z-10">
          <div className="flex items-center justify-center gap-4 text-center">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-[#dddf23] rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-8 h-8 bg-red-500/30 rounded-full animate-ping"></div>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-white mb-2">🎯 Shortlist Announcements In Progress</h3>
              <p className="text-gray-300 text-lg">
                We will soon announce the selected teams. <span className="text-[#dddf23] font-bold">Check your inbox!</span>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                📧 Official Notifications will be sent out soon
              </p>
            </div>
          </div>
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
                {/* Enhanced Timeline dot for Results Declaration */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-20">
                  <div className={`w-16 h-16 ${event.bgColor} border-4 ${event.color} rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-all duration-300 ${
                    event.status === 'pending-today' ? 'animate-bounce shadow-red-500/50' : ''
                  }`}>
                    <span className="text-2xl">{event.icon}</span>
                  </div>
                  {/* Extra highlight for today's event */}
                  {event.status === 'pending-today' && (
                    <div className="absolute inset-0 w-16 h-16 border-2 border-red-400 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Event card */}
                <motion.div
                  className={`group relative w-[45%] ${index % 2 === 0 ? 'mr-8' : 'ml-8'} ${
                    event.status === 'pending-today' ? 'transform scale-105' : ''
                  }`}
                  whileHover={{ scale: event.status === 'pending-today' ? 1.08 : 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Arrow pointing to timeline */}
                  <div className={`absolute top-8 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-4 h-4 bg-gray-900 border-l border-b border-gray-700 transform rotate-45`}></div>
                  
                  {/* Main card with special styling for today's event */}
                  <div className={`bg-gray-900/60 backdrop-blur-sm border rounded-2xl p-6 shadow-xl transition-all duration-300 group-hover:shadow-2xl ${index % 2 === 0 ? 'text-left' : 'text-right'} ${
                    event.status === 'completed' 
                      ? 'border-emerald-600/50 group-hover:border-emerald-500/70' 
                      : event.status === 'pending-today'
                      ? 'border-red-500/70 group-hover:border-red-400/90 shadow-red-500/20'
                      : 'border-gray-800 group-hover:border-[#6ebe44]/50'
                  }`}>
                    {/* Status badge */}
                    <div className="mb-3">
                      <PillStatus status={event.status} />
                      {event.status === 'pending-today' && (
                        <div className="mt-2">
                          <span className="inline-block bg-gradient-to-r from-red-500 to-[#dddf23] text-white text-xs px-3 py-1 rounded-full animate-pulse font-bold">
                            🔥 IN PROGRESS
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Date with special highlighting for today */}
                    <div className={`text-lg font-bold mb-3 font-mono transition-transform duration-300 ${
                      event.status === 'completed' 
                        ? 'text-emerald-400' 
                        : event.status === 'pending-today'
                        ? 'text-transparent bg-gradient-to-r from-red-400 to-[#dddf23] bg-clip-text animate-pulse text-xl'
                        : event.color.replace('border-', 'text-')
                    } ${event.status !== 'completed' ? 'group-hover:scale-105' : ''}`}>
                      {event.date}
                      {event.status === 'pending-today' && (
                        <span className="ml-2 text-sm bg-gradient-to-r from-red-500 to-[#dddf23] text-white px-3 py-1 rounded-full animate-pulse">
                          LIVE
                        </span>
                      )}
                    </div>

                    {/* Stage title */}
                    <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                      event.status === 'completed' 
                        ? 'text-gray-300' 
                        : event.status === 'pending-today'
                        ? 'text-red-300 font-bold'
                        : 'text-white group-hover:text-[#6ebe44]'
                    }`}>
                      {event.stage}
                    </h3>

                    {/* Details */}
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      event.status === 'completed' 
                        ? 'text-gray-500' 
                        : event.status === 'pending-today'
                        ? 'text-red-200 font-medium'
                        : 'text-gray-400 group-hover:text-gray-300'
                    }`}>
                      {event.details}
                    </p>

                    {/* Special message for today's event */}
                    {event.status === 'pending-today' && (
                      <div className="mt-4 p-3 bg-gradient-to-r from-red-500/10 via-[#6ebe44]/5 to-[#dddf23]/10 rounded-lg border border-red-500/30">
                        <p className="text-red-300 font-semibold text-sm">
                          🔔 Announcements are being sent out soon!
                        </p>
                      </div>
                    )}

                    {/* Decorative gradient overlay */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                      event.status === 'pending-today' 
                        ? 'bg-gradient-to-br from-red-500/10 via-[#6ebe44]/5 to-[#dddf23]/10'
                        : 'bg-gradient-to-br from-[#6ebe44]/5 via-transparent to-[#dddf23]/5'
                    }`}></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Enhanced bottom accent */}
        <div className="text-center mt-12 relative z-10">
          <div className="inline-flex items-center space-x-3 text-gray-400 text-sm">
            <div className="w-3 h-px bg-gradient-to-r from-transparent via-[#6ebe44] to-transparent"></div>
            <span className="font-mono tracking-wider text-xs uppercase px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800">
              🏆 Just 5 days until the Main Event!
            </span>
            <div className="w-3 h-px bg-gradient-to-l from-transparent via-[#dddf23] to-transparent"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;