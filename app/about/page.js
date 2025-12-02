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
      { name: 'PHP', level: 90, icon: Server, color: 'from-emerald-500 to-teal-500' },
      { name: 'Laravel', level: 85, icon: Code, color: 'from-red-500 to-orange-500' },
      { name: 'Java', level: 75, icon: Coffee, color: 'from-amber-500 to-orange-500' },
      { name: 'C++', level: 70, icon: Zap, color: 'from-blue-500 to-indigo-500' },
      { name: 'NestJS', level: 65, icon: Database, color: 'from-rose-500 to-pink-500' }
    ],
    frontend: [
      { name: 'HTML5', level: 95, icon: Palette, color: 'from-orange-500 to-amber-500' },
      { name: 'CSS3', level: 90, icon: Palette, color: 'from-blue-500 to-indigo-500' },
      { name: 'JavaScript', level: 85, icon: Code, color: 'from-yellow-500 to-amber-500' },
      { name: 'Bootstrap', level: 88, icon: Sparkles, color: 'from-violet-500 to-purple-500' },
      { name: 'jQuery', level: 80, icon: Code, color: 'from-cyan-500 to-blue-500' },
      { name: 'AJAX', level: 75, icon: Globe, color: 'from-emerald-500 to-teal-500' },
      { name: 'Next.js', level: 80, icon: Rocket, color: 'from-gray-700 to-gray-800' }
    ],
    database: [
      { name: 'MySQL', level: 85, icon: Database, color: 'from-cyan-500 to-blue-500' },
      { name: 'PostgreSQL', level: 70, icon: Database, color: 'from-indigo-500 to-purple-500' },
      { name: 'TypeORM', level: 65, icon: Database, color: 'from-gray-600 to-gray-700' }
    ],
    tools: [
      { name: 'Git', level: 80, icon: Code, color: 'from-orange-500 to-red-500' },
      { name: 'VS Code', level: 90, icon: Code, color: 'from-blue-500 to-cyan-500' },
      { name: 'XAMPP', level: 85, icon: Server, color: 'from-emerald-500 to-teal-500' },
      { name: 'Postman', level: 75, icon: Globe, color: 'from-amber-500 to-orange-500' }
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
      color: "from-blue-500 to-indigo-600",
      bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
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
      color: "from-emerald-500 to-teal-600",
      bgGradient: "bg-gradient-to-br from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
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
      color: "from-purple-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      title: 'Web Development Course',
      subtitle: 'CSS, JavaScript & PHP Complete',
      issuer: 'Udemy',
      year: '2023',
      image: 'https://i.postimg.cc/8z97Y6vN/UC-393bb8f7-304a-4573-9ccc-95b3cd0b8147.jpg',
      tags: ['CSS', 'JavaScript', 'PHP'],
      icon: BookOpen,
      color: "from-amber-500 to-orange-500",
      bgGradient: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200"
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
      color: "from-yellow-400 to-amber-500",
      bgGradient: "bg-gradient-to-br from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200"
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Zap, color: 'from-emerald-500 to-teal-500' },
    { name: 'Communication', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { name: 'Teamwork', icon: Users, color: 'from-purple-500 to-pink-500' },
    { name: 'Critical Thinking', icon: Brain, color: 'from-indigo-500 to-purple-500' },
    { name: 'Adaptability', icon: RefreshCw, color: 'from-amber-500 to-orange-500' },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900 overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft gradient orbs */}
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-sky-200 to-blue-100 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-emerald-200 to-teal-100 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-200 to-purple-100 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate Backend Developer specializing in Laravel and modern web technologies. 
            I build dynamic, scalable applications that drive business growth and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Personal Info Card */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 hover:border-blue-200 transition-all duration-500 shadow-xl hover:shadow-2xl">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-1 shadow-lg">
                  <div className="w-full h-full bg-white rounded-full overflow-hidden">
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
                <div className="absolute inset-0 rounded-full border-2 border-blue-300/50 animate-ping"></div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Sakib Al Mahamud</h2>
                <p className="text-gray-600 font-medium">Full Stack Developer</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-emerald-600">Available for opportunities</span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'sakibalmahamud34@gmail.com', color: 'text-blue-600' },
                  { icon: Phone, text: '+880 1641 655173', color: 'text-emerald-600' },
                  { icon: MapPin, text: 'Kuratolli, Dhaka, Bangladesh', color: 'text-red-500' },
                  { icon: Calendar, text: '1+ Years Experience', color: 'text-purple-600' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-300">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Languages</h3>
                <div className="space-y-3">
                  {[
                    { language: 'Bangla', level: 100, color: 'from-emerald-500 to-teal-600' },
                    { language: 'English', level: 80, color: 'from-blue-500 to-indigo-600' }
                  ].map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{lang.language}</span>
                        <span className="text-blue-600 font-medium">{lang.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${lang.color} h-2 rounded-full transition-all duration-1000`} 
                             style={{ width: `${lang.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download CV Button */}
              <button className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-blue-200">
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
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-2 mb-8 border border-gray-200 shadow-lg">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-200'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 shadow-lg">
              {activeTab === 'skills' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-800 capitalize flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
                        {category} Skills
                      </h3>
                      <div className="space-y-4">
                        {skillList.map((skill) => (
                          <div key={skill.name} className="group">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                                  <skill.icon className="h-4 w-4" />
                                </div>
                                <span className="font-medium text-gray-800">{skill.name}</span>
                              </div>
                              <span className="text-blue-600 font-semibold">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div 
                                className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-md`}
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                    Education & Academic Background
                  </h2>
                  {education.map((edu, index) => (
                    <div key={edu.id} className="relative pl-12 pb-12 border-l-2 border-blue-200 group last:border-l-0 last:pb-0">
                      <div className="absolute left-0 -ml-3 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg transform group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="bg-white rounded-3xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-500 hover:shadow-xl">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-2xl bg-gradient-to-r ${edu.color} shadow-md`}>
                            <edu.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.title}</h3>
                            <p className="text-gray-600 font-medium mb-3">{edu.institution}</p>
                            <p className="text-gray-500 text-sm flex items-center mb-4">
                              <Calendar className="w-4 h-4 mr-2" />
                              {edu.period}
                            </p>
                            <p className="text-gray-700 mb-4">{edu.description}</p>
                            {edu.awards && (
                              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                                <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                                  <Award className="h-4 w-4" />
                                  Awards & Achievements
                                </h4>
                                <ul className="text-gray-600 space-y-1">
                                  {edu.awards.map((award, i) => (
                                    <li key={i} className="text-sm flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                    <Award className="h-8 w-8 text-blue-600" />
                    My Certifications
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                      <div 
                        key={cert.id}
                        className={`relative overflow-hidden rounded-3xl border-2 ${cert.borderColor} transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group`}
                      >
                        {/* Decorative gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                        
                        {/* Card content */}
                        <div className="relative z-10">
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={cert.image} 
                              alt={`${cert.title} certificate`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                            
                            {/* Top right icon with glow effect */}
                            <div className={`absolute top-4 right-4 p-3 rounded-2xl bg-gradient-to-br ${cert.color} shadow-lg transform group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                              <cert.icon className="h-6 w-6 text-white" />
                            </div>
                            
                            {/* Title and subtitle overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                              <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                              <p className="text-gray-200 text-sm">{cert.subtitle}</p>
                            </div>
                          </div>
                          
                          <div className={`p-6 ${cert.bgGradient}`}>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-700">Issued by</span>
                                <span className="font-semibold text-gray-900">{cert.issuer}</span>
                              </div>
                              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200">
                                <Calendar className="h-4 w-4 text-gray-600" />
                                <span className="text-sm font-medium text-gray-700">{cert.year}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {cert.tags.map((tag, i) => (
                                <span 
                                  key={i}
                                  className={`px-3 py-1.5 text-xs font-semibold rounded-full bg-white text-gray-800 border ${cert.borderColor} shadow-sm hover:shadow-md transition-all`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <a 
                                href={cert.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-sm font-medium border ${cert.borderColor} hover:shadow-md transition-all group-hover:shadow-lg`}
                              >
                                <span>View Certificate</span>
                                <ExternalLink className="h-3.5 w-3.5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative corner elements */}
                        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${cert.color} opacity-20 rounded-bl-3xl`}></div>
                        <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${cert.color} opacity-20 rounded-tr-3xl`}></div>
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
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-500 transform hover:scale-105 group hover:shadow-lg"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} w-12 h-12 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg">{skill.name}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Career Summary */}
        <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-lg rounded-3xl p-8 border border-blue-200 transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-blue-600" />
            Career Summary
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
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