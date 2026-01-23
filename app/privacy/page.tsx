import type { Metadata } from "next";
import PrivacyPage from "../../components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Arnob Mahmud | Full-Stack Developer",
  description:
    "Privacy Policy for Arnob Mahmud's personal portfolio website. Learn how we collect, use, and protect your personal information.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "Privacy Information",
    "Website Privacy",
  ],
  openGraph: {
    title: "Privacy Policy | Arnob Mahmud",
    description:
      "Privacy Policy for Arnob Mahmud's personal portfolio website.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Arnob Mahmud",
    description: "Privacy Policy for Arnob Mahmud's personal portfolio website.",
  },
  alternates: {
    canonical: "https://www.arnobmahmud.com/privacy",
  },
};

export default function Privacy() {
  return <PrivacyPage />;
}
