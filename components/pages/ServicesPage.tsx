"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceStack {
  name: string;
}

interface Service {
  num: string;
  titleKey: string;
  descriptionKey: string;
  stack: ServiceStack[];
  href: string;
}

const services: Service[] = [
  {
    num: "01",
    titleKey: "services.01.title",
    descriptionKey: "services.01.description",
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
    titleKey: "services.02.title",
    descriptionKey: "services.02.description",
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
    titleKey: "services.03.title",
    descriptionKey: "services.03.description",
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
    titleKey: "services.04.title",
    descriptionKey: "services.04.description",
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
  const { t } = useLanguage();
  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-6 animate-ease-in-out page-content-no-scrollbar">
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
                  {t(service.titleKey)}
                </h2>
                {/* description  */}
                <p className="text-white/60 text-start text-md sm:text-lg">
                  {t(service.descriptionKey)}
                </p>
                {/* stack */}
                <div className="text-start">
                  <ul className="flex flex-wrap gap-2">
                    {service.stack.map((item, stackIndex) => {
                      return (
                        <li
                          key={stackIndex}
                          className="text-md sm:text-lg text-accent"
                        >
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
