import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Instagram, Github, Dribbble, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Coaching Plans', to: '/coaching-plans' },
    { name: 'Trainers', to: '/trainers' },
    { name: 'Gallery', to: '/gallery' },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com' },
    { icon: <Dribbble className="w-5 h-5" />, href: 'https://dribbble.com' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com' },
  ];

  return (
    <nav className="sticky top-0 bg-[#ffffff]/95 backdrop-blur-md text-neutral-900 px-6 md:px-12 py-4 z-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <NavLink to="/" className="text-xl font-bold tracking-wide text-neutral-950 hover:opacity-80 transition-opacity">
          Fit<span>Qube</span>
        </NavLink>

        <div className="hidden md:flex items-center space-x-10 text-[15px] font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive ? 'text-[#2a9d8f] font-semibold' : 'text-neutral-500 hover:text-neutral-950'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-5 text-neutral-400">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-neutral-950 transition-colors duration-200 transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="md:hidden text-neutral-600 hover:text-neutral-950 transition-colors focus:outline-none cursor-pointer"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-xs md:hidden transition-opacity duration-300 z-50 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#ffffff] border-l border-neutral-100 z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-neutral-400 hover:text-neutral-950 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-6 my-auto pl-4">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                group flex items-center gap-2 text-xl font-medium tracking-wide transition-all duration-200
                ${isActive ? 'text-[#2a9d8f] translate-x-2' : 'text-neutral-400 hover:text-neutral-950 hover:translate-x-1'}
              `}
            >
              {({ isActive }) => (
                <>
                  <div className={`transition-all duration-300 ${isActive ? 'w-5 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
                    <ArrowUpRight className="w-5 h-5 text-[#2a9d8f]" />
                  </div>
                  <span className={isActive ? 'border-b-2 border-[#2a9d8f] pb-0.5' : ''}>
                    {link.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Social Icons */}
        <div className="flex items-center space-x-6 pl-4 pb-4 text-neutral-400">
          {socialLinks.map((social, index) => (
            <Link 
              key={index} 
              to={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-neutral-950 transition-colors duration-200"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;