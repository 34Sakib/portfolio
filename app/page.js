"use client";

import Link from 'next/link';
import { ArrowRight, Download, Sparkles, Code, Server, Database, Palette, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ['Backend Solutions', 'Scalable APIs', 'Dynamic Websites', 'E-commerce Platforms', 'Web Applications'];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    
    const type = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        currentText = currentWord.substring(0, currentText.length - 1);
      } else {
        currentText = currentWord.substring(0, currentText.length + 1);
      }
      
      setTypedText(currentText);
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && currentText === currentWord) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        typeSpeed = 500;
      }
      
      setTimeout(type, typeSpeed);
    };
    
    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, [currentWordIndex]);

  const techStack = [
    { icon: Server, name: 'Backend', description: 'Laravel • PHP • NestJS', color: 'from-green-500 to-emerald-600' },
    { icon: Database, name: 'Database', description: 'MySQL • PostgreSQL', color: 'from-blue-500 to-cyan-600' },
    { icon: Palette, name: 'Frontend', description: 'JavaScript • Next.js • Bootstrap', color: 'from-purple-500 to-pink-600' },
    { icon: Zap, name: 'Tools', description: 'Git • VS Code • Postman', color: 'from-orange-500 to-red-600' }
  ];

  const projects = [
    { name: 'FruitMart E-commerce', tech: 'Laravel • MySQL', type: 'Full Stack' },
    { name: 'CRM Platform', tech: 'Laravel • Bootstrap', type: 'Backend' },
    { name: 'Online Learning System', tech: 'NestJS • PostgreSQL', type: 'Full Stack' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl border border-cyan-500/30 shadow-lg">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-cyan-200 font-medium text-sm">Available for new projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent relative">
                    Sakib
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></span>
                  </span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <p className="text-2xl lg:text-3xl text-cyan-100 font-light">
                  Full Stack Developer
                </p>
                <div className="h-12">
                  <p className="text-xl text-cyan-200/80 font-mono">
                    Building <span className="text-cyan-400 font-semibold">{typedText}</span>
                    <span className="ml-1 w-1 h-6 bg-cyan-400 inline-block animate-pulse"></span>
                  </p>
                </div>
                <p className="text-lg text-cyan-100/80 max-w-lg leading-relaxed">
                  Specializing in <span className="text-cyan-300 font-semibold">Laravel backend development</span> and 
                  creating <span className="text-blue-300 font-semibold">scalable web applications</span>. 
                  Passionate about clean code and innovative solutions.
                </p>
              </div>
            </div>

            {/* Tech Stack Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <div key={tech.name} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 group">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${tech.color} w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-cyan-100">{tech.name}</h3>
                  <p className="text-sm text-cyan-200/70 mt-1">{tech.description}</p>
                </div>
              ))}
            </div>

            {/* Featured Projects Preview */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                Featured Projects
              </h3>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                    <div>
                      <h4 className="font-medium text-cyan-100">{project.name}</h4>
                      <p className="text-sm text-cyan-200/70">{project.tech}</p>
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
                      {project.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/projects" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Code className="h-5 w-5" />
                  View My Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <button className="group inline-flex items-center justify-center px-6 py-4 bg-white/10 backdrop-blur-lg text-cyan-100 font-semibold rounded-2xl border border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 hover:bg-white/15">
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500 backdrop-blur-lg border border-cyan-500/30">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <img
                    src="https://i.postimg.cc/8krYvQps/Remove-background-project-1.png"
                    alt="Sakib - Full Stack Developer"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Code-like decoration */}
                <div className="absolute -bottom-4 -left-4 bg-slate-800 rounded-xl p-3 border border-cyan-500/30 shadow-lg">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl rotate-12 animate-float shadow-2xl flex items-center justify-center">
                <Server className="h-8 w-8 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl -rotate-12 animate-float animation-delay-2000 shadow-2xl flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>

              <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl rotate-45 animate-float animation-delay-4000 shadow-2xl flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}