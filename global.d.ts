declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

// Swiper CSS imports
declare module "swiper/css" {
  const content: unknown;
  export default content;
}

declare module "swiper/css/*" {
  const content: unknown;
  export default content;
}

// ESLint flat config import (JS-only package)
declare module "eslint-config-next";

/**
 * Type definitions for window global properties
 */
declare global {
  interface Window {
    CHATBOT_BASE_URL?: string;
    CHATBOT_TITLE?: string;
    CHATBOT_GREETING?: string;
    CHATBOT_PLACEHOLDER?: string;
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
    __INITIAL_LANGUAGE__?: string;
  }
}

export {};
