import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Code, Download, Moon, Sun } from 'lucide-react';

// Import custom components from index file
import {
  ModernBackgroundEffects,
  WavesBackground,
  AnimatedSection,
  ModernCard,
  ModernSkillCard,
  ModernButton,
  TypingAnimation,
  LoadingScreen
} from './src/components';

const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [backgroundType, setBackgroundType] = useState('particles');
  const heroRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setTimeout(() => setIsLoading(false), 5000);
  }, [darkMode]);

  // Toggle background effect type
  const toggleBackgroundType = () => {
    setBackgroundType(backgroundType === 'particles' ? 'waves' : 'particles');
  };

  // Personal data (from your existing portfolio)
  const skills = [
    { 
      name: 'React', 
      category: 'Frontend',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      color: 'from-blue-400 to-cyan-400',
      description: 'Building interactive UI components and SPAs',
      level: 90
    },
    { 
      name: 'Vue.js', 
      category: 'Frontend',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
      color: 'from-green-400 to-emerald-400',
      description: 'Creating reactive web interfaces with Vue ecosystem',
      level: 85
    },
    { 
      name: 'Node.js', 
      category: 'Backend',
      logo: 'https://nodejs.org/static/images/logo.svg',
      color: 'from-green-500 to-green-600',
      description: 'Server-side JavaScript runtime environment',
      level: 80
    },
    { 
      name: 'Python', 
      category: 'Backend',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
      color: 'from-blue-500 to-yellow-500',
      description: 'Data analysis, automation, and backend development',
      level: 85
    },
    { 
      name: 'C#/.NET', 
      category: 'Backend',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png',
      color: 'from-purple-400 to-indigo-600',
      description: 'Enterprise-grade application development',
      level: 88
    },
    { 
      name: 'Azure', 
      category: 'DevOps',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png',
      color: 'from-sky-400 to-blue-600',
      description: 'Cloud infrastructure and services',
      level: 75
    },
    { 
      name: 'AWS', 
      category: 'DevOps',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
      color: 'from-orange-400 to-yellow-600',
      description: 'Cloud computing and infrastructure services',
      level: 78
    },
    { 
      name: 'Jenkins', 
      category: 'DevOps',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png',
      color: 'from-gray-400 to-gray-700',
      description: 'CI/CD automation and build pipelines',
      level: 80
    },
    { 
      name: 'SQL Server', 
      category: 'Database',
      logo: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
      color: 'from-red-400 to-red-600',
      description: 'Relational database management and design',
      level: 85
    },
    { 
      name: 'Docker', 
      category: 'DevOps',
      logo: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
      color: 'from-cyan-400 to-blue-500',
      description: 'Containerization for consistent deployments',
      level: 70
    },
    { 
      name: 'Azure OpenAI', 
      category: 'AI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
      color: 'from-emerald-400 to-teal-600',
      description: 'AI integration and LLM implementations',
      level: 82
    }
  ];

  const projects = [
    {
      title: "AI-Based Dynamic SQL Query Generator & Chatbot",
      description: "Built an AI-powered chatbot system that converts natural language queries into SQL statements, executed on SQL Server database, and returned as chat-based responses.",
      tech: ["Azure OpenAI", "SQL Server", "n8n", "OpenWebUI", "Node.js"],
      highlights: ["Natural Language to SQL", "Real-time Query Execution", "SQL Injection Prevention", "Context-aware Generation"]
    },
    {
      title: "TMS – Transport Management System",
      description: "Comprehensive Transport Management System handling end-to-end logistics operations for 200+ active clients.",
      tech: ["Vue.js", "Quasar", "C#", "SQL Server", ".NET"],
      highlights: ["200+ Active Clients", "Route Optimization", "Real-time Tracking", "ERP Integration"]
    },
    {
      title: "Dynamic UI Generator Using AI",
      description: "Intelligent web-based system that dynamically generates user interfaces based on natural language prompts using Azure OpenAI.",
      tech: ["Azure OpenAI", "React.js", "Node.js", "Tailwind CSS"],
      highlights: ["Conversational UI Design", "Real-time Rendering", "MVP Development", "Non-technical User Friendly"]
    },
    {
      title: "AI-Powered Internal Chatbot System",
      description: "Built an AI-powered chatbot that responds to user queries based on internal organization data using MCP server and n8n automation.",
      tech: ["MCP Server", "n8n", "OpenWebUI", "Azure OpenAI", "JavaScript"],
      highlights: ["Internal Data Access", "Workflow Automation", "Secure Access Control", "Performance Monitoring"]
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Aptean",
      location: "Coimbatore",
      period: "June 2021 - Present",
      achievements: [
        "Developed and maintained AI-based applications, enhancing user experience through machine learning integration",
        "Designed responsive UI/UX interfaces for both web and mobile platforms",
        "Collaborated with cross-functional teams to deliver high-impact features"
      ]
    }
  ];

  // Typed texts for the intro section
  const typedTexts = [
    "Full Stack Developer",
    "AI Enthusiast",
    ".NET Developer",
    "DevOps Engineer"
  ];

  // Hero Section with Typing Animation
  const HeroSection = () => {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <div className="mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-5xl md:text-7xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span className="inline-block">
                <span className="text-xl md:text-2xl font-light block mb-1">Hi, I'm</span>
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Dhanush Raju
                </span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl font-light mt-4"
            >
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mr-2`}>I'm a</span>
              <TypingAnimation
                texts={typedTexts}
                className={`font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}
                typingSpeed={100}
                eraseSpeed={50}
                delayBetween={2000}
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Building innovative web solutions with cutting-edge technologies. 
            Passionate about creating seamless user experiences and scalable applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <ModernButton
              variant="primary"
              size="large"
              rounded="full"
              icon={<Mail />}
              iconPosition="left"
              onClick={() => window.location.href = 'mailto:dhanushr732@gmail.com'}
            >
              Get In Touch
            </ModernButton>
            
            <ModernButton
              variant="outline"
              size="large"
              rounded="full"
              icon={<Linkedin />}
              iconPosition="left"
              onClick={() => window.open('https://www.linkedin.com/in/dhanushRaju2002/', '_blank')}
            >
              LinkedIn
            </ModernButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center gap-6 pt-12"
          >
            {/* Social links removed from here and consolidated in the Get In Touch button above */}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className={`w-8 h-8 ${darkMode ? 'text-purple-300' : 'text-purple-500'}`} />
        </motion.div>
      </section>
    );
  };

  // Skills Section
  const SkillsSection = () => {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Expertise in modern web technologies and frameworks
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <ModernSkillCard key={index} skill={skill} index={index} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Projects Section
  const ProjectsSection = () => {
    return (
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Some of my recent work and contributions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ModernCard 
                  className={`h-full p-6 rounded-xl ${
                    darkMode 
                      ? 'bg-white/5 hover:bg-white/10' 
                      : 'bg-white hover:bg-gray-50'
                  }`}
                  hover={true}
                  delay={index * 0.1}
                  background={darkMode ? "dark" : "white"}
                >
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode 
                            ? 'bg-purple-900/30 text-purple-200' 
                            : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      Key Highlights:
                    </h4>
                    <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <span className="mr-2 text-purple-500">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Experience Section
  const ExperienceSection = () => {
    return (
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My professional journey
            </p>
          </motion.div>
          
          {/* Experience Cards - New Design */}
          <div className="grid grid-cols-1 gap-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  {/* Experience card with glass effect */}
                  <div className={`
                    relative z-10 p-8 rounded-2xl overflow-hidden
                    backdrop-blur-md border
                    ${darkMode 
                      ? 'bg-white/5 border-purple-500/20' 
                      : 'bg-white/90 border-purple-100'
                    }
                  `}>
                    {/* Top section with company and role */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <div className={`text-sm font-medium mb-2 ${
                          darkMode ? 'text-purple-300' : 'text-purple-600'
                        }`}>
                          {job.period}
                        </div>
                        <h3 className={`text-2xl font-bold ${
                          darkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                          {job.role}
                        </h3>
                      </div>
                      
                      <div className={`
                        px-5 py-2 rounded-lg font-semibold text-lg
                        ${darkMode 
                          ? 'bg-purple-900/30 text-purple-200' 
                          : 'bg-purple-100 text-purple-800'
                        }
                      `}>
                        {job.company}
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className={`
                      inline-flex items-center px-3 py-1 rounded-full text-sm mb-6
                      ${darkMode 
                        ? 'bg-gray-800 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                      }
                    `}>
                      <MapPin className="w-3 h-3 mr-1" />
                      {job.location}
                    </div>
                    
                    {/* Achievements */}
                    <div className="mt-6">
                      <h4 className={`text-base font-semibold mb-4 ${
                        darkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        Key Achievements
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 * achievementIndex }}
                            className={`
                              flex items-start p-3 rounded-lg
                              ${darkMode 
                                ? 'bg-white/5 hover:bg-white/10' 
                                : 'bg-purple-50 hover:bg-purple-100'
                              }
                              transition-all duration-300
                            `}
                          >
                            <div className={`
                              p-2 rounded-full mr-3 mt-0.5
                              ${darkMode 
                                ? 'bg-purple-900/50 text-purple-300' 
                                : 'bg-purple-200 text-purple-700'
                              }
                            `}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                              {achievement}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 opacity-10 pointer-events-none">
                      <div className="w-full h-full rotate-12 transform-gpu">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
                          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ContactSection = () => {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Have a project in mind? Let's work together!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ModernCard 
                className={`h-full p-8 rounded-xl ${
                  darkMode ? 'bg-white/5' : 'bg-white'
                }`}
                shadow={true}
                hover={false}
              >
                <h3 className={`text-2xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {[
                    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'dhanushr732@gmail.com' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`
                        p-3 rounded-full mr-4
                        ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-600'}
                      `}>
                        {item.icon}
                      </div>
                      <div>
                        <p className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {item.label}
                        </p>
                        <p className={`text-lg font-medium ${
                          darkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <h4 className={`text-lg font-semibold mb-4 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    Connect with me
                  </h4>
                  <div className="flex gap-4">
                    {[
                      { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/dhanushRaju2002/", label: "LinkedIn" },
                      { icon: <Mail className="w-5 h-5" />, href: "mailto:dhanushr732@gmail.com", label: "Email" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                          p-3 rounded-full transition-all duration-300
                          ${darkMode 
                            ? 'bg-white/10 text-white hover:bg-purple-600/30' 
                            : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
                          }
                        `}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </ModernCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ModernCard 
                className={`h-full p-8 rounded-xl ${
                  darkMode ? 'bg-white/5' : 'bg-white'
                }`}
                shadow={true}
                hover={false}
              >
                <h3 className={`text-2xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Send a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        className={`
                          w-full px-4 py-3 rounded-lg
                          ${darkMode 
                            ? 'bg-white/10 text-white border-gray-700 focus:border-purple-500' 
                            : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-purple-500'
                          }
                          border focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300
                        `}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        className={`
                          w-full px-4 py-3 rounded-lg
                          ${darkMode 
                            ? 'bg-white/10 text-white border-gray-700 focus:border-purple-500' 
                            : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-purple-500'
                          }
                          border focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300
                        `}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Subject
                    </label>
                    <input 
                      type="text" 
                      className={`
                        w-full px-4 py-3 rounded-lg
                        ${darkMode 
                          ? 'bg-white/10 text-white border-gray-700 focus:border-purple-500' 
                          : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-purple-500'
                        }
                        border focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300
                      `}
                      placeholder="Project Discussion"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Your Message
                    </label>
                    <textarea 
                      rows="5" 
                      className={`
                        w-full px-4 py-3 rounded-lg
                        ${darkMode 
                          ? 'bg-white/10 text-white border-gray-700 focus:border-purple-500' 
                          : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-purple-500'
                        }
                        border focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300
                      `}
                      placeholder="Hi Dhanush, I'd like to discuss a project..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <ModernButton
                      variant="primary"
                      size="large"
                      className="w-full"
                    >
                      Send Message
                    </ModernButton>
                  </div>
                </form>
              </ModernCard>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // Footer
  const Footer = () => {
    return (
      <footer className={`py-10 px-4 border-t ${
        darkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <div>
            <span className="font-semibold">
              © {new Date().getFullYear()} Dhanush R. Crafted with ❤️
            </span>
          </div>
        </div>
      </footer>
    );
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Background Effects */}
      {backgroundType === 'particles' ? (
        <ModernBackgroundEffects darkMode={darkMode} />
      ) : (
        <WavesBackground darkMode={darkMode} />
      )}
      
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button 
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-3 rounded-full transition-all duration-300 backdrop-blur-md ${
            darkMode 
              ? 'bg-gray-800/80 text-yellow-400 hover:bg-gray-700/80' 
              : 'bg-white/80 text-purple-600 hover:bg-purple-50/80'
          } shadow-lg hover:shadow-xl`}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Main Content */}
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        {/* <ContactSection /> */}
      </main>

      <Footer />
    </div>
  );
};

export default ModernPortfolio;
