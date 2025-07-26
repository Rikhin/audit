# AI Traceability Tool Landing Page

A modern, futuristic landing page for an AI traceability tool built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Futuristic Design**: Deep charcoal background with electric cyan accents
- **Smooth Animations**: Scroll-driven parallax and fade-in animations
- **Responsive Layout**: Mobile-first design with responsive breakpoints
- **Interactive Elements**: Hover effects, glowing buttons, and animated components
- **Modern Typography**: IBM Plex Sans and Inter fonts
- **Custom Animations**: Glitch effects, floating elements, and pulse animations

## 🎨 Design System

- **Colors**: Deep charcoal (#0E0E10), Electric cyan (#00E5FF), Graphite gray (#2A2A2A)
- **Typography**: IBM Plex Sans (primary), Inter (secondary)
- **Animations**: Framer Motion for scroll-based animations
- **Icons**: Lucide React for consistent iconography

## 📱 Sections

1. **Hero Section**: Animated headline with floating tooltips
2. **Scroll Narrative**: 5 interactive sections showing the AI traceability process
3. **Feature Grid**: 4 key features with hover animations
4. **Use Case Deep Dive**: Interactive tabs for different industries
5. **Trust Section**: Compliance logos and testimonials
6. **Call to Action**: Glowing CTA buttons
7. **Footer**: Clean, minimal footer with links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: IBM Plex Sans, Inter

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd audit-1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
audit-1/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── lib/
│   └── utils.ts             # Utility functions
├── tailwindcss-animate/     # Custom Tailwind animations
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md               # Project documentation
```

## 🎯 Key Components

- **HeroSection**: Animated hero with parallax effects
- **ScrollNarrative**: Interactive story sections
- **FeatureGrid**: Hover-animated feature cards
- **UseCaseDeepDive**: Tabbed interface for use cases
- **TrustSection**: Compliance and testimonials
- **CallToAction**: Glowing CTA buttons
- **Footer**: Clean footer with navigation

## 🎨 Custom Animations

- `animate-glow`: Electric cyan glow effect
- `animate-pulse-glow`: Pulsing glow animation
- `animate-float`: Floating animation
- `animate-glitch`: Glitch effect for error states
- `animate-fade-in`: Smooth fade-in animation

## 🔧 Customization

### Colors
The color scheme can be modified in `tailwind.config.js`:
- `charcoal`: Deep background colors
- `electric`: Cyan accent colors
- `graphite`: Gray neutral colors

### Animations
Custom animations are defined in `tailwind.config.js` and `tailwindcss-animate/index.js`.

### Content
All content is in `app/page.tsx` and can be easily modified.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚀 Performance

- Optimized images and animations
- Lazy loading for better performance
- Minimal bundle size
- SEO optimized

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS