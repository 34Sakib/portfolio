"use client";

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageCircle, Rocket, Zap, Clock, Shield, Sparkles, Star } from 'lucide-react';
import FloatingParticles from '../../components/FloatingParticles';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sakibalmahamud34@gmail.com',
      href: 'mailto:sakibalmahamud34@gmail.com',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgGradient: 'bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-red-600/20',
      borderGradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
      shadow: 'hover:shadow-purple-500/30',
      pulseColor: 'bg-pink-500',
      emoji: '📧'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1641 655173',
      href: 'tel:+8801641655173',
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      bgGradient: 'bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-teal-600/20',
      borderGradient: 'bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
      shadow: 'hover:shadow-emerald-500/30',
      pulseColor: 'bg-green-500',
      emoji: '📱'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kuratoli, Dhaka, Bangladesh',
      href: '#',
      gradient: 'from-blue-400 via-cyan-500 to-sky-600',
      bgGradient: 'bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-sky-600/20',
      borderGradient: 'bg-gradient-to-r from-blue-400 via-cyan-500 to-sky-600',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      shadow: 'hover:shadow-cyan-500/30',
      pulseColor: 'bg-cyan-500',
      emoji: '📍'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sakib-al-mahamud/',
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-700',
      bgColor: 'bg-gradient-to-br from-blue-600/10 to-blue-700/10',
      borderColor: 'border-blue-600/20'
    },
    {
      icon: Github,
      href: 'https://github.com/34Sakib',
      label: 'GitHub',
      gradient: 'from-gray-700 to-gray-800',
      bgColor: 'bg-gradient-to-br from-gray-700/10 to-gray-800/10',
      borderColor: 'border-gray-700/20'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/sakibalmahamud',
      label: 'Twitter',
      gradient: 'from-sky-500 to-sky-600',
      bgColor: 'bg-gradient-to-br from-sky-500/10 to-sky-600/10',
      borderColor: 'border-sky-500/20'
    },
    {
      icon: MessageCircle,
      href: '#contact',
      label: 'Direct Message',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-500/10 to-green-600/10',
      borderColor: 'border-green-500/20'
    }
  ];

  const features = [
    {
      icon: Rocket,
      title: 'Fast Response',
      description: 'Quick project initiation and regular updates',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Quality Code',
      description: 'Clean, maintainable, and scalable solutions',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Modern Tech',
      description: 'Latest technologies and best practices',
      gradient: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {/* Gradient Blobs */}
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>
      
      {/* Floating Particles */}
      <FloatingParticles count={20} />

      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - REDESIGNED */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {/* Contact Cards - NEW DESIGN */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group relative overflow-hidden rounded-3xl p-6 border-2 border-transparent hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${item.shadow}`}
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%), ${item.bgGradient}`
                  }}
                >
                  {/* Animated Border Gradient */}
                  <div className={`absolute inset-0 rounded-3xl ${item.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                  
                  {/* Pulsing Dot */}
                  <div className={`absolute top-4 right-4 w-3 h-3 ${item.pulseColor} rounded-full animate-ping opacity-75`}></div>
                  
                  <div className="flex items-center gap-4">
                    {/* Icon Container with Gradient */}
                    <div className="relative">
                      <div className={`p-4 rounded-2xl ${item.iconBg} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 ${item.iconBg} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{item.emoji}</span>
                        <h3 className="font-bold text-white text-lg drop-shadow-sm bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {item.label}
                        </h3>
                      </div>
                      <p className="text-white/90 text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-sm">
                        {item.value}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-white/60">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <div className="absolute top-2 right-2 text-2xl">{item.emoji}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-cyan-100 mb-6 text-center flex items-center justify-center gap-3">
                <Sparkles className="h-6 w-6 text-cyan-400" />
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-2xl p-4 border-2 ${social.borderColor} ${social.bgColor} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <social.icon className="h-5 w-5 text-cyan-300 group-hover:text-white transition-colors duration-300" />
                      <span className="font-medium text-cyan-100 group-hover:text-white transition-colors duration-300">
                        {social.label}
                      </span>
                    </div>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-8 border border-green-500/30 text-center relative overflow-hidden group hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute top-1 left-1 w-2 h-2 bg-green-300 rounded-full"></div>
                  </div>
                  <span className="font-semibold text-white text-lg group-hover:text-green-100 transition-colors duration-300">
                    Available for new projects
                  </span>
                </div>
                <p className="text-white/80 group-hover:text-green-100/90 transition-colors duration-300">
                  Currently open to full-time opportunities, freelance work, and collaborations
                </p>
              </div>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-500"></div>
            </div>
          </div>

          {/* Contact Form (unchanged) */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-cyan-100 mb-2">Send Message</h2>
                <p className="text-cyan-200/80">Let's start a conversation about your project</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-cyan-100 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-cyan-200/50 focus:bg-white/10"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-cyan-100 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-cyan-200/50 focus:bg-white/10"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-cyan-100 mb-3">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-cyan-200/50 focus:bg-white/10 resize-none"
                      placeholder="Tell me about your project, timeline, and requirements..."
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-cyan-600 hover:to-blue-600'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>
              </form>

              {/* Response Time Note */}
              <div className="mt-6 p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                <p className="text-sm text-cyan-200 text-center flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  I typically respond within 24 hours. For urgent matters, feel free to call directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20">
            <h3 className="text-3xl font-bold text-cyan-100 mb-8 text-center flex items-center justify-center gap-3">
              <Star className="h-8 w-8 text-cyan-400" />
              Why Work With Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} w-16 h-16 flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-3">{feature.title}</h4>
                  <p className="text-cyan-200/80 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
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