
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Camera } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Camera className="h-8 w-8 text-teal mr-2" />
          <span className="text-xl font-bold">RK Studio</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-teal transition-colors">Home</Link>
          <Link to="/portfolio" className="font-medium hover:text-teal transition-colors">Portfolio</Link>
          <Link to="/about" className="font-medium hover:text-teal transition-colors">About</Link>
          <Link to="/booking" className="font-medium hover:text-teal transition-colors">Book Now</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-dark" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-md absolute top-full left-0 right-0 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-medium py-2 hover:text-teal transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/portfolio" className="font-medium py-2 hover:text-teal transition-colors" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/about" className="font-medium py-2 hover:text-teal transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/booking" className="font-medium py-2 hover:text-teal transition-colors" onClick={toggleMenu}>Book Now</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
