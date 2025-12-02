"use client";

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageCircle, Rocket, Zap, Clock, Shield, Sparkles, Star } from 'lucide-react';

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
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600',
      borderColor: 'border-purple-200',
      iconColor: 'text-white',
      emoji: '📧'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1641 655173',
      href: 'tel:+8801641655173',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      iconBg: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-200',
      iconColor: 'text-white',
      emoji: '📱'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kuratoli, Dhaka, Bangladesh',
      href: '#',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      borderColor: 'border-blue-200',
      iconColor: 'text-white',
      emoji: '📍'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sakib-al-mahamud/',
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      icon: Github,
      href: 'https://github.com/34Sakib',
      label: 'GitHub',
      color: 'from-gray-700 to-gray-800',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      iconColor: 'text-gray-700'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/sakibalmahamud',
      label: 'Twitter',
      color: 'from-sky-500 to-sky-600',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      iconColor: 'text-sky-600'
    },
    {
      icon: MessageCircle,
      href: '#contact',
      label: 'Direct Message',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      iconColor: 'text-emerald-600'
    }
  ];

  const features = [
    {
      icon: Rocket,
      title: 'Fast Response',
      description: 'Quick project initiation and regular updates',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-r from-blue-50 to-indigo-50'
    },
    {
      icon: Shield,
      title: 'Quality Code',
      description: 'Clean, maintainable, and scalable solutions',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-r from-emerald-50 to-teal-50'
    },
    {
      icon: Zap,
      title: 'Modern Tech',
      description: 'Latest technologies and best practices',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-r from-amber-50 to-orange-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900 overflow-hidden relative">
      {/* Background Elements */}
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
            Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group relative overflow-hidden rounded-3xl p-6 border ${item.borderColor} hover:border-blue-300 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${item.bgColor}`}
                >
                  {/* Pulsing Dot */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full animate-ping opacity-75"></div>
                  
                  <div className="flex items-center gap-4">
                    {/* Icon Container */}
                    <div className="relative">
                      <div className={`p-4 rounded-2xl ${item.iconBg} ${item.iconColor} shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{item.emoji}</span>
                        <h3 className="font-bold text-gray-800 text-lg">
                          {item.label}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.value}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-blue-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-500 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
                <Sparkles className="h-6 w-6 text-blue-600" />
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-2xl p-4 border ${social.borderColor} ${social.bgColor} transition-all duration-500 hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <social.icon className={`h-5 w-5 ${social.iconColor} group-hover:text-white transition-colors duration-300`} />
                      <span className="font-medium text-gray-700 group-hover:text-white transition-colors duration-300">
                        {social.label}
                      </span>
                    </div>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-200 text-center relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
                    <div className="absolute top-1 left-1 w-2 h-2 bg-emerald-300 rounded-full"></div>
                  </div>
                  <span className="font-semibold text-gray-800 text-lg group-hover:text-emerald-700 transition-colors duration-300">
                    Available for new projects
                  </span>
                </div>
                <p className="text-gray-600 group-hover:text-emerald-600/90 transition-colors duration-300">
                  Currently open to full-time opportunities, freelance work, and collaborations
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-200 transition-all duration-500 hover:shadow-xl shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Message</h2>
                <p className="text-gray-600">Let's start a conversation about your project</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 focus:bg-white"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 focus:bg-white"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 focus:bg-white resize-none"
                      placeholder="Tell me about your project, timeline, and requirements..."
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-700 hover:to-indigo-800'
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
              <div className="mt-6 p-4 bg-blue-50 rounded-2xl border border-blue-200">
                <p className="text-sm text-gray-600 text-center flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
              <Star className="h-8 w-8 text-blue-600" />
              Why Work With Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="group text-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-200 transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} w-16 h-16 flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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