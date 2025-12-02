"use client";

import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, Code, Coffee, Sparkles, MapPin, Phone, Globe } from 'lucide-react';
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

    // Generate particles
    const generatedParticles = Array(20).fill().map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 5,
      size: 1 + Math.random() * 2
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
      color: 'from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black',
      bgColor: 'bg-gray-800/80 hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sakib-al-mahamud/',
      icon: Linkedin,
      color: 'from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900',
      bgColor: 'bg-blue-700/80 hover:bg-blue-800'
    },
    {
      name: 'Twitter',
      href: '',
      icon: Twitter,
      color: 'from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700',
      bgColor: 'bg-sky-500/80 hover:bg-sky-600'
    },
    {
      name: 'Email',
      href: 'mailto:sakibalmahamud34@gmail.com',
      icon: Mail,
      color: 'from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800',
      bgColor: 'bg-rose-600/80 hover:bg-rose-700'
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
    'Laravel', 'PHP', 'Next.js', 'MySQL', 'JavaScript', 'TypeScript', 'Tailwind'
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.07]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        {particles.length > 0 && particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3.5 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-2xl shadow-blue-500/10 transform transition-all duration-500 ${
          showScrollTop
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-10 opacity-0 scale-90'
        } hover:scale-110 hover:shadow-blue-500/20 group backdrop-blur-sm border border-gray-700 hover:border-blue-500/30`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </button>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg">
                <Code className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Sakib Al Mahamud
                </h2>
                <p className="text-gray-400 text-sm font-medium">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-lg">
              Crafting exceptional digital experiences with modern web technologies. 
              Specializing in Laravel, PHP, and Next.js to build scalable, performant solutions 
              that drive business success.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-300 bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Globe className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Available Worldwide</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Coffee className="h-4 w-4 text-amber-400" />
                <span className="text-sm">Always Coding</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-800">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <span className="group-hover:text-blue-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-800">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm rounded-lg text-gray-300 text-sm border border-gray-700 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300 hover:scale-105"
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
            <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-800">Connect</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Let's discuss your next project or collaborate on something amazing.
            </p>
            
            {/* Social Links */}
            <div className="grid grid-cols-4 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bgColor} rounded-xl p-0 aspect-square flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 transform-gpu`}
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8 transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}></div>

        {/* Bottom Section */}
        <div className={`transition-all duration-700 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">
                &copy; {currentYear} Sakib Al Mahamud. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs flex items-center justify-center md:justify-start gap-1">
                <span>Built with</span>
                <Heart className="h-3 w-3 text-rose-500 fill-rose-500 animate-pulse" />
                <span>using Next.js & Tailwind CSS</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>sakibalmahamud34@gmail.com</span>
              </div>
              <div className="text-xs text-gray-500">Based in Bangladesh • Available for remote work</div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-500/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-xs font-medium">Open for opportunities</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <a href="/privacy" className="hover:text-gray-300 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-gray-300 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="/sitemap" className="hover:text-gray-300 transition-colors duration-300">
                  Sitemap
                </a>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">v1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3;
          }
          33% { 
            transform: translateY(-15px) translateX(5px) rotate(120deg); 
            opacity: 0.5;
          }
          66% { 
            transform: translateY(10px) translateX(-5px) rotate(240deg); 
            opacity: 0.2;
          }
        }
      `}</style>
    </footer>
  );
}