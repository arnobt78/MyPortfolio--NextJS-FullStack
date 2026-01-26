"use client";

import * as React from "react";
import { useChat } from "@/hooks/use-chat";
import { useWidgetSettings } from "@/hooks/use-widget-settings";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";
import { toast } from "@/components/ui/toast";
import {
  Sun,
  Moon,
  Trash2,
  // Download icon not used
  HelpCircle,
  MessageSquare,
  Star,
  Type,
  RotateCcw,
  Copy,
  Settings,
  FileText,
  FileDown,
} from "lucide-react";
import {
  exportChatAsText,
  exportChatAsPDF,
  copyChatToClipboard,
} from "@/lib/export-utils";
import type { FontSize, WidgetPosition } from "@/lib/types";
// FONT_SIZES and WIDGET_POSITIONS not used in this file
import { useState, useEffect, useRef } from "react";

/**
 * Widget menu component with all Phase 2 features
 * Provides dropdown menu with all widget options
 */
export function WidgetMenu() {
  const { messages, clearChat } = useChat();
  const { theme, fontSize, position, setTheme, setFontSize, setPosition } =
    useWidgetSettings();
  const { t, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [ratingOpen, setRatingOpen] = useState(false);
  const [newChatOpen, setNewChatOpen] = useState(false);
  const [clearChatOpen, setClearChatOpen] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackComment, setFeedbackComment] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [isSubmittingRating, setIsSubmittingRating] = useState(false);

  const [chatbotTitle, setChatbotTitle] = useState(t("chatbot.title"));
  const menuRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number>(0);
  const touchStartScrollTop = useRef<number>(0);

  // Load chatbot title after mount to avoid hydration mismatch
  // Also update when language changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      interface WindowWithChatbotConfig extends Window {
        CHATBOT_TITLE?: string;
      }
      const win = window as WindowWithChatbotConfig;
      setChatbotTitle(win.CHATBOT_TITLE || t("chatbot.title"));
      
      // Clear any existing localStorage flag for rating submission
      // This ensures the menu item always shows (we removed the conditional check)
      localStorage.removeItem("chatbot-rating-submitted");
    }
  }, [t, language]);

  // Calculate if dark mode is active for UI display
  // Simple: dark = true, light = false
  const isDark = theme === "dark";

  const handleThemeToggle = () => {
    // Simple toggle between dark and light
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setMenuOpen(false);
  };

  const handleClearChat = () => {
    clearChat();
    setMenuOpen(false);
    toast.success(t("chatbot.toast.chatCleared"));
  };

  const handleExportText = () => {
    const text = exportChatAsText(messages);
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chat-history-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(t("chatbot.toast.exportedText"));
    setMenuOpen(false);
  };

  const handleExportPDF = () => {
    exportChatAsPDF(messages);
    toast.success(t("chatbot.toast.openingPdf"));
    setMenuOpen(false);
  };

  const handleCopyChat = async () => {
    try {
      await copyChatToClipboard(messages);
      toast.success(t("chatbot.toast.copied"));
      setMenuOpen(false);
    } catch {
      toast.error(t("chatbot.toast.copyFailed"));
    }
  };

  const handleNewChat = () => {
    clearChat();
    setMenuOpen(false);
    toast.success(t("chatbot.toast.newChat"));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmitFeedback = async () => {
    setIsSubmittingFeedback(true);
    try {
      const CHATBOT_BASE_URL =
        typeof window !== "undefined"
          ? window.CHATBOT_BASE_URL || window.location.origin
          : "";

      const response = await fetch(`${CHATBOT_BASE_URL}/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "feedback",
          rating: feedbackRating,
          comment: feedbackComment,
          email: feedbackEmail,
        }),
      });

      if (response.ok) {
        toast.success(t("chatbot.toast.feedbackSuccess"));
        setFeedbackOpen(false);
        setFeedbackRating(0);
        setFeedbackComment("");
        setFeedbackEmail("");
        setMenuOpen(false);
      } else {
        toast.error(t("chatbot.toast.feedbackFailed"));
      }
    } catch {
      toast.error(t("chatbot.toast.feedbackFailed"));
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  const handleSubmitRating = async () => {
    setIsSubmittingRating(true);
    try {
      const CHATBOT_BASE_URL =
        typeof window !== "undefined"
          ? window.CHATBOT_BASE_URL || window.location.origin
          : "";

      const response = await fetch(`${CHATBOT_BASE_URL}/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "feedback",
          rating: feedbackRating,
          comment: feedbackComment,
        }),
      });

      if (response.ok) {
        toast.success(t("chatbot.toast.ratingSuccess"));
        setRatingOpen(false);
        setFeedbackRating(0);
        setFeedbackComment("");
        setMenuOpen(false);
      } else {
        toast.error(t("chatbot.toast.ratingFailed"));
      }
    } catch {
      toast.error(t("chatbot.toast.ratingFailed"));
    } finally {
      setIsSubmittingRating(false);
    }
  };

  const handleReportIssue = async () => {
    setIsSubmittingFeedback(true);
    try {
      const CHATBOT_BASE_URL =
        typeof window !== "undefined"
          ? window.CHATBOT_BASE_URL || window.location.origin
          : "";

      const response = await fetch(`${CHATBOT_BASE_URL}/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "issue",
          comment: feedbackComment,
          email: feedbackEmail,
        }),
      });

      if (response.ok) {
        toast.success(t("chatbot.toast.issueReported"));
        setFeedbackOpen(false);
        setFeedbackComment("");
        setFeedbackEmail("");
        setMenuOpen(false);
      } else {
        toast.error(t("chatbot.toast.issueFailed"));
      }
    } catch {
      toast.error(t("chatbot.toast.issueFailed"));
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  return (
    <>
      <div className="relative z-[100000]">
        <button
          id="cb-m-react"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setMenuOpen((prev) => !prev);
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative z-[100001] pointer-events-auto cursor-pointer"
          aria-label="Menu"
          type="button"
          style={{ pointerEvents: "auto", cursor: "pointer" }}
        >
          <Settings className="w-5 h-5 text-gray-500 dark:text-gray-400 pointer-events-none" />
        </button>

        {menuOpen && (
          <div
            ref={menuRef}
            id="cb-d-react"
            className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-[100000] pointer-events-auto max-h-[calc(100vh-12rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              // Prevent background scrolling when touching menu
              e.stopPropagation();
              if (menuRef.current) {
                touchStartY.current = e.touches[0].clientY;
                touchStartScrollTop.current = menuRef.current.scrollTop;
              }
            }}
            onTouchMove={(e) => {
              // Prevent background scroll when moving within menu
              e.stopPropagation();
              
              if (!menuRef.current) return;
              
              const currentY = e.touches[0].clientY;
              const deltaY = currentY - touchStartY.current;
              const scrollTop = menuRef.current.scrollTop;
              const scrollHeight = menuRef.current.scrollHeight;
              const clientHeight = menuRef.current.clientHeight;
              
              // Check if menu is scrollable
              const isScrollable = scrollHeight > clientHeight;
              
              // Check if we're at the top or bottom of scroll (with small threshold)
              const threshold = 2;
              const isAtTop = scrollTop <= threshold;
              const isAtBottom = scrollTop + clientHeight >= scrollHeight - threshold;
              
              // Only prevent default when at scroll boundaries to stop background scroll
              // This allows native smooth scrolling within the menu
              if (isScrollable) {
                // If trying to scroll beyond boundaries, prevent default to stop background scroll
                if ((isAtTop && deltaY > 0) || (isAtBottom && deltaY < 0)) {
                  e.preventDefault();
                }
                // Otherwise, let native scrolling work (touch-action: pan-y handles it)
              } else {
                // If menu is not scrollable, prevent default to stop background scroll
                e.preventDefault();
              }
            }}
            onTouchEnd={(e) => {
              // Prevent background scroll on touch end
              e.stopPropagation();
            }}
            style={{ 
              pointerEvents: "auto",
              // On mobile: make dropdown scrollable if it exceeds available space
              maxHeight: 'calc(100vh - 12rem)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              // Allow vertical panning (scrolling) within menu, prevent horizontal and other gestures
              touchAction: 'pan-y',
              // Prevent scroll chaining to background
              overscrollBehavior: 'contain'
            }}
          >
            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              <span>{isDark ? t("chatbot.menu.lightMode") : t("chatbot.menu.darkMode")}</span>
            </button>

            {/* Export Chat History */}
            <button
              onClick={handleExportText}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>{t("chatbot.menu.exportTxt")}</span>
            </button>

            <button
              onClick={handleExportPDF}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{t("chatbot.menu.exportPdf")}</span>
            </button>

            {/* Copy Chat */}
            <button
              onClick={handleCopyChat}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              <span>{t("chatbot.menu.copyChat")}</span>
            </button>

            {/* New Chat */}
            <button
              onClick={() => setNewChatOpen(true)}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t("chatbot.menu.newChat")}</span>
            </button>
            <ConfirmationDialog
              open={newChatOpen}
              onOpenChange={setNewChatOpen}
              title={t("chatbot.confirm.newChat.title")}
              description={t("chatbot.confirm.newChat.description")}
              confirmText={t("chatbot.confirm.newChat.confirm")}
              onConfirm={handleNewChat}
            />

            {/* Clear Chat */}
            <button
              onClick={() => setClearChatOpen(true)}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              <span>{t("chatbot.menu.clearChat")}</span>
            </button>
            <ConfirmationDialog
              open={clearChatOpen}
              onOpenChange={setClearChatOpen}
              title={t("chatbot.confirm.clearChat.title")}
              description={t("chatbot.confirm.clearChat.description")}
              confirmText={t("chatbot.confirm.clearChat.confirm")}
              onConfirm={handleClearChat}
            />

            <div className="border-t border-gray-100 dark:border-gray-700 my-1" />

            {/* Font Size */}
            <div className="px-4 py-2">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                <Type className="w-3 h-3" />
                {t("chatbot.menu.fontSize")}
              </div>
              <div className="flex gap-2">
                {(["small", "medium", "large"] as FontSize[]).map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setFontSize(size);
                      setMenuOpen(false);
                    }}
                    className={`px-2 py-1 text-xs rounded ${
                      fontSize === size
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {size.charAt(0).toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Widget Position */}
            <div className="px-4 py-2">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                <Settings className="w-3 h-3" />
                {t("chatbot.menu.position")}
              </div>
              <div className="flex gap-2">
                {(["bottom-right", "bottom-left"] as WidgetPosition[]).map(
                  (pos) => (
                    <button
                      key={pos}
                      onClick={() => {
                        setPosition(pos);
                        setMenuOpen(false);
                      }}
                      className={`px-2 py-1 text-xs rounded ${
                        position === pos
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {pos === "bottom-right" ? t("chatbot.menu.positionRight") : t("chatbot.menu.positionLeft")}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-700 my-1" />

            {/* About / Help */}
            <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
              <DialogTrigger asChild>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>{t("chatbot.menu.about")}</span>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t("chatbot.about.title", { title: chatbotTitle })}</DialogTitle>
                  <DialogDescription>
                    {t("chatbot.about.description")}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                      {t("chatbot.about.howToUse")}
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                      <li>{t("chatbot.about.howToUse.1")}</li>
                      <li>
                        {t("chatbot.about.howToUse.2")}
                      </li>
                      <li>{t("chatbot.about.howToUse.3")}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                      {t("chatbot.about.features")}
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                      <li>{t("chatbot.about.features.1")}</li>
                      <li>{t("chatbot.about.features.2")}</li>
                      <li>{t("chatbot.about.features.3")}</li>
                      <li>{t("chatbot.about.features.4")}</li>
                      <li>{t("chatbot.about.features.5")}</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="https://www.arnobmahmud.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {t("chatbot.about.visitPortfolio")}
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Feedback / Report Issue */}
            <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
              <DialogTrigger asChild>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>{t("chatbot.menu.feedback")}</span>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t("chatbot.feedback.title")}</DialogTitle>
                  <DialogDescription>
                    {t("chatbot.feedback.description")}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <label className="text-sm text-gray-700 dark:text-gray-300  font-medium mb-2 block">
                      {t("chatbot.feedback.email")}
                    </label>
                    <input
                      type="email"
                      value={feedbackEmail}
                      onChange={(e) => setFeedbackEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700 dark:text-gray-300  font-medium mb-2 block">
                      {t("chatbot.feedback.comment")}
                    </label>
                    <textarea
                      value={feedbackComment}
                      onChange={(e) => setFeedbackComment(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                      placeholder={t("chatbot.feedback.commentPlaceholder")}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="chatbotOutline"
                    onClick={() => setFeedbackOpen(false)}
                    disabled={isSubmittingFeedback}
                  >
                    {t("chatbot.feedback.cancel")}
                  </Button>
                  <Button 
                    variant="chatbotDefault" 
                    onClick={handleReportIssue}
                    disabled={isSubmittingFeedback}
                  >
                    {isSubmittingFeedback ? t("chatbot.feedback.sending") : t("chatbot.feedback.submit")}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Rate This Chatbot */}
            <Dialog open={ratingOpen} onOpenChange={setRatingOpen}>
                  <DialogTrigger asChild>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>{t("chatbot.menu.rate")}</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{t("chatbot.rating.title")}</DialogTitle>
                      <DialogDescription>
                        {t("chatbot.rating.description")}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setFeedbackRating(star)}
                            className={`text-3xl ${
                              star <= feedbackRating
                                ? "text-yellow-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                      <div>
                        <label className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2 block">
                          {t("chatbot.rating.comment")}
                        </label>
                        <textarea
                          value={feedbackComment}
                          onChange={(e) => setFeedbackComment(e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                          placeholder={t("chatbot.rating.commentPlaceholder")}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="chatbotOutline"
                        onClick={() => setRatingOpen(false)}
                        disabled={isSubmittingRating}
                      >
                        {t("chatbot.feedback.cancel")}
                      </Button>
                      <Button
                        variant="chatbotDefault"
                        onClick={handleSubmitRating}
                        disabled={feedbackRating === 0 || isSubmittingRating}
                      >
                        {isSubmittingRating ? t("chatbot.rating.sending") : t("chatbot.rating.submit")}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
          </div>
        )}
      </div>

      {/* Close menu when clicking outside */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[99999] pointer-events-auto"
          onClick={(e) => {
            // Only close if clicking the overlay itself, not menu elements
            const target = e.target as HTMLElement;
            if (
              target === e.currentTarget ||
              (!target.closest("#cb-m-react") && !target.closest("#cb-d-react"))
            ) {
              setMenuOpen(false);
            }
          }}
          onMouseDown={(e) => {
            const target = e.target as HTMLElement;
            if (
              target.closest("#cb-m-react") ||
              target.closest("#cb-d-react")
            ) {
              e.stopPropagation();
            }
          }}
          onTouchStart={(e) => {
            // Prevent overlay from capturing touch events when touching menu
            const target = e.target as HTMLElement;
            if (target.closest("#cb-d-react")) {
              e.stopPropagation();
            }
          }}
          onTouchMove={(e) => {
            // Prevent overlay from interfering with menu scrolling
            const target = e.target as HTMLElement;
            if (target.closest("#cb-d-react")) {
              e.stopPropagation();
            }
          }}
          style={{ backgroundColor: 'transparent', touchAction: 'none' }}
        />
      )}
    </>
  );
}
