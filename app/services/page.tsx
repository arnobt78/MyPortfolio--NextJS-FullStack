import type { Metadata } from "next";
import ServicesPage from "../../components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services | Arnob Mahmud | Full-Stack Developer & Automation Engineer",
  description:
    "Professional web development, mobile app development, UI/UX design, test automation, and cybersecurity services by Arnob Mahmud. Specialized in React, Next.js, Angular, Python, and modern tech stacks. Delivering scalable, secure, and user-friendly digital solutions tailored to your business needs.",
  keywords: [
    "Web Development Services",
    "Mobile App Development",
    "UI/UX Design Services",
    "Test Automation",
    "QA Engineering",
    "Cyber Security Services",
    "Full-Stack Development",
    "React Development",
    "Next.js Development",
    "Angular Development",
    "Responsive Web Design",
    "Software Testing",
    "Security Consulting",
  ],
  openGraph: {
    title: "Services | Arnob Mahmud Portfolio",
    description:
      "Expert services in web development, mobile apps, UI/UX design, test automation, and cybersecurity. Get scalable solutions tailored to your needs.",
    url: "https://www.arnobmahmud.com/services",
  },
};

export default function Services() {
  return <ServicesPage />;
}
