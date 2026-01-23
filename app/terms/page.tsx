import type { Metadata } from "next";
import TermsPage from "../../components/pages/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Use | Arnob Mahmud | Full-Stack Developer",
  description:
    "Terms of Use for Arnob Mahmud's personal portfolio website. Read the terms and conditions for using this website.",
  keywords: [
    "Terms of Use",
    "Terms and Conditions",
    "Website Terms",
    "Legal Terms",
  ],
  openGraph: {
    title: "Terms of Use | Arnob Mahmud",
    description:
      "Terms of Use for Arnob Mahmud's personal portfolio website.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | Arnob Mahmud",
    description: "Terms of Use for Arnob Mahmud's personal portfolio website.",
  },
  alternates: {
    canonical: "https://www.arnobmahmud.com/terms",
  },
};

export default function Terms() {
  return <TermsPage />;
}
