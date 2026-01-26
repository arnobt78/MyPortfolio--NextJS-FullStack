"use client";

import * as React from "react";
import { useChat } from "@/hooks/use-chat";
import { useWidgetSettings } from "@/hooks/use-widget-settings";
import { useLanguage } from "@/context/LanguageContext";
import { WidgetMenu } from "./widget-menu";
// Button component not used in this file
import { cn } from "@/lib/utils";
import { FONT_SIZES } from "@/lib/constants";
import { X, Send, Bot } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ChatHistorySkeleton } from "./message-skeleton";

/**
 * Main chatbot widget component
 * Provides the complete chat interface with all features
 */
export function ChatbotWidget() {
  const { messages, sendMessage, isSending, streamingMessage, isLoading, error } = useChat();
  const { fontSize, position, theme } = useWidgetSettings();
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [config, setConfig] = useState({
    title: t("chatbot.title"),
    greeting: t("chatbot.greeting"),
    placeholder: t("chatbot.placeholder"),
  });

  // Theme-aware colors for smooth transitions
  const isDark = theme === "dark";
  const widgetBg = isDark ? "rgb(17, 24, 39)" : "rgb(255, 255, 255)"; // gray-900 : white
  const widgetBorder = isDark ? "rgb(55, 65, 81)" : "rgb(229, 231, 235)"; // gray-700 : gray-200
  const headerBorder = isDark ? "rgb(31, 41, 55)" : "rgb(243, 244, 246)"; // gray-800 : gray-100
  const messagesBg = isDark ? "rgb(3, 7, 18)" : "rgb(249, 250, 251)"; // gray-950 : gray-50
  const inputBg = isDark ? "rgb(31, 41, 55)" : "rgb(249, 250, 251)"; // gray-800 : gray-50
  const inputBorder = isDark ? "rgb(55, 65, 81)" : "rgb(229, 231, 235)"; // gray-700 : gray-200
  const inputFocusRing = isDark ? "rgb(75, 85, 99)" : "rgb(229, 231, 235)"; // gray-600 : gray-200
  const inputTextColor = isDark ? "rgb(255, 255, 255)" : "rgb(17, 24, 39)"; // white : gray-900
  const buttonHoverBg = isDark ? "rgb(31, 41, 55)" : "rgb(243, 244, 246)"; // gray-800 : gray-100

  // Load config from window after mount to avoid hydration mismatch
  // Also update when language changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      interface WindowWithChatbotConfig extends Window {
        CHATBOT_TITLE?: string;
        CHATBOT_GREETING?: string;
        CHATBOT_PLACEHOLDER?: string;
      }
      const win = window as WindowWithChatbotConfig;
      setConfig({
        title: win.CHATBOT_TITLE || t("chatbot.title"),
        greeting: win.CHATBOT_GREETING || t("chatbot.greeting"),
        placeholder: win.CHATBOT_PLACEHOLDER || t("chatbot.placeholder"),
      });
    }
  }, [t, language]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingMessage]);

  // Show greeting on first open
  useEffect(() => {
    if (isOpen && messages.length === 0 && !isLoading) {
      // Greeting will be shown in the messages render
    }
  }, [isOpen, messages.length, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = inputValue.trim();
    if (!message || isSending) return;

    // Optimistic UI update - clear input immediately
    setInputValue("");
    sendMessage(message);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Focus input when opening
      setTimeout(() => {
        const input = document.getElementById("chatbot-input");
        input?.focus();
      }, 100);
    }
  };

  const fontSizeClasses = FONT_SIZES[fontSize];
  // Position classes are handled via inline styles in widget.js
  // const positionClasses = WIDGET_POSITIONS[position];

  // Only render if vanilla widget is not present (to avoid conflicts)
  if (typeof window !== "undefined" && document.getElementById("cb-btn")) {
    return null;
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        id="cb-btn-react"
        onClick={handleToggle}
        className={cn(
          "fixed w-14 h-14 bg-black rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all z-[99998]",
          // Mobile: always visible, above widget
          "bottom-4",
          position === "bottom-right" ? "right-4" : "left-4",
          // Desktop positioning
          "sm:bottom-6",
          position === "bottom-right" ? "sm:right-6" : "sm:left-6",
        )}
        style={{
          pointerEvents: "auto",
          backgroundColor: "#000000",
          borderRadius: "9999px",
          width: "3.5rem",
          height: "3.5rem",
        }}
        aria-label={t("chatbot.aria.toggle")}
      >
        {!isOpen ? (
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        ) : (
          <X className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      <div
        id="cb-react"
        className={cn(
          "fixed rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[99999] origin-bottom-right bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 outline-none focus:outline-none focus-visible:outline-none",
          // Mobile: fixed size, positioned like desktop but fits screen
          "bottom-20 w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] h-[calc(100vh-6rem)] max-h-[600px]",
          position === "bottom-right" ? "right-4" : "left-4",
          // Desktop: fixed positioning and size
          "sm:bottom-24 sm:top-auto sm:h-[600px] sm:w-[400px] sm:max-w-[400px]",
          position === "bottom-right" ? "sm:right-6 sm:left-auto" : "sm:left-6 sm:right-auto",
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none w-0 h-0 sm:w-0 sm:h-0",
          fontSizeClasses.base
        )}
        style={{ 
          pointerEvents: isOpen ? 'auto' : 'none',
          borderRadius: '1rem',
          overflow: 'hidden',
          isolation: 'isolate',
          display: 'flex',
          flexDirection: 'column',
          height: isOpen ? undefined : 0,
          outline: 'none',
          // Explicit background and border colors synchronized with theme
          backgroundColor: widgetBg,
          borderColor: widgetBorder,
          // Smooth transitions only for background and border
          transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',
          willChange: 'background-color, border-color'
        }}
        tabIndex={-1}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 border-b shrink-0 relative z-[100000]"
          style={{
            backgroundColor: widgetBg,
            borderColor: headerBorder,
            transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out'
          }}
        >
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className={cn("font-semibold text-gray-900 dark:text-white truncate min-w-0", fontSizeClasses.base)}>
              {config.title}
            </h3>
          </div>
          <div className="relative shrink-0 z-[100001]">
            <WidgetMenu />
          </div>
        </div>

        {/* Messages Container */}
        <div
          ref={messagesContainerRef}
          className={cn(
            "flex-1 overflow-y-auto overflow-x-hidden px-3 sm:px-5 py-3 sm:py-4 space-y-3 sm:space-y-4 bg-gray-50 dark:bg-gray-950 chatbot-messages-scrollbar min-h-0",
            fontSizeClasses.message
          )}
          style={{ 
            minHeight: 0,
            maxHeight: '100%',
            WebkitOverflowScrolling: 'touch',
            backgroundColor: messagesBg,
            transition: 'background-color 0.2s ease-in-out'
          }}
        >
          {/* Loading skeleton - shows exact message dimensions */}
          {isLoading && messages.length === 0 && (
            <ChatHistorySkeleton fontSize={fontSize} />
          )}

          {/* Error state */}
          {error && messages.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-red-500 dark:text-red-400 mb-2">
                  {t("chatbot.error.loadHistory")}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t("chatbot.error.refresh")}
                </p>
              </div>
            </div>
          )}

          {/* Empty state - greeting */}
          {messages.length === 0 && !isLoading && !error && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400 text-center">
                {config.greeting}
              </p>
            </div>
          )}

          {/* Messages - use timestamp for stable keys */}
          {messages.map((msg) => (
            <div
              key={msg.timestamp || `msg-${msg.role}-${msg.content.slice(0, 20)}`}
              className={cn(
                "flex",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {msg.role === "user" ? (
                <div className="bg-black text-white rounded-2xl rounded-br-md px-4 py-3 max-w-[85%] border border-gray-200 dark:border-gray-600">
                  <div className="whitespace-pre-wrap break-words">{msg.content}</div>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%] border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {config.title}
                    </span>
                  </div>
                  <div className="leading-relaxed whitespace-pre-wrap break-words">
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Streaming message */}
          {isSending && streamingMessage && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%] border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {config.title}
                  </span>
                </div>
                <div className="leading-relaxed whitespace-pre-wrap break-words">
                  {streamingMessage}
                  <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse ml-1" />
                </div>
              </div>
            </div>
          )}

          {/* Typing indicator */}
          {isSending && !streamingMessage && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%] border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                  <span>{t("chatbot.typing")}</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 border-t shrink-0"
          style={{
            backgroundColor: widgetBg,
            borderColor: headerBorder,
            transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out'
          }}
        >
          <input
            id="chatbot-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={config.placeholder}
            disabled={isSending}
            className={cn(
              "flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-sm placeholder-gray-400 focus:outline-none",
              fontSizeClasses.base
            )}
            style={{
              backgroundColor: inputBg,
              borderColor: inputBorder,
              color: inputTextColor,
              borderWidth: '1px',
              borderStyle: 'solid',
              boxShadow: inputFocused ? `0 0 0 2px ${inputFocusRing}` : 'none',
              transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out',
            }}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={isSending || !inputValue.trim()}
            className="p-2 sm:p-3 rounded-full disabled:opacity-50 shrink-0"
            style={{
              backgroundColor: 'transparent',
              transition: 'background-color 0.2s ease-in-out, opacity 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.backgroundColor = buttonHoverBg;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </form>
      </div>
    </>
  );
}
