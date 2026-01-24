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
