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
    title:
      "CodeBook E-Commerce Platform - React, AWS (Lambda, DynamoDB, S3, HTTP API Gateway) Serverless Architecture FullStack Project",
    description:
  "Production-ready full-stack e-commerce platform built with React and AWS serverless architecture. Features a complete customer storefront, Stripe payments, order management, and a role-based admin dashboard. Powered by AWS Lambda, API Gateway, and DynamoDB for scalable backend operations, with JWT authentication, responsive UI, and modern React patterns.",

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
    title:
      "Retrieval-Augmented Generation (RAG) AI Chat Bot - Next.js,Vercel AI SDK, Upstash Vector, Redis Database FullStack Project",
    description:
  "Context-aware AI chatbot built with Next.js using Retrieval-Augmented Generation (RAG). Combines vector search and memory via Upstash Vector & Redis to deliver accurate, stateful responses powered by modern AI and cloud-native architecture.",

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
    title:
      "HealthCare Doctor Appointment Management System - Next.js FullStack Project (Featuring Admin Dashboard Approve/Decline SMS Notifications)",
    description:
  "Full-stack healthcare appointment management system built with Next.js. Includes patient booking, admin approval workflows, secure data handling, and automated SMS notifications via Twilio.",

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
    title:
      "IoT Embedded Motor Sync Intelligence - Real-time Industrial IoT Dashboard, Motor Physics Engine, Business Intelligence Platform (C++, .NET, PostgreSQL, SignalR, Docker, React)",
    description:
  "Production-ready industrial IoT platform for real-time motor monitoring and analytics. Combines a C++ motor physics engine with a .NET backend (SignalR) and a React dashboard to deliver live telemetry, synchronization insights, and business intelligence.",

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
    title:
      "Stock Inventory Management System - Next.js, Prisma, MongoDB FullStack Project (including Business-Insights Dashboard)",
    description:
      "A Next.js based inventory management application designed to help you manage your product stock efficiently. This application includes features such as product listing, adding new products, editing existing products, and filtering products based on various criteria using JWT, Prisma, MongoDB, Session, Cookies and authMiddleware.",
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
    title:
      "Hotel Booking Management System - React, Express.js FullStack MERN Project (including Business-Insights Dashboard)",
    description:
      "A comprehensive, production-ready hotel booking platform built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring advanced search, booking management, analytics dashboard, and payment integration.",
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
    title:
      "Smart AI Collaborative URL Bookmark Manager - Next.js, TanStack React Query, Prisma, PostgreSQL, Upstash, QStash, Cloudinary, Google Gemini, Groq, OpenRouter, Hugging Face FullStack Project",
    description:
      "A production-ready, full-stack URL bookmarking and sharing platform built with Next.js, TypeScript, and PostgreSQL. Features AI-powered enhancements, real-time collaboration, vector search, and intelligent URL organization.",
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
    title:
      "Employee & Project Management Platform - Angular 18, TypeScript, MongoDB Full-Stack Serverless Application (Including Real-time Dashboard, Calendar, Gantt Chart, Business Insights, API Monitoring)",
    description:
      "A comprehensive, full-stack Employee Project Management System built with Angular 18, featuring real-time dashboards, project tracking, calendar views, Gantt charts, business insights, and API monitoring. This is a production-ready CRUD application demonstrating modern web development practices with serverless architecture.",
    stack: [{ name: "Angular" }, { name: "TypeScript" }, { name: "MongoDB" }],
    image: "/assets/work/project08.png",
    live: "https://employee-project-management.vercel.app/",
    github:
      "https://github.com/arnobt78/Employee-Project-Management-Platform--Angular-FullStack",
  },

  {
    num: "09",
    category: "Fullstack",
    title:
      "Library Management System - Next.js, PostgreSQL, Redis, Upstash, Brevo, Resend, ImageKit FullStack Project",
    description:
      "A Next.js, TypeScript, Postgres, the University Library Management System is a production-grade platform featuring a public-facing app and admin interface. It offers advanced functionalities like seamless book borrowing with reminders and receipts, robust user management, automated workflows, optimized tech stack for real-world scalability.",
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
    title:
      "Food Recipe Spoonacular Guide - Next.js, PostgreSQL FullStack Project",
    description:
      "A modern next.js full-stack recipe management guide/helper application. This UI lets users search for recipes, view details, and manage favourites, with a beautiful, responsive design and seamless backend integration.",
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
    title:
      "MultiView Calendar Health Care Appointment Management System – Next.js, Postgresql FullStack Project (Admin Control Panel Permission Dashboard)",
    description:
      "A modern, full-featured calendar and appointment management web application built with Next.js & PostgreSQL. Perfect for healthcare, clinics, and organizations needing robust scheduling, filtering, and client management with multiple calendar views, instant search, advanced filtering, and a clean, responsive UI.",
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
    title:
      "Universal Multi-Provider Assistant - React, TypeScript, Vite FullStack Project (Multi-Model AI Chatbot including Business Insights & Performance Dashboard)",
    description:
      "A modern, responsive AI chat bot application supporting multiple AI providers including Google Gemini, Groq, OpenRouter, Hugging Face, and OpenAI and enable to store the chat history. Built with React, TypeScript, and Vite including business-insights analytics and performance dashboard, typewriter effect, and animated icons for the best user experience.",
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
    title: "Modern E-Commerce Platform - Next.js, Postgresql FullStack Project",
    description:
      "A feature-rich reusable e-commerce platform including monthly subscription system, language support, iframe, OTP authentication and more, designed for maintainability, scalability, and a delightful user experience. It demonstrates best practices in modular React/Next.js development, robust type safety, and real-world UI/UX polish.",
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
    title:
      "Developer's Blog Platform – Next.js, MongoDB, TanStack React Query FullStack Project (Blog for Coding Errors & Solutions)",
    description:
      "A modern, full-stack developer blog platform focused on sharing real-world coding errors and their solutions. Dev-Bug-Coder-Blog empowers developers to post, discuss, and resolve bugs, fostering a collaborative learning environment.",
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
    title:
      "Travel & Camping Landing Page - Next.js, TailwindCSS Frontend Project",
    description:
      "A modern, responsive, and feature-rich travel and camping web application built with Next.js, React, and Tailwind CSS. This project provides a beautiful UI/UX for exploring camping destinations, viewing features, and guiding users through an engaging journey experience.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/work/project15.png",
    live: "https://travel-camping-ui.vercel.app/",
    github:
      "https://github.com/arnobt78/Travel-Camping-Landing--NextJS-Frontend",
  },

  {
    num: "16",
    category: "Fullstack",
    title:
      "Embedded Feedback Collection System - Next.js, MongoDB FullStack Project",
    description:
      "A modern, production-ready feedback collection widget system built with Next.js, React, TypeScript, Prisma, and MongoDB. This project provides an embeddable web component that can be integrated into any website, along with a comprehensive dashboard for managing projects, viewing feedback, and analyzing insights.",
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
    title:
      "Professional Home Nursing Services Platform - React, Express.js, MongoDB FullStack Project",
    description:
      "A full-stack web application for managing home nursing care services, built with React and Express.js. This platform provides comprehensive functionality for service management, job applications, contact forms, and an admin dashboard for managing applications.",
    stack: [{ name: "React" }, { name: "Express.js" }, { name: "MongoDB" }],
    image: "/assets/work/project17.png",
    live: "https://develop-testing-1.netlify.app/",
    github:
      "https://github.com/arnobt78/Professional-Home-Nursing-Services-Platform--React-FullStack",
  },

  {
    num: "18",
    category: "Frontend",
    title:
      "Embedded Marketing - Modern React Landing Page with Feedback Widget",
    description:
      "A modern, production-ready, static React landing page template built with Vite, TailwindCSS, and Framer Motion. Features a fully integrated feedback widget powered by Next.js, Prisma, and Vercel. This project demonstrates best practices for building, styling, and extending React apps with real-world features.",
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
    title:
      "Restaurant TS Landing Page - Next.js, TailwindCSS, Framer Motion Frontend Project",
    description:
      "A beautiful, fully responsive restaurant landing page built with Next.js, TypeScript, TailwindCSS, and Framer Motion. This project demonstrates modern web development practices including server-side rendering, component composition, animation patterns, and responsive design.",
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
    title:
      "Restaurant Gericht Landing Page - React.js, TailwindCSS Frontend Project",
    description:
      "A modern, fully responsive restaurant website built using React, TailwindCSS. It showcases a premium restaurant experience with a clean design, interactive gallery, menu, chef's word, awards, and contact sections. The project is ideal for learning React component architecture, CSS styling, and building scalable web applications.",
    stack: [{ name: "React" }, { name: "TailwindCSS" }],
    image: "/assets/work/project20.png",
    live: "https://restaurant-3-gericht.netlify.app/",
    github: "https://github.com/arnobt78/Restaurant-Landing-3--React-Frontend",
  },

  {
    num: "21",
    category: "Fullstack",
    title:
      "Restaurant Food Ordering Management System - React, Express.js FullStack MERN Project (including Business-Insights Dashboard)",
    description:
      "A comprehensive, modern food ordering platform built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring real-time order management, payment processing, analytics dashboard, and advanced search capabilities.",
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
    title:
      "Coffee Shop 1 Landing Page - Next.js, TailwindCSS, Framer Motion Frontend Project",
    description:
      "A modern, fully responsive coffee shop landing page built with Next, React, TypeScript, and TailwindCSS. This project showcases advanced animations, smooth scrolling effects, and a beautiful user interface perfect for learning modern frontend development.",
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
    title:
      "Coffee Shop 2 Landing Page - React, Vite, TailwindCSS Frontend Project",
    description:
      "A modern, responsive coffee shop landing page built with React, Vite, and Tailwind CSS. This project demonstrates best practices in React component structure, animation, and UI/UX, making it a great template for learning, customization, and real-world use.",
    stack: [{ name: "React" }, { name: "Vite" }, { name: "TailwindCSS" }],
    image: "/assets/work/project23.png",
    live: "https://coffeelover-cafe.netlify.app/",
    github: "https://github.com/arnobt78/CoffeeShop-Landing-2--React-Frontend",
  },

  {
    num: "24",
    category: "Fullstack",
    title:
      "Job Tracking Application - Next.js, TypeScript, Clerk, Prisma, React Query, PostgreSQL FullStack Project",
    description:
      "A full-featured, production-ready job tracking application built with Next.js, TypeScript, Clerk, Prisma, React Query, PostgreSQL, and modern web technologies. Jobify helps job seekers efficiently organize, track, and analyze their job search journey with a beautiful, responsive dashboard.",
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
    title:
      "Next Store | E-Commerce Platform - Next.js, PostgreSQL, Vercel Blob, Stripe Fullstack Project",
    description:
      "A beautifully designed, high-performance e-commerce platform built with Next.js 14, TypeScript, Prisma, PostgreSQL, Vercel Blob Storage, Clerk authentication, Stripe payments, and shadcn/ui. Next Store offers a seamless online shopping experience with fast checkout, secure payments, and a curated selection of products.",
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
    title:
      "Comfy Store | E-Commerce Platform - React, Vite, Redux Toolkit, Node.js, Express.js FullStack Project",
    description:
      "An advanced, modern eCommerce web application built with React, Vite, Redux Toolkit, TailwindCSS, DaisyUI, and more. This project demonstrates a real-world online shop with a rich set of features, clean project structure, and best practices for state management, UI, and API integration.",
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
    title:
      "Premium Skincare Salon - Next.js, TailwindCSS, Framer-Motion Frontend Project",
    description:
      "A modern, responsive, and animated frontend website built with Next.js, React, TypeScript, and TailwindCSS. This project demonstrates how to build a professional skincare salon website with smooth animations, custom cursor interactions, and a modular component structure.",
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
    title:
      "Hotel Booking 2 Landing Page - React, Vite, TailwindCSS Fundamental Frontend Project",
    description:
      "A modern, responsive hotel booking frontend website built with React, Vite, TailwindCSS. This project demonstrates core React concepts (components, context API, hooks), advanced UI/UX with custom components, a mobile-friendly layout, and integration with third-party React libraries. It is designed both as a learning resource and a practical template for static hotel or accommodation websites.",
    stack: [{ name: "React" }, { name: "Vite" }, { name: "TailwindCSS" }],
    image: "/assets/work/project28.png",
    live: "https://hotel-booking-arnob.netlify.app/",
    github:
      "https://github.com/arnobt78/Hotel-Booking-Interactive-Landing--React-Frontend",
  },

  {
    num: "29",
    category: "Fullstack",
    title: "Modern Portfolio Website - Next.js FullStack Project",
    description:
      "A cutting-edge, production-ready portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion. This project showcases modern web development practices, including server-side rendering, API routes, email functionality, analytics integration, and stunning animations.",
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

  const { displayText, isComplete } = useTypewriter({
    text: `Projects (${projects.length})`,
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
    <div className="min-h-[90vh] flex flex-col justify-center pb-4 animate-ease-in-out">
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
                  <p>Grid View</p>
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
                  <p>List View</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          </div>

          {/* Row 2: GitHub Link */}
          <div className="flex flex-col gap-2">
            <span className="text-sm sm:text-base text-white/80">
              Here it&apos;s showcase 40+ projects, to check 90+ open-source production ready Project, visit my Github repo:{" "}
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
                        <p>Live project</p>
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
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

            {/* Title - order 2 on mobile, grid position [row 2, col 1] on desktop */}
            <h2 className="text-md lg:text-lg xl:text-xl font-semibold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize order-2 xl:row-start-2 xl:col-start-1 mb-6 xl:mb-0">
              {project.title}
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
                            alt={project.title}
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
                  aria-label="Previous project"
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
                  aria-label="Next project"
                >
                  <PiCaretRightBold className="text-white text-xl md:text-2xl xl:text-3xl transition-all duration-300 group-hover:text-accent pointer-events-none" />
                </button>
              </div>
            </div>

            {/* Description - order 4 on mobile, grid position [row 3, col 1] on desktop */}
            <p className=" text-white/60 text-start sm:text-justify order-4 xl:row-start-3 xl:col-start-1 mb-6 xl:mb-0">
              {project.description}
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
          <div className="flex flex-col gap-8 max-h-[90vh] overflow-y-auto pr-4 custom-scrollbar">
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
                              <p>Live project</p>
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
                              <p>Github Repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    </div>
                  </div>

                  {/* Title - order 2 on mobile, grid position [row 2, col 1] on desktop */}
                  <h2 className="text-md lg:text-lg xl:text-xl font-semibold  leading-none text-white group-hover:text-accent transition-all duration-500 capitalize order-2 xl:row-start-2 xl:col-start-1 mb-6 xl:mb-0">
                    {proj.title}
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
                          alt={proj.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                          className="object-cover absolute inset-0"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description - order 4 on mobile, grid position [row 3, col 1] on desktop */}
                  <p className="text-white/60 text-start sm:text-justify order-4 xl:row-start-3 xl:col-start-1 mb-6 xl:mb-0">
                    {proj.description}
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
    </div>
  );
};

export default WorkPage;
