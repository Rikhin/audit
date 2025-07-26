/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for the AI Traceability theme
        charcoal: {
          DEFAULT: "#0E0E10",
          50: "#1a1a1c",
          100: "#2a2a2c",
          200: "#3a3a3c",
          300: "#4a4a4c",
          400: "#5a5a5c",
          500: "#6a6a6c",
          600: "#7a7a7c",
          700: "#8a8a8c",
          800: "#9a9a9c",
          900: "#0E0E10",
        },
        electric: {
          DEFAULT: "#00E5FF",
          50: "#E6FFFF",
          100: "#CCFFFF",
          200: "#99FFFF",
          300: "#66FFFF",
          400: "#33FFFF",
          500: "#00E5FF",
          600: "#00B8CC",
          700: "#008A99",
          800: "#005C66",
          900: "#002E33",
        },
        graphite: {
          DEFAULT: "#2A2A2A",
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333",
          900: "#2A2A2A",
        },
        'neon-green': {
          DEFAULT: '#39FF14',
          50: '#E9FFF0',
          100: '#D3FFDF',
          200: '#A7FFBF',
          300: '#7BFF9F',
          400: '#4FFF7F',
          500: '#39FF14',
          600: '#2ECC0F',
          700: '#22990B',
          800: '#186607',
          900: '#0E3304'
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 229, 255, 0.6)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(0, 229, 255, 0.8)",
            transform: "scale(1.05)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "glow-green": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(57, 255, 20, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(57, 255, 20, 0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glitch": "glitch 0.3s ease-in-out infinite",
        "glow-green": "glow-green 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("./tailwindcss-animate")],
} 