"use client";

import { useState, useEffect } from 'react';
import { Code, Database, Server, Award, BookOpen, Calendar, GraduationCap, Laptop, Coffee, ShoppingCart, ExternalLink, Github, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "FruitMart E-commerce",
    description: "Laravel-based platform for fresh fruit sales with inventory, orders, and vendor management.",
    image: "https://i.postimg.cc/BQP7Pbdv/image.png",
    tags: ["Laravel 10", "MySQL", "JavaScript", "Bootstrap 5"],
    github: "https://github.com/34Sakib/Fruit-Page",
    live: "#",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    title: "TechSolutions IT",
    description: "Official company website for TechSolutions IT, featuring service showcases, project portfolio, and client management system.",
    image: "https://i.postimg.cc/ncMr4bkJ/image.png",
    tags: ["Laravel", "MySQL", "Blade", "Bootstrap 5", "jQuery"],
    github: "https://github.com/34Sakib/TechSolution_IT",
    live: "#",
    icon: Laptop,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50"
  },
  {
    id: 3,
    title: "CRM E-Commerce",
    description: "Comprehensive e-commerce solution with product management and analytics.",
    image: "https://i.postimg.cc/rFJVWtjt/image.png",
    tags: ["Laravel 10", "MySQL", "jQuery", "Bootstrap 5"],
    github: "https://github.com/34Sakib/CRM-E-Commerce",
    live: "#",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50"
  },
  {
    id: 4,
    title: "Coffee Blend",
    description: "Modern coffee shop website with customer and admin interfaces.",
    image: "https://i.postimg.cc/C5htVd85/image.png",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3"],
    github: "https://github.com/34Sakib/Coffee_Shop",
    live: "#",
    icon: Coffee,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50"
  },
  {
    id: 5,
    title: "Inventory Management System",
    description: "Modern inventory management with Laravel backend, Bootstrap frontend, and professional dashboard interface.",
    image: "https://i.postimg.cc/43K6L7qv/image.png",
    tags: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    github: "https://github.com/34Sakib/Inventory-Management-Project",
    live: "#",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    id: 6,
    title: "Hospital Management System",
    description: "A Laravel-based system for managing hospital operations like patient registration, doctor assignments, and appointments.",
    image: "https://i.postimg.cc/wjYPWY5W/image.png",
    tags: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    github: "https://github.com/34Sakib/Hospital_Management",
    live: "#",
    icon: Award,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50"
  },
  {
    id: 7,
    title: "FrozenDelights – Ordering System",
    description: "Web application for ice cream/beverage shop with menu browsing, cart management, and order placement.",
    image: "https://i.postimg.cc/L8gFmvZr/Screenshot-2025-05-31-033422.png",
    tags: ["PHP", "MySQL", "JavaScript", "AJAX"],
    github: "https://github.com/34Sakib/FrozenDelights",
    live: "#",
    icon: IceCream,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50"
  },
  {
    id: 8,
    title: "Online Learning System",
    description: "Extensible backend for learning platform with NestJS/PostgreSQL, featuring authentication, course management, and enrollment systems.",
    image: "https://i.postimg.cc/sfBpvQFW/Screenshot-2025-06-04-155348.png",
    tags: ["TypeScript", "NestJS", "PostgreSQL", "React*"],
    github: "https://github.com/34Sakib/Online-Learning-System",
    live: "#",
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50"
  },
  {
    id: 9,
    title: "FreshMart – E-commerce Platform",
    description: "A fully functional e-commerce web application with product catalog, user authentication, shopping cart, and payment integration.",
    image: "https://i.postimg.cc/W3b91bHh/image.png",
    tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/34Sakib/FreshMart",
    live: "#",
    icon: ShoppingCart,
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    id: 10,
    title: "Dhaka Cityscapes in Motion",
    description: "Computer graphics project showcasing Dhaka's energy with animated metro rail, traffic, day-night transitions using OpenGL/GLUT.",
    image: "https://i.postimg.cc/wMv6KGRn/Graphics.jpg",
    tags: ["C++", "OpenGL", "Computer Graphics"],
    github: "https://github.com/34Sakib/Capturing-Dhaka-s-Vibrant-Essence-through-Cityscapes-in-Motion",
    live: "#",
    icon: Code,
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-50"
  }
];

// Custom IceCream icon
function IceCream(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
      <path d="M17 7A5 5 0 0 0 7 7" />
      <path d="M19 7v12a5 5 0 0 1-10 0V7" />
    </svg>
  );
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'filter-laravel', label: 'Laravel', count: projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes('laravel'))).length },
    { id: 'filter-php', label: 'PHP', count: projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes('php'))).length },
    { id: 'filter-mysql', label: 'MySQL', count: projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes('mysql'))).length },
    { id: 'filter-javascript', label: 'JavaScript', count: projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes('javascript'))).length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(activeFilter.replace('filter-', '')))
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of full-stack applications, e-commerce platforms, and innovative solutions built with modern technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 hover:bg-white shadow-md hover:shadow-lg'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Container with proper sizing */}
              <div className={`relative h-48 ${project.bgColor} overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                
                {/* Project Icon */}
                <div className={`absolute top-4 left-4 p-3 rounded-2xl bg-gradient-to-r ${project.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="h-5 w-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:border-blue-300 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group/btn"
                  >
                    <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="font-medium">Code</span>
                  </a>
                  
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group/btn"
                  >
                    <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="font-medium">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Let's collaborate to bring your ideas to life with cutting-edge web solutions.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Get In Touch</span>
              <ExternalLink className="h-5 w-5" />
            </Link>
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
          animation: blob 7s infinite;
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