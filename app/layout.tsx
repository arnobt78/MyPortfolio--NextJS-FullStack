import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "../components/ScrollToTop";
import StairTransition from "../components/StairTranstion";
import PageTransition from "../components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

// SEO-optimized main description for metadata
const mainDescription =
  "Full-Stack Software Engineer with 5+ years of experience delivering enterprise-grade web and API solutions. Specialized in React, Next.js, Angular, Node.js, .NET, Python, and cloud platforms (AWS, Docker, Kubernetes). Proven expertise in scalable architecture, automation, security, CI/CD, and production-ready systems for businesses and startups in Germany and Europe.";


export const metadata: Metadata = {
  metadataBase: new URL("https://arnob-mahmud.vercel.app"),

  title:
    "Arnob Mahmud | Full-Stack Software Engineer | Web, Cloud & Automation | Germany",

  description: mainDescription,

  keywords: [
    "Full-Stack Software Engineer",
    "Software Engineer Germany",
    "Software Engineer Frankfurt",
    "Web Application Development",
    "Enterprise Software",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    ".NET",
    "Python",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "DevOps",
    "Automation",
    "Cloud Solutions",
    "IT Security",
    "Freelance Software Engineer",
  ],

  authors: [{ name: "Arnob Mahmud" }],
  creator: "Arnob Mahmud",
  publisher: "Arnob Mahmud",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  applicationName: "Arnob Mahmud Portfolio",

  openGraph: {
    title:
      "Arnob Mahmud | Full-Stack Software Engineer | Enterprise Web & Cloud Solutions",
    description: mainDescription,
    url: "https://arnob-mahmud.vercel.app",
    siteName: "Arnob Mahmud Portfolio",
    images: [
      {
        url: "/assets/photo.png",
        width: 800,
        height: 800,
        alt: "Arnob Mahmud – Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Arnob Mahmud | Full-Stack Software Engineer | Web & Cloud Solutions",
    description: mainDescription,
    images: ["/assets/photo.png"],
  },

  alternates: {
    canonical: "https://arnob-mahmud.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inject chatbot widget script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.CHATBOT_BASE_URL = "https://ai-chatbot-widget.arnobt78.workers.dev";
              window.CHATBOT_TITLE = "Arnob's Assistant";
              window.CHATBOT_GREETING = "👋 How can I help you today?";
              window.CHATBOT_PLACEHOLDER = "Ask about Arnob...";
            `,
          }}
        />
        <script
          src="https://ai-chatbot-widget.arnobt78.workers.dev/widget.js"
          async
        ></script>
      </head>
      <body className={jetbrainsMono.variable} suppressHydrationWarning>
        <div id="chatbot-widget"></div> {/* Add this container */}
        <GoogleAnalytics />
        <Analytics />
        <ScrollToTop />
        <StairTransition />
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
