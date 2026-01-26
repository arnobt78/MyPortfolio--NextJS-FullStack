import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "../components/ScrollToTop";
import StairTransition from "../components/StairTranstion";
import PageTransition from "../components/PageTransition";
import { I18nProvider } from "@/components/I18nProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { Providers } from "./providers";
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget";

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

  // Search Console: set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in .env.local and Vercel to the meta-tag "content" value from Google.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let initialLanguage = "en";
  try {
    const hdrs = await headers();
    const lang = hdrs.get("x-initial-language");
    if (lang && (lang === "en" || lang === "de")) {
      initialLanguage = lang;
    }
  } catch {}

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <head>
        {/* Prevent language flicker: set initial lang before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_LANGUAGE__="${initialLanguage}";`,
          }}
        />
        {/* CRITICAL: Prevent Radix UI dialog from adding padding that causes layout shift */}
        {/* This script runs immediately and aggressively removes any padding/margin */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Wait for DOM to be ready
                function init() {
                  // Check if elements exist before accessing
                  const html = document.documentElement;
                  const body = document.body;
                  
                  if (!html || !body) {
                    // If not ready, try again
                    if (document.readyState === 'loading') {
                      document.addEventListener('DOMContentLoaded', init);
                      return;
                    }
                    // Fallback: try again after a short delay
                    setTimeout(init, 10);
                    return;
                  }
                  
                  // Set scrollbar width to 0 immediately to prevent Radix calculations
                  const style = document.createElement('style');
                  style.textContent = \`
                    html, body {
                      scrollbar-width: none !important;
                      -ms-overflow-style: none !important;
                      padding-right: 0 !important;
                      margin-right: 0 !important;
                    }
                    html::-webkit-scrollbar, body::-webkit-scrollbar {
                      display: none !important;
                      width: 0 !important;
                      height: 0 !important;
                    }
                  \`;
                  document.head.appendChild(style);
                  
                  // Function to remove padding/margin aggressively
                  function removePadding() {
                    const htmlEl = document.documentElement;
                    const bodyEl = document.body;
                    
                    // Safety check
                    if (!htmlEl || !bodyEl) return;
                    
                    if (htmlEl.style && htmlEl.style.paddingRight) htmlEl.style.paddingRight = '0px';
                    if (htmlEl.style && htmlEl.style.marginRight) htmlEl.style.marginRight = '0px';
                    if (bodyEl.style && bodyEl.style.paddingRight) bodyEl.style.paddingRight = '0px';
                    if (bodyEl.style && bodyEl.style.marginRight) bodyEl.style.marginRight = '0px';
                  }
                  
                  // Remove padding immediately
                  removePadding();
                  
                  // Watch for any style changes on html and body
                  const observer = new MutationObserver(function(mutations) {
                    removePadding();
                  });
                  
                  // Observe both html and body for style attribute changes
                  if (html) {
                    observer.observe(html, {
                      attributes: true,
                      attributeFilter: ['style', 'class', 'data-scroll-locked']
                    });
                  }
                  if (body) {
                    observer.observe(body, {
                      attributes: true,
                      attributeFilter: ['style', 'class', 'data-scroll-locked']
                    });
                  }
                  
                  // Also use requestAnimationFrame for continuous monitoring
                  function monitorPadding() {
                    removePadding();
                    requestAnimationFrame(monitorPadding);
                  }
                  requestAnimationFrame(monitorPadding);
                }
                
                // Start initialization
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', init);
                } else {
                  init();
                }
              })();
            `,
          }}
        />
        {/* Bing Webmaster Tools: set NEXT_PUBLIC_BING_SITE_VERIFICATION in .env.local and Vercel to the meta-tag content value from Bing. */}
        {process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && (
          <meta
            name="msvalidate.01"
            content={process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION}
          />
        )}
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
      </head>
      <body className={jetbrainsMono.variable} suppressHydrationWarning>
        <Providers>
          <I18nProvider initialLanguage={initialLanguage}>
            <LanguageProvider initialLanguage={initialLanguage}>
              <GoogleAnalytics />
              <Analytics />
              <ScrollToTop />
              <StairTransition />
              <Header />
              <PageTransition>{children}</PageTransition>
              <Footer />
              <ChatbotWidget />
            </LanguageProvider>
          </I18nProvider>
        </Providers>
      </body>
    </html>
  );
}
