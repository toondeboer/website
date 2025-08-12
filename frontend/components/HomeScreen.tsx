import React, {useState, useEffect} from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  Code,
  Smartphone,
  Database,
  Globe,
  ChevronDown,
  Star,
  Zap,
  Rocket,
  Heart
} from 'lucide-react';
import Image from 'next/image';

import headshot from '../assets/headshot.jpeg'

const HomeScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: any) => {
      setMousePosition({x: e.clientX, y: e.clientY});
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Poker Timer App",
      description: "A comprehensive tournament management app with customizable blind structures, player management, and real-time updates.",
      technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
      features: ["Tournament Management", "Custom Blind Structures", "Player Tracking", "Real-time Updates"],
      appStore: true,
      googlePlay: true,
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      icon: "🎯"
    },
    {
      title: "Investment Tracking App",
      description: "A sophisticated portfolio tracker with real-time market data, performance analytics, and risk assessment tools.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Chart.js"],
      features: ["Real-time Data", "Portfolio Analytics", "Risk Assessment", "Performance Tracking"],
      appStore: true,
      googlePlay: true,
      gradient: "from-violet-400 via-purple-500 to-indigo-600",
      icon: "📈"
    },
    {
      title: "Future Project Slot",
      description: "This space is reserved for upcoming innovative projects that will showcase cutting-edge technologies and solutions.",
      technologies: ["TBD", "Exciting Tech", "Innovation"],
      features: ["Coming Soon", "Stay Tuned"],
      appStore: false,
      googlePlay: false,
      gradient: "from-orange-400 via-pink-500 to-red-600",
      icon: "🚀",
      comingSoon: true
    }
  ];

  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6"/>,
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6"/>,
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express.js", "GraphQL", "REST APIs"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20"
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6"/>,
      technologies: ["React Native", "iOS", "Android", "Expo", "Mobile UI/UX"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      category: "Tools & Others",
      icon: <Code className="w-6 h-6"/>,
      technologies: ["Git", "Docker", "AWS", "Firebase", "Jest", "CI/CD", "Agile"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    }
  ];

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse"
        style={{animationDelay: '2s'}}></div>
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse"
        style={{animationDelay: '4s'}}></div>
    </div>
  );

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gray-950 text-white' : 'bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-950/90' : 'bg-white/90'} backdrop-blur-xl border-b ${darkMode ? 'border-gray-800/50' : 'border-white/20'} shadow-lg shadow-black/5`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Toon de Boer
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 font-semibold scale-110'
                      : darkMode ? 'text-gray-300 hover:text-white hover:scale-105' : 'text-gray-600 hover:text-gray-900 hover:scale-105'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 hover:scale-110"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-500"/> : <Moon className="w-5 h-5 text-blue-600"/>}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200/20 dark:border-gray-800/20 backdrop-blur-xl">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <FloatingElements/>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="relative mb-8">
              <div
                className="w-36 h-36 mx-auto rounded-full shadow-2xl shadow-purple-500/25 relative overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <Image
                  src={headshot}
                  alt="Toon de Boer - Full Stack Developer"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover rounded-full"
                  priority // This loads the image immediately since it's above the fold
                />
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <Star className="w-8 h-8 text-yellow-400 animate-bounce" style={{animationDelay: '0s'}}/>
              </div>
              <div className="absolute top-12 right-1/3 transform translate-x-12">
                <Zap className="w-6 h-6 text-orange-400 animate-bounce" style={{animationDelay: '1s'}}/>
              </div>
              <div className="absolute bottom-12 left-1/3 transform -translate-x-12">
                <Rocket className="w-7 h-7 text-emerald-400 animate-bounce" style={{animationDelay: '2s'}}/>
              </div>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 relative">
              <span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Full Stack Developer
              </span>
              <div className="absolute -top-4 -right-4 text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>
                ✨
              </div>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Crafting <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold">innovative digital solutions</span> from
              concept to deployment.
              Building apps that <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 font-semibold">make a difference</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
              >
                <span>View My Work</span>
                <ChevronDown className="w-5 h-5 group-hover:animate-bounce"/>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-transparent bg-gradient-to-r from-pink-500 to-orange-500 p-0.5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40"
              >
                <div
                  className={`${darkMode ? 'bg-gray-950' : 'bg-white'} rounded-xl px-8 py-3.5 font-semibold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent flex items-center justify-center gap-2`}>
                  <span>Get In Touch</span>
                  <Heart className="w-5 h-5 text-pink-500 group-hover:animate-pulse"/>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">passionate full stack developer</span> who
              loves turning complex problems into simple, beautiful solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3
                className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Hello! I'm Toon de Boer 👋
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                With years of experience in software development, I specialize in creating <span
                className="text-blue-600 font-semibold">end-to-end solutions</span> that solve real-world problems.
                From mobile apps that manage poker tournaments to sophisticated investment tracking platforms, I bring
                ideas to life with clean,
                efficient code and <span className="text-purple-600 font-semibold">intuitive user experiences</span>.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I'm driven by the challenge of learning new technologies and the satisfaction of building products that
                users genuinely love.
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open source, or
                planning my next <span className="text-pink-600 font-semibold">innovative project</span>.
              </p>
              <div className="flex gap-4 pt-4">
                <button
                  className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105">
                  <Download className="w-4 h-4 group-hover:animate-bounce"/>
                  Download Resume
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative group">
                <div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/25">
                  <Image
                    src={headshot}
                    alt="Toon de Boer - Full Stack Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">modern, scalable applications</span> across
              platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <div
                  className={`relative ${skill.bgColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 backdrop-blur-sm`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl text-white shadow-lg`}>
                      {skill.icon}
                    </div>
                    <h3
                      className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-orange-50/50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20"></div>
        <FloatingElements/>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 dark:from-white dark:via-purple-100 dark:to-pink-100 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">applications I've built</span>,
              from mobile apps to web platforms.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <div
                  className="relative bg-white/80 dark:bg-gray-900/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 backdrop-blur-sm">
                  <div
                    className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-6xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <span className="relative z-10 text-8xl filter drop-shadow-lg">{project.icon}</span>
                  </div>
                  <div className="p-8">
                    <h3
                      className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex}
                                className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium shadow-md`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Features:</h4>
                      <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-yellow-500"/>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {!project.comingSoon && (
                      <div className="flex gap-3">
                        {project.appStore && (
                          <button
                            className="flex-1 bg-gradient-to-r from-gray-900 to-black text-white px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg">
                            <ExternalLink className="w-4 h-4"/>
                            App Store
                          </button>
                        )}
                        {project.googlePlay && (
                          <button
                            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg">
                            <ExternalLink className="w-4 h-4"/>
                            Google Play
                          </button>
                        )}
                      </div>
                    )}

                    {project.comingSoon && (
                      <div
                        className="text-center py-3 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-bold text-lg">
                        Coming Soon... 🚀
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-950 dark:via-cyan-950 dark:to-teal-950"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-teal-900 dark:from-white dark:via-blue-100 dark:to-teal-100 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey as a <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 font-semibold">software engineer</span>,
              building solutions and growing with amazing teams.
            </p>
          </div>
          <div className="space-y-8">
            <div className="group relative">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div
                className="relative bg-white/80 dark:bg-gray-900/80 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3
                      className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      Senior Full Stack Developer
                    </h3>
                    <p
                      className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Your Current Company
                    </p>
                  </div>
                  <span
                    className="text-gray-500 font-medium bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mt-2 md:mt-0">
                    2022 - Present
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  Led development of multiple high-impact applications, mentored junior developers, and implemented
                  best practices that improved team productivity by <span
                  className="text-emerald-600 font-semibold">40%</span>.
                  Spearheaded the migration to modern tech stack and established CI/CD pipelines.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium shadow-md">React</span>
                  <span
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-medium shadow-md">Node.js</span>
                  <span
                    className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium shadow-md">AWS</span>
                  <span
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium shadow-md">Team Leadership</span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div
                className="relative bg-white/80 dark:bg-gray-900/80 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3
                      className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Full Stack Developer
                    </h3>
                    <p
                      className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Previous Company
                    </p>
                  </div>
                  <span
                    className="text-gray-500 font-medium bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mt-2 md:mt-0">
                    2020 - 2022
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  Developed and maintained web applications serving <span className="text-blue-600 font-semibold">100k+ users</span>,
                  optimized database performance by <span className="text-purple-600 font-semibold">60%</span>, and
                  collaborated with
                  cross-functional teams to deliver features on schedule with <span
                  className="text-emerald-600 font-semibold">99.9% uptime</span>.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span
                    className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-medium shadow-md">JavaScript</span>
                  <span
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md">Python</span>
                  <span
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-md">PostgreSQL</span>
                  <span
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm font-medium shadow-md">Agile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-blue-50/50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-blue-950/20"></div>
        <FloatingElements/>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 dark:from-white dark:via-purple-100 dark:to-pink-100 bg-clip-text text-transparent">
              Let's Connect ✨
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">work together</span>.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div
                className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div
                className="relative bg-white/90 dark:bg-gray-900/90 rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <a
                    href="mailto:your.email@example.com"
                    className="group flex items-center gap-4 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/20 dark:hover:to-purple-950/20 transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div
                      className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white"/>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">your.email@example.com</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/toon-de-boer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-950/20 dark:hover:to-cyan-950/20 transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div
                      className="p-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-6 h-6 text-white"/>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">LinkedIn</h3>
                      <p className="text-gray-600 dark:text-gray-300">Connect with me</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/toondeboer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-purple-50 dark:hover:from-gray-950/20 dark:hover:to-purple-950/20 transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div
                      className="p-4 bg-gradient-to-r from-gray-700 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-6 h-6 text-white"/>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg bg-gradient-to-r from-gray-700 to-purple-600 bg-clip-text text-transparent">GitHub</h3>
                      <p className="text-gray-600 dark:text-gray-300">Check out my code</p>
                    </div>
                  </a>

                  <div
                    className="group flex items-center gap-4 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-950/20 dark:hover:to-teal-950/20 transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50">
                    <div
                      className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-white"/>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Location</h3>
                      <p className="text-gray-600 dark:text-gray-300">Available Remotely 🌍</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    Open to new opportunities and <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold">interesting projects</span>!
                    🚀
                  </p>
                  <button
                    className="group bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-110">
                    <span className="flex items-center gap-2">
                      Start a Conversation
                      <Heart className="w-5 h-5 group-hover:animate-pulse"/>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-purple-950 dark:to-pink-950"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <p className="text-gray-300 text-lg">
              &copy; 2025 <span
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Toon de Boer</span>.
              Built with <span className="text-red-400 animate-pulse">❤️</span>, React, TypeScript, and Next.js.
            </p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <Star className="w-4 h-4 text-yellow-400 animate-pulse"/>
              <span className="text-gray-400">Crafted with passion and precision</span>
              <Star className="w-4 h-4 text-yellow-400 animate-pulse" style={{animationDelay: '1s'}}/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;