import { useWidgetSettings } from "@/hooks/use-widget-settings";
import { getChatbotTheme } from "@/lib/chatbot-theme";

/**
 * Returns chatbot theme tokens for the current theme.
 * Use in the widget so all colors update in the same render (instant, in-sync).
 */
export function useChatbotTheme() {
  const { theme } = useWidgetSettings();
  return getChatbotTheme(theme);
}
