"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is your availability and typical project timeline?",
    answer:
      "I'm currently available for freelance, part-time, and full-time opportunities. Project timelines vary based on scope and complexity. For small projects (landing pages, simple web apps), I typically deliver within 1-3 weeks. Medium projects (full-stack applications, e-commerce platforms) usually take 4-8 weeks. Large enterprise projects can range from 2-6 months. I always provide detailed timelines and milestones during our initial consultation, and I'm committed to meeting deadlines while maintaining high code quality.",
  },
  {
    question: "What are your pricing models (hourly vs. project-based)?",
    answer:
      "I offer flexible pricing models to suit different project needs. For hourly work, my rate varies based on project complexity and duration. For fixed-price projects, I provide detailed quotes after understanding your requirements. I'm transparent about pricing from the start and can work within various budgets. Long-term projects and retainer agreements often come with discounted rates. Contact me with your project details, and I'll provide a customized quote that fits your budget and timeline.",
  },
  {
    question: "Do you work remotely or on-site?",
    answer:
      "I primarily work remotely, which allows me to serve clients globally while maintaining flexibility and efficiency. I'm based in Frankfurt, Germany, and am open to on-site meetings or collaboration when needed, especially for clients in the Frankfurt area or for initial project kickoff meetings. I'm experienced with remote collaboration tools and maintain clear communication channels throughout projects. For international clients, I'm comfortable working across different time zones and can adjust my schedule to accommodate your needs.",
  },
  {
    question: "What technologies and tech stack do you prefer?",
    answer:
      "I'm a full-stack developer with expertise across multiple technologies. On the frontend, I work with React, Next.js, Angular, Vue.js, and modern CSS frameworks like Tailwind CSS. For backend development, I use Node.js, .NET, Python, and build RESTful APIs. I'm experienced with cloud platforms like AWS, Docker, Kubernetes, and CI/CD pipelines. I also work with databases (SQL and NoSQL), authentication systems, and monitoring tools. I choose technologies based on project requirements, scalability needs, and client preferences. I'm always learning and adapting to new technologies as they emerge.",
  },
  {
    question: "What is your project process and workflow?",
    answer:
      "My workflow follows a structured yet flexible approach. It starts with an initial consultation where I understand your requirements, goals, and constraints. Then I provide a detailed proposal with timeline, milestones, and deliverables. During development, I maintain regular communication through your preferred channels (email, Slack, video calls) and provide progress updates. I follow agile methodologies, breaking work into sprints with regular check-ins. I use version control (Git), code reviews, testing, and documentation throughout. Before delivery, I conduct thorough testing and provide training/documentation. Post-launch, I offer support and maintenance options.",
  },
  {
    question: "How do you prefer to communicate during projects?",
    answer:
      "I'm flexible with communication preferences and adapt to what works best for you. I'm comfortable with email, Slack, Microsoft Teams, Zoom, or phone calls. For ongoing projects, I typically provide weekly progress updates and am available for scheduled check-ins. I respond to urgent matters promptly and maintain clear documentation of decisions and changes. I believe in transparent communication and will keep you informed about progress, challenges, and any adjustments needed. I'm also happy to work with your existing project management tools and workflows.",
  },
  {
    question: "Can you share examples of your portfolio or previous projects?",
    answer:
      "Absolutely! You can view my portfolio of 40+ projects on the 'Projects' page of this website, which showcases various full-stack applications, e-commerce platforms, web apps, and automation solutions. For even more examples, I have 90+ open-source production-ready projects on my GitHub repository. These projects demonstrate my expertise across different technologies, industries, and project scales. I'm happy to discuss specific projects that relate to your needs and can provide case studies or references upon request. Each project in my portfolio includes details about the tech stack, challenges solved, and outcomes achieved.",
  },
  {
    question: "What certifications and education do you have?",
    answer:
      "I'm a self-taught developer with a strong foundation in computer science principles and continuous learning. I stay updated with the latest industry trends through online courses, documentation, and hands-on project experience. While I don't rely solely on formal certifications, I have practical experience building production-ready applications and solving real-world problems. My education comes from building real projects, contributing to open-source, and continuous skill development. I believe in learning by doing and can demonstrate my capabilities through my portfolio and code quality. If specific certifications are required for your project, I'm open to obtaining them.",
  },
  {
    question: "What is your location and timezone?",
    answer:
      "I'm based in Frankfurt, Germany (CET/CEST timezone, UTC+1/UTC+2). I work with clients globally and am flexible with scheduling to accommodate different time zones. For clients in Europe, we can easily align our working hours. For clients in the Americas or Asia, I can adjust my schedule for important meetings and maintain asynchronous communication for day-to-day work. I'm comfortable working across time zones and have experience collaborating with international teams. My location allows me to serve clients in Europe effectively while also supporting global projects.",
  },
];

const FAQPage = () => {
  return (
    <section className="py-6 animate-ease-in-out">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center xl:text-left">
            Frequently Asked Questions
          </h1>

          <div className="bg-[#27272c] rounded-xl p-6 sm:p-10">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-left text-white hover:text-accent text-lg sm:text-xl font-semibold py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 text-md sm:text-lg leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
