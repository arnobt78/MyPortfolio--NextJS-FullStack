import type { Metadata } from "next";
import FAQPage from "../../components/pages/FAQPage";

export const metadata: Metadata = {
  title: "FAQ | Arnob Mahmud | Frequently Asked Questions",
  description:
    "Frequently asked questions about hiring Arnob Mahmud for freelance, part-time, or full-time development work. Learn about availability, pricing, remote work, tech stack, project process, and more.",
  keywords: [
    "FAQ Arnob Mahmud",
    "Frequently Asked Questions",
    "Developer FAQ",
    "Freelance Developer Questions",
    "Hire Developer FAQ",
    "Web Developer FAQ",
    "Full-Stack Developer FAQ",
    "Project Timeline",
    "Developer Pricing",
    "Remote Developer",
    "Tech Stack Questions",
    "Developer Process",
  ],
  openGraph: {
    title: "FAQ | Arnob Mahmud | Frequently Asked Questions",
    description:
      "Frequently asked questions about hiring Arnob Mahmud for freelance, part-time, or full-time development work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Arnob Mahmud | Frequently Asked Questions",
    description:
      "Learn about availability, pricing, remote work, tech stack, project process, and more.",
  },
  alternates: {
    canonical: "https://www.arnobmahmud.com/faq",
  },
};

export default function FAQ() {
  return <FAQPage />;
}
