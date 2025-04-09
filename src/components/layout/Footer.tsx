
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RK Studio</h3>
            <p className="text-gray-300 mb-4">
              Capturing life's most precious moments with artistry and passion. Your story deserves to be told beautifully.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-teal transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-teal transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-teal transition-colors">About</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-teal transition-colors">Book a Session</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-teal transition-colors">Wedding Photography</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal transition-colors">Portrait Sessions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal transition-colors">Commercial Photography</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal transition-colors">Event Coverage</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-teal" />
                <a href="mailto:contact@rkstudio.com" className="text-gray-300 hover:text-teal transition-colors">contact@rkstudio.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-teal" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-teal transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-teal" />
                <span className="text-gray-300">123 Shutter Lane, Photo City, PC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RK Studio Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
