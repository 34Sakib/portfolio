"use client";

import { useState, useEffect } from 'react';
import { Calendar, MapPin, Building2, Code, Database, Server, Zap, Award, Rocket, Target, Users, Star } from 'lucide-react';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('professional');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const professionalExperiences = [
    {
      role: "Full Stack Developer",
      company: "Codexlab BD",
      location: "Mirpur-1, Dhaka",
      duration: "December 2024 - Present",
      description: "Developing and maintaining full-stack web applications using Laravel and Blade templates. Implementing CRUD functionalities, designing responsive UI, and handling database operations.",
      achievements: [
        "Implemented CRUD functionalities through web.php routes and Laravel controllers",
        "Designed responsive UI using HTML, CSS, Bootstrap with Blade syntax integration",
        "Handled database operations, validation, and authentication using Laravel's Eloquent ORM",
        "Collaborated with team to enhance user experience and optimize backend performance"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Blade", "JavaScript", "jQuery", "Bootstrap"],
      icon: Code,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200"
    }
  ];

  const skills = [
    {
      category: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: ["PHP", "Laravel", "NestJS", "RESTful APIs", "MySQL", "PostgreSQL"],
      level: 90
    },
    {
      category: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery", "AJAX"],
      level: 85
    },
    {
      category: "Tools & Technologies",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      skills: ["Git", "VS Code", "Postman", "XAMPP", "TypeScript", "OpenGL"],
      level: 80
    }
  ];

  const milestones = [
    { number: "5+", label: "Projects Completed", icon: Target, color: "text-cyan-500" },
    { number: "3+", label: "Years Experience", icon: Calendar, color: "text-blue-500" },
    { number: "15+", label: "Technologies", icon: Zap, color: "text-purple-500" },
    { number: "100%", label: "Client Satisfaction", icon: Star, color: "text-amber-500" }
  ];

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

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            From backend architecture to full-stack solutions, explore my professional growth and technical expertise.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-cyan-500/20">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'professional', label: 'Professional Experience', icon: Building2 },
                { id: 'skills', label: 'Technical Skills', icon: Code }
              ].map((tab) => (
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
        </div>

        {/* Content Section */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {activeTab === 'professional' && (
            <div className="space-y-8">
              {professionalExperiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index < professionalExperiences.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-500 z-0"></div>
                  )}
                  
                  <div className={`relative rounded-3xl p-8 border-2 ${exp.borderColor} hover:border-cyan-400 transition-all duration-500 overflow-hidden group ${exp.bgColor}`}>
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Icon */}
                      <div className={`p-5 rounded-2xl bg-gradient-to-r ${exp.color} text-white shadow-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                        <exp.icon className="h-7 w-7" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{exp.role}</h2>
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-700 rounded-full text-sm font-medium mt-2 lg:mt-0 border border-cyan-500/30">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-700 mb-4">
                          <Building2 className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>

                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{exp.description}</p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Award className="h-5 w-5 text-cyan-500" />
                            Key Achievements
                          </h3>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-600">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Zap className="h-5 w-5 text-amber-500" />
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl text-sm font-medium border border-gray-300 hover:border-cyan-400 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {skills.map((skillCategory, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 group"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${skillCategory.color} w-16 h-16 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <skillCategory.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-cyan-100 mb-4">{skillCategory.category}</h3>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-cyan-200 text-sm mb-2">
                      <span>Proficiency</span>
                      <span>{skillCategory.level}%</span>
                    </div>
                    <div className="w-full bg-cyan-900/30 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skillCategory.level}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-3">
                    {skillCategory.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-cyan-200">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Milestones Section */}
        <div className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 group"
            >
              <div className={`p-3 rounded-2xl bg-cyan-500/10 w-16 h-16 flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                <milestone.icon className={`h-8 w-8 ${milestone.color}`} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-cyan-100 mb-2">{milestone.number}</div>
              <div className="text-cyan-200/80 text-sm font-medium">{milestone.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-cyan-100 mb-4">Ready to Work Together?</h2>
            <p className="text-cyan-200/80 mb-6 text-lg">
              Let's build something amazing. I'm always open to discussing new opportunities and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <Rocket className="h-5 w-5" />
                Start a Project
              </a>
              <a 
                href="/projects"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg text-cyan-100 px-8 py-4 rounded-2xl font-semibold border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              >
                <Users className="h-5 w-5" />
                View Projects
              </a>
            </div>
          </div>
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