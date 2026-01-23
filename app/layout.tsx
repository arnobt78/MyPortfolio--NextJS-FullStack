import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "../components/ScrollToTop";
import StairTransition from "../components/StairTranstion";
import PageTransition from "../components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
  display: "swap", // Prevent layout shift by using fallback font immediately
});

// SEO-optimized main description for metadata (≤160 chars for search results)
const mainDescription =
  "Full-Stack Software Engineer (5+ years) delivering enterprise web & API solutions. React, Next.js, Angular, Node.js, .NET, Python, AWS, Docker. Germany.";

// SEO-optimized title (≤70 chars to avoid truncation)
const mainTitle = "Arnob Mahmud | Full-Stack Engineer | Web & Cloud Solutions";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arnobmahmud.com"),

  title: mainTitle,

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
    title: mainTitle,
    description: mainDescription,
    url: "https://www.arnobmahmud.com",
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
    title: mainTitle,
    description: mainDescription,
    images: ["/assets/photo.png"],
  },

  alternates: {
    canonical: "https://www.arnobmahmud.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Chatbot widget configuration
  // In production (Vercel): Uses NEXT_PUBLIC_CHATBOT_URL from env vars
  // In local dev: Falls back to localhost:3000 if env var not set
  const chatbotUrl =
    process.env.NEXT_PUBLIC_CHATBOT_URL || "http://localhost:3000";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for SEO (Person Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arnob Mahmud",
              jobTitle: "Full-Stack Software Engineer",
              description: mainDescription,
              url: "https://www.arnobmahmud.com",
              sameAs: [
                "https://www.linkedin.com/in/arnob-mahmud-05839655/",
                "https://github.com/arnobt78",
                "https://www.youtube.com/@arnobcorleone8570",
                "https://www.instagram.com/arnob_t78/",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Breubergstraße 11",
                postalCode: "64823",
                addressLocality: "Groß-Umstadt",
                addressCountry: "DE",
                addressRegion: "Hessen",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "Angular",
                "Node.js",
                ".NET",
                "Python",
                "AWS",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "Web Development",
                "Cloud Computing",
              ],
            }),
          }}
        />
        {/* JSON-LD Structured Data for SEO (LocalBusiness Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.arnobmahmud.com/#business",
              name: "Code & Cloud Lösungen",
              description:
                "Software company in Groß-Umstadt providing full-stack web development, automation, and digital solutions.",
              url: "https://www.arnobmahmud.com",
              telephone: "+4915734664351",
              email: "arnobt78@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Breubergstraße 11",
                postalCode: "64823",
                addressLocality: "Groß-Umstadt",
                addressCountry: "DE",
                addressRegion: "Hessen",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "49.8675",
                longitude: "8.9333",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "$$",
              areaServed: {
                "@type": "Country",
                name: "Germany",
              },
              sameAs: ["https://www.google.com/maps?cid=01391579296381946892"],
            }),
          }}
        />
        {/* Chatbot Widget Script - Config must load BEFORE widget.js */}
        {/* Re-enabled for testing - CSS fixes should prevent scrollbar issues */}
        {true && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.CHATBOT_BASE_URL = "${chatbotUrl}";
              window.CHATBOT_TITLE = "Arnob's Assistant";
              window.CHATBOT_GREETING = "👋 How can I help you today?";
              window.CHATBOT_PLACEHOLDER = "Ask about Arnob...";
            `,
              }}
            />
            {/* Load widget.js synchronously (no async) to ensure config is set first */}
            <script src={`${chatbotUrl}/widget.js`}></script>
            <link rel="stylesheet" href={`${chatbotUrl}/styles.css`} />
          </>
        )}
      </head>
      <body className={jetbrainsMono.variable} suppressHydrationWarning>
        <GoogleAnalytics />
        <Analytics />
        <ScrollToTop />
        <StairTransition />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
