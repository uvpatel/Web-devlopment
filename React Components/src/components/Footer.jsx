import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Smart Tourist Safety</h2>
          <p className="mt-2 text-sm">Your intelligent companion for safe and smart travel.</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to="/features" className="hover:text-white">Features</Link></li>
            <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-500" /> 
              <a href="mailto:uvpatel7271@gmail.com" className="hover:text-white">uvpatel7271@gmail.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-blue-500" /> 
              <span>+91 9016056853</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-500" /> 
              <span>Anklav, Anand, Gujarat</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        <p>© {new Date().getFullYear()} Smart Tourist Safety. All rights reserved.</p>
        <p className="mt-1">Created by <span className="text-blue-400">Urvil Patel</span></p>
      </div>
    </footer>
  );
};

export default Footer;
