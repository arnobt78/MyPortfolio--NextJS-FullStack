import type { Metadata } from "next";
import ContactPage from "../../components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Arnob Mahmud | Get In Touch - Full-Stack Developer",
  description:
    "Contact Arnob Mahmud for freelance, part-time, or full-time opportunities. Based in Frankfurt, Germany. Available for web development, mobile apps, automation, and digital solutions projects.",
  keywords: [
    "Contact Arnob Mahmud",
    "Hire Full-Stack Developer",
    "Freelance Web Developer",
    "Full-Time Developer Frankfurt",
    "Part-Time Developer Germany",
    "Web Development Services",
    "Mobile App Development",
    "Automation Solutions",
    "Digital Solutions Engineer",
    "Get In Touch",
    "Developer Contact",
    "Frankfurt Developer",
  ],
  openGraph: {
    title: "Contact | Arnob Mahmud | Full-Stack Developer",
    description:
      "Get in touch with Arnob Mahmud for freelance, part-time, or full-time development opportunities. Based in Frankfurt, Germany.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Arnob Mahmud | Full-Stack Developer",
    description:
      "Get in touch for web development, mobile apps, automation, and digital solutions projects.",
  },
  alternates: {
    canonical: "https://www.arnobmahmud.com/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
