"use client";

import Link from 'next/link';
import { 
  ArrowRight, Download, Sparkles, Code, Server, Database, 
  Palette, Zap, Briefcase, Users, Award, Clock, 
  ChevronRight, Mail, Github, Linkedin, Twitter,
  Globe, Cpu, Shield, Cloud, Terminal, GitBranch
} from 'lucide-react';
import { useEffect, useState } from 'react';
import FloatingParticles from '../components/FloatingParticles';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('skills');

  const words = ['Full Stack Development', 'Laravel Applications', 'E-commerce Solutions', 'Web Applications', 'Database Management', 'Responsive Design'];
  
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
        typeSpeed = 2000;
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
    { icon: Server, name: 'Backend', description: 'Laravel • PHP • Java • C++ • NestJS', color: 'from-emerald-500 to-teal-600' },
    { icon: Database, name: 'Database', description: 'MySQL • PostgreSQL • TypeORM', color: 'from-blue-500 to-indigo-600' },
    { icon: Palette, name: 'Frontend', description: 'HTML5 • CSS3 • JavaScript • Bootstrap • jQuery', color: 'from-violet-500 to-purple-600' },
    { icon: Cloud, name: 'Frameworks', description: 'Laravel • Next.js • Bootstrap 5', color: 'from-amber-500 to-orange-600' },
    { icon: GitBranch, name: 'Version Control', description: 'Git • GitHub', color: 'from-red-500 to-pink-600' },
    { icon: Cpu, name: 'Tools', description: 'VS Code • XAMPP • Postman', color: 'from-cyan-500 to-blue-600' }
  ];

  const education = {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "American International University-Bangladesh",
    period: "September 2021 - October 2025",
    description: "Successfully completed my bachelor's degree with focus on software engineering and security.",
    awards: ["Dean's Award (2023) - Recognized for academic excellence and outstanding performance"]
  };

  const projects = [
    { 
      name: 'FruitMart E-commerce', 
      tech: 'Laravel • MySQL • JavaScript • Bootstrap 5', 
      type: 'E-commerce',
      description: 'Laravel-based platform for fresh fruit sales with inventory, orders, and vendor management',
      liveLink: 'https://github.com/34Sakib/Fruit-Page',
      githubLink: 'https://github.com/34Sakib/Fruit-Page'
    },
    { 
      name: 'TechSolutions IT', 
      tech: 'Laravel • MySQL • Bootstrap 5 • jQuery', 
      type: 'Company Website',
      description: 'Official company website featuring service showcases and project portfolio',
      liveLink: '#',
      githubLink: 'https://github.com/34Sakib/TechSolution_IT'
    },
    { 
      name: 'CRM E-Commerce', 
      tech: 'Laravel 10 • MySQL • jQuery • Bootstrap 5', 
      type: 'Business Solution',
      description: 'Comprehensive e-commerce solution with product management and analytics',
      liveLink: '#',
      githubLink: 'https://github.com/34Sakib/CRM-E-Commerce'
    }
  ];

  const certifications = [
    { 
      name: 'Full Stack Web Development', 
      issuer: 'Ostad', 
      year: '2024',
      description: 'PHP, Laravel & Vue JS'
    },
    { 
      name: 'PHP with MySQL', 
      issuer: 'Udemy', 
      year: '2023',
      description: 'Build Complete Coffee Shop System'
    },
    { 
      name: 'E-Commerce Development', 
      issuer: 'Udemy', 
      year: '2023',
      description: 'Laravel 11 Cash On Delivery System'
    }
  ];

  const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Codexlab BD',
      duration: 'December 2024 - Present',
      description: 'Developing and maintaining full-stack web applications using Laravel and Blade templates. Implementing CRUD functionalities, designing responsive UI, and handling database operations.'
    },
    {
      role: 'Web Development Intern',
      company: 'Codexlab BD',
      duration: 'June 2024 - November 2024',
      description: 'Assisted in developing and maintaining client websites and applications, gaining hands-on experience with Laravel and modern web technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900 overflow-x-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-sky-200 to-blue-100 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-emerald-200 to-teal-100 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-200 to-purple-100 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob animation-delay-4000"></div>
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <FloatingParticles count={35} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[90vh] mb-32">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-2xl border border-emerald-200 shadow-lg shadow-emerald-100/50">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-emerald-700 font-medium text-sm">Available for contract work & full-time roles</span>
            </div>

            {/* Hero Text */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Building Digital
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Solutions That Scale
                </span>
              </h1>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-ping"></div>
                  <p className="text-2xl lg:text-3xl text-gray-700">
                    Hi, I'm <span className="font-semibold text-blue-600">Sakib</span>
                  </p>
                </div>
                
                <div className="h-12">
                  <p className="text-xl text-gray-600 font-mono">
                    Expert in <span className="text-blue-600 font-semibold">{typedText}</span>
                    <span className="ml-1 w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 inline-block animate-pulse"></span>
                  </p>
                </div>
                
                <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                  With <span className="text-emerald-600 font-semibold">1+ years</span> of experience in full-stack development, 
                  I specialize in creating <span className="text-indigo-600 font-semibold">high-performance applications</span> 
                  and <span className="text-blue-600 font-semibold">scalable backend systems</span>. Passionate about 
                  clean architecture and innovative problem-solving.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 text-center border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 text-center border border-gray-200">
                <div className="text-2xl font-bold text-emerald-600">1+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 text-center border border-gray-200">
                <div className="text-2xl font-bold text-indigo-600">5+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 text-center border border-gray-200">
                <div className="text-2xl font-bold text-amber-600">99%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/projects" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Briefcase className="h-5 w-5" />
                  View Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <a href="https://drive.google.com/file/d/146XkMRC_KWE0YjfZtyvxC_1U7i8pe7qt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center px-6 py-4 bg-white text-gray-800 font-semibold rounded-2xl border border-gray-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce text-blue-600" />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Download CV
                </span>
              </a>

              <div className="flex gap-4">
                <a href="https://github.com/34sakib" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <Github className="h-5 w-5 text-gray-700" />
                </a>
                <a href="https://www.linkedin.com/in/sakib-al-mahamud/" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <Linkedin className="h-5 w-5 text-gray-700" />
                </a>
                <a href="#" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <Twitter className="h-5 w-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-gray-200">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-white">
                  <img
                    src="https://i.postimg.cc/8krYvQps/Remove-background-project-1.png"
                    alt="Sakib - Full Stack Developer"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Floating Tech Badges */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 border border-gray-300 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm font-medium">Open Source</span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 border border-gray-300 shadow-lg">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Git Expert</span>
                  </div>
                </div>
              </div>

              {/* Animated Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl rotate-12 animate-float shadow-xl flex items-center justify-center">
                <Server className="h-8 w-8 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl -rotate-12 animate-float animation-delay-2000 shadow-xl flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            <h2 className="text-3xl font-bold">Technical Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={tech.name} className="group relative bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-gray-200 hover:border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative z-10">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${tech.color} w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <tech.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 mb-3">{tech.description}</p>
                  <div className="flex items-center text-sm text-blue-600">
                    <span>Explore Projects</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
            <h2 className="text-3xl font-bold">Professional Journey</h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200"></div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">{exp.description}</p>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        Full-time
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section id="projects" className="mb-32">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <Link href="/projects" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
                  <div className="flex items-center justify-between">
                    <a href={project.liveLink} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <Globe className="h-4 w-4" />
                      Live Demo
                    </a>
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Code className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Issued {cert.year}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-32">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-12">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{education.degree}</h4>
                  <p className="text-blue-600 dark:text-blue-400">{education.institution}</p>
                </div>
                <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
                  {education.period}
                </span>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{education.description}</p>
              {education.awards && education.awards.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Achievements:</h5>
                  <ul className="space-y-1">
                    {education.awards.map((award, idx) => (
                      <li key={idx} className="flex items-start">
                        <Award className="h-4 w-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA - Compact */}
        <section id="contact" className="py-16 mb-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdHRlcm4gaWQ9InBhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idHJhbnNwYXJlbnQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to start your project?
            </h2>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto">
              I'm available for freelance work. Let's turn your ideas into reality!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                View Work
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <a href="https://github.com/34Sakib" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/sakib-al-mahamud/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </section>

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