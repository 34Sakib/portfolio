"use client";

import Link from 'next/link';
import { ArrowRight, Download, Sparkles, Code, Server, Database, Palette, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import FloatingParticles from '../components/FloatingParticles';

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
    { icon: Server, name: 'Backend', description: 'Laravel • PHP • NestJS', color: 'from-emerald-500 to-teal-600' },
    { icon: Database, name: 'Database', description: 'MySQL • PostgreSQL', color: 'from-blue-500 to-indigo-600' },
    { icon: Palette, name: 'Frontend', description: 'JavaScript • Next.js • Bootstrap', color: 'from-violet-500 to-purple-600' },
    { icon: Zap, name: 'Tools', description: 'Git • VS Code • Postman', color: 'from-amber-500 to-orange-600' }
  ];

  const projects = [
    { name: 'FruitMart E-commerce', tech: 'Laravel • MySQL', type: 'Full Stack' },
    { name: 'CRM Platform', tech: 'Laravel • Bootstrap', type: 'Backend' },
    { name: 'Online Learning System', tech: 'NestJS • PostgreSQL', type: 'Full Stack' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft gradient orbs */}
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-sky-200 to-blue-100 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-emerald-200 to-teal-100 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-200 to-purple-100 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Floating particles */}
        <FloatingParticles count={25} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-2xl border border-emerald-200 shadow-lg shadow-emerald-100/50">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-emerald-700 font-medium text-sm">Available for new projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-ping"></div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent relative">
                    Sakib
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse"></span>
                  </span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <p className="text-2xl lg:text-3xl text-gray-700 font-light">
                  Full Stack Developer
                </p>
                <div className="h-12">
                  <p className="text-xl text-gray-600 font-mono">
                    Building <span className="text-blue-600 font-semibold">{typedText}</span>
                    <span className="ml-1 w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 inline-block animate-pulse"></span>
                  </p>
                </div>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  Specializing in <span className="text-emerald-600 font-semibold">Laravel backend development</span> and 
                  creating <span className="text-indigo-600 font-semibold">scalable web applications</span>. 
                  Passionate about clean code and innovative solutions.
                </p>
              </div>
            </div>

            {/* Tech Stack Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <div key={tech.name} className="bg-white/80 backdrop-blur-lg rounded-xl p-4 border border-gray-200 hover:border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group hover:bg-white">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${tech.color} w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{tech.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{tech.description}</p>
                </div>
              ))}
            </div>

            {/* Featured Projects Preview */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                Featured Projects
              </h3>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group border border-gray-100 hover:border-blue-200">
                    <div>
                      <h4 className="font-medium text-gray-800">{project.name}</h4>
                      <p className="text-sm text-gray-600">{project.tech}</p>
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
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
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden shadow-blue-200"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Code className="h-5 w-5" />
                  View My Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <button className="group inline-flex items-center justify-center px-6 py-4 bg-white text-gray-800 font-semibold rounded-2xl border border-gray-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50">
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce text-blue-600" />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Download CV
                </span>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500 backdrop-blur-sm border border-gray-200">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-white">
                  <img
                    src="https://i.postimg.cc/8krYvQps/Remove-background-project-1.png"
                    alt="Sakib - Full Stack Developer"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Code-like decoration */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 border border-gray-300 shadow-lg">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl rotate-12 animate-float shadow-xl flex items-center justify-center">
                <Server className="h-8 w-8 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl -rotate-12 animate-float animation-delay-2000 shadow-xl flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>

              <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl rotate-45 animate-float animation-delay-4000 shadow-xl flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}