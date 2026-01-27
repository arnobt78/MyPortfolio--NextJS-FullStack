import type { Theme } from "@/lib/types";

/**
 * Chatbot theme tokens — single source of truth for all widget colors.
 * Used for instant, in-sync theme changes (no useEffect delay).
 */
export interface ChatbotThemeTokens {
  /** Widget outer background */
  widgetBg: string;
  /** Widget outer border */
  widgetBorder: string;
  /** Header & form border / divider */
  headerBorder: string;
  /** Messages area background */
  messagesBg: string;
  /** Input field background */
  inputBg: string;
  /** Input field border */
  inputBorder: string;
  /** Input focus ring */
  inputFocusRing: string;
  /** Input text color */
  inputTextColor: string;
  /** Send button hover background */
  buttonHoverBg: string;
  /** Scrollbar thumb (for CSS var --chat-scrollbar-thumb) */
  scrollbarThumb: string;
  /** Scrollbar thumb hover (for CSS var --chat-scrollbar-thumb-hover) */
  scrollbarThumbHover: string;
  /** Header title text */
  headerTitle: string;
  /** Send icon color */
  sendIcon: string;
  /** Muted text (greeting, error hint) */
  mutedText: string;
  /** User message bubble border */
  messageUserBorder: string;
  /** Bot message bubble background */
  messageBotBg: string;
  /** Bot message bubble border */
  messageBotBorder: string;
  /** Bot message text */
  messageBotText: string;
  /** Bot message label (e.g. "Arnob's Assistant") */
  messageBotLabel: string;
  /** Typing indicator text */
  typingText: string;
}

const DARK_TOKENS: ChatbotThemeTokens = {
  widgetBg: "rgb(17, 24, 39)",
  widgetBorder: "rgb(55, 65, 81)",
  headerBorder: "rgb(31, 41, 55)",
  messagesBg: "rgb(3, 7, 18)",
  inputBg: "rgb(31, 41, 55)",
  inputBorder: "rgb(55, 65, 81)",
  inputFocusRing: "rgb(75, 85, 99)",
  inputTextColor: "rgb(255, 255, 255)",
  buttonHoverBg: "rgb(31, 41, 55)",
  scrollbarThumb: "rgb(17, 24, 39)",
  scrollbarThumbHover: "rgb(31, 41, 55)",
  headerTitle: "rgb(255, 255, 255)",
  sendIcon: "rgb(209, 213, 219)",
  mutedText: "rgb(156, 163, 175)",
  messageUserBorder: "rgb(75, 85, 99)",
  messageBotBg: "rgb(31, 41, 55)",
  messageBotBorder: "rgb(55, 65, 81)",
  messageBotText: "rgb(243, 244, 246)",
  messageBotLabel: "rgb(209, 213, 219)",
  typingText: "rgb(156, 163, 175)",
};

const LIGHT_TOKENS: ChatbotThemeTokens = {
  widgetBg: "rgb(255, 255, 255)",
  widgetBorder: "rgb(229, 231, 235)",
  headerBorder: "rgb(243, 244, 246)",
  messagesBg: "rgb(249, 250, 251)",
  inputBg: "rgb(249, 250, 251)",
  inputBorder: "rgb(229, 231, 235)",
  inputFocusRing: "rgb(229, 231, 235)",
  inputTextColor: "rgb(17, 24, 39)",
  buttonHoverBg: "rgb(243, 244, 246)",
  scrollbarThumb: "rgb(229, 231, 235)",
  scrollbarThumbHover: "rgb(209, 213, 219)",
  headerTitle: "rgb(17, 24, 39)",
  sendIcon: "rgb(75, 85, 99)",
  mutedText: "rgb(107, 114, 128)",
  messageUserBorder: "rgb(229, 231, 235)",
  messageBotBg: "rgb(255, 255, 255)",
  messageBotBorder: "rgb(229, 231, 235)",
  messageBotText: "rgb(17, 24, 39)",
  messageBotLabel: "rgb(55, 65, 81)",
  typingText: "rgb(156, 163, 175)",
};

const TOKEN_MAP: Record<Theme, ChatbotThemeTokens> = {
  dark: DARK_TOKENS,
  light: LIGHT_TOKENS,
};

/**
 * Returns theme tokens for the given theme. Use in the same render as theme state
 * so all widget colors update in one paint (no delay/flash).
 */
export function getChatbotTheme(theme: Theme): ChatbotThemeTokens {
  return TOKEN_MAP[theme];
}

/** CSS variable names used when setting tokens on #cb-react */
export const CHATBOT_CSS_VARS = {
  scrollbarThumb: "--chat-scrollbar-thumb",
  scrollbarThumbHover: "--chat-scrollbar-thumb-hover",
  /** Track uses messages area bg so it stays in sync during theme transition */
  scrollbarTrack: "--chat-scrollbar-track",
} as const;
