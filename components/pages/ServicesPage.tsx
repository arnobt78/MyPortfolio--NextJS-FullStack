"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

interface ServiceStack {
  name: string;
}

interface Service {
  num: string;
  title: string;
  description: string;
  stack: ServiceStack[];
  href: string;
}

const services: Service[] = [
  {
    num: "01",
    title: "Web & Application Development",
    description:
      "Design and build scalable, production-ready web and mobile applications with clean architecture, modern frameworks, and reliable backend APIs—focused on performance, maintainability, and business impact.",
    stack: [
      { name: ".NET" },
      { name: "Node.js" },
      { name: "Python" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Angular" },
      { name: "REST APIs" },
    ],
    href: "/contact",
  },
  {
    num: "02",
    title: "UI / UX Engineering",
    description:
      "Create intuitive, user-centric interfaces that balance usability and visual clarity. Translate business requirements into responsive, accessible, and consistent user experiences.",
    stack: [
      { name: "Figma" },
      { name: "Wireframing" },
      { name: "Prototyping" },
      { name: "Design Systems" },
    ],
    href: "/contact",
  },
  {
    num: "03",
    title: "Test Automation, DevOps & Quality Engineering",
    description:
      "Ensure high software quality and reliable delivery through automated testing, CI/CD pipelines, and integration validation. Focused on stability, performance, and defect prevention across the full delivery lifecycle.",
    stack: [
  { name: "CI/CD" },
  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "Cypress" },
  { name: "Jest" },
  { name: "Selenium" },
  { name: "VPS" },
],

    href: "/contact",
  },
  {
    num: "04",
    title: "Cloud, Security & Reliability",
    description:
      "Deliver secure, reliable cloud-based systems with practical security controls, access management, and monitoring. Focused on stability, compliance, and production resilience across modern application environments.",
    stack: [
      { name: "AWS" },
      { name: "Auth" },
      { name: "Monitoring" },
      { name: "Secure APIs" },
      { name: "SSH" },
      { name: "Network Security" },
    ],
    href: "/contact",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-4 xl:pb-4 animate-ease-in-out">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-16 items-stretch">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-between gap-4 group h-full"
              >
                {/* top  */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-xl sm:text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description  */}
                <p className="text-white/60 text-start text-md sm:text-lg">
                  {service.description}
                </p>
                {/* stack */}
                <div className="text-start">
                  <ul className="flex flex-wrap gap-2">
                    {service.stack.map((item, stackIndex) => {
                      return (
                        <li key={stackIndex} className="text-md sm:text-lg text-accent">
                          {item.name}
                          {/* removing the last comma  */}
                          {stackIndex !== service.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
