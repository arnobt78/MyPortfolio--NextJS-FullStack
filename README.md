# Modern Portfolio Website - Next.js FullStack Project (My Personal Portfolio)

A cutting-edge, production-ready portfolio website built with **Next.js 15**, **React 18**, **TypeScript**, **TailwindCSS**, and **Framer Motion**. This project showcases modern web development practices, including server-side rendering, API routes, email functionality, analytics integration, and stunning animations.

- **Live-Demo:** [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/)

![Screenshot 2025-10-23 at 13 47 13](https://github.com/user-attachments/assets/bf6b85ce-a1bb-437a-9f2e-c338c6ac41c7)
![Screenshot 2025-10-23 at 13 47 33](https://github.com/user-attachments/assets/a755f24a-bb4e-4728-a411-a0bf3056bce8)
![Screenshot 2025-10-23 at 13 48 00](https://github.com/user-attachments/assets/f310f0ec-e9cb-421f-affa-8de39d180a8a)
![Screenshot 2025-10-23 at 13 49 36](https://github.com/user-attachments/assets/ae0fa79a-59b3-4377-afbd-75671d8382f8)
![Screenshot 2025-10-23 at 13 49 49](https://github.com/user-attachments/assets/b59d6039-72ef-4da9-92a3-9de1286446bc)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [How to Run](#-how-to-run)
- [Components Overview](#-components-overview)
- [API Endpoints](#-api-endpoints)
- [Pages & Routes](#-pages--routes)
- [Custom Hooks](#-custom-hooks)
- [Styling & Animations](#-styling--animations)
- [Email Configuration](#-email-configuration)
- [Analytics Integration](#-analytics-integration)
- [Deployment](#-deployment)
- [Reusable Components Guide](#-reusable-components-guide)
- [Best Practices](#-best-practices)
- [Keywords & SEO](#-keywords--seo)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Core Features

- ⚡ **Next.js 15** with App Router and Server Components
- 🎨 **Modern UI/UX** with TailwindCSS and Shadcn UI components
- 🎭 **Smooth Animations** powered by Framer Motion
- 📱 **Fully Responsive** design for all devices
- 🌙 **Dark Mode** optimized color scheme
- 🔒 **Type-Safe** with TypeScript
- 📧 **Contact Form** with email notifications and auto-reply
- 📊 **Analytics** with Google Analytics & Vercel Analytics
- 🎯 **SEO Optimized** with meta tags and Open Graph
- ♿ **Accessible** components following WCAG guidelines
- 🚀 **Fast Performance** with optimized images and lazy loading

### Advanced Features

- 🎪 **Typewriter Effect** on homepage hero section
- 🎠 **Project Carousel** with Swiper.js
- 📋 **Grid/List View Toggle** for projects showcase
- 📈 **Animated Counter** for statistics
- 🎬 **Page Transitions** with smooth animations
- 🪜 **Stair Transition Effect** between pages
- 📜 **Scroll-to-Top** button functionality
- 🎯 **Custom Tooltips** for enhanced UX
- 📱 **Mobile Navigation** with hamburger menu
- 🔄 **Loading States** for async operations

---

## 🛠 Tech Stack

### Frontend

- **Framework:** Next.js 15.0.0 (React 18.3.1)
- **Language:** TypeScript 5.7.2
- **Styling:** TailwindCSS 3.4.17
- **Animations:** Framer Motion 12.23.24
- **UI Components:** Radix UI, Shadcn UI
- **Icons:** React Icons 5.5.0, Lucide React 0.546.0
- **Carousel:** Swiper 12.0.2

### Backend & APIs

- **Runtime:** Node.js
- **Email Service:** Nodemailer 7.0.9
- **HTTP Client:** Axios 1.12.2
- **Email Templates:** @react-email/render 1.4.0

### Analytics & Monitoring

- **Web Analytics:** Google Analytics 4
- **Performance:** Vercel Analytics 1.5.0

### Development Tools

- **Package Manager:** npm/yarn/pnpm
- **Linting:** ESLint 9.17.0
- **Build Tool:** Turbopack (Next.js 15)
- **Deployment:** Vercel

---

## 📁 Project Structure

```bash
portfolio-arnob-new/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── send-email/          # Main contact form handler
│   │   │   └── route.ts
│   │   └── send-auto-reply/     # Auto-reply email handler
│   │       └── route.ts
│   ├── contact/                  # Contact page
│   │   └── page.tsx
│   ├── resume/                   # Resume/CV page
│   │   └── page.tsx
│   ├── services/                 # Services offered page
│   │   └── page.tsx
│   ├── work/                     # Portfolio/Projects page
│   │   └── page.tsx
│   ├── globals.css              # Global styles & animations
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Homepage
│
├── components/                   # React Components
│   ├── pages/                   # Page-specific components
│   │   ├── ContactPage.tsx     # Contact form with validation
│   │   ├── HomePage.tsx        # Hero section with typewriter
│   │   ├── ResumePage.tsx      # Tabbed resume/skills section
│   │   ├── ServicesPage.tsx    # Service cards grid
│   │   └── WorkPage.tsx        # Projects showcase with carousel
│   │
│   ├── ui/                      # Reusable UI components (Shadcn)
│   │   ├── alert.tsx           # Alert/notification component
│   │   ├── button.tsx          # Custom button variants
│   │   ├── card.tsx            # Card component
│   │   ├── input.tsx           # Form input field
│   │   ├── scroll-area.tsx     # Custom scrollbar
│   │   ├── select.tsx          # Dropdown select
│   │   ├── sheet.tsx           # Mobile navigation sheet
│   │   ├── tabs.tsx            # Tab navigation
│   │   ├── textarea.tsx        # Multi-line input
│   │   └── tooltip.tsx         # Tooltip component
│   │
│   ├── GoogleAnalytics.tsx      # GA4 integration
│   ├── Header.tsx               # Main navigation header
│   ├── MobileNav.tsx            # Mobile hamburger menu
│   ├── Nav.tsx                  # Desktop navigation links
│   ├── PageTransition.tsx       # Page animation wrapper
│   ├── Photo.tsx                # Profile photo with effects
│   ├── ScrollToTop.tsx          # Scroll-to-top button
│   ├── Social.tsx               # Social media links
│   ├── Stairs.tsx               # Stair animation component
│   ├── StairTransition.tsx      # Stair transition wrapper
│   ├── Stats.tsx                # Animated statistics counter
│   └── WorkSliderBtns.tsx       # Carousel navigation buttons
│
├── hooks/                        # Custom React Hooks
│   └── useTypewriter.ts         # Typewriter text effect hook
│
├── lib/                          # Utility functions
│   └── utils.ts                 # Helper functions (cn, etc.)
│
├── public/                       # Static assets
│   ├── assets/                  # Images, icons, etc.
│   │   ├── resume/             # Resume-related assets
│   │   ├── skills/             # Skill icons
│   │   └── work/               # Project screenshots
│   ├── favicon.ico             # Site favicon
│   └── photo.png               # Profile photo
│
├── .env.local                    # Environment variables (not in repo)
├── .gitignore                    # Git ignore rules
├── eslint.config.mjs            # ESLint configuration
├── global.d.ts                  # Global TypeScript declarations
├── next-env.d.ts                # Next.js TypeScript definitions
├── next.config.js               # Next.js configuration
├── package.json                 # Project dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.js           # TailwindCSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

---

## 🚀 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or higher
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** for version control
- A **Gmail account** (for email functionality)
- A **Google Analytics 4** account (optional, for analytics)

### Step 1: Clone the Repository

```bash
# Clone using HTTPS
git clone https://github.com/arnobt78/MyPortfolio--NextJS-FullStack-Website.git

# Or clone using SSH
git clone git@github.com:arnobt78/MyPortfolio--NextJS-FullStack-Website.git

# Navigate to project directory
cd MyPortfolio--NextJS-FullStack-Website
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

This will install all the required dependencies listed in `package.json`.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory of your project. This file contains sensitive information and should **never** be committed to version control.

### Required Environment Variables

```env
# =================================
# EMAIL CONFIGURATION (Required)
# =================================

# Your Gmail address (used for sending/receiving contact form emails)
EMAIL_USER=your-email@gmail.com

# Gmail App Password (NOT your regular Gmail password)
# Generate this from: https://myaccount.google.com/apppasswords
EMAIL_PASS=your-16-character-app-password


# =================================
# GOOGLE ANALYTICS (Optional)
# =================================

# Google Analytics 4 Measurement ID
# Find this in GA4: Admin > Data Streams > Your Stream
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### How to Obtain Environment Variables

#### 1. **EMAIL_USER** (Your Gmail Address)

- Simply use your existing Gmail address
- Example: `your-email@gmail.com`

#### 2. **EMAIL_PASS** (Gmail App Password)

**Important:** This is NOT your regular Gmail password. It's a special 16-character password generated by Google.

**Steps to generate:**

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Enable **2-Step Verification** (required for App Passwords)
4. Once 2FA is enabled, return to Security settings
5. Scroll down to **App passwords** (may appear after 2FA setup)
6. Click **App passwords**
7. Select **Mail** as the app
8. Select **Other (Custom name)** as the device
9. Enter a name like "Portfolio Website"
10. Click **Generate**
11. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)
12. Remove spaces and use it as `EMAIL_PASS`

**Example:** `abcdwxyzpqrsjklm`

#### 3. **NEXT_PUBLIC_GA_MEASUREMENT_ID** (Google Analytics - Optional)

**Steps to get your Measurement ID:**

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create an account if you don't have one
3. Create a new **GA4 Property** (not Universal Analytics)
4. Navigate to **Admin** (gear icon at bottom left)
5. Under **Property**, click **Data Streams**
6. Click on your Web stream
7. Find **Measurement ID** (format: `G-XXXXXXXXXX`)
8. Copy and paste into `.env.local`

**Example:** `G-7CTQNDTW0G`

### Security Best Practices

⚠️ **Never commit `.env.local` to Git!**

The `.gitignore` file is already configured to exclude:

- `.env.local`
- `.env.development.local`
- `.env.test.local`
- `.env.production.local`

If you accidentally commit sensitive data:

1. Remove it from Git history
2. Immediately regenerate all compromised credentials
3. Update `.env.local` with new credentials

---

## 🏃 How to Run

### Development Mode

Start the development server with hot-reload:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The application will be available at:

- **Local:** [http://localhost:3000](http://localhost:3000)
- **Network:** Check terminal for network URL

### Clean Development Mode

If you encounter cache issues, run:

```bash
npm run dev:clean
```

This removes the `.next` folder and starts a fresh development build.

### Production Build

Build the application for production:

```bash
# Build the project
npm run build

# Start production server
npm run start
```

### Linting

Check code quality and fix issues:

```bash
npm run lint
```

---

## 🧩 Components Overview

### Page Components (`components/pages/`)

#### 1. **HomePage.tsx**

**Purpose:** Landing page hero section with introduction and call-to-action.

**Key Features:**

- Typewriter effect for name animation
- Profile photo with circular border effect
- Download resume button
- Social media links
- Animated statistics counter

**Reusability:**

```tsx
import HomePage from "@/components/pages/HomePage";

// Use in any page
export default function Home() {
  return <HomePage />;
}
```

**Customization:**

- Edit personal information in the component
- Update resume link in the Button href
- Modify typewriter text in `useTypewriter` hook
- Change animation delays in style props

---

#### 2. **ServicesPage.tsx**

**Purpose:** Display services offered in a grid layout with hover effects.

**Key Features:**

- Responsive grid (1 column mobile, 2 columns desktop)
- Hover effects with color transitions
- Arrow icon that rotates on hover
- Service cards with numbering

**Data Structure:**

```tsx
interface Service {
  num: string; // Service number (e.g., "01")
  title: string; // Service title
  description: string; // Service description
  href: string; // Link to contact page
}
```

**How to Add/Edit Services:**

```tsx
const services: Service[] = [
  {
    num: "01",
    title: "Web Development",
    description: "Building modern web applications...",
    href: "/contact",
  },
  // Add more services here
];
```

**Reusability in Other Projects:**

- Extract the service card into a separate component
- Pass services array as props
- Style using Tailwind utility classes

---

#### 3. **ResumePage.tsx**

**Purpose:** Tabbed interface displaying resume, experience, education, and skills.

**Key Features:**

- Tab navigation (About, Experience, Education, Skills)
- Scrollable content areas
- Icon-based skill display with tooltips
- Timeline cards for experience/education

**Data Structures:**

```tsx
// About section
interface InfoItem {
  fieldName: string;
  fieldValue: string;
}

// Experience section
interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

// Skills section
interface SkillItem {
  icon: JSX.Element;
  name: string;
}
```

**How to Update Content:**

1. **Add Experience:**

```tsx
const experience: ExperienceData = {
  items: [
    {
      company: "Your Company",
      position: "Your Position",
      duration: "Jan 2024 - Present",
    },
  ],
};
```

1. **Add Skills:**

```tsx
import { FaReact } from "react-icons/fa";

const skills: SkillsData = {
  skillList: [{ icon: <FaReact />, name: "React.js" }],
};
```

**Reusability:**

- Convert to a generic tabbed component
- Pass data as props
- Use in team pages, product showcases, etc.

---

#### 4. **WorkPage.tsx**

**Purpose:** Showcase portfolio projects with grid/list view toggle.

**Key Features:**

- Swiper carousel for image slideshow
- Grid view (original) and list view modes
- Project filtering by category
- Live demo and GitHub repository links
- Technology stack display

**Project Data Structure:**

```tsx
interface Project {
  num: string; // Project number
  category: string; // Frontend/Fullstack/Backend
  title: string; // Project name
  description: string; // Detailed description
  stack: ProjectStack[]; // Technologies used
  image: string; // Screenshot path
  live: string; // Live demo URL
  github: string; // GitHub repository URL
}
```

**How to Add New Projects:**

```tsx
const projects: Project[] = [
  {
    num: "01",
    category: "Fullstack",
    title: "Your Project Name",
    description: "Detailed project description...",
    stack: [{ name: "Next.js" }, { name: "TypeScript" }],
    image: "/assets/work/project-image.png",
    live: "https://your-live-demo.com",
    github: "https://github.com/yourusername/repo",
  },
];
```

**View Mode Toggle:**

- Grid View: Carousel with single project focus
- List View: All projects in scrollable list

**Reusability:**

- Perfect for freelancer portfolios
- Agency project showcases
- Product galleries
- Case study presentations

---

#### 5. **ContactPage.tsx**

**Purpose:** Contact form with email functionality and validation.

**Key Features:**

- Form validation (required fields, email format)
- Loading states during submission
- Success/error alerts with icons
- Auto-reply email to user
- Smooth scroll to alert message
- Contact information display

**Form Data Structure:**

```tsx
interface FormData {
  fullname: string;
  email: string;
  message: string;
}
```

**API Integration:**

```tsx
// Send main email
const response = await axios.post("/api/send-email", formData);

// Send auto-reply
const autoReply = await axios.post("/api/send-auto-reply", formData);
```

**Error Handling:**

- Network errors
- Authentication errors
- Validation errors
- Timeout errors

**Reusability:**

- Extract form into separate component
- Add file upload capability
- Integrate with other backend services (Firebase, Supabase)
- Add CAPTCHA for spam protection

---

### UI Components (`components/ui/`)

These are **Shadcn UI** components - fully customizable, accessible, and ready to use.

#### **button.tsx**

Versatile button component with multiple variants.

**Variants:**

- `default` - Primary accent button
- `destructive` - Red danger button
- `outline` - Bordered button
- `secondary` - Muted secondary button
- `ghost` - Transparent button
- `link` - Link-styled button

**Sizes:**

- `default` - Standard size
- `sm` - Small button
- `lg` - Large button
- `icon` - Square icon button

**Usage:**

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">
  Click Me
</Button>

<Button variant="outline" size="sm">
  Secondary Action
</Button>
```

---

#### **input.tsx**

Styled text input field with focus states.

**Usage:**

```tsx
import { Input } from "@/components/ui/input";

<Input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>;
```

---

#### **textarea.tsx**

Multi-line text input for longer content.

**Usage:**

```tsx
import { Textarea } from "@/components/ui/textarea";

<Textarea placeholder="Your message" className="h-[200px]" />;
```

---

#### **alert.tsx**

Notification component for success/error messages.

**Variants:**

- `default` - Blue informational
- `destructive` - Red error
- `success` - Green success (custom)

**Usage:**

```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your message has been sent.</AlertDescription>
</Alert>;
```

---

#### **tabs.tsx**

Tabbed interface for organizing content.

**Usage:**

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>

  <TabsContent value="tab1">Content for Tab 1</TabsContent>

  <TabsContent value="tab2">Content for Tab 2</TabsContent>
</Tabs>;
```

---

#### **tooltip.tsx**

Hover tooltip for additional information.

**Usage:**

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content here</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>;
```

---

### Layout Components

#### **Header.tsx**

Main navigation header with logo and links.

**Features:**

- Logo with accent dot
- Desktop navigation menu
- Mobile hamburger menu
- "Hire me" CTA button

**Customization:**

```tsx
// Change logo text
<h1 className="text-4xl font-semibold">
  YourBrand<span className="text-accent">.</span>
</h1>
```

---

#### **Nav.tsx**

Desktop navigation links with active state highlighting.

**Navigation Links:**

```tsx
const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];
```

**How to Add Links:**
Simply add to the `links` array with name and path.

---

#### **MobileNav.tsx**

Mobile-friendly sheet navigation.

**Features:**

- Hamburger icon trigger
- Slide-in navigation sheet
- Logo display
- Close button
- Mobile-optimized link styles

---

#### **Social.tsx**

Social media icon links.

**Social Platforms:**

```tsx
const socials = [
  { icon: <FaGithub />, path: "https://github.com/username" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/username" },
  { icon: <FaYoutube />, path: "https://youtube.com/@username" },
  { icon: <FaInstagram />, path: "https://instagram.com/username" },
];
```

**Usage:**

```tsx
<Social
  containerStyles="flex gap-6"
  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-all duration-500"
/>
```

---

#### **Stats.tsx**

Animated statistics counter.

**Features:**

- Counts from start value to target value
- Smooth easing animation
- Responsive grid layout
- Customizable duration

**Data Structure:**

```tsx
const stats = [
  {
    num: 5, // Target number
    text: "Years of Experience",
    startFrom: 0, // Starting number
  },
];
```

**How It Works:**
Uses `requestAnimationFrame` for smooth 60fps animation with ease-out curve.

---

#### **Photo.tsx**

Profile photo with circular border animation.

**Features:**

- Circular shape with rotating border effect
- Responsive sizing
- Image optimization with Next.js Image

---

#### **PageTransition.tsx**

Wrapper component for page transition animations.

**Usage:**

```tsx
import PageTransition from "@/components/PageTransition";

export default function RootLayout({ children }) {
  return <PageTransition>{children}</PageTransition>;
}
```

**Animation:**
Uses Framer Motion's `AnimatePresence` with fade and slide effects.

---

#### **StairTransition.tsx**

Creative stair-step page transition effect.

**How It Works:**

- Creates multiple div elements
- Animates them in sequence
- Creates a "stair" effect during page transitions

---

#### **ScrollToTop.tsx**

Button that appears when scrolling down, returns to top when clicked.

**Features:**

- Only visible after scrolling 300px
- Smooth scroll to top
- Fixed position in bottom-right corner
- Fade in/out animation

---

#### **GoogleAnalytics.tsx**

Google Analytics 4 integration component.

**Features:**

- Loads GA4 script
- Initializes `gtag` function
- Logs status in development mode
- Silent fail for ad blockers

**Usage:**
Already included in `layout.tsx` root layout.

---

## 🔌 API Endpoints

### 1. `/api/send-email` (POST)

**Purpose:** Sends contact form submission to your email address.

**Request Body:**

```typescript
{
  fullname: string; // User's name (1-100 characters)
  email: string; // User's email (valid format)
  message: string; // User's message (1-5000 characters)
}
```

**Response (Success):**

```typescript
{
  message: "Email sent successfully";
}
```

**Response (Error):**

```typescript
{
  error: "Validation failed" | "Authentication failed" | "Connection failed",
  details: string  // Specific error message
}
```

**Validation Rules:**

- All fields required
- Email must be valid format
- Name: 1-100 characters
- Message: 1-5000 characters
- Input sanitization to prevent XSS

**Email Configuration:**

```typescript
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

**Error Handling:**

- `EAUTH` - Authentication failed
- `ECONNECTION` - Connection failed
- Invalid email format
- Missing fields

---

### 2. `/api/send-auto-reply` (POST)

**Purpose:** Sends automatic confirmation email to user after form submission.

**Request Body:**

```typescript
{
  fullname: string;
  email: string;
  message: string;
}
```

**Response (Success):**

```typescript
{
  message: "Auto-reply sent successfully",
  referenceNumber: string  // Format: ARN-{timestamp}-{random}
}
```

**Email Template Features:**

- Professional HTML email design
- Reference number for tracking
- Message preview (truncated at 200 chars)
- Submission date
- Contact information
- Brand colors and fonts
- Responsive design

**Sample Reference Number:**

```bash
ARN-1729699200000-742
```

**HTML Email Template:**

- Header with gradient background
- Message preview box
- Reference number display
- Next steps section
- Contact information footer
- Disclaimer section

---

## 🗂️ Pages & Routes

### App Router Structure

Next.js 15 uses the **App Router** with file-based routing.

| Route       | File                    | Component      | Description            |
| ----------- | ----------------------- | -------------- | ---------------------- |
| `/`         | `app/page.tsx`          | `HomePage`     | Landing page with hero |
| `/services` | `app/services/page.tsx` | `ServicesPage` | Services offered       |
| `/resume`   | `app/resume/page.tsx`   | `ResumePage`   | Resume/Skills          |
| `/work`     | `app/work/page.tsx`     | `WorkPage`     | Portfolio projects     |
| `/contact`  | `app/contact/page.tsx`  | `ContactPage`  | Contact form           |

### Creating New Pages

**Example: Add `/blog` page**

1. Create folder and file:

```bash
mkdir app/blog
touch app/blog/page.tsx
```

1. Create page component:

```tsx
// app/blog/page.tsx
export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      {/* Your blog content */}
    </div>
  );
}
```

1. Add to navigation:

```tsx
// components/Nav.tsx
const links = [
  // ... existing links
  { name: "blog", path: "/blog" },
];
```

### Dynamic Routes

**Example: Blog post with dynamic slug**

```bash
mkdir -p app/blog/[slug]
touch app/blog/[slug]/page.tsx
```

```tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
    </div>
  );
}
```

Access at: `/blog/my-first-post`

---

## 🪝 Custom Hooks

### useTypewriter Hook

**File:** `hooks/useTypewriter.ts`

**Purpose:** Creates a typewriter text effect with customizable speed and delay.

**Interface:**

```typescript
interface UseTypewriterOptions {
  text: string; // Text to animate
  speed?: number; // Typing speed in ms (default: 100)
  delay?: number; // Initial delay before typing starts (default: 0)
}

interface UseTypewriterReturn {
  displayText: string; // Currently displayed text
  isComplete: boolean; // Whether animation is complete
}
```

**Usage:**

```tsx
import { useTypewriter } from "@/hooks/useTypewriter";

function MyComponent() {
  const { displayText, isComplete } = useTypewriter({
    text: "Hello, World!",
    speed: 150,
    delay: 1000,
  });

  return (
    <h1>
      {displayText}
      {!isComplete && <span className="cursor">|</span>}
    </h1>
  );
}
```

**How It Works:**

1. Delays initial render by `delay` milliseconds
2. Types one character every `speed` milliseconds
3. Updates `displayText` state progressively
4. Sets `isComplete` to `true` when finished

**Reusability:**

- Hero headlines
- Product descriptions
- Loading messages
- Interactive tutorials
- Chat interfaces

**Customization Ideas:**

- Add backspace/delete effect
- Loop animation
- Type multiple strings in sequence
- Add realistic typing pauses

---

## 🎨 Styling & Animations

### TailwindCSS Configuration

**File:** `tailwind.config.js`

**Custom Theme:**

```javascript
theme: {
  extend: {
    colors: {
      primary: "#1c1c22",
      accent: {
        DEFAULT: "#00ff99",
        hover: "#00e187",
      },
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
  }
}
```

**Custom Animations:**

```javascript
keyframes: {
  "fade-in": {
    from: { opacity: "0" },
    to: { opacity: "1" },
  },
  "ease-in-out": {
    "0%": { opacity: "0", transform: "translateY(10px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
}
```

### Global Styles

**File:** `app/globals.css`

**Key Features:**

- Custom animations with delays
- Scrollbar styling
- Text outline effects
- Typewriter cursor animation

**Typewriter Cursor:**

```css
.typewriter-cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: #00ff99;
  margin-left: 2px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}
```

**Custom Scrollbar:**

```css
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1c1c22;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #00ff99;
  border-radius: 4px;
}
```

### Framer Motion Animations

**Page Transitions:**

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
  transition={{ duration: 0.5 }}
>
  {children}
</motion.div>
```

**Hover Effects:**

```tsx
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  Click me
</motion.div>
```

**Staggered Children:**

```tsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }}
>
  {items.map((item) => (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## 📧 Email Configuration

### Gmail SMTP Setup

**Step 1: Enable 2-Step Verification**

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click "2-Step Verification"
3. Follow the setup wizard

**Step 2: Generate App Password**

1. Return to Security settings
2. Click "App passwords"
3. Select "Mail" and "Other (Custom name)"
4. Enter "Portfolio Website"
5. Click "Generate"
6. Copy the 16-character password
7. Add to `.env.local` as `EMAIL_PASS`

**Step 3: Verify Configuration**

```typescript
// Test email configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection
await transporter.verify();
```

### Alternative Email Providers

#### Yahoo Mail

```typescript
const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 587,
  secure: false,
  auth: {
    user: "youremail@yahoo.com",
    pass: "your-app-password",
  },
});
```

#### Outlook/Hotmail

```typescript
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "youremail@outlook.com",
    pass: "your-password",
  },
});
```

#### Custom SMTP

```typescript
const transporter = nodemailer.createTransport({
  host: "smtp.yourdomain.com",
  port: 465,
  secure: true,
  auth: {
    user: "youremail@yourdomain.com",
    pass: "your-password",
  },
});
```

### Troubleshooting Email Issues

**Error: "Invalid login"**

- Ensure 2FA is enabled
- Regenerate app password
- Check for typos in `.env.local`

**Error: "Connection timeout"**

- Check firewall settings
- Verify port 587 is open
- Try port 465 with `secure: true`

**Emails going to spam**

- Add SPF record to your domain
- Set up DKIM authentication
- Use authenticated sender in "from" field

---

## 📊 Analytics Integration

### Google Analytics 4

**Setup in Project:**

1. Component already created: `components/GoogleAnalytics.tsx`
2. Imported in `app/layout.tsx`
3. Uses `NEXT_PUBLIC_GA_MEASUREMENT_ID` from `.env.local`

**Tracking Events:**

```tsx
// Custom event tracking
window.gtag("event", "button_click", {
  event_category: "engagement",
  event_label: "hire_me_button",
  value: 1,
});
```

**Page Views:**
Automatically tracked on route changes.

**View Reports:**

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Navigate to "Reports" > "Realtime" for live data
4. Navigate to "Reports" > "Engagement" for detailed analytics

---

### Vercel Analytics

**Setup:**
Already integrated in `app/layout.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
```

**Features:**

- Automatic page view tracking
- Web Vitals monitoring (CLS, FID, LCP, FCP, TTFB)
- No configuration needed
- Works automatically on Vercel deployments

**View Analytics:**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click "Analytics" tab
4. View traffic, performance, and Web Vitals

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

**Option 1: Deploy via GitHub (Automatic)**

1. **Push to GitHub:**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

1. **Connect to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Click "Add New" > "Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js

2. **Configure Environment Variables:**
   - Click "Environment Variables"
   - Add all variables from `.env.local`:
     - `EMAIL_USER`
     - `EMAIL_PASS`
     - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Click "Deploy"

3. **Auto-Deployment:**
   - Every push to `main` branch triggers new deployment
   - Pull requests create preview deployments

**Option 2: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

### Deploy to Netlify

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Environment Variables:**
   Add all variables from `.env.local` in Netlify dashboard

3. **Netlify Configuration:**
   Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### Deploy to AWS Amplify

1. Connect GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Add environment variables
4. Deploy

---

### Self-Hosting (VPS/Cloud)

**Requirements:**

- Node.js 18+ installed
- PM2 for process management
- Nginx for reverse proxy

**Steps:**

1. **Build the application:**

```bash
npm run build
```

1. **Start with PM2:**

```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start npm --name "portfolio" -- start

# Save PM2 configuration
pm2 save

# Set up auto-start
pm2 startup
```

1. **Configure Nginx:**

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

1. **Enable SSL with Certbot:**

```bash
sudo certbot --nginx -d yourdomain.com
```

---

## 🔄 Reusable Components Guide

### How to Extract and Reuse Components

#### Example 1: Reusable Card Component

**Extract from ServicesPage:**

```tsx
// components/ServiceCard.tsx
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

interface ServiceCardProps {
  num: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  num,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className="flex-1 flex flex-col justify-between gap-4 group">
      <div className="w-full flex justify-between items-center">
        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
          {num}
        </div>
        <Link
          href={href}
          className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
        >
          <BsArrowDownRight className="text-primary text-3xl" />
        </Link>
      </div>

      <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
        {title}
      </h2>

      <p className="text-white/60 text-justify">{description}</p>

      <div className="border-b border-white/20 w-full"></div>
    </div>
  );
}
```

**Usage:**

```tsx
import ServiceCard from '@/components/ServiceCard';

const services = [...];

return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
    {services.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </div>
);
```

---

#### Example 2: Reusable Form Component

**Extract from ContactPage:**

```tsx
// components/ContactForm.tsx
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  loading?: boolean;
}

interface FormData {
  fullname: string;
  email: string;
  message: string;
}

export default function ContactForm({
  onSubmit,
  loading = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData({ fullname: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        name="fullname"
        placeholder="Enter your name"
        value={formData.fullname}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, fullname: e.target.value }))
        }
        required
      />

      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        required
      />

      <Textarea
        name="message"
        placeholder="Type your message here"
        value={formData.message}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, message: e.target.value }))
        }
        className="h-[200px]"
        required
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
```

---

#### Example 3: Reusable Stats Component

**Make Stats.tsx more flexible:**

```tsx
// components/StatsCounter.tsx
interface Stat {
  num: number;
  text: string;
  startFrom?: number;
}

interface StatsCounterProps {
  stats: Stat[];
  columns?: number;
}

export default function StatsCounter({
  stats,
  columns = 4,
}: StatsCounterProps) {
  const gridClass = `grid-cols-${columns}`;

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
}
```

**Usage in different projects:**

```tsx
// E-commerce dashboard
const ecommerceStats = [
  { num: 1250, text: "Total Orders" },
  { num: 45678, text: "Revenue ($)" },
  { num: 98, text: "Customer Satisfaction (%)" },
];

<StatsCounter stats={ecommerceStats} columns={3} />;

// Blog analytics
const blogStats = [
  { num: 50000, text: "Monthly Visitors" },
  { num: 234, text: "Published Articles" },
];

<StatsCounter stats={blogStats} columns={2} />;
```

---

### Component Reusability Checklist

✅ **Make components prop-driven**

- Accept data via props instead of hardcoding
- Use TypeScript interfaces for type safety

✅ **Keep components focused**

- Single responsibility principle
- Separate logic from presentation

✅ **Use composition over inheritance**

- Build complex UIs from simple components
- Use children prop for flexibility

✅ **Document component APIs**

- Add JSDoc comments
- Provide usage examples
- List all props and their types

✅ **Style with flexibility**

- Accept className prop for custom styling
- Use Tailwind utility classes
- Support theme variants

✅ **Handle edge cases**

- Empty states
- Loading states
- Error states

---

## ✅ Best Practices

### Code Organization

**1. Component Structure:**

```bash
Component/
├── Component.tsx         # Main component
├── Component.test.tsx    # Unit tests
├── Component.stories.tsx # Storybook stories (optional)
└── index.ts             # Export file
```

**2. Import Order:**

```tsx
// 1. React and Next.js imports
import { useState } from "react";
import Link from "next/link";

// 2. Third-party libraries
import axios from "axios";
import { motion } from "framer-motion";

// 3. Internal components
import { Button } from "@/components/ui/button";

// 4. Utilities and helpers
import { cn } from "@/lib/utils";

// 5. Types and interfaces
import type { FormData } from "@/types";

// 6. Styles and assets
import "./styles.css";
```

**3. TypeScript Best Practices:**

- Always define interfaces for props
- Use `type` for unions and intersections
- Avoid `any` type
- Enable strict mode

**4. Performance Optimization:**

- Use `React.memo` for expensive components
- Implement code splitting with `dynamic` imports
- Optimize images with Next.js `Image` component
- Lazy load components below the fold

**5. Accessibility:**

- Use semantic HTML elements
- Add ARIA labels where needed
- Ensure keyboard navigation
- Maintain color contrast ratios
- Test with screen readers

**6. SEO Best Practices:**

- Use Next.js metadata API
- Include Open Graph tags
- Add structured data (JSON-LD)
- Create sitemap.xml
- Implement canonical URLs

---

## 🔍 Keywords & SEO

### Meta Tags Configuration

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://arnob-mahmud.vercel.app"),
  title: "Arnob Mahmud | Full-Stack Developer | Portfolio",
  description: "Professional portfolio showcasing web development projects...",
  keywords: [
    "Arnob Mahmud",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Arnob Mahmud" }],
  openGraph: {
    title: "Arnob Mahmud | Full-Stack Developer",
    description: "Portfolio of Arnob Mahmud...",
    url: "https://arnob-mahmud.vercel.app",
    siteName: "Arnob Mahmud Portfolio",
    images: [{ url: "/assets/photo.png" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnob Mahmud | Full-Stack Developer",
    description: "Portfolio of Arnob Mahmud...",
    images: ["/assets/photo.png"],
  },
};
```

### Keywords for Portfolio Websites

**General:**

- Full-Stack Developer
- Web Developer
- Software Engineer
- Frontend Developer
- Backend Developer
- Portfolio Website

**Technologies:**

- React.js
- Next.js
- TypeScript
- JavaScript
- Node.js
- TailwindCSS
- Framer Motion

**Services:**

- Web Development
- UI/UX Design
- API Development
- Database Design
- Cloud Deployment
- SEO Optimization

**Location-based:**

- [Frankfurt] Developer
- [Germany] Web Developer
- Remote Developer

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. Email Not Sending

**Symptoms:**

- "Authentication failed" error
- "Connection timeout" error
- Emails not arriving

**Solutions:**

```bash
# Check environment variables
echo $EMAIL_USER
echo $EMAIL_PASS

# Verify .env.local exists
ls -la .env.local

# Restart development server
npm run dev:clean
```

**Checklist:**

- ✅ 2FA enabled on Gmail
- ✅ App password generated (not regular password)
- ✅ No spaces in app password
- ✅ Correct email in `EMAIL_USER`
- ✅ Port 587 not blocked by firewall

---

#### 2. Google Analytics Not Tracking

**Symptoms:**

- No data in GA4 dashboard
- Real-time reports empty

**Solutions:**

1. **Check Measurement ID:**

```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

1. **Verify in Browser Console:**

```javascript
// Check if gtag is loaded
console.log(window.gtag);
console.log(window.dataLayer);
```

1. **Disable Ad Blocker:**

- Ad blockers prevent GA from loading
- Test in incognito mode without extensions

1. **Wait 24-48 hours:**

- GA4 data processing takes time
- Real-time reports update faster

---

#### 3. Build Errors

**Error: "Module not found"**

```bash
# Clear node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

**Error: "Type error in component"**

```bash
# Check TypeScript errors
npm run build

# Fix type errors in the reported files
```

**Error: "Cannot find module './public/...'"**

```bash
# Ensure asset files exist
ls -la public/assets/

# Check file paths are correct (case-sensitive)
```

---

#### 4. Styling Issues

**Tailwind classes not working:**

```bash
# Restart development server
npm run dev:clean

# Check tailwind.config.js includes your files
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
]
```

**Custom fonts not loading:**

```typescript
// Verify font is imported in layout.tsx
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
});
```

---

#### 5. Deployment Issues on Vercel

**Environment variables not working:**

1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Add all variables
4. Redeploy the project

**Build fails on Vercel:**

```bash
# Check build works locally
npm run build

# Review build logs in Vercel dashboard
# Fix reported errors
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Bugs

1. Check if the bug is already reported in [Issues](https://github.com/arnobt78/MyPortfolio--NextJS-FullStack-Website/issues)
2. Create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, browser, Node version)

### Suggesting Features

1. Open a new issue with the label "enhancement"
2. Describe the feature and its benefits
3. Provide examples or mockups

### Pull Requests

1. **Fork the repository**

```bash
# Click "Fork" on GitHub
git clone https://github.com/yourusername/MyPortfolio--NextJS-FullStack-Website.git
```

1. **Create a feature branch**

```bash
git checkout -b feature/amazing-feature
```

1. **Make your changes**

- Follow existing code style
- Add comments for complex logic
- Update documentation if needed

1. **Commit your changes**

```bash
git add .
git commit -m "feat: add amazing feature"
```

**Commit Message Format:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

1. **Push to your fork**

```bash
git push origin feature/amazing-feature
```

1. **Open a Pull Request**

- Go to original repository on GitHub
- Click "New Pull Request"
- Select your branch
- Describe your changes
- Wait for review

---

## 📄 License

This project is open-source and available under the **MIT License**.

```bash
MIT License

Copyright (c) 2025 Arnob Mahmud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

**What this means:**

- ✅ Free to use for personal and commercial projects
- ✅ Modify and distribute as you wish
- ✅ Include in private and public repositories
- ⚠️ Must include the license notice
- ⚠️ No warranty provided

---

## 🙏 Acknowledgments

**Special Thanks To:**

- **Next.js Team** - For the incredible React framework
- **Vercel** - For seamless deployment platform
- **Shadcn** - For beautiful UI components
- **Framer Motion** - For smooth animations
- **TailwindCSS** - For utility-first CSS framework
- **React Icons** - For comprehensive icon library

**Inspiration & Resources:**

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 📞 Contact & Support

### Get in Touch

**Arnob Mahmud**

- 📧 Email: [arnobt78@gmail.com](mailto:arnobt78@gmail.com)
- 🌐 Portfolio: [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/)
- 💼 LinkedIn: [linkedin.com/in/arnob-mahmud-05839655/](https://www.linkedin.com/in/arnob-mahmud-05839655/)
- 🐙 GitHub: [github.com/arnobt78](https://github.com/arnobt78)
- 📱 Phone: +49 157 34664351
- 📍 Location: Frankfurt am Main, Germany

### Support This Project

If you find this project helpful:

- ⭐ **Star** the repository on GitHub
- 🐛 Report bugs and suggest features
- 🤝 Contribute via pull requests
- 📢 Share with other developers
- 💬 Provide feedback and testimonials

---

## 🎯 Project Status

**Current Version:** 1.0.0

**Status:** ✅ Production Ready

**Last Updated:** October 2025

**Roadmap:**

- [ ] Add blog functionality
- [ ] Implement i18n (internationalization)
- [ ] Add dark/light theme toggle
- [ ] Create admin dashboard
- [ ] Integrate CMS (Sanity/Contentful)
- [ ] Add unit tests (Jest/React Testing Library)
- [ ] Implement E2E tests (Playwright/Cypress)
- [ ] Add PWA support
- [ ] Optimize for Core Web Vitals
- [ ] Add more project categories

---

## 🌟 Showcase

**Built With This Template:**

Have you built something amazing with this portfolio template? Let me know!

Send your project details to [arnobt78@gmail.com](mailto:arnobt78@gmail.com) to be featured here.

---

## 📚 Learning Resources

**Recommended for Beginners:**

- [Next.js Learn Course](https://nextjs.org/learn) - Official interactive course
- [React Tutorial](https://react.dev/learn) - Official React documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TailwindCSS Course](https://tailwindcss.com/docs/utility-first)
- [Framer Motion Tutorial](https://www.framer.com/motion/introduction/)

**YouTube Channels:**

- [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)
- [Traversy Media](https://www.youtube.com/@TraversyMedia)
- [Fireship](https://www.youtube.com/@Fireship)
- [Net Ninja](https://www.youtube.com/@NetNinja)

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
