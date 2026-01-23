"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Copy, Check } from "lucide-react";
import { useTypewriter } from "../../hooks/useTypewriter";

// TypeScript interfaces
interface InfoItem {
  icon: React.ReactElement;
  title: string;
  description: string;
  href?: string;
}

interface FormData {
  fullname: string;
  email: string;
  message: string;
}

interface AlertMessage {
  type: "success" | "error";
  title: string;
  message: string;
}

interface ApiErrorResponse {
  error?: string;
  details?: string;
  message?: string;
}

// Contact information data
const info: InfoItem[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+4915734664351",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "arnobt78@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Frankfurt am Main, Germany",
  },
  {
    icon: <FaLinkedin />,
    title: "Linkedin",
    description: "arnob-mahmud-05839655",
    href: "https://www.linkedin.com/in/arnob-mahmud-05839655/",
  },
  {
    icon: <FaGithub />,
    title: "Github",
    description: "arnobt78",
    href: "https://github.com/arnobt78",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<AlertMessage | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const { displayText, isComplete } = useTypewriter({
    text: "Let’s build something great!",
    speed: 200,
    delay: 2000,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setAlertMessage(null);

    try {
      // Send message to your Gmail
      const response = await axios.post("/api/send-email", formData);

      if (response.status === 200) {
        // Send auto-reply to user
        try {
          const autoReplyResponse = await axios.post(
            "/api/send-auto-reply",
            formData
          );

          if (autoReplyResponse.status === 200) {
            const autoReplyData = autoReplyResponse.data;
            setAlertMessage({
              type: "success",
              title: "Success!",
              message: `Your message has been sent successfully! Check your email for confirmation (Reference: ${autoReplyData.referenceNumber}). I'll get back to you soon!`,
            });
          } else {
            setAlertMessage({
              type: "success",
              title: "Success!",
              message:
                "Your message has been sent successfully! I'll get back to you soon!",
            });
          }
        } catch (autoReplyError: unknown) {
          // Type assertion for AxiosError
          const err = autoReplyError as AxiosError<ApiErrorResponse>;
          if (axios.isAxiosError(err) && err.response) {
            setAlertMessage({
              type: "error",
              title: "Auto-reply Failed!",
              message:
                err.response.data?.details ||
                err.response.data?.error ||
                "Auto-reply could not be sent. Your message was received and I'll get back to you soon!",
            });
          } else {
            setAlertMessage({
              type: "success",
              title: "Success!",
              message:
                "Your message has been sent successfully! I'll get back to you soon!",
            });
          }
        }
        setFormData({ fullname: "", email: "", message: "" });
      } else {
        setAlertMessage({
          type: "error",
          title: "Failed to Send!",
          message:
            "Sorry, there was an issue sending your message. Please try again.",
        });
      }
    } catch (error: unknown) {
      // Type assertion for AxiosError
      const err = error as AxiosError<ApiErrorResponse>;
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setAlertMessage({
            type: "error",
            title: "Failed to Send!",
            message:
              err.response.data?.details ||
              err.response.data?.error ||
              "Sorry, there was an issue sending your message. Please try again.",
          });
        } else if (err.request) {
          setAlertMessage({
            type: "error",
            title: "Network Error!",
            message:
              "Unable to connect to the server. Please check your internet connection and try again.",
          });
        } else {
          setAlertMessage({
            type: "error",
            title: "Error Occurred!",
            message:
              "An unexpected error occurred while sending the message. Please try again later.",
          });
        }
      } else {
        setAlertMessage({
          type: "error",
          title: "Error Occurred!",
          message:
            "An unexpected error occurred while sending the message. Please try again later.",
        });
      }
    } finally {
      setIsLoading(false);
      // Smooth scroll to top of form when alert is displayed
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      // Reset to clipboard icon after 2 seconds
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <section className="py-6 animate-ease-in-out" style={{ scrollbarGutter: 'stable' }}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-0">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={formRef}
              className="flex flex-col gap-4 p-4 sm:p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl sm:text-3xl text-accent">
                {displayText}
                {!isComplete && <span className="typewriter-cursor"></span>}
              </h3>

              {alertMessage && (
                <Alert
                  variant={
                    alertMessage.type === "success" ? "success" : "destructive"
                  }
                  className="animate-fade-in"
                >
                  {alertMessage.type === "success" ? (
                    <FaCheckCircle className="h-4 w-4" />
                  ) : (
                    <FaExclamationCircle className="h-4 w-4" />
                  )}
                  <AlertTitle>{alertMessage.title}</AlertTitle>
                  <AlertDescription>{alertMessage.message}</AlertDescription>
                </Alert>
              )}
              <p className="text-white/60 text-start sm:text-justify text-md sm:text-lg">
                Available for freelance, contract, or full-time roles. I help businesses and teams design, build, and scale reliable digital products — from idea to production.
              </p>
              <div className="grid gap-4">
                <Input
                  type="text"
                  name="fullname"
                  placeholder="Enter your name"
                  value={formData.fullname}
                  onChange={handleChange}
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              />

              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-md">{item.title}</p>
                    <div>
                      {item.href ? (
                        <>
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-lg sm:text-xl hover:text-accent transition-colors duration-300 inline"
                          >
                            {item.description}
                          </Link>
                          <button
                            onClick={() => handleCopy(item.href || item.description, index)}
                            className="text-white/60 hover:text-accent transition-colors duration-300 p-1 inline-flex items-center ml-2 align-middle"
                            aria-label={`Copy ${item.title}`}
                            type="button"
                          >
                            {copiedIndex === index ? (
                              <Check className="text-accent text-base size-4" />
                            ) : (
                              <Copy className="text-base size-4" />
                            )}
                          </button>
                        </>
                      ) : (
                        <>
                          <h3 className="text-white text-lg sm:text-xl inline">{item.description}</h3>
                          <button
                            onClick={() => handleCopy(item.href || item.description, index)}
                            className="text-white/60 hover:text-accent transition-colors duration-300 p-1 inline-flex items-center ml-2 align-middle"
                            aria-label={`Copy ${item.title}`}
                            type="button"
                          >
                            {copiedIndex === index ? (
                              <Check className="text-accent text-base size-4" />
                            ) : (
                              <Copy className="text-base size-4" />
                            )}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
