import React from "react";
import {
  Download,
  ExternalLink,
  Building,
  Calendar,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const ProfessionalExperience = ({ darkMode }: { darkMode: boolean }) => {
  const experiences = [
    {
      id: "accenture",
      title: "Senior Full-Stack Software Engineer",
      company: "Accenture",
      period: "Mar 2024 - Present",
      duration: "1 yr 6 mos", // TODO: calculate dynamically (fun to be updating each second)
      location: "Amsterdam, North Holland, Netherlands · Hybrid",
      type: "Full-time",
      description:
        "Contributed to the development of a regulatory monitoring tool used by over 8000 engineers at a major Dutch bank. Improved compliance visibility and remediation by implementing a React/TypeScript frontend and Node.js/PostgreSQL backend with Azure DevOps API integrations. Participated in architectural design discussions using clean architecture principles and patterns like Factory and Strategy. Helped integrate observability tools including Piano Analytics, Splunk, and Split.io.",
      skills: [
        "React",
        "TypeScript",
        "Java",
        "PostgreSQL",
        "Azure DevOps Services",
      ],
      logoPlaceholder: "accenture.jpeg",
      colorScheme: "from-purple-600 to-blue-600",
      bgGradient: "from-purple-500 to-blue-500",
    },
    {
      id: "navara",
      title: "Full-Stack Software Engineer (Consultant)",
      company: "NAVARA",
      period: "Aug 2022 - Feb 2024",
      duration: "1 yr 7 mos",
      location: "Amsterdam, North Holland, Netherlands · Hybrid",
      type: "Full-time",
      description:
        "Worked as a consultant on a range of full-stack development projects for clients across finance, utilities, and HR sectors. Designed and implemented scalable web applications using Angular, Node.js, C#, and SQL. Focused on clean architecture, maintainability, and automated testing. Collaborated with cross-functional teams to deliver robust and production-ready solutions, adapting quickly to each client's tech stack and domain.",
      skills: [
        "Angular",
        "TypeScript",
        "Node.js",
        "Azure DevOps Services",
        "Amazon Web Services (AWS)",
      ],
      logoPlaceholder: "navara.jpeg",
      colorScheme: "from-orange-600 to-red-600",
      bgGradient: "from-orange-500 to-red-500",
      projects: [
        {
          id: "truqu",
          title: "Full-Stack Software Engineer",
          company: "TruQu - performance & talent management software",
          period: "May 2023 - Feb 2024",
          duration: "10 mos",
          location: "Driebergen-Rijsenburg, Utrecht, Netherlands · Hybrid",
          description:
            "Developed features for a performance tracking web application using Angular, Node.js, and SQL on Azure. Ensured production reliability through CI/CD pipeline automation and Cypress end-to-end testing. Took part in technical planning meetings and conducted research to support robust feature development.",
          skills: [
            "Angular",
            "Node.js",
            "NgRx",
            "SQL",
            "Azure DevOps Services",
          ],
          logoPlaceholder: "truqu.jpeg",
        },
        {
          id: "pwn",
          title: "Full-Stack Software Engineer",
          company: "PWN",
          period: "Jan 2023 - May 2023",
          duration: "5 mos",
          location: "Velserbroek, North Holland, Netherlands · Hybrid",
          description:
            "Migrated legacy Drupal CMS forms into reusable Angular web components. Modernized backend services using C#, Node.js, and SQL to align with current web standards and improve system maintainability.",
          skills: [
            "Angular",
            "TypeScript",
            "C#",
            "SQL",
            "Content Management Systems (CMS)",
          ],
          logoPlaceholder: "pwn.jpeg",
        },
        {
          id: "vaneck",
          title: "Full-Stack Software Engineer",
          company: "VanEck",
          period: "Aug 2022 - Jan 2023",
          duration: "6 mos",
          location: "Amsterdam, North Holland, Netherlands · Hybrid",
          description:
            "Built Angular components and secure REST APIs for user identity verification and payment processing, integrating third-party services. Managed application state using NgRx and supported deployment across various environments.",
          skills: ["Angular", "TypeScript", "NgRx", "Azure DevOps Services"],
          logoPlaceholder: "vaneck.jpeg",
        },
      ],
    },
    {
      id: "adyen",
      title: "Backend Software Engineer",
      company: "Adyen",
      period: "Jul 2019 - Nov 2021",
      duration: "2 yrs 5 mos",
      location: "Amsterdam, North Holland, Netherlands · On-site",
      type: "Full-time",
      description:
        "Automated invoice processing in Workday using Java, reducing manual workload by over 40 hours monthly. Developed scripts to parse and categorize multi-currency invoices efficiently, improving accounting operations. Built a Java and SQL-based backend integrated with Adyen's API to support real-time product demonstrations during live events.",
      skills: ["Java", "SQL", "Workday Integration", "Python"],
      logoPlaceholder: "adyen.jpeg",
      colorScheme: "from-green-600 to-emerald-600",
      bgGradient: "from-green-500 to-emerald-500",
      thesis: {
        title: "Master Thesis",
        period: "Mar 2021 - Nov 2021",
        duration: "9 mos",
        description:
          "Conducted a field study on migrating from trunk-based development to merge requests. Interviewed and surveyed developers across teams and analyzed GitHub data using Python. Delivered actionable insights that improved code quality and team velocity.",
        downloadFile: "Master_Thesis_Toon_de_Boer.pdf",
      },
    },
    {
      id: "finaps",
      title: "Backend Software Engineer & Bachelor Thesis Intern",
      company: "Finaps",
      period: "Apr 2019 - Jul 2019",
      duration: "4 mos",
      location: "Amsterdam, North Holland, Netherlands · On-site",
      type: "Internship",
      description:
        "Developed a Scala-based decision engine using actor model architecture, reducing processing time from 21 seconds to 1.2 seconds. Demonstrated the benefits of concurrent processing and efficient logic design.",
      skills: ["Scala", "Python", "Quantitative Research"],
      logoPlaceholder: "finaps.jpeg",
      colorScheme: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-500 to-indigo-500",
      thesis: {
        title: "Bachelor Thesis",
        description:
          "Akka Decision Engine - Performance optimization using actor model architecture",
        downloadFile: "BachelorThesis_AkkaDecisionEngine.pdf",
      },
    },
    {
      id: "fbidesign",
      title: "Full-Stack Software Engineer",
      company: "FBIdesign",
      period: "Feb 2019 - Jun 2019",
      duration: "5 mos",
      location: "Haarlem, North Holland, Netherlands · On-site",
      type: "Full-time",
      description:
        "Built a cross-platform mobile app in React Native to give construction workers easy access to training videos and manuals. Focused on intuitive UI and accessibility for non-technical users.",
      skills: ["React Native", "TypeScript", "HTML", "CSS", "SQL"],
      logoPlaceholder: "fbi.jpeg",
      colorScheme: "from-gray-600 to-slate-600",
      bgGradient: "from-gray-500 to-slate-500",
    },
  ];

  const handleThesisDownload = (filename: string) => {
    // Placeholder for download functionality
    console.log(`Downloading ${filename}`);
    // In a real implementation, you would handle the file download here
  };

  return (
    <section id="experience" className="py-24 relative">
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-br from-blue-950 via-cyan-950 to-teal-950"
            : "bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50"
        }`}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r ${
              darkMode
                ? "from-white via-blue-100 to-teal-100"
                : "from-gray-900 via-blue-900 to-teal-900"
            } bg-clip-text text-transparent`}
          >
            Professional Experience
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            My journey as a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 font-semibold">
              software engineer
            </span>
            , building solutions and growing with amazing teams.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="group relative">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${exp.bgGradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500`}
              ></div>
              <div
                className={`relative ${
                  darkMode
                    ? "bg-gray-900/90 border-gray-700/50"
                    : "bg-white/90 border-white/20"
                } rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border backdrop-blur-sm`}
              >
                {/* Company Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Company Logo Placeholder */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Image
                        src={`/logos/${exp.logoPlaceholder}`}
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 object-contain"
                        width={200}
                        height={200}
                      />
                      <div className="hidden w-12 h-12 bg-gray-300 rounded items-center justify-center text-gray-600 text-xs font-semibold">
                        <Building size={24} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-bold mb-2 bg-gradient-to-r ${exp.colorScheme} bg-clip-text text-transparent`}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"} mb-2`}
                      >
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period} · {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                        {exp.type && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium">
                            {exp.type}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-6 text-lg leading-relaxed`}
                >
                  {exp.description}
                </p>

                {/* Thesis Download */}
                {exp.thesis && (
                  <div
                    className={`mb-6 p-4 rounded-lg border ${darkMode ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h4
                          className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
                        >
                          {exp.thesis.title}
                        </h4>
                        {exp.thesis.period && (
                          <p className="text-sm text-gray-500 mb-1">
                            {exp.thesis.period} · {exp.thesis.duration}
                          </p>
                        )}
                        <p
                          className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                        >
                          {exp.thesis.description}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleThesisDownload(exp.thesis.downloadFile)
                        }
                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${exp.bgGradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 flex-shrink-0`}
                      >
                        <Download size={16} />
                        Download PDF
                      </button>
                    </div>
                  </div>
                )}

                {/* Consultancy Projects */}
                {exp.projects && (
                  <div className="mb-6">
                    <h4
                      className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"} mb-4 flex items-center gap-2`}
                    >
                      <ExternalLink size={18} />
                      Client Projects
                    </h4>
                    <div className="space-y-4">
                      {exp.projects.map((project) => (
                        <div
                          key={project.id}
                          className={`p-4 rounded-lg border ${darkMode ? "bg-gray-800/30 border-gray-700/50" : "bg-gray-50/50 border-gray-200/50"}`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                                <Image
                                  src={`/logos/${project.logoPlaceholder}`}
                                  alt={`${project.company} logo`}
                                  className="w-8 h-8 object-contain"
                                  width={144}
                                  height={144}
                                />
                                <div className="hidden w-8 h-8 bg-gray-300 rounded items-center justify-center text-gray-600 text-xs">
                                  <Building size={16} />
                                </div>
                              </div>
                              <div>
                                <h5
                                  className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
                                >
                                  {project.company}
                                </h5>
                                <p className="text-sm text-gray-500">
                                  {project.period} · {project.duration}
                                </p>
                              </div>
                            </div>
                          </div>
                          <p
                            className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} mb-3`}
                          >
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 bg-gradient-to-r ${exp.bgGradient} text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
