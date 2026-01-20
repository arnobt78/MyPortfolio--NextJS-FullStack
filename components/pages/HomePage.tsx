"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "../Social";
import Photo from "../Photo";
import Stats from "../Stats";
import { useTypewriter } from "../../hooks/useTypewriter";

const HomePage = () => {
  const { displayText, isComplete } = useTypewriter({
    text: "Arnob Mahmud",
    speed: 200,
    delay: 2000,
  });

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-12"
        style={{ animationDelay: "0.3s" }}
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h2
              className="text-2xl sm:text-3xl font-bold leading-none text-white group-hover:text-accent mb-5 animate-ease-in-out"
              style={{ animationDelay: "0.7s" }}
            >
              Hello! I&apos;m <br />{" "}
            </h2>
            <h1
              className="h1 mb-5 animate-ease-in-out"
              style={{ animationDelay: "0.9s" }}
            >
              <span className="text-accent">
                {displayText}
                {!isComplete && <span className="typewriter-cursor" />}
              </span>
            </h1>
            <span
              className="w-full xl:max-w-[600px] text-lg sm:text-xl text-start animate-ease-in-out justify-center mx-auto xl:mx-0"
              style={{ animationDelay: "1.1s" }}
            >
              Full-Stack Software Engineer | Automation & Digital Solutions Engineer
            </span>
            <p
              className="w-full xl:max-w-[600px] mt-5 mb-10 text-white/80 text-start sm:text-justify text-md sm:text-lg animate-ease-in-out justify-center mx-auto xl:mx-0"
              style={{ animationDelay: "1.3s" }}
            >
            Full-Stack Software Engineer (5+ years) delivering enterprise-grade web and API solutions using Node.js, .NET, Python, React, Next.js, Angular and cloud platforms. Experienced in client-facing projects, SaaS, and ERP environments, with a strong focus on clean architecture, code quality, testing, performance, and reliable production delivery.
            </p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="https://drive.google.com/file/d/1MKxk5omd02OhlmdGgOYWhSdudt-aa4FS/view?usp=sharing"
                target="_blank"
                className="animate-ease-in-out"
                style={{ animationDelay: "1.5s" }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume </span>
                  <FiDownload />
                </Button>
              </Link>
              <div
                className="mb:8 xl:mb-0 animate-ease-in-out"
                style={{ animationDelay: "1.7s" }}
              >
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 animate-ease-in-out"
          >
            <Photo />
          </div>
        </div>
      </div>
      
      <Stats />
 
    </section>
  );
};

export default HomePage;
