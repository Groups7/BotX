import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-filter backdrop-blur-md ${
      isScrolled 
        ? 'bg-black/80 border-b border-green-400/30 shadow-2xl shadow-green-400/10' 
        : 'bg-black/60 border-b border-gray-800/50'
    }`}>
     <div className="flex items-center gap-2 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-8xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
        <div className="flex items-center gap-2 animate-fade-in">
            <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center glow-effect hover:scale-110 transition-all duration-300">
              <Bot className="w-5 h-5 text-black font-bold" />
            </div>
            <span className="text-white font-bold text-xl">Bot<span className="text-green-400">X</span></span>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className={`transition-all duration-300 hover:scale-105 relative group ${
              location.pathname === '/' ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
            }`}>
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/products" className={`transition-all duration-300 hover:scale-105 relative group ${
              location.pathname === '/products' ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
            }`}>
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
             <Link to="/Performance" className={`transition-all duration-300 hover:scale-105 relative group ${
              location.pathname === '/Performance' ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
            }`}>
              Performance
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/About" className={`transition-all duration-300 hover:scale-105 relative group ${
              location.pathname === '/About' ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
            }`}>
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
           <Link to="/blog" className={`transition-all duration-300 hover:scale-105 relative group ${
              location.pathname === '/blog' ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
            }`}>
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
             <Link to="/contact" className={`transition-all duration-300 hover:scale-105 relative group ${
              location.pathname === '/contact' ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
            }`}>
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="btn-primary hover-lift relative overflow-hidden">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="w-6 h-6 transition-transform duration-300 rotate-90" /> : 
              <Menu className="w-6 h-6 transition-transform duration-300" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-800">
            <nav className="flex flex-col gap-4">
                <Link to="/" className={`transition-all duration-300 hover:translate-x-2 ${
                location.pathname === '/' ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
              }`}>
                Home
              </Link>
              <Link to="/products" className={`transition-all duration-300 hover:translate-x-2 ${
                location.pathname === '/products' ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
              }`}>
                Products
              </Link>
              <a href="#performance" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-2">
                Performance
              </a>
              <Link to="/about" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-2">
                About
              </Link>
              <Link to="/blog" className={`transition-all duration-300 hover:translate-x-2 ${
                location.pathname === '/blog' ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
              }`}>
                Blog
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-2">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-800">
                <button className="bg-green-400 hover:bg-green-500 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 w-fit hover:scale-105 glow-effect">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;