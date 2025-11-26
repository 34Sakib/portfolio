"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code, Sparkles } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { name: 'Home', href: '/', icon: Sparkles },
    { name: 'About', href: '/about', icon: Code },
    { name: 'Projects', href: '/projects', icon: Code },
    { name: 'Experience', href: '/experience', icon: Code },
    { name: 'Contact', href: '/contact', icon: Code },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg py-3' 
        : 'bg-gradient-to-r from-gray-900 to-gray-700 text-white py-6'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {scrolled && (
          <>
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo with Animation */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="group relative flex items-center gap-3"
            >
              <div className={`p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg transition-all duration-500 ${
                scrolled ? 'scale-90' : 'scale-100'
              } group-hover:scale-110 group-hover:rotate-12`}>
                <Code className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                  Sakib
                </span>
                <span className="text-xs text-cyan-300/80 font-medium transition-all duration-300 group-hover:text-cyan-200">
                  Full Stack Developer
                </span>
              </div>
              
              {/* Hover effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            </Link>
          </div>
          
          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-lg rounded-2xl p-1 border border-cyan-500/20 shadow-lg">
            {navigation.map((item, index) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-500 group ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-inner shadow-cyan-500/20'
                      : 'text-cyan-100/80 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : ''
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-2">
                    <item.icon className={`h-4 w-4 transition-transform duration-300 ${
                      isActive ? 'scale-110 text-cyan-300' : 'group-hover:scale-110'
                    }`} />
                    <span className="relative">
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 group-hover:w-full transition-all duration-300 ${
                        isActive ? 'w-full' : ''
                      }`}></span>
                    </span>
                  </div>

                  {/* Sparkle effect for active item */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-3 rounded-2xl transition-all duration-500 ${
                scrolled 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30' 
                  : 'bg-white/10 backdrop-blur-lg border border-cyan-500/20'
              } shadow-lg hover:shadow-cyan-500/25 transform hover:scale-110 group`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icons */}
              <div className="relative">
                {isOpen ? (
                  <X className="h-5 w-5 text-white animate-spin-in" />
                ) : (
                  <Menu className="h-5 w-5 text-cyan-300 group-hover:text-white animate-pulse" />
                )}
              </div>

              {/* Pulsing dot */}
              {!isOpen && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      <div className={`md:hidden transition-all duration-500 ease-out ${
        isOpen 
          ? 'max-h-96 opacity-100 translate-y-0' 
          : 'max-h-0 opacity-0 -translate-y-4'
      } overflow-hidden`}>
        <div className="relative bg-gradient-to-b from-slate-900/95 via-purple-900/95 to-blue-900/95 backdrop-blur-xl border-t border-cyan-500/20 shadow-2xl shadow-blue-500/20 mx-4 rounded-b-3xl overflow-hidden">
          {/* Menu background animation */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative px-3 pt-3 pb-6 space-y-2">
            {navigation.map((item, index) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-lg font-medium transition-all duration-500 transform hover:scale-105 border-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/40 shadow-lg shadow-cyan-500/20'
                      : 'text-cyan-100/80 border-transparent hover:border-cyan-500/30 hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className={`h-5 w-5 ${
                    isActive ? 'text-cyan-300' : 'text-cyan-400'
                  }`} />
                  <span>{item.name}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu footer */}
          <div className="relative px-4 py-3 border-t border-cyan-500/20">
            <div className="flex items-center justify-center gap-2 text-cyan-300/70 text-sm">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}