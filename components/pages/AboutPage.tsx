"use client";

import Link from "next/link";
import {
  FaGoogle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <section
      className="py-6 animate-ease-in-out"
      style={{ scrollbarGutter: "stable" }}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="h1 mb-8 text-center xl:text-left">About</h1>

          <div className="bg-[#27272c] rounded-xl p-6 sm:p-10 space-y-6">
            <div>
              <h2 className="h2 mb-4 text-accent">Business Identity</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                This portfolio is associated with{" "}
                <span className="text-white font-semibold">
                  Code & Cloud Lösungen
                </span>
                , a verified freelancing software developer based in
                Groß-Umstadt, Germany.
              </p>

              {/* Google Business Profile Section */}
              <div className="mt-6 p-4 bg-[#1c1c22] rounded-lg border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <FaGoogle className="text-accent text-xl" />
                  <h3 className="h3 text-white">Code & Cloud Lösungen</h3>
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-xl">
                    Verified
                  </span>
                </div>
                <p className="text-white/60 text-sm sm:text-base mb-4">
                  Freelancing software developer in Groß-Umstadt. Connect with
                  us on Google Business Profile for reviews, business
                  information, and location details.
                </p>
                <div className="space-y-3 text-white/60 text-sm sm:text-base">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">Address:</p>
                      <p>Breubergstraße 11, 64823 Groß-Umstadt, Deutschland</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">Phone:</p>
                      <Link
                        href="tel:+4915734664351"
                        className="text-accent hover:text-accent-hover transition-colors"
                      >
                        +49 1573 4664351
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">Email:</p>
                      <Link
                        href="mailto:arnobt78@gmail.com"
                        className="text-accent hover:text-accent-hover transition-colors"
                      >
                        arnobt78@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Link
                    href="https://share.google/rIr0pqkcyP3IUmnnf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-300 text-sm sm:text-base"
                  >
                    <FaGoogle />
                    <span>View on Google Business</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">
                Other schema: Person, PostalAddress
              </h2>
              <div className="space-y-3 text-white/60 text-md sm:text-lg font-mono">
                <p>
                  <span className="text-white">PLZ:</span> 64823
                </p>
                <p>
                  <span className="text-white">Ort:</span> Groß-Umstadt
                </p>
                <p>
                  <span className="text-white">Land:</span> Deutschland
                </p>
              </div>
            </div> */}

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">About This Portfolio</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                Welcome to my personal portfolio website. I am Arnob Mahmud, a
                Full-Stack Software Engineer with extensive experience in web
                and mobile app development, automation, and digital solutions
                from scratch to production and maintenance.
              </p>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                This website showcases my work, skills, and professional
                experience. It serves as a platform to connect with potential
                clients, employers, and collaborators who are interested in web
                development, software engineering, and digital transformation
                projects.
              </p>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed">
                For inquiries, collaboration opportunities, or to discuss
                potential projects with very reasonable rates (as demo for free)
                and best quality services and on time delivery, please feel free
                to reach out through the contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
