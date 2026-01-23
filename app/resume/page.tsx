import type { Metadata } from "next";
import ResumePage from "../../components/pages/ResumePage";

export const metadata: Metadata = {
  title: "Resume | Arnob Mahmud | Full-Stack Developer & Software Engineer",
  description:
    "View Arnob Mahmud's professional resume, experience, education, and technical skills. 4+ years of full-stack development expertise in React, Next.js, Node.js, TypeScript, and cloud technologies.",
  keywords: [
    "Arnob Mahmud Resume",
    "Full-Stack Developer CV",
    "Software Engineer Experience",
    "React Developer Skills",
    "Next.js Expert",
    "TypeScript Developer",
    "Node.js Backend",
    "Web Development Portfolio",
    "JavaScript Engineer",
    "Frontend Backend Skills",
  ],
  openGraph: {
    title: "Resume | Arnob Mahmud | Full-Stack Developer",
    description:
      "Professional experience, education, and technical skills of Arnob Mahmud - Full-Stack Developer with 4+ years of expertise",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Arnob Mahmud | Full-Stack Developer",
    description:
      "Professional experience, education, and technical skills - 4+ years of full-stack development",
  },
  alternates: {
    canonical: "https://www.arnobmahmud.com/resume",
  },
};

export default function Resume() {
  return <ResumePage />;
}
