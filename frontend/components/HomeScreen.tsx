import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X,
  Code,
  Database,
  Globe,
  Brain,
  Cpu,
  Cloud,
  ChevronDown,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import AcademicExperience from "@/components/AcademicExperience";

const HEADSHOT = "/assets/headshot.jpeg";

const HomeScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  // Initialize dark mode based on system preference and localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      // Check system preference if no saved preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "academic",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    // Get reference to the background element
    const backgroundElement: HTMLElement | null = document.querySelector(
      "[data-mouse-background]",
    );

    const handleMouseMove = (e: MouseEvent) => {
      // Direct DOM manipulation - no React re-render
      if (backgroundElement) {
        backgroundElement.style.transform = `translate3d(${e.clientX - 192}px, ${e.clientY - 192}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  type Project = {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    appStore?: string;
    googlePlay?: string;
    website?: string;
    github?: string;
    gradient: string;
    icon: string;
    comingSoon?: boolean;
  };

  const projects: Project[] = [
    {
      title: "Poker Timer App",
      description:
        "A comprehensive poker timer app with customizable blind levels, timer duration and alerts.",
      technologies: ["React Native", "TypeScript", "Swift", "Java", "Expo"],
      features: [
        "Custom Timer Duration",
        "Custom Blind Structures",
        "Timer Alerts",
        "Live Updates on Notification Screen",
      ],
      appStore:
        "https://apps.apple.com/nl/app/poker-blinds-buzzer/id6749512168",
      googlePlay: "https://play.google.com/store/apps/details?id=com.toondeboer.pokerkit",
      website: "https://poker-timer.toondeboer.com/",
      github: "https://github.com/toondeboer/poker",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      icon: "♠️",
    },
    {
      title: "Investment Tracking App",
      description:
        "A sophisticated portfolio tracker with real-time market data, performance analytics, and clear insights.",
      technologies: ["Angular", "AWS Lambda", "AWS DynamoDB", "AWS S3"],
      features: [
        "Real-time Data",
        "Portfolio Insights",
        "Performance Tracking",
      ],
      appStore: undefined,
      googlePlay: undefined,
      website: "https://sailor.toondeboer.com/",
      github: "https://github.com/toondeboer/sailor",
      gradient: "from-violet-400 via-purple-500 to-indigo-600",
      icon: "📈",
    },
    {
      title: "DrillPlan",
      description:
        "A browser-based planner that uses machine learning to compute optimal soil-investigation drilling locations. It applies K-Means clustering and iterated local-search optimization to spread points evenly while keeping same-type measurements as far apart as possible.",
      technologies: [
        "Machine Learning",
        "K-Means Clustering",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      features: [
        "Even Point Distribution (K-Means)",
        "Iterated Local Search Optimization",
        "Interactive Color-Coded Maps",
        "CSV Import & CSV/PNG Export",
        "Runs Fully In-Browser (Private)",
        "Dutch & English Support",
      ],
      appStore: undefined,
      googlePlay: undefined,
      website: "https://drillplan.toondeboer.com/",
      github: "https://github.com/toondeboer/drillplan",
      gradient: "from-amber-400 via-orange-500 to-red-600",
      icon: "🗺️",
    },
  ];

  const skills = [
    {
      category: "AI & ML Topics",
      icon: <Brain className="w-6 h-6" />,
      technologies: [
        "Machine Learning",
        "Deep Learning",
        "Reinforcement Learning",
        "Recommendation Systems",
        "Clustering",
        "Optimization Algorithms",
        "Data Mining",
        "Feature Engineering",
        "Model Evaluation",
        "Generative AI",
      ],
      color: "from-blue-500 to-indigo-500",
      bgColor: darkMode ? "bg-gray-800/50" : "bg-white/80",
    },
    {
      category: "ML & Data Technologies",
      icon: <Cpu className="w-6 h-6" />,
      technologies: [
        "TensorFlow",
        "PyTorch",
        "Spark",
        "Kafka",
        "Hadoop",
        "Airflow",
        "Pandas",
        "NumPy",
        "Vector Databases",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: darkMode ? "bg-gray-800/50" : "bg-white/80",
    },
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      technologies: [
        "Python",
        "Java",
        "TypeScript",
        "JavaScript",
        "SQL",
        "Scala",
      ],
      color: "from-emerald-500 to-teal-500",
      bgColor: darkMode ? "bg-gray-800/50" : "bg-white/80",
    },
    {
      category: "Backend, Cloud & Infra",
      icon: <Cloud className="w-6 h-6" />,
      technologies: [
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "PostgreSQL",
      ],
      color: "from-sky-500 to-cyan-500",
      bgColor: darkMode ? "bg-gray-800/50" : "bg-white/80",
    },
    {
      category: "Software Engineering Patterns",
      icon: <Database className="w-6 h-6" />,
      technologies: [
        "Distributed Systems",
        "REST APIs",
        "Microservices",
        "System Design",
        "Software Architecture",
        "Clean Architecture",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: darkMode ? "bg-gray-800/50" : "bg-white/80",
    },
    {
      category: "Frontend & Mobile",
      icon: <Globe className="w-6 h-6" />,
      technologies: [
        "React",
        "Next.js",
        "Angular",
        "Node.js",
        "React Native",
        "GraphQL",
        "Express.js",
        "DynamoDB",
      ],
      color: "from-rose-500 to-fuchsia-500",
      bgColor: darkMode ? "bg-gray-800/50" : "bg-white/80",
    },
  ];

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute top-1/4 left-1/4 w-72 h-72 ${darkMode ? "bg-gradient-to-r from-blue-400/5 to-purple-600/5" : "bg-gradient-to-r from-blue-400/10 to-purple-600/10"} rounded-full blur-3xl animate-pulse`}
      ></div>
      <div
        className={`absolute top-3/4 right-1/4 w-96 h-96 ${darkMode ? "bg-gradient-to-r from-pink-400/5 to-orange-600/5" : "bg-gradient-to-r from-pink-400/10 to-orange-600/10"} rounded-full blur-3xl animate-pulse`}
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className={`absolute top-1/2 left-1/3 w-64 h-64 ${darkMode ? "bg-gradient-to-r from-emerald-400/5 to-cyan-600/5" : "bg-gradient-to-r from-emerald-400/10 to-cyan-600/10"} rounded-full blur-3xl animate-pulse`}
        style={{ animationDelay: "4s" }}
      ></div>
    </div>
  );

  // Loading Animation Overlay Component
  const ImageLoadingOverlay = ({
    isLoading,
    shape = "round",
  }: {
    isLoading: boolean;
    shape: string;
  }) => {
    if (!isLoading) return null;

    const shapeClasses = shape === "round" ? "rounded-full" : "rounded-3xl";

    return (
      <div
        className={`absolute inset-0 ${shapeClasses} overflow-hidden bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800`}
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10"></div>

        {/* Pulsing Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-20 h-20 ${shapeClasses} bg-gradient-to-r from-blue-400/30 to-purple-600/30 animate-pulse`}
          ></div>
        </div>

        {/* Rotating Ring for circles, Border pulse for rectangles */}
        {shape === "round" ? (
          <div className="absolute inset-2 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
        ) : (
          <div className="absolute inset-2 border-4 border-blue-500/40 rounded-2xl animate-pulse"></div>
        )}

        {/* Inner Glow */}
        <div
          className={`absolute inset-4 bg-gradient-to-r from-pink-400/20 to-orange-400/20 ${shapeClasses} animate-pulse`}
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"></div>
        </div>

        {/* Floating Particles */}
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-2/3 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${darkMode ? "dark bg-gray-900 text-white" : "bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900"}`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          data-mouse-background
          className={`absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl will-change-transform`}
          style={{
            transform: "translate3d(-192px, -192px, 0)", // Initial position
          }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-xl border-b ${darkMode ? "border-gray-700/50" : "border-gray-200/50"} shadow-lg ${darkMode ? "shadow-black/20" : "shadow-black/5"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Toon de Boer
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Academic",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600 font-semibold scale-110"
                      : darkMode
                        ? "text-gray-300 hover:text-white hover:scale-105"
                        : "text-gray-600 hover:text-gray-900 hover:scale-105"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* iOS Style Toggle */}
              <div className="flex items-center">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
                    darkMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                      darkMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  >
                    <span className="flex items-center justify-center h-full w-full">
                      {darkMode ? (
                        <Moon className="h-3 w-3 text-blue-600" />
                      ) : (
                        <Sun className="h-3 w-3 text-yellow-500" />
                      )}
                    </span>
                  </span>
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div
              className={`md:hidden py-4 border-t ${darkMode ? "border-gray-700/50" : "border-gray-200/50"} backdrop-blur-xl`}
            >
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Academic",
                "Contact",
              ].map((item) => (
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
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <FloatingElements />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="relative mb-8">
              <div className="w-36 h-36 mx-auto rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                  <ImageLoadingOverlay isLoading={isLoading} shape="round" />
                  <Image
                    src={HEADSHOT}
                    alt="Toon de Boer - Software Engineer"
                    width={144}
                    height={144}
                    className={`w-full h-full object-cover rounded-full transition-opacity duration-500 ${
                      isLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setIsLoading(false)}
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-full shadow-2xl shadow-purple-500/25"></div>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <span
                  className="text-3xl animate-bounce inline-block"
                  style={{ animationDelay: "0s" }}
                >
                  ⭐
                </span>
              </div>
              <div className="absolute top-12 right-1/3 transform translate-x-12">
                <span
                  className="text-2xl animate-bounce inline-block"
                  style={{ animationDelay: "1s" }}
                >
                  ⚡
                </span>
              </div>
              <div className="absolute bottom-12 left-1/3 transform -translate-x-12">
                <span
                  className="text-2xl animate-bounce inline-block"
                  style={{ animationDelay: "2s" }}
                >
                  🚀
                </span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                AI, ML & Software Projects
              </span>
            </h1>
            <p
              className={`text-xl sm:text-2xl ${darkMode ? "text-gray-300" : "text-gray-600"} mb-8 max-w-4xl mx-auto leading-relaxed`}
            >
              A collection of projects, experiments, and production systems
              from my work across fintech and enterprise, plus my AI
              specialization at TU Delft.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold">
                {" "}Built with modern ML, data, backend, and cloud tooling.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
              >
                <span>View My Work</span>
                <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 font-semibold"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>Get In Touch</span>
                  <Heart className="w-5 h-5 text-white group-hover:animate-pulse" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div
          className={`absolute inset-0 ${darkMode ? "bg-gradient-to-br from-blue-950/10 via-purple-950/10 to-pink-950/10" : "bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"}`}
        ></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r ${darkMode ? "from-white via-blue-100 to-purple-100" : "from-gray-900 via-blue-900 to-purple-900"} bg-clip-text text-transparent`}
            >
              About Me
            </h2>
            <p
              className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}
            >
              {"I'm a "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
                a builder who enjoys mixing software engineering with AI/ML
              </span>{" "}
              to create useful and fun products.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {"Hello! I'm Toon de Boer "}
                <span className="text-yellow-500">👋</span>
              </h3>
              <p
                className={`${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed text-lg`}
              >
                Professionally, I have worked on systems across fintech,
                banking, and enterprise environments, from internal platforms
                used by thousands of engineers to cloud-native side projects.
                The focus is usually on
                <span className="text-blue-600 font-semibold">
                  {" "}shipping reliable products end to end
                </span>{" "}
                with tools like Python, Java, TypeScript, AWS, Azure, and
                PostgreSQL.
              </p>
              <p
                className={`${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed text-lg`}
              >
                Academically, I completed an M.Sc. in Computer Science with an
                AI specialization at TU Delft, where I focused on machine
                learning, deep learning, recommendation systems, and MLOps
                practices for real software delivery.
              </p>
              <p
                className={`${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed text-lg`}
              >
                This site is a lightweight overview of what I have built,
                learned, and experimented with across
                <span className="text-pink-600 font-semibold">
                  {" "}academic and professional projects
                </span>
                .
              </p>
            </div>
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/25">
                  <ImageLoadingOverlay
                    isLoading={isLoading}
                    shape="rectangle"
                  />
                  <Image
                    src={HEADSHOT}
                    alt="Toon de Boer - Software Engineer"
                    width={320}
                    height={320}
                    className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${
                      isLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setIsLoading(false)}
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
          className={`absolute inset-0 ${darkMode ? "bg-gradient-to-br from-gray-900 via-blue-950 to-purple-950" : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"}`}
        ></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r ${darkMode ? "from-white via-blue-100 to-purple-100" : "from-gray-900 via-blue-900 to-purple-900"} bg-clip-text text-transparent`}
            >
              Skills & Technologies
            </h2>
            <p
              className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}
            >
              Tech stacks and tools I have used across academic work and
              production projects, with extra focus on
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
                {" "}AI/ML and data-intensive systems
              </span>{" "}
              .
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}
                ></div>
                <div
                  className={`relative ${skill.bgColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border ${darkMode ? "border-gray-600/50" : "border-gray-200/50"} backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl text-white shadow-lg`}
                    >
                      {skill.icon}
                    </div>
                    <h3
                      className={`font-bold text-xl bg-gradient-to-r ${darkMode ? "from-white to-gray-300" : "from-gray-900 to-gray-700"} bg-clip-text text-transparent`}
                    >
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-2 ${darkMode ? "bg-gray-700/80 text-gray-200 border-gray-600/50" : "bg-gray-100/80 text-gray-700 border-gray-300/50"} rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 border backdrop-blur-sm`}
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
          className={`absolute inset-0 ${darkMode ? "bg-gradient-to-br from-purple-950/10 via-pink-950/10 to-orange-950/10" : "bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-orange-50/50"}`}
        ></div>
        <FloatingElements />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r ${darkMode ? "from-white via-purple-100 to-pink-100" : "from-gray-900 via-purple-900 to-pink-900"} bg-clip-text text-transparent`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}
            >
              A showcase of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">
                {"applications I've built"}
              </span>
              , from mobile apps to web platforms.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}
                ></div>
                <div
                  className={`relative ${darkMode ? "bg-gray-900/90 border-gray-700/50" : "bg-white/90 border-white/20"} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border backdrop-blur-sm`}
                >
                  <div
                    className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-6xl relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <span className="relative z-10 text-8xl filter drop-shadow-lg">
                      {project.icon}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3
                      className={`text-2xl font-bold mb-3 bg-gradient-to-r ${darkMode ? "from-white to-gray-300" : "from-gray-900 to-gray-700"} bg-clip-text text-transparent`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-6 leading-relaxed`}
                    >
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4
                        className={`font-semibold mb-3 ${darkMode ? "text-gray-200" : "text-gray-800"}`}
                      >
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium shadow-md`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4
                        className={`font-semibold mb-3 ${darkMode ? "text-gray-200" : "text-gray-800"}`}
                      >
                        Key Features:
                      </h4>
                      <ul
                        className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm space-y-1`}
                      >
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <span aria-hidden="true">✨</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {!project.comingSoon && (
                      <div className="flex gap-3 flex-wrap">
                        {project.appStore && (
                          <Link href={project.appStore} target="_blank">
                            <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg">
                              <span aria-hidden="true">🍎</span>
                              App Store
                            </button>
                          </Link>
                        )}
                        {project.googlePlay && (
                          <Link href={project.googlePlay} target="_blank">
                            <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg">
                              <span aria-hidden="true">🤖</span>
                              Google Play
                            </button>
                          </Link>
                        )}
                        {project.website && (
                          <Link href={project.website} target="_blank">
                            <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg">
                              <ExternalLink className="w-4 h-4" />
                              Open Website
                            </button>
                          </Link>
                        )}
                        {project.github && (
                          <Link href={project.github} target="_blank">
                            <button className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg">
                              <Github className="w-4 h-4" />
                              View Code
                            </button>
                          </Link>
                        )}
                      </div>
                    )}

                    {project.comingSoon && (
                      <div className="text-center py-3 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-bold text-lg">
                        Coming Soon... <span className="text-red-400">🚀</span>
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
      <ProfessionalExperience darkMode={darkMode} />

      {/* Academic Section */}
      <AcademicExperience darkMode={darkMode} />

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div
          className={`absolute inset-0 ${darkMode ? "bg-gradient-to-br from-pink-950/10 via-purple-950/10 to-blue-950/10" : "bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-blue-50/50"}`}
        ></div>
        <FloatingElements />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r ${darkMode ? "from-white via-purple-100 to-pink-100" : "from-gray-900 via-purple-900 to-pink-900"} bg-clip-text text-transparent`}
            >
              {"Let's Connect "}
              <span className="text-yellow-400">✨</span>
            </h2>
            <p
              className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}
            >
              {
                "Ready to bring your next project to life? Let's discuss how we can "
              }
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">
                work together
              </span>
              .
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div
                className={`relative ${darkMode ? "bg-gray-900/95 border-gray-700/50" : "bg-white/95 border-white/20"} rounded-3xl p-8 shadow-2xl border backdrop-blur-sm`}
              >
                <div className="grid md:grid-cols-2 gap-6 mb-8">

                  <a
                    href="https://linkedin.com/in/toon-de-boer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-6 rounded-2xl hover:bg-gradient-to-r ${darkMode ? "hover:from-blue-950/30 hover:to-cyan-950/30" : "hover:from-blue-50 hover:to-cyan-50"} transition-all duration-300 hover:scale-105 border ${darkMode ? "border-gray-700/50" : "border-gray-200/50"}`}
                  >
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        LinkedIn 🤝
                      </h3>
                      <p
                        className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        Connect with me
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/toondeboer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-6 rounded-2xl hover:bg-gradient-to-r ${darkMode ? "hover:from-gray-950/30 hover:to-purple-950/30" : "hover:from-gray-50 hover:to-purple-50"} transition-all duration-300 hover:scale-105 border ${darkMode ? "border-gray-700/50" : "border-gray-200/50"}`}
                  >
                    <div className="p-4 bg-gradient-to-r from-gray-700 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg bg-gradient-to-r from-gray-700 to-purple-600 bg-clip-text text-transparent">
                        GitHub 💻
                      </h3>
                      <p
                        className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        Check out my code
                      </p>
                    </div>
                  </a>

                </div>

                <div className="text-center">
                  <p
                    className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-6 text-lg`}
                  >
                    Always happy to chat about engineering, AI tooling, and
                    fun product ideas{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold">
                      or share notes on what I have built
                    </span>
                    !<span className="text-red-400"> 🚀</span>
                  </p>
                  <Link
                    href="https://linkedin.com/in/toon-de-boer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-110">
                      <span className="flex items-center gap-2">
                        Start a Conversation 💬
                        <Heart className="w-5 h-5 group-hover:animate-pulse" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative overflow-hidden">
        <div
          className={`absolute inset-0 ${darkMode ? "bg-gradient-to-r from-gray-950 via-purple-950 to-pink-950" : "bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900"}`}
        ></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <p className="text-gray-300 text-lg">
              &copy; 2025{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Toon de Boer
              </span>
              . Built with React, TypeScript, and Next.js.
            </p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="animate-pulse" aria-hidden="true">
                ✨
              </span>
              <span className="text-gray-400">
                Crafted with passion and precision
              </span>
              <span
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
                aria-hidden="true"
              >
                ✨
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;
