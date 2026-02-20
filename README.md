# Sharjeel Siddiqui - Portfolio Website

A modern, responsive, and visually stunning portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**. This portfolio showcases professional experience, skills, projects, certifications, and services with beautiful animations and an elegant dark/light theme.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Portfolio Sections](#portfolio-sections)
- [UI Components](#ui-components)
- [API Routes](#api-routes)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Dark/Light Theme**: Seamless theme switching with system preference support
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Section-based Layout**: Hero, About, Skills, Experience, Projects, Services, Certificates, and Contact sections
- **Interactive UI Components**: 3D cards, typewriter effects, background beams, spotlight effects, and more
- **Contact Form with Email**: Functional contact form powered by Nodemailer with confirmation emails
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter card support
- **Performance Optimized**: Next.js font optimization, image optimization, and code splitting
- **TypeScript**: Full type safety throughout the codebase
- **45+ Certificates**: Showcase of professional certifications from Udemy, Google, Cisco, and more

---

## Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.6 | React framework with App Router |
| [React](https://reactjs.org/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |

### Styling & Animation
| Technology | Version | Purpose |
|------------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | 12.34.0 | Animations and transitions |
| [Geist Font](https://vercel.com/font) | - | Typography |

### UI & Icons
| Technology | Version | Purpose |
|------------|---------|---------|
| [React Icons](https://react-icons.github.io/react-icons/) | 5.5.0 | Icon library |
| [Tabler Icons](https://tabler-icons.io/) | 3.36.1 | Additional icons |
| [clsx](https://github.com/lukeed/clsx) | 2.1.1 | Conditional classnames |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.4.0 | Merge Tailwind classes |

### Backend & Email
| Technology | Version | Purpose |
|------------|---------|---------|
| [Nodemailer](https://nodemailer.com/) | 8.0.1 | Email sending |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.6 | Theme management |

### Development Tools
| Technology | Version | Purpose |
|------------|---------|---------|
| [ESLint](https://eslint.org/) | 9.x | Code linting |
| [PostCSS](https://postcss.org/) | - | CSS processing |

---

## Project Structure

```
SharjeelPortfolio/
├── public/                          # Static assets
│   ├── certificates/                # Certificate images (45 .webp files)
│   ├── projects/                    # Project images
│   ├── logo.png                     # Site logo
│   └── CV Sharjeel.pdf              # Resume/CV
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── globals.css              # Global styles & custom animations
│   │   ├── layout.tsx               # Root layout with metadata
│   │   ├── page.tsx                 # Main homepage
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts         # Contact form API endpoint
│   │   ├── certificates/
│   │   │   ├── page.tsx             # Certificates page
│   │   │   └── certificates-content.tsx
│   │   └── projects/
│   │       ├── page.tsx             # Projects page
│   │       └── projects-content.tsx
│   ├── components/
│   │   ├── footer.tsx               # Site footer
│   │   ├── navbar.tsx               # Floating navigation bar
│   │   ├── section-reveal.tsx       # Section reveal animation wrapper
│   │   ├── theme-provider.tsx       # Dark/light theme provider
│   │   ├── theme-toggle.tsx         # Theme toggle button
│   │   ├── sections/                # Page sections
│   │   │   ├── about.tsx            # About & Education section
│   │   │   ├── certificates.tsx     # Certificates showcase
│   │   │   ├── contact.tsx          # Contact form section
│   │   │   ├── experience.tsx       # Work experience timeline
│   │   │   ├── hero.tsx             # Hero/landing section
│   │   │   ├── projects.tsx         # Projects showcase
│   │   │   ├── services.tsx         # Services offered
│   │   │   └── skills.tsx           # Skills categories
│   │   └── ui/                      # Reusable UI components
│   │       ├── 3d-card.tsx          # 3D hover card effect
│   │       ├── animated-modal.tsx   # Animated modal dialog
│   │       ├── animated-tooltip.tsx # Tooltip with animations
│   │       ├── background-beams.tsx # Background beam effect
│   │       ├── bento-grid.tsx       # Bento grid layout
│   │       ├── decorative-effects.tsx # Spotlight, shimmer effects
│   │       ├── direction-aware-hover.tsx # Direction-aware hover
│   │       ├── floating-navbar.tsx  # Floating navigation
│   │       ├── glowing-stars.tsx    # Glowing stars background
│   │       ├── grid-background.tsx  # Grid pattern background
│   │       ├── hover-effect.tsx     # Hover animations
│   │       ├── infinite-moving-cards.tsx # Infinite scroll cards
│   │       ├── placeholders-and-vanish-input.tsx # Animated input
│   │       ├── sparkles.tsx         # Sparkle effects
│   │       ├── text-generate-effect.tsx # Text generation animation
│   │       ├── timeline.tsx         # Timeline component
│   │       └── typewriter-effect.tsx # Typewriter text effect
│   ├── data/
│   │   └── portfolio-data.ts        # All portfolio content data
│   ├── lib/
│   │   └── utils.ts                 # Utility functions (cn helper)
│   └── types/
│       └── index.ts                 # TypeScript interfaces
├── eslint.config.mjs                # ESLint configuration
├── next.config.ts                   # Next.js configuration
├── next-env.d.ts                    # Next.js TypeScript declarations
├── package.json                     # Dependencies and scripts
├── postcss.config.mjs               # PostCSS configuration
├── robots.txt                       # Search engine directives
└── tsconfig.json                    # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sharjeelsiddiqui/SharjeelPortfolio.git
   cd SharjeelPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables))

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create a `.env.local` file in the root directory with the following variables for the contact form functionality:

```env
# SMTP Configuration for Contact Form
SMTP_EMAIL=your-gmail@gmail.com
SMTP_PASSWORD=your-app-specific-password
RECEIVER_EMAIL=your-receiving-email@example.com
```

### Gmail App Password Setup

1. Enable 2-Factor Authentication on your Google account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for "Mail"
4. Use this 16-character password as `SMTP_PASSWORD`

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

---

## Portfolio Sections

### 1. Hero Section
- Animated greeting with spotlight effects
- Typewriter effect for designation
- Text generation effect for tagline
- Social media links
- Background beams and grid patterns
- Call-to-action buttons (Contact, Download CV)

### 2. About Section
- Personal bio with 3D card effect
- Education timeline with animated entries
- Dot background decorations
- Graduation icons and location markers

### 3. Skills Section
- Categorized skills (Frontend, Backend, Database, Tools)
- Skill level indicators
- Animated skill cards

### 4. Experience Section
- Work experience timeline
- Company details with technologies used
- Animated timeline entries
- Duration and location information

### 5. Services Section
- 6 professional services offered:
  - Web Development
  - Database Development
  - Content Writing
  - Logo Designing
  - Desktop Applications
  - Freelance Consulting
- Feature lists for each service

### 6. Projects Section
- Featured projects showcase
- Project cards with technologies
- Links to live demos and GitHub repositories
- Direction-aware hover effects

### 7. Certificates Section
- 45+ professional certifications
- Image gallery with hover effects
- Certificates from Udemy, Google, Cisco, Cursa
- Dedicated certificates page

### 8. Contact Section
- Functional contact form
- Email validation
- Dual email system (notification + confirmation)
- Social media links
- Location information

---

## UI Components

The portfolio includes 17+ custom UI components for enhanced visual experience:

| Component | Description |
|-----------|-------------|
| `3d-card.tsx` | Cards with 3D perspective on hover |
| `animated-modal.tsx` | Smooth modal dialogs |
| `animated-tooltip.tsx` | Tooltips with animations |
| `background-beams.tsx` | Animated beam effects |
| `bento-grid.tsx` | Modern bento-style grid layout |
| `decorative-effects.tsx` | Spotlight, shimmer button effects |
| `direction-aware-hover.tsx` | Hover effects based on cursor direction |
| `floating-navbar.tsx` | Hide-on-scroll floating navigation |
| `glowing-stars.tsx` | Animated glowing star background |
| `grid-background.tsx` | Dotted/lined grid patterns |
| `hover-effect.tsx` | Various hover animations |
| `infinite-moving-cards.tsx` | Auto-scrolling card carousel |
| `placeholders-and-vanish-input.tsx` | Animated form inputs |
| `sparkles.tsx` | Sparkle particle effects |
| `text-generate-effect.tsx` | Character-by-character text reveal |
| `timeline.tsx` | Vertical timeline component |
| `typewriter-effect.tsx` | Typing animation effect |

---

## API Routes

### POST `/api/contact`

Handles contact form submissions with email notifications.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response:**
- `200`: Message sent successfully
- `400`: Missing required fields
- `500`: Server error

**Features:**
- Sends notification email to portfolio owner
- Sends confirmation email to the sender
- Beautiful HTML email templates
- Reply-to functionality

---

## Customization

### Updating Portfolio Content

All portfolio data is centralized in `src/data/portfolio-data.ts`:

```typescript
// Update personal information
export const personalInfo = {
  name: "Your Name",
  designation: "Your Designation",
  tagline: "Your tagline...",
  bio: "Your bio...",
  resumeUrl: "/your-cv.pdf",
};

// Update experience, education, skills, projects, etc.
export const experiences: Experience[] = [...];
export const education: Education[] = [...];
export const skillCategories: SkillCategory[] = [...];
export const projects: Project[] = [...];
export const services: Service[] = [...];
export const certificates: Certificate[] = [...];
export const contactInfo: ContactInfo = {...};
```

### Theme Configuration

Theme is managed by `next-themes` in `src/components/theme-provider.tsx`:
- Default theme: `dark`
- Themes available: `light`, `dark`

### Styling

- Global styles: `src/app/globals.css`
- Custom animations: Defined in CSS with `@keyframes`
- Tailwind config: Uses Tailwind CSS 4 with `@tailwindcss/postcss`

---

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Deploy on Other Platforms

```bash
# Build the application
npm run build

# Start production server
npm run start
```

The application can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify

---

## TypeScript Interfaces

The project uses strongly-typed interfaces defined in `src/types/index.ts`:

- `Experience` - Work experience entries
- `Education` - Educational background
- `Project` - Portfolio projects
- `Skill` & `SkillCategory` - Skills organization
- `Certificate` - Certifications
- `Service` - Services offered
- `ContactInfo` & `SocialLink` - Contact information
- `NavItem` - Navigation items

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Performance Features

- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **Font Optimization**: Geist font with next/font for optimal loading
- **Code Splitting**: Automatic code splitting by Next.js
- **CSS Optimization**: Tailwind CSS with PostCSS for minimal CSS output
- **Animation Performance**: Framer Motion with GPU-accelerated animations

---

## SEO Features

- Meta tags for title, description, and keywords
- OpenGraph tags for social media sharing
- Twitter Card support
- Structured metadata in layout
- `robots.txt` for search engine directives

---

## License

This project is private and all rights are reserved. Please contact the author for usage permissions.

---

## Author

**Sharjeel Siddiqui**
- Email: [contact@sharjeelsiddiqui.info](mailto:contact@sharjeelsiddiqui.info)
- GitHub: [github.com/sharjeelsiddiqui](https://github.com/sharjeelsiddiqui)
- LinkedIn: [linkedin.com/in/sharjeelsiddiqui](https://linkedin.com/in/sharjeelsiddiqui)
- Location: Karachi, Pakistan

---

## Acknowledgments

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Aceternity UI](https://ui.aceternity.com/) - UI component inspiration
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
