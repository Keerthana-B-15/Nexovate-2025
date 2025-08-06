import logo from '../assests/logo.png';

const Navbar = () => (
  <header className="flex items-center justify-between px-6 py-3 bg-gray-900/80 border-b border-gray-800/30 backdrop-blur-md rounded-b-xl mx-6 mt-4 sticky top-0 z-50 shadow-lg">
    <div className="text-2xl font-bold text-green-400 tracking-wider">Nexovate 2025</div>
    <nav className="flex space-x-8 text-gray-300 font-semibold text-sm">
      <a href="#home" className="hover:text-green-400 transition-colors duration-200">HOME</a>
      <a href="#about" className="hover:text-green-400 transition-colors duration-200">About</a>
      <a href="#tracks" className="hover:text-green-400 transition-colors duration-200">Tracks</a>
      <a href="#timeline" className="hover:text-green-400 transition-colors duration-200">Timeline</a>
      <a href="#sponsors" className="hover:text-green-400 transition-colors duration-200">SPONSORS</a>
      <a href="#team" className="hover:text-green-400 transition-colors duration-200">TEAM</a>
      <a href="#prizes" className="hover:text-green-400 transition-colors duration-200">Prizes</a>
      <a href="#faq" className="hover:text-green-400 transition-colors duration-200">FAQ</a>
      <a href="#download" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-200">DOWNLOAD PPT FORMAT</a>
    </nav>
  </header>
);

export default Navbar;