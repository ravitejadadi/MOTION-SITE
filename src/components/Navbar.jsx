import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoIcon from '../assets/logo-icon.png';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img 
            src={logoIcon} 
            alt="Logo" 
            className="h-12 w-12 object-contain"
          />
        </div>

        {/* Center: Navigation links */}
        <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1">
          {["Home", "Services", "Work", "Process", "Pricing"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <button className="bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium flex items-center gap-1 hover:bg-white/90 transition-all">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Dummy Spacer for Centering or Mobile Menu */}
        <div className="md:hidden">
            {/* Mobile menu button could go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
