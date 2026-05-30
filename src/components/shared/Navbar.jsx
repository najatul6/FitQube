import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Instagram, Github, Dribbble, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Studio', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Github className="w-5 h-5" />, href: '#' },
    { icon: <Dribbble className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
  ];

  return (
    <nav className="bg-[#000000] text-white px-6 md:px-12 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <a href="#" className="text-xl font-semibold tracking-wide hover:opacity-80 transition-opacity">
          Logo
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center space-x-10 text-[15px] font-medium text-gray-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP SOCIAL ICONS */}
        <div className="hidden md:flex items-center space-x-5 text-gray-300">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} className="hover:text-white transition-colors">
              {social.icon}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="md:hidden text-gray-300 hover:text-white transition-colors focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {/* ব্যাকগ্রাউন্ড ব্লার ইফেক্ট যদি চান তবে bg-black/40 এর সাথে backdrop-blur-sm যোগ করতে পারেন */}
      <div 
        className={`fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE DRAWER BODY */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#000000] border-l border-neutral-900 z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-gray-400 hover:text-white transition-colors focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-6 my-auto pl-4">
          {navLinks.map((link, index) => {
            const isFirst = index === 0;
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`group flex items-center gap-2 text-xl font-medium tracking-wide transition-colors ${
                  isFirst ? 'text-white' : 'text-neutral-500 hover:text-white'
                }`}
              >
                {isFirst && <ArrowUpRight className="w-5 h-5 text-white" />}
                <span className={isFirst ? 'border-b border-white pb-0.5' : ''}>
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Mobile Social Icons */}
        <div className="flex items-center space-x-6 pl-4 pb-4 text-neutral-400">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} className="hover:text-white transition-colors">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;