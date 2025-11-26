"use client";

import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, Code, Coffee, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    // Generate particles only on client side
    const generatedParticles = Array(15).fill().map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5
    }));
    setParticles(generatedParticles);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/34sakib',
      icon: Github,
      color: 'from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black',
      bgColor: 'hover:shadow-gray-400/30'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sakib-al-mahamud/',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900',
      bgColor: 'hover:shadow-blue-400/30'
    },
    {
      name: 'Twitter',
      href: '',
      icon: Twitter,
      color: 'from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800',
      bgColor: 'hover:shadow-sky-400/30'
    },
    {
      name: 'Email',
      href: 'mailto:sakibalmahamud34@gmail.com',
      icon: Mail,
      color: 'from-red-500 to-red-700 hover:from-red-600 hover:to-red-800',
      bgColor: 'hover:shadow-red-400/30'
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  const techStack = [
    'Laravel', 'PHP', 'Next.js', 'MySQL', 'JavaScript', 'TypeScript', 'Bootstrap'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles - only render if particles exist */}
        {particles.length > 0 && particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animation: `float ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transform transition-all duration-500 ${
          showScrollTop
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-10 opacity-0 scale-90'
        } hover:scale-110 hover:-translate-y-2 group backdrop-blur-sm border border-cyan-400/20`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </button>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                <Code className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Sakib
              </span>
            </div>
            <p className="text-cyan-100 mb-6 leading-relaxed">
              Full Stack Developer crafting digital experiences with Laravel, PHP, and modern web technologies. 
              Passionate about building scalable solutions.
            </p>
            <div className="flex items-center gap-2 text-cyan-200">
              <Coffee className="h-4 w-4" />
              <span className="text-sm">Fueled by coffee & code</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-lg font-semibold text-cyan-300 mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cyan-100 hover:text-white transition-all duration-300 hover:translate-x-2 hover:underline flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-lg font-semibold text-cyan-300 mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-cyan-100 text-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-lg font-semibold text-cyan-300 mb-6">Let's Connect</h3>
            <p className="text-cyan-100 mb-6">
              Ready to start your next project? Let's create something amazing together!
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative p-3 bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg group ${item.bgColor}`}
                  aria-label={item.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
                  
                  {/* Animated tooltip */}
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1.5 px-2.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg border border-white/10">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t border-cyan-500/20 pt-8 transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-cyan-200 font-medium mb-2">
                &copy; {currentYear} Sakib Al Mahamud. All rights reserved.
              </p>
              <p className="text-cyan-300/80 text-sm flex items-center justify-center md:justify-start gap-2">
                <span>Built with</span>
                <span className="text-cyan-200 font-semibold">Next.js</span>
                <span>&</span>
                <span className="text-cyan-200 font-semibold">Tailwind CSS</span>
                <span className="flex items-center text-pink-400 mx-1">
                  <Heart className="h-3 w-3 fill-current animate-pulse" />
                </span>
              </p>
            </div>

            {/* Availability Status */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-green-200 text-sm font-medium">Available for new projects</span>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 text-xs text-cyan-300/70">
              <a href="/privacy" className="hover:text-cyan-200 transition-colors duration-300 hover:underline">
                Privacy
              </a>
              <a href="/terms" className="hover:text-cyan-200 transition-colors duration-300 hover:underline">
                Terms
              </a>
              <a href="/sitemap" className="hover:text-cyan-200 transition-colors duration-300 hover:underline">
                Sitemap
              </a>
            </div>
          </div>

          {/* Fun decorative elements */}
          <div className="mt-6 flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </footer>
  );
}