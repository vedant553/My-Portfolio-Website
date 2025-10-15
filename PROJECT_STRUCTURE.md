# Project Structure

```
Portfolio Website/
├── public/                          # Static assets
├── src/
│   ├── components/
│   │   ├── backgrounds/
│   │   │   └── LiquidEther.tsx     # Animated particle background
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx          # Top navigation bar
│   │   │   └── StaggeredMenu.tsx   # Left-side animated menu
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero section with rotating text
│   │   │   ├── About.tsx           # About me section
│   │   │   ├── Projects.tsx        # Featured projects section
│   │   │   └── Contact.tsx         # Contact form section
│   │   └── ui/
│   │       ├── RotatingText.tsx    # Rotating text animation
│   │       ├── ScrollReveal.tsx    # Scroll-triggered animations
│   │       ├── SpotlightCard.tsx   # Interactive project cards
│   │       ├── ProfileCard.tsx     # Profile card with social links
│   │       └── LogoLoop.tsx        # Infinite scrolling logos
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── tailwind.config.js              # Tailwind CSS config
├── vite.config.ts                  # Vite config
├── README.md                        # Project overview
├── SETUP.md                         # Setup instructions
└── .gitignore                       # Git ignore rules
```

## Component Descriptions

### Backgrounds
- **LiquidEther**: Canvas-based particle animation with connecting lines

### Navigation
- **Navbar**: Fixed top-right navigation with smooth scrolling
- **StaggeredMenu**: Hamburger menu with staggered animation effects

### Sections
- **Hero**: Landing section with name, rotating job titles, and CTAs
- **About**: Two-column layout with bio and profile card
- **Projects**: Grid of spotlight cards showcasing projects
- **Contact**: Contact form with social media links

### UI Components
- **RotatingText**: Cycles through text phrases with animations
- **ScrollReveal**: Wrapper for scroll-triggered fade-in animations
- **SpotlightCard**: Project card with mouse-tracking spotlight effect
- **ProfileCard**: Animated card with profile info and social links
- **LogoLoop**: Infinite horizontal scroll of technology logos

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Key Features

1. **Responsive Design**: Mobile-first approach, works on all devices
2. **Dark Theme**: Modern dark color scheme with vibrant accents
3. **Smooth Animations**: Framer Motion for fluid transitions
4. **Interactive Elements**: Hover effects, spotlight cards, rotating text
5. **Performance**: Optimized with Vite for fast loading
6. **Type Safety**: Full TypeScript support
7. **SEO Ready**: Semantic HTML and meta tags
8. **Accessibility**: ARIA labels and keyboard navigation

## Color Scheme

- **Primary**: `#60a5fa` (Light Blue)
- **Secondary**: `#34d399` (Teal)
- **Accent**: `#a78bfa` (Purple)
- **Background**: `#000000` (Black)
- **Text**: `#ffffff` (White)

## Animation Types

1. **Fade In**: Elements fade in on scroll
2. **Slide In**: Elements slide from sides
3. **Scale**: Elements scale up on hover
4. **Rotate**: Subtle rotation on interaction
5. **Stagger**: Sequential animation of list items
6. **Particle Motion**: Background particles with sine/cosine movement
7. **Spotlight**: Mouse-tracking gradient effect
