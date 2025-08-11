import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setShowForm(false);
    }, 1500);
  };

  return (
    <>
      <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-br from-[#6ebe44] to-[#dddf23] rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-tl from-[#dddf23] to-[#6ebe44] rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Nexovate Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#6ebe44] to-[#dddf23] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">N</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent font-mono">
                  Nexovate 2025
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The ultimate hackathon experience bringing together innovators to solve real-world challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4 font-mono">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-[#6ebe44] transition-colors duration-300 text-sm">About</a>
                <a href="#timeline" className="block text-gray-400 hover:text-[#6ebe44] transition-colors duration-300 text-sm">Timeline</a>
                <a href="#prizes" className="block text-gray-400 hover:text-[#6ebe44] transition-colors duration-300 text-sm">Prizes</a>
                <a href="#sponsors" className="block text-gray-400 hover:text-[#6ebe44] transition-colors duration-300 text-sm">Sponsors</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-4 font-mono">Get in Touch</h4>
              <div className="space-y-3">
                <button
                  onClick={() => setShowForm(true)}
                  className="group bg-gradient-to-r from-[#6ebe44] to-[#dddf23] text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto md:ml-auto"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Us
                </button>
                
                <a 
                  href="mailto:contact@nexovate.com" 
                  className="block text-gray-400 hover:text-[#dddf23] transition-colors duration-300 text-sm"
                >
                  📧 contact@nexovate.com
                </a>
                
                <div className="text-gray-400 text-sm">
                  📍 Presidency University, Bengaluru
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400 font-mono text-sm mb-4">
              © {new Date().getFullYear()} Nexovate Hackathon. All rights reserved.
            </p>
            
            {/* Social links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/company/officialharvestclub/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-[#6ebe44] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/harvest_club_official/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-[#6ebe44] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.999.016 6.767.072 5.538.127 4.717.347 3.999.663c-.789.306-1.459.717-2.126 1.384S.669 3.21.663 3.999C.347 4.717.127 5.538.072 6.767.016 7.999 0 8.396 0 12.017s.016 4.018.072 5.25c.055 1.229.275 2.05.591 2.768.306.789.717 1.459 1.384 2.126.667.666 1.337 1.079 2.126 1.384.718.316 1.539.536 2.768.591 1.232.056 1.629.072 5.25.072s4.018-.016 5.25-.072c1.229-.055 2.05-.275 2.768-.591.789-.305 1.459-.718 2.126-1.384.666-.667 1.079-1.337 1.384-2.126.316-.718.536-1.539.591-2.768.056-1.232.072-1.629.072-5.25s-.016-4.018-.072-5.25c-.055-1.229-.275-2.05-.591-2.768-.305-.789-.718-1.459-1.384-2.126C19.482.669 18.812.347 18.023.591c-.718-.316-1.539-.536-2.768-.591C14.018.016 13.621 0 12.017 0zM12.017 2.162c3.566 0 3.988.013 5.393.067 1.301.059 2.008.274 2.478.456.623.242 1.067.532 1.534.999.466.466.756.91.999 1.534.182.47.397 1.177.456 2.478.054 1.405.067 1.827.067 5.393s-.013 3.988-.067 5.393c-.059 1.301-.274 2.008-.456 2.478a4.138 4.138 0 01-.999 1.534c-.467.466-.911.756-1.534.999-.47.182-1.177.397-2.478.456-1.405.054-1.827.067-5.393.067s-3.988-.013-5.393-.067c-1.301-.059-2.008-.274-2.478-.456-.623-.242-1.067-.532-1.534-.999a4.138 4.138 0 01-.999-1.534c-.182-.47-.397-1.177-.456-2.478-.054-1.405-.067-1.827-.067-5.393s.013-3.988.067-5.393c.059-1.301.274-2.008.456-2.478.242-.623.532-1.067.999-1.534.466-.467.91-.757 1.534-.999.47-.182 1.177-.397 2.478-.456 1.405-.054 1.827-.067 5.393-.067z"/>
                  <path d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a3.838 3.838 0 110-7.676 3.838 3.838 0 010 7.676zM18.247 4.155a1.441 1.441 0 11-2.883 0 1.441 1.441 0 012.883 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal - Moved outside footer for proper layering */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" style={{ zIndex: 9999 }}>
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#6ebe44] to-[#dddf23] bg-clip-text text-transparent">
              Contact Us
            </h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6ebe44] focus:border-transparent outline-none text-white transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6ebe44] focus:border-transparent outline-none text-white transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6ebe44] focus:border-transparent outline-none text-white transition-all duration-300 resize-none"
                  placeholder="Your message or inquiry..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6ebe44] to-[#dddf23] text-black font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;