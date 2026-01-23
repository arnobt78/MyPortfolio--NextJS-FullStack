import type { Metadata } from "next";
import WorkPage from "../../components/pages/WorkPage";

export const metadata: Metadata = {
  title: "Work & Projects | Arnob Mahmud | Full-Stack Developer Portfolio",
  description:
    "Explore 93+ full-stack web development projects by Arnob Mahmud. Featuring React, Next.js, Angular, Python, Machine Learning, AI ChatBots, E-Commerce apps, Mobile applications, and more. View live demos and GitHub repositories.",
  keywords: [
    "Web Development Projects",
    "Full-Stack Portfolio",
    "React Projects",
    "Next.js Applications",
    "Angular Apps",
    "AI ChatBot",
    "Machine Learning",
    "E-Commerce",
    "Mobile Apps",
    "Python Projects",
    "Portfolio Showcase",
    "GitHub Projects",
  ],
  openGraph: {
    title: "Work & Projects | Arnob Mahmud Portfolio",
    description:
      "Browse through 93+ innovative web development projects including AI chatbots, e-commerce platforms, mobile apps, and automation tools.",
    url: "https://www.arnobmahmud.com/work",
  },
};

export default function Work() {
  return <WorkPage />;
}
