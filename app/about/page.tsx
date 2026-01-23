import type { Metadata } from "next";
import AboutPage from "../../components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About | Arnob Mahmud | Full-Stack Developer",
  description:
    "Learn more about Arnob Mahmud, a Full-Stack Software Engineer based in Germany. Personal portfolio information and contact details.",
  keywords: [
    "About Arnob Mahmud",
    "Full-Stack Developer",
    "Software Engineer Germany",
    "Portfolio Information",
    "Developer Profile",
  ],
  openGraph: {
    title: "About | Arnob Mahmud | Full-Stack Developer",
    description:
      "Learn more about Arnob Mahmud, a Full-Stack Software Engineer based in Germany.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Arnob Mahmud | Full-Stack Developer",
    description:
      "Learn more about Arnob Mahmud, a Full-Stack Software Engineer.",
  },
  alternates: {
    canonical: "https://www.arnobmahmud.com/about",
  },
};

export default function About() {
  return <AboutPage />;
}
