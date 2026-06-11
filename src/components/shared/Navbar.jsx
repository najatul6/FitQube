import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Instagram, Github, Dribbble, Linkedin } from 'lucide-react';
import { MdOutlineSportsGymnastics } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full left-0 z-100 bg-white text-neutral-900 px-6 lg:px-12 py-4 transition-all duration-300 ${
      isSticky ? 'shadow-sm border-b border-neutral-200' : 'border-b border-neutral-100'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <NavLink to="/" className="text-xl uppercase tracking-wide text-neutral-950 hover:opacity-80 transition-opacity flex justify-center items-center gap-1">
          <MdOutlineSportsGymnastics size={28} />Fit<span className='font-bold'>Qube</span>
        </NavLink>

        <div className="hidden lg:flex items-center space-x-10 text-[15px] font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `group relative transition-colors duration-300 ${isActive
                  ? "font-semibold"
                  : "text-neutral-500 hover:text-neutral-950"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  <span
                    className={`absolute left-0 -bottom-3 h-0.5 w-full bg-black rounded-full origin-bottom transition-transform duration-300 ease-out ${isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-5 text-neutral-400">
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
          className="lg:hidden text-neutral-600 hover:text-neutral-950 transition-colors focus:outline-none cursor-pointer"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 z-1000 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white/40 backdrop-blur-sm border-l border-neutral-100 py-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden z-1001 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black hover:text-neutral-950 transition-colors focus:outline-none cursor-pointer"
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
                ${isActive ? 'text-black translate-x-2' : 'text-neutral-800 hover:text-neutral-950 hover:translate-x-1'}
              `}
            >
              {({ isActive }) => (
                <>
                  <div className={`transition-all duration-300 ${isActive ? 'w-5 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </div>
                  <span className={isActive ? 'border-b-2 border-black pb-0.5' : ''}>
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
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 transition-colors duration-200"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;