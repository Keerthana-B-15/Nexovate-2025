const Footer = () => (
  <footer className="bg-accent bg-opacity-90 py-6 text-center text-gray-300 font-mono">
    <p>© {new Date().getFullYear()} Nexovate Hackathon. All rights reserved.</p>
    <div className="mt-2 flex justify-center space-x-4">
      {/* Add social icons as needed */}
      <a href="mailto:contact@nxkovate.com" className="hover:text-primary">Contact</a>
    </div>
  </footer>
);

export default Footer;
