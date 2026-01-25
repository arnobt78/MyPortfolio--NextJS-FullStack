"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Grid3x3, List } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";

import { useTypewriter } from "../../hooks/useTypewriter";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectStack {
  name: string;
}

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: ProjectStack[];
  image: string;
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    num: "01",
    category: "Fullstack",
    title: "work.project.01.title",
    description: "work.project.01.description",
    stack: [
      { name: "React.js" },
      { name: "TailwindCSS" },
      { name: "Node.js" },
      { name: "AWS Lambda" },
      { name: "DynamoDB" },
      { name: "S3" },
      { name: "HTTP API Gateway" },
    ],
    image: "/assets/work/project01.png",
    live: "https://codebook-aws.vercel.app/",
    github:
      "https://github.com/arnobt78/Complete-Ecommerce-Platform--React-Serverless-AWS-Lambda-FullStack",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "work.project.02.title",
    description: "work.project.02.description",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Upstash Vector" },
      { name: "Upstash Redis" },
    ],
    image: "/assets/work/project02.png",
    live: "https://ai-rag-chatbot-arnob.vercel.app/https:/www.wikipedia.org",
    github:
      "https://github.com/arnobt78/RAG-AI-ChatBot--Redis-Vector-QStash-NextJS-FullStack",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "work.project.03.title",
    description: "work.project.03.description",
    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "TailwindCSS" },
      { name: "Appwrite" },
    ],
    image: "/assets/work/project03.png",
    live: "https://healthcare-arnob.vercel.app/",
    github:
      "https://github.com/arnobt78/HealthCare-Doctor-Appointment-Management-System--NextJS-FullStack",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "work.project.04.title",
    description: "work.project.04.description",
    stack: [
      { name: "React" },
      { name: ".NET Core" },
      { name: "C++" },
      { name: "PostgreSQL" },
      { name: "SignalR" },
      { name: "Docker" },
    ],
    image: "/assets/work/project04.png",
    live: "https://motor-speed-temperature.netlify.app/",
    github:
      "https://github.com/arnobt78/IoT-Embedded-MotorSync-Intelligence-Platform--CPP-DotNet-React-FullStack",
  },
  {
    num: "05",
    category: "Fullstack",
    title: "work.project.05.title",
    description: "work.project.05.description",
    stack: [
      { name: "Next.js" },
      { name: "MongoDB" },
      { name: "JWT" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/project05.png",
    live: "https://stockly-inventory.vercel.app/",
    github:
      "https://github.com/arnobt78/Stock-Inventory-Management-System--NextJS-FullStack",
  },
  {
    num: "06",
    category: "Fullstack",
    title: "work.project.06.title",
    description: "work.project.06.description",
    stack: [
      { name: "React" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Node.js" },
    ],
    image: "/assets/work/project06.png",
    live: "https://mern-booking-hotel.netlify.app/",
    github:
      "https://github.com/arnobt78/Hotel-Booking-Management-System--React-MERN-FullStack",
  },

  {
    num: "07",
    category: "Fullstack",
    title: "work.project.07.title",
    description: "work.project.07.description",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Redis" },
    ],
    image: "/assets/work/project07.png",
    live: "https://daily-urlist.vercel.app/",
    github:
      "https://github.com/arnobt78/Smart-AI-Collaborative-URL-Manager--NextJS-FullStack",
  },

  {
    num: "08",
    category: "Fullstack",
    title: "work.project.08.title",
    description: "work.project.08.description",
    stack: [{ name: "Angular" }, { name: "TypeScript" }, { name: "MongoDB" }],
    image: "/assets/work/project08.png",
    live: "https://employee-project-management.vercel.app/",
    github:
      "https://github.com/arnobt78/Employee-Project-Management-Platform--Angular-FullStack",
  },

  {
    num: "09",
    category: "Fullstack",
    title: "work.project.09.title",
    description: "work.project.09.description",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Redis" },
    ],
    image: "/assets/work/project09.png",
    live: "https://university-library-managment.vercel.app/",
    github:
      "https://github.com/arnobt78/Library-Management-System--NextJS-FullStack",
  },

  {
    num: "10",
    category: "Fullstack",
    title: "work.project.10.title",
    description: "work.project.10.description",
    stack: [
      { name: "Next.js" },
      { name: "PostgreSQL" },
      { name: "TailwindCSS" },
      { name: "Spoonacular API" },
    ],
    image: "/assets/work/project10.png",
    live: "https://recipe-smart.vercel.app/",
    github: "https://github.com/arnobt78/Food-Recipe-Guide--React-FullStack",
  },

  {
    num: "11",
    category: "Fullstack",
    title: "work.project.11.title",
    description: "work.project.11.description",
    stack: [
      { name: "Next.js" },
      { name: "PostgreSQL" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/project11.png",
    live: "https://doctor-patient-calendar-appointment.vercel.app/",
    github:
      "https://github.com/arnobt78/MultiView-Calender-HealthCare-Appointment-System--NextJS-FullStack",
  },

  {
    num: "12",
    category: "Fullstack",
    title: "work.project.12.title",
    description: "work.project.12.description",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/project12.png",
    live: "https://multi-ai-chat-hub.vercel.app/",
    github:
      "https://github.com/arnobt78/Multi-Model-AI-Chat-Bot--React-FullStack",
  },

  {
    num: "13",
    category: "Fullstack",
    title: "work.project.13.title",
    description: "work.project.13.description",
    stack: [
      { name: "Next.js" },
      { name: "PostgreSQL" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/project13.png",
    live: "https://snuzz-pro.vercel.app/",
    github:
      "https://github.com/arnobt78/Ecommerce-Platform-SnuzzPro--NextJS-FullStack",
  },

  {
    num: "14",
    category: "Fullstack",
    title: "work.project.14.title",
    description: "work.project.14.description",
    stack: [
      { name: "Next.js" },
      { name: "MongoDB" },
      { name: "TanStack React Query" },
    ],
    image: "/assets/work/project14.png",
    live: "https://dev-bug-coder-blog.vercel.app/",
    github:
      "https://github.com/arnobt78/Developer-Blog-Platform--NextJS-FullStack",
  },

  {
    num: "15",
    category: "Frontend",
    title: "work.project.15.title",
    description: "work.project.15.description",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/work/project15.png",
    live: "https://travel-camping-ui.vercel.app/",
    github:
      "https://github.com/arnobt78/Travel-Camping-Landing--NextJS-Frontend",
  },

  {
    num: "16",
    category: "Fullstack",
    title: "work.project.16.title",
    description: "work.project.16.description",
    stack: [
      { name: "Next.js" },
      { name: "MongoDB" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/project16.png",
    live: "https://embedded-feedback.vercel.app/dashboard",
    github:
      "https://github.com/arnobt78/Embedded-Feedback-Collection-Widget--NextJS-FullStack",
  },

  {
    num: "17",
    category: "Fullstack",
    title: "work.project.17.title",
    description: "work.project.17.description",
    stack: [{ name: "React" }, { name: "Express.js" }, { name: "MongoDB" }],
    image: "/assets/work/project17.png",
    live: "https://develop-testing-1.netlify.app/",
    github:
      "https://github.com/arnobt78/Professional-Home-Nursing-Services-Platform--React-FullStack",
  },

  {
    num: "18",
    category: "Frontend",
    title: "work.project.18.title",
    description: "work.project.18.description",
    stack: [
      { name: "React" },
      { name: "Vite" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/project18.png",
    live: "https://embedded-marketing.netlify.app/",
    github:
      "https://github.com/arnobt78/Embedded-Widget-Marketing-Interactive-Landing--React-Frontend",
  },

  {
    num: "19",
    category: "Frontend",
    title: "work.project.19.title",
    description: "work.project.19.description",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/project19.png",
    live: "https://restaurant-js-arnob.vercel.app/",
    github: "https://github.com/arnobt78/Restaurant-Landing-1--NextJS-Frontend",
  },

  {
    num: "20",
    category: "Frontend",
    title: "work.project.20.title",
    description: "work.project.20.description",
    stack: [{ name: "React" }, { name: "TailwindCSS" }],
    image: "/assets/work/project20.png",
    live: "https://restaurant-3-gericht.netlify.app/",
    github: "https://github.com/arnobt78/Restaurant-Landing-3--React-Frontend",
  },

  {
    num: "21",
    category: "Fullstack",
    title: "work.project.21.title",
    description: "work.project.21.description",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
    ],
    image: "/assets/work/project21.png",
    live: "https://mern-food-ordering.netlify.app/",
    github:
      "https://github.com/arnobt78/Restaurant-Food-Ordering-Management-System--React-MERN-FullStack",
  },

  {
    num: "22",
    category: "Frontend",
    title: "work.project.22.title",
    description: "work.project.22.description",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/project22.png",
    live: "https://coffeeshop-arnob.vercel.app/",
    github: "https://github.com/arnobt78/CoffeeShop-Landing-1--NextJS-Frontend",
  },

  {
    num: "23",
    category: "Frontend",
    title: "work.project.23.title",
    description: "work.project.23.description",
    stack: [{ name: "React" }, { name: "Vite" }, { name: "TailwindCSS" }],
    image: "/assets/work/project23.png",
    live: "https://coffeelover-cafe.netlify.app/",
    github: "https://github.com/arnobt78/CoffeeShop-Landing-2--React-Frontend",
  },

  {
    num: "24",
    category: "Fullstack",
    title: "work.project.24.title",
    description: "work.project.24.description",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "React Query" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/project24.png",
    live: "https://jobify-tracker.vercel.app/",
    github:
      "https://github.com/arnobt78/Job-Application-Tracker--NextJS-FullStack",
  },

  {
    num: "25",
    category: "Fullstack",
    title: "work.project.25.title",
    description: "work.project.25.description",
    stack: [
      { name: "Next.js" },
      { name: "PostgreSQL" },
      { name: "Vercel Blob" },
      { name: "Stripe" },
    ],
    image: "/assets/work/project25.png",
    live: "https://store-next-beta.vercel.app/",
    github:
      "https://github.com/arnobt78/Ecommerce-Platform--NextJS-Serverless-FullStack",
  },

  {
    num: "26",
    category: "Fullstack",
    title: "work.project.26.title",
    description: "work.project.26.description",
    stack: [
      { name: "React" },
      { name: "Vite" },
      { name: "Redux Toolkit" },
      { name: "Express.js" },
    ],
    image: "/assets/work/project26.png",
    live: "https://ecommerce-comfy-arnob.netlify.app/",
    github:
      "https://github.com/arnobt78/Ecommerce-Platform--React-Express-NodeJS-FullStack",
  },

  {
    num: "27",
    category: "Frontend",
    title: "work.project.27.title",
    description: "work.project.27.description",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Framer-Motion" },
    ],
    image: "/assets/work/project27.png",
    live: "https://skincare-salon.vercel.app/",
    github:
      "https://github.com/arnobt78/Skin-Care-Salon-Landing--NextJS-Frontend",
  },

  {
    num: "28",
    category: "Frontend",
    title: "work.project.28.title",
    description: "work.project.28.description",
    stack: [{ name: "React" }, { name: "Vite" }, { name: "TailwindCSS" }],
    image: "/assets/work/project28.png",
    live: "https://hotel-booking-arnob.netlify.app/",
    github:
      "https://github.com/arnobt78/Hotel-Booking-Interactive-Landing--React-Frontend",
  },

  {
    num: "29",
    category: "Fullstack",
    title: "work.project.29.title",
    description: "work.project.29.description",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/project29.png",
    live: "https://www.arnobmahmud.com/",
    github: "https://github.com/arnobt78/MyPortfolio--NextJS-FullStack",
  },

  // {
  //   num: "30",
  //   category: "Fullstack",
  //   title: "",
  //   description: "",
  //   stack: [{ name: "" }],
  //   image: "/assets/work/project30.png",
  //   live: "",
  //   github: "",
  // },

  // {
  //   num: "31",
  //   category: "Fullstack",
  //   title: "",
  //   description: "",
  //   stack: [{ name: "" }],
  //   image: "/assets/work/project31.png",
  //   live: "",
  //   github: "",
  // },

  // {
  //   num: "32",
  //   category: "Fullstack",
  //   title: "",
  //   description: "",
  //   stack: [{ name: "" }],
  //   image: "/assets/work/project32.png",
  //   live: "",
  //   github: "",
  // },

  // {
  //   num: "33",
  //   category: "Fullstack",
  //   title: "",
  //   description: "",
  //   stack: [{ name: "" }],
  //   image: "/assets/work/project33.png",
  //   live: "",
  //   github: "",
  // },

  // {
  //   num: "34",
  //   category: "Fullstack",
  //   title: "",
  //   description: "",
  //   stack: [{ name: "" }],
  //   image: "/assets/work/project34.png",
  //   live: "",
  //   github: "",
  // },

  // {
  //   num: "35",
  //   category: "Fullstack",
  //   title: "",
  //   description: "",
  //   stack: [{ name: "" }],
  //   image: "/assets/work/project35.png",
  //   live: "",
  //   github: "",
  // },

  // {
  //   num: "36",
  //   category: "Fullstack",
  //   title: "",
  //   description: "",
  //   stack: [{ name: "" }],
  //   image: "/assets/work/project36.png",
  //   live: "",
  //   github: "",
  // },

  // {
  //   num: "37",
  //   category: "Fullstack",
  //   title: "",
  //   description: "",
  //   stack: [{ name: "" }],
  //   image: "/assets/work/project37.png",
  //   live: "",
  //   github: "",
  // },

  // {
  //   num: "38",
  //   category: "Fullstack",
  //   title: "",
  //   description: "",
  //   stack: [{ name: "" }],
  //   image: "/assets/work/project38.png",
  //   live: "",
  //   github: "",
  // },

  // {
  //   num: "39",
  //   category: "Fullstack",
  //   title: "",
  //   description: "",
  //   stack: [{ name: "" }],
  //   image: "/assets/work/project39.png",
  //   live: "",
  //   github: "",
  // },

  // {
  //   num: "40",
  //   category: "Fullstack",
  //   title: "",
  //   description: "",
  //   stack: [{ name: "" }],
  //   image: "/assets/work/project40.png",
  //   live: "",
  //   github: "",
  // },
];

const WorkPage = () => {
  const [project, setPorject] = useState<Project>(projects[0]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const swiperRef = useRef<SwiperType | null>(null);
  const { t } = useLanguage();

  const { displayText, isComplete } = useTypewriter({
    text: t("work.projectsTitle", { count: projects.length }),
    speed: 200,
    delay: 2000,
  });

  const handleSlidechange = (swiper: SwiperType) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setPorject(projects[currentIndex]);
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-6 animate-ease-in-out">
      <div className="container mx-auto">
        {/* View Mode Toggle */}
        <div className="flex flex-col gap-4 mb-6">
          {/* Row 1: Typewriter Title and View Mode Buttons */}
          <div className="flex justify-between items-center gap-0">
            {/* Typewriter Title */}
            <h2 className="text-xl xl:text-2xl font-bold text-accent whitespace-nowrap">
              {displayText}
              {!isComplete && <span className="typewriter-cursor"></span>}
            </h2>

            {/* View Mode Buttons */}
            <div className="flex gap-2">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger
                    onClick={() => setViewMode("grid")}
                    className={`w-[30px] xl:w-[40px] h-[30px] xl:h-[40px] rounded-md flex justify-center items-center transition-all ${
                      viewMode === "grid"
                        ? "bg-accent text-primary"
                        : "bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    <Grid3x3 className="text-2xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t("work.view.grid")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger
                    onClick={() => setViewMode("list")}
                    className={`w-[30px] xl:w-[40px] h-[30px] xl:h-[40px] rounded-md flex justify-center items-center transition-all ${
                      viewMode === "list"
                        ? "bg-accent text-primary"
                        : "bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    <List className="text-2xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t("work.view.list")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Row 2: GitHub Link */}
          <div className="flex flex-col gap-2">
            <span className="text-sm sm:text-base text-white/80">
              {t("work.githubNote.prefix")}{" "}
              <Link
                href="https://github.com/arnobt78"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/70 transition-colors duration-300 hover:underline hover:underline-offset-4"
              >
                arnobt78
              </Link>
            </span>
          </div>
        </div>

        {/* Grid View (Original Swiper) */}
        {viewMode === "grid" && (
          <div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-8 xl:items-start">
            {/* Number and Buttons - order 1 on mobile, grid position [row 1, col 1] on desktop */}
            <div className="flex justify-between order-1 xl:row-start-1 xl:col-start-1 mb-2 xl:mb-0">
              {/* outline num */}
              <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("work.tooltip.live")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("work.tooltip.github")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

            {/* Title - order 2 on mobile, grid position [row 2, col 1] on desktop */}
            <h2 className="text-md lg:text-lg xl:text-xl font-semibold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize order-2 xl:row-start-2 xl:col-start-1 mb-6 xl:mb-0">
              {t(project.title)}
            </h2>

            {/* Image/Swiper - order 3 on mobile, grid position [row 1, col 2] with row-span to span all rows on desktop */}
            <div className="order-3 xl:row-start-1 xl:row-span-6 xl:col-start-2 mb-2 xl:mb-0 relative xl:self-stretch">
              <div className="relative">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="xl:h-[520px] mb-12"
                  onSlideChange={handleSlidechange}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  speed={600}
                  effect="slide"
                  allowTouchMove={true}
                  allowSlideNext={true}
                  allowSlidePrev={true}
                  simulateTouch={true}
                  touchEventsTarget="container"
                  touchRatio={1}
                  threshold={10}
                >
                  {projects.map((project, index) => {
                    return (
                      <SwiperSlide key={index} className="w-full">
                        <div className="h-[460px] relative group justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                          {/* overlay - pointer-events-none to allow clicks through */}
                          <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 pointer-events-none"></div>

                          {/* image */}
                          <div className="relative w-full h-full">
                            <Image
                              src={project.image}
                              alt={t(project.title)}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                              className="object-cover absolute inset-0"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                {/* Left Arrow - positioned at the edge of image area, only navigation method */}
                <button
                  type="button"
                  className="flex items-center justify-center absolute left-2 md:left-3 xl:left-4 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-110 group active:scale-95"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (swiperRef.current) {
                      swiperRef.current.slidePrev();
                    }
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (swiperRef.current) {
                      swiperRef.current.slidePrev();
                    }
                  }}
                  aria-label={t("work.aria.prev")}
                >
                  <PiCaretLeftBold className="text-white text-xl md:text-2xl xl:text-3xl transition-all duration-300 group-hover:text-accent pointer-events-none" />
                </button>

                {/* Right Arrow - positioned at the edge of image area, only navigation method */}
                <button
                  type="button"
                  className="flex items-center justify-center absolute right-2 md:right-3 xl:right-4 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-110 group active:scale-95"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (swiperRef.current) {
                      swiperRef.current.slideNext();
                    }
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (swiperRef.current) {
                      swiperRef.current.slideNext();
                    }
                  }}
                  aria-label={t("work.aria.next")}
                >
                  <PiCaretRightBold className="text-white text-xl md:text-2xl xl:text-3xl transition-all duration-300 group-hover:text-accent pointer-events-none" />
                </button>
              </div>
            </div>

            {/* Description - order 4 on mobile, grid position [row 3, col 1] on desktop */}
            <p className=" text-white/60 text-start sm:text-justify order-4 xl:row-start-3 xl:col-start-1 mb-6 xl:mb-0">
              {t(project.description)}
            </p>

            {/* Stack - order 5 on mobile, grid position [row 4, col 1] on desktop */}
            <div className="text-start sm:text-justify order-5 xl:row-start-4 xl:col-start-1 mb-6 xl:mb-0">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-l text-accent">
                      {item.name}
                      {/* removing the last comma  */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Border - order 6 on mobile, grid position [row 5, col 1] on desktop */}
            <div className="border border-white/20 order-6 xl:row-start-5 xl:col-start-1"></div>
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="flex flex-col gap-8">
            {projects.map((proj, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-8">
                  {/* Number and Buttons - order 1 on mobile, grid position [row 1, col 1] on desktop */}
                  <div className="flex justify-between order-1 xl:row-start-1 xl:col-start-1 mb-2 xl:mb-0">
                    {/* outline num */}
                    <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                      {proj.num}
                    </div>

                    {/* button */}
                    <div className="flex items-center gap-4">
                      {/* live project button */}
                      <Link href={proj.live}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                              <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{t("work.tooltip.live")}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>

                      {/* github project button */}
                      <Link href={proj.github}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                              <BsGithub className="text-white text-3xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{t("work.tooltip.github")}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    </div>
                  </div>

                  {/* Title - order 2 on mobile, grid position [row 2, col 1] on desktop */}
                  <h2 className="text-md lg:text-lg xl:text-xl font-semibold  leading-none text-white group-hover:text-accent transition-all duration-500 capitalize order-2 xl:row-start-2 xl:col-start-1 mb-6 xl:mb-0">
                    {t(proj.title)}
                  </h2>

                  {/* Image - order 3 on mobile, grid position [row 1-6, col 2] on desktop */}
                  <div className="order-3 xl:row-start-1 xl:row-end-7 xl:col-start-2 mb-2 xl:mb-0">
                    <div className="h-[460px] relative group justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={proj.image}
                          alt={t(proj.title)}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                          className="object-cover absolute inset-0"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description - order 4 on mobile, grid position [row 3, col 1] on desktop */}
                  <p className="text-white/60 text-start sm:text-justify order-4 xl:row-start-3 xl:col-start-1 mb-6 xl:mb-0">
                    {t(proj.description)}
                  </p>

                  {/* Stack - order 5 on mobile, grid position [row 4, col 1] on desktop */}
                  <div className="text-start sm:text-justify order-5 xl:row-start-4 xl:col-start-1">
                    <ul className="flex flex-wrap gap-2">
                      {proj.stack.map((item, stackIndex) => {
                        return (
                          <li key={stackIndex} className="text-l text-accent">
                            {item.name}
                            {/* removing the last comma  */}
                            {stackIndex !== proj.stack.length - 1 && ","}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Border - order 6 on mobile, grid position [row 5, col 1] on desktop */}
                  {/* <div className="border border-white/20 order-6 xl:row-start-5 xl:col-start-1"></div> */}
                </div>

                {/* Separator between projects (except last one) */}
                {index !== projects.length - 1 && (
                  <div className="w-full border-t-2 border-white/20"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkPage;
