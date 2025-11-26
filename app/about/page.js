"use client";

import { useState, useEffect } from 'react';
import { Code, Database, Server, Palette, Globe, Rocket, Award, BookOpen, MapPin, Mail, Phone, Calendar, GraduationCap, Laptop, Coffee, ShoppingCart, Download, ExternalLink, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    backend: [
      { name: 'PHP', level: 90, icon: Server, color: 'from-green-500 to-emerald-500' },
      { name: 'Laravel', level: 85, icon: Code, color: 'from-red-500 to-orange-500' },
      { name: 'Java', level: 75, icon: Coffee, color: 'from-orange-500 to-amber-500' },
      { name: 'C++', level: 70, icon: Zap, color: 'from-blue-500 to-cyan-500' },
      { name: 'NestJS', level: 65, icon: Database, color: 'from-pink-500 to-rose-500' }
    ],
    frontend: [
      { name: 'HTML5', level: 95, icon: Palette, color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', level: 90, icon: Palette, color: 'from-blue-500 to-indigo-500' },
      { name: 'JavaScript', level: 85, icon: Code, color: 'from-yellow-500 to-amber-500' },
      { name: 'Bootstrap', level: 88, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
      { name: 'jQuery', level: 80, icon: Code, color: 'from-blue-400 to-cyan-400' },
      { name: 'AJAX', level: 75, icon: Globe, color: 'from-green-400 to-emerald-400' },
      { name: 'Next.js', level: 80, icon: Rocket, color: 'from-gray-800 to-black' }
    ],
    database: [
      { name: 'MySQL', level: 85, icon: Database, color: 'from-blue-500 to-cyan-500' },
      { name: 'PostgreSQL', level: 70, icon: Database, color: 'from-indigo-500 to-purple-500' },
      { name: 'TypeORM', level: 65, icon: Database, color: 'from-gray-600 to-gray-700' }
    ],
    tools: [
      { name: 'Git', level: 80, icon: Code, color: 'from-orange-500 to-red-500' },
      { name: 'VS Code', level: 90, icon: Code, color: 'from-blue-500 to-cyan-500' },
      { name: 'XAMPP', level: 85, icon: Server, color: 'from-green-500 to-emerald-500' },
      { name: 'Postman', level: 75, icon: Globe, color: 'from-orange-500 to-amber-500' }
    ]
  };

  const education = [
    {
      id: 1,
      title: "Bachelor of Science in Computer Science & Engineering",
      institution: "American International University-Bangladesh",
      period: "September 2021 - October 2025 (Expected)",
      description: "Currently pursuing my bachelor's degree with focus on software engineering and security.",
      icon: GraduationCap,
      color: "from-indigo-500 to-purple-500",
      awards: [
        "Dean's Award (2023) - Recognized for academic excellence and outstanding performance"
      ]
    },
    {
      id: 2,
      title: "Higher Secondary Certificate",
      institution: "Bepza Public High School & College",
      period: "June 2018 - March 2020",
      description: "Completed HSC with excellent academic records.",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      subtitle: "PHP, Laravel & Vue JS",
      issuer: "Ostad",
      year: "2024",
      image: "https://i.postimg.cc/Fz7Z3jgY/Sakib-Al-Mahamud-php-laravel-6-C32929-page-0001.jpg",
      tags: ["PHP", "Laravel", "Vue.js"],
      icon: Laptop,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "PHP with MySQL",
      subtitle: "Build Complete Coffee Shop System",
      issuer: "Udemy",
      year: "2023",
      image: "https://i.postimg.cc/02jhNMzF/UC-839428f7-2118-4c5d-9617-e8f0c5e3d66a.jpg",
      tags: ["PHP", "MySQL", "E-commerce"],
      icon: Coffee,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "E-Commerce Development",
      subtitle: "Laravel 11 Cash On Delivery System",
      issuer: "Udemy",
      year: "2024",
      image: "https://i.postimg.cc/7h9DrpQY/image.png",
      tags: ["Laravel 11", "E-commerce", "PHP"],
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: 'CSS, JavaScript And PHP Complete Course',
      subtitle: 'Web Development Fundamentals',
      issuer: 'Udemy',
      year: '2023',
      image: 'https://i.postimg.cc/8z97Y6vN/UC-393bb8f7-304a-4573-9ccc-95b3cd0b8147.jpg',
      tags: ['CSS', 'JavaScript', 'PHP'],
      icon: BookOpen,
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 5,
      title: 'JavaScript Essentials 1',
      subtitle: 'Programming Fundamentals',
      issuer: 'Cisco',
      year: '2023',
      image: 'https://i.postimg.cc/bwJnWPFv/Java-Script-Essentials-1-certificate-21-45655-3-student-aiub-edu-d92f9199-2f2f-49f1-bc5d-475791bfe8dc.jpg',
      tags: ['JavaScript', 'Programming'],
      icon: Award,
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { name: 'Communication', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { name: 'Teamwork', icon: Users, color: 'from-purple-500 to-pink-500' },
    { name: 'Critical Thinking', icon: Brain, color: 'from-indigo-500 to-purple-500' },
    { name: 'Adaptability', icon: RefreshCw, color: 'from-orange-500 to-amber-500' },
    { name: 'Leadership', icon: Target, color: 'from-red-500 to-pink-500' }
  ];

  const tabs = [
    { id: 'skills', label: 'Technical Skills', icon: Code },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'softskills', label: 'Soft Skills', icon: Globe }
  ];

  // Custom Icons
  function Users(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>; }
  function Brain(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>; }
  function RefreshCw(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>; }
  function Target(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>; }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Passionate Backend Developer specializing in Laravel and modern web technologies. 
            I build dynamic, scalable applications that drive business growth and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Personal Info Card */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/10">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full p-1 shadow-2xl">
                  <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
                    <Image
                      src="https://i.postimg.cc/8krYvQps/Remove-background-project-1.png"
                      alt="Sakib Al Mahamud"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-cyan-100">Sakib Al Mahamud</h2>
                <p className="text-cyan-300 font-medium">Full Stack Developer</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">Available for opportunities</span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'sakibalmahamud34@gmail.com', color: 'text-cyan-300' },
                  { icon: Phone, text: '+880 1641 655173', color: 'text-green-300' },
                  { icon: MapPin, text: 'Kuratolli, Dhaka, Bangladesh', color: 'text-red-300' },
                  { icon: Calendar, text: '3+ Years Experience', color: 'text-purple-300' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-cyan-100 hover:text-cyan-50 transition-colors duration-300">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-6 pt-6 border-t border-cyan-500/20">
                <h3 className="font-semibold text-cyan-100 mb-3">Languages</h3>
                <div className="space-y-3">
                  {[
                    { language: 'Bangla', level: 100, color: 'from-green-500 to-emerald-500' },
                    { language: 'English', level: 80, color: 'from-blue-500 to-cyan-500' }
                  ].map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-cyan-200">{lang.language}</span>
                        <span className="text-cyan-300">{lang.level}%</span>
                      </div>
                      <div className="w-full bg-cyan-900/30 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${lang.color} h-2 rounded-full transition-all duration-1000`} 
                             style={{ width: `${lang.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download CV Button */}
              <button className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Tabs Navigation */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-2 mb-8 border border-cyan-500/20">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'text-cyan-100 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20">
              {activeTab === 'skills' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="space-y-6">
                      <h3 className="text-xl font-bold text-cyan-100 capitalize flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        {category} Skills
                      </h3>
                      <div className="space-y-4">
                        {skillList.map((skill) => (
                          <div key={skill.name} className="group">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                  <skill.icon className="h-4 w-4" />
                                </div>
                                <span className="font-medium text-cyan-100">{skill.name}</span>
                              </div>
                              <span className="text-cyan-300 font-semibold">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-cyan-900/30 rounded-full h-3">
                              <div 
                                className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-cyan-500/25`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-cyan-100 mb-8 flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-cyan-400" />
                    Education & Academic Background
                  </h2>
                  {education.map((edu, index) => (
                    <div key={edu.id} className="relative pl-12 pb-12 border-l-2 border-cyan-500/30 group last:border-l-0 last:pb-0">
                      <div className="absolute left-0 -ml-3 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg transform group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-2xl bg-gradient-to-r ${edu.color} shadow-lg`}>
                            <edu.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-cyan-100 mb-2">{edu.title}</h3>
                            <p className="text-cyan-300 font-medium mb-3">{edu.institution}</p>
                            <p className="text-cyan-200/80 text-sm flex items-center mb-4">
                              <Calendar className="w-4 h-4 mr-2" />
                              {edu.period}
                            </p>
                            <p className="text-cyan-100 mb-4">{edu.description}</p>
                            {edu.awards && (
                              <div className="bg-cyan-500/10 border-l-4 border-cyan-400 p-4 rounded-r-lg">
                                <h4 className="font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                                  <Award className="h-4 w-4" />
                                  Awards & Achievements
                                </h4>
                                <ul className="text-cyan-200 space-y-1">
                                  {edu.awards.map((award, i) => (
                                    <li key={i} className="text-sm flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                      {award}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'certifications' && (
                <div>
                  <h2 className="text-3xl font-bold text-cyan-100 mb-8 flex items-center gap-3">
                    <Award className="h-8 w-8 text-cyan-400" />
                    My Certifications
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                      <div 
                        key={cert.id}
                        className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 group"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={cert.image} 
                            alt={`${cert.title} certificate`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                          <div className={`absolute top-4 right-4 p-3 rounded-2xl bg-gradient-to-r ${cert.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                            <cert.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                            <p className="text-cyan-200 text-sm">{cert.subtitle}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-cyan-200 text-sm flex items-center mb-4">
                            <span className="font-medium text-cyan-100 mr-2">Issued by:</span> {cert.issuer}
                            <span className="mx-2">•</span>
                            <Calendar className="w-4 h-4 mr-1" />
                            {cert.year}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {cert.tags.map((tag, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'softskills' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {softSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 group"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} w-12 h-12 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-cyan-100 text-lg">{skill.name}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Career Summary */}
        <div className={`bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20 transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold text-cyan-100 mb-6 text-center flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-cyan-400" />
            Career Summary
          </h2>
          <p className="text-lg text-cyan-100 leading-relaxed text-center max-w-4xl mx-auto">
            Passionate Backend Developer with experience in full-stack web development using Laravel and Blade. 
            Skilled in building dynamic, scalable, and secure web applications, including CRUD operations, 
            responsive UI, and database management. Experienced in projects like e-commerce platforms and 
            online learning systems. Strong team player with a focus on clean code, performance, and delivering 
            high-quality solutions.
          </p>
        </div>
      </div>

      <style jsx>{`
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