# Jaminan BPKB - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| State Management | React hooks (useState, useEffect) |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          dark: '#152a45',
          light: '#2a4a73',
        },
        secondary: {
          DEFAULT: '#f5a623',
          light: '#ffc94d',
          dark: '#e09420',
        },
        background: {
          DEFAULT: '#ffffff',
          alt: '#f8f9fa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)

| Component | Usage | Style Overrides |
|-----------|-------|-----------------|
| Button | CTAs, actions | Custom colors, rounded-lg |
| Accordion | FAQ section | Custom border styling |
| Sheet | Mobile nav drawer | Dark background |
| Card | Service cards | Custom shadows |

### Custom Components

| Component | Props Interface | Description |
|-----------|-----------------|-------------|
| `Navbar` | `{ scrolled: boolean }` | Fixed nav with scroll effect |
| `HeroSection` | `{}` | Hero with background, content, card |
| `AboutSection` | `{}` | Two-column about with image |
| `ServicesSection` | `{}` | Service cards grid |
| `ProcessSection` | `{}` | 4-step process with connection |
| `WhyUsSection` | `{}` | Features grid with glassmorphism |
| `TestimonialsSection` | `{}` | Carousel with avatars |
| `FAQSection` | `{}` | Accordion FAQ |
| `CTASection` | `{}` | Final call-to-action |
| `Footer` | `{}` | Multi-column footer |
| `SectionBadge` | `{ text: string }` | Reusable section badge |
| `StatCard` | `{ value: string, label: string, icon?: ReactNode }` | Animated stat display |
| `ServiceCard` | `{ icon, title, description, features, cta }` | Service item card |
| `ProcessCard` | `{ number, title, description, icon }` | Process step card |
| `FeatureCard` | `{ icon, title, description }` | Glassmorphism feature |
| `TestimonialCard` | `{ name, role, quote, avatar, rating }` | Testimonial item |

### Animation Components

| Component | Purpose |
|-----------|---------|
| `FadeIn` | Wrapper for fade-in animation |
| `SlideUp` | Wrapper for slide-up animation |
| `StaggerContainer` | Parent for staggered children |
| `CounterAnimation` | Animated number counter |

## 4. Animation Implementation Plan

| Interaction Name | Tech Choice | Implementation Logic |
|------------------|-------------|---------------------|
| Navbar Scroll Effect | React State + CSS | `useScroll` hook toggles `scrolled` state at 50px, applies `bg-primary` class |
| Hero Text Reveal | Framer Motion | `staggerChildren: 0.1` on container, `y: 30 -> 0, opacity: 0 -> 1` on items |
| Hero Card Slide | Framer Motion | `x: 50 -> 0, opacity: 0 -> 1`, delay: 0.4s |
| Stats Counter | Custom Hook | `useCountUp(target, duration)` with requestAnimationFrame |
| Section Fade In | Framer Motion | `whileInView` with `y: 30 -> 0, opacity: 0 -> 1` |
| Card Hover Lift | Tailwind | `hover:-translate-y-1 hover:shadow-xl transition-all duration-300` |
| Button Hover | Tailwind | `hover:scale-[1.02] hover:brightness-110 transition-all duration-200` |
| Accordion Expand | Framer Motion | `AnimatePresence` with height animation |
| Testimonial Carousel | React State | Auto-advance with `setInterval`, manual nav with buttons/dots |
| Process Line Draw | CSS Animation | `stroke-dashoffset` animation on SVG line |
| Link Underline | CSS | `after:` pseudo-element width animation |

### Animation Timing Reference

```typescript
const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.6,
    slow: 0.8,
  },
  ease: {
    smooth: [0.4, 0, 0.2, 1],
    bounce: [0.16, 1, 0.3, 1],
  },
  stagger: 0.1,
};
```

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── about-img.jpg
│   │   ├── office-bg.jpg
│   │   ├── avatar-1.jpg
│   │   ├── avatar-2.jpg
│   │   └── avatar-3.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── sheet.tsx
│   │   ├── animations/
│   │   │   ├── FadeIn.tsx
│   │   │   ├── SlideUp.tsx
│   │   │   ├── StaggerContainer.tsx
│   │   │   └── CounterAnimation.tsx
│   │   ├── SectionBadge.tsx
│   │   ├── StatCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProcessCard.tsx
│   │   ├── FeatureCard.tsx
│   │   └── TestimonialCard.tsx
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useScroll.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 6. Package Installation List

```bash
# Initialize project (already done via script)
# bash scripts/init-webapp.sh "Jaminan BPKB"

# Install animation library
npm install framer-motion

# Install additional utilities
npm install clsx tailwind-merge

# Copy assets to public folder
cp /mnt/okcomputer/output/assets/asset_1.jpg public/images/hero-bg.jpg
cp /mnt/okcomputer/output/assets/asset_2.jpg public/images/about-img.jpg
cp /mnt/okcomputer/output/assets/office_bg.jpg public/images/office-bg.jpg
cp /mnt/okcomputer/output/assets/avatar_1.jpg public/images/avatar-1.jpg
cp /mnt/okcomputer/output/assets/avatar_2.jpg public/images/avatar-2.jpg
cp /mnt/okcomputer/output/assets/avatar_3.jpg public/images/avatar-3.jpg
```

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger nav, stacked cards |
| Tablet | 640-1024px | 2-column grids, condensed spacing |
| Desktop | > 1024px | Full layout, all columns visible |

## 8. Performance Considerations

- Use `will-change: transform` on animated elements
- Lazy load images below the fold
- Use `transform` and `opacity` for animations (GPU accelerated)
- Implement `prefers-reduced-motion` media query
- Optimize images before deployment

## 9. Accessibility Requirements

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast ratio > 4.5:1
- Skip to main content link
