"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaVuejs,
  FaAngular,
  FaJava,
  FaPhp,
  FaStripe,
  FaPython,
  FaAws,
  FaDocker,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiKubernetes,
  SiDotnet,
  SiJest,
  SiOpenai,
  SiTypescript,
} from "react-icons/si";

// Keep icon imports referenced (avoid unused-import warnings)
void FaHtml5;
void FaCss3;
void FaJs;
void FaVuejs;
void FaJava;
void FaPhp;
void SiTailwindcss;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

// TypeScript interfaces
interface InfoItem {
  fieldName: string;
  fieldValue: string;
}

interface AboutData {
  title: string;
  description: string;
  info: InfoItem[];
}

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

interface ExperienceData {
  icon: string;
  title: string;
  description: string;
  items: ExperienceItem[];
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

interface EducationData {
  icon: string;
  title: string;
  description: string;
  items: EducationItem[];
}

interface SkillItem {
  icon: JSX.Element;
  name: string;
}

interface SkillsData {
  title: string;
  description: string;
  skillList: SkillItem[];
}

// About data - will be populated with translations in component
const getAboutData = (t: (key: string) => string): AboutData => ({
  title: t("resume.about.title"),
  description: t("resume.about.description"),
  info: [
    {
      fieldName: t("resume.about.field.name"),
      fieldValue: "Arnob Mahmud",
    },
    {
      fieldName: t("resume.about.field.phone"),
      fieldValue: "+4915734664351",
    },
    {
      fieldName: t("resume.about.field.experience"),
      fieldValue: t("resume.about.value.experience"),
    },
    {
      fieldName: t("resume.about.field.skype"),
      fieldValue: "arnob_t78",
    },
    {
      fieldName: t("resume.about.field.nationality"),
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: t("resume.about.field.email"),
      fieldValue: "arnob_t78@yahoo.com",
    },
    {
      fieldName: t("resume.about.field.availability"),
      fieldValue: t("resume.about.value.availability"),
    },
    {
      fieldName: t("resume.about.field.languages"),
      fieldValue: "English (C2), German (B1), Bengali (Native), Hindi, Urdu",
    },
  ],
});

// Experience data - will be populated with translations in component
const getExperienceData = (t: (key: string) => string): ExperienceData => ({
  icon: "/assets/resume/badge.svg",
  title: t("resume.experience.title"),
  description: t("resume.experience.description"),
  items: [
    {
      company: "Freelance / Remote",
      position: "Full-Stack Web Developer",
      duration: "Jun 2025 – Present",
    },
    {
      company: "Sernitas GmbH, Bochum, Germany",
      position: "Full-Stack Web Developer",
      duration: "Mar 2025 – Jul 2025",
    },
    {
      company: "Frankfurt University of Applied Sciences, Germany",
      position: "Research Assistant",
      duration: "2017 – 2023",
    },
    {
      company: "get it live GmbH, Nidderau, Germany",
      position: "Mobile App Developer",
      duration: "Nov 2015 – Jun 2016",
    },
    {
      company: "LEADS Corporation Ltd, Dhaka, Bangladesh",
      position: "Software Test Engineer",
      duration: "Feb 2013 – Nov 2013",
    },
    {
      company: "Green Generation IT Ltd, Dhaka, Bangladesh",
      position: "Junior Software Developer",
      duration: "Jun 2012 – Dec 2012",
    },
  ],
});

// Education data - will be populated with translations in component
const getEducationData = (t: (key: string) => string): EducationData => ({
  icon: "/assets/resume/cap.svg",
  title: t("resume.education.title"),
  description: t("resume.education.description"),
  items: [
    {
      institution: "Frankfurt University of Applied Sciences, Germany",
      degree: "M.Sc. in High Integrity Systems",
      duration: "2014 – 2024",
    },
    {
      institution: "Military Institute of Science & Technology, Bangladesh",
      degree: "B.Sc. in Computer Science & Engineering",
      duration: "2008 – 2012",
    },
    {
      institution: "Udemy",
      degree: "Advanced Next.js & Framer Motion Web Development",
      duration: "2023 – 2025",
    },
    {
      institution: "Udemy",
      degree: "Advanced React.js & Tailwind CSS Web Development",
      duration: "2022 – 2024",
    },
  ],
});

// Skill data - will be populated with translations in component
const getSkillsData = (t: (key: string) => string): SkillsData => ({
  title: t("resume.skills.title"),
  description: t("resume.skills.description"),
  skillList: [
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaAngular />, name: "Angular" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaDatabase />, name: "PostgreSQL / MongoDB" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiJest />, name: "Testing (Jest/Cypress/Selenium)" },
    { icon: <FaFigma />, name: "UI/UX & Figma" },
    { icon: <FaStripe />, name: "Stripe & APIs" },
    { icon: <SiOpenai />, name: "AI/ML Integration" },
    { icon: <FaGithub />, name: "Git & Version Control" },
  ],
});

const ResumePage = () => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  // Default to "about" for server-side rendering (prevents hydration mismatch)
  const [activeTab, setActiveTab] = useState("about");

  // Get translated data
  const about = getAboutData(t);
  const experience = getExperienceData(t);
  const education = getEducationData(t);
  const skills = getSkillsData(t);

  // Read URL hash on client-side mount to restore tab state
  useEffect(() => {
    setMounted(true);
    // Check if there's a hash in the URL (e.g., #experience, #education, #skills)
    const hash = window.location.hash.slice(1); // Remove the # symbol
    const validTabs = ["about", "experience", "education", "skills"];

    if (hash && validTabs.includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  // Update URL hash when tab changes (for refresh persistence)
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Update URL hash without causing page scroll
    window.history.replaceState(null, "", `#${value}`);
  };

  // Render placeholder on server to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-[90vh] flex items-center justify-center py-4 xl:pb-4 animate-ease-in-out">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-16 animate-ease-in-out">
            <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <div className="inline-flex items-center w-full bg-accent justify-center whitespace-nowrap text-primary rounded-lg p-3 text-base font-bold shadow-sm">
                {t("resume.tab.about")}
              </div>
              <div className="inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-base font-medium">
                {t("resume.tab.experience")}
              </div>
              <div className="inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-base font-medium">
                {t("resume.tab.education")}
              </div>
              <div className="inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-base font-medium">
                {t("resume.tab.skills")}
              </div>
            </div>
            <div className="min-h-[90vh] w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center py-4 xl:pb-4 animate-ease-in-out page-content-no-scrollbar">
      <div className="container mx-auto">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="flex flex-col xl:flex-row gap-16 animate-ease-in-out"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">{t("resume.tab.about")}</TabsTrigger>
            <TabsTrigger value="experience">
              {t("resume.tab.experience")}
            </TabsTrigger>
            <TabsTrigger value="education">
              {t("resume.tab.education")}
            </TabsTrigger>
            <TabsTrigger value="skills">{t("resume.tab.skills")}</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[90vh] w-full page-content-no-scrollbar">
            {/* About me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div
                className="flex flex-col gap-[30px] animate-ease-in-out"
                style={{ animationDelay: "0s" }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[1000px] text-white/60 text-start sm:text-justify text-md sm:text-lg mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-600px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 text-md sm:text-lg">
                          {item.fieldName}
                        </span>
                        <span className="text-md sm:text-lg">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent
              value="experience"
              className="w-full text-center xl:text-left"
            >
              <div
                className="flex flex-col gap-[30px] text-center xl:text-left animate-ease-in-out"
                style={{ animationDelay: "0s" }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[1000px] text-white/60 text-start sm:text-justify text-md sm:text-lg mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[200px] py-6 px-6 rounded-xl flex flex-col justify-center items-center gap-1"
                      >
                        <h3 className=" text-accent">{item.duration}</h3>
                        <h3 className="max-w-[600px]  text-center">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3 text-center">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 ">{item.company}</p>
                        </div>
                        {/* <span className=" text-white/60 lg:items-start lg:items-left">{item.location}</span> */}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div
                className="flex flex-col gap-[30px] text-center xl:text-left animate-ease-in-out"
                style={{ animationDelay: "0s" }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[1000px] text-white/60 text-start sm:text-justify text-md sm:text-lg mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[200px] py-6 px-6 rounded-xl flex flex-col justify-center items-center gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className=" max-w-[600px] text-center">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3 text-center">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div
                className="flex flex-col gap-[30px] animate-ease-in-out"
                style={{ animationDelay: "0s" }}
              >
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[1000px] text-white/60 text-start sm:text-justify text-md sm:text-lg mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ResumePage;
