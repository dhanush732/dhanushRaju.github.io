# Modern Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and modern animations.

## Features

✨ **Modern Design**
- Clean, minimalist interface with dark/light mode toggle
- Smooth animations and transitions
- Interactive mouse tracking effects
- Responsive design for all devices

🎨 **Advanced Animations**
- React Spring for smooth, physics-based animations
- Custom mouse cursor with trailing effects
- Scroll-triggered animations using Intersection Observer
- Floating background elements and particles

🛠️ **Technologies Used**
- React 18 with hooks
- Tailwind CSS for styling
- React Spring for animations
- Lucide React for icons
- Vite for fast development

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── MouseTracker.jsx      # Custom mouse cursor and tracking
│   ├── AnimatedSection.jsx   # Reusable animated section wrapper
│   ├── SkillCard.jsx         # Animated skill cards
│   ├── ProjectCard.jsx       # Animated project cards
│   ├── BackgroundEffects.jsx # Floating background elements
│   └── LoadingScreen.jsx     # Loading screen component
├── Portfolio.jsx             # Main portfolio component
├── main.jsx                  # Entry point
└── index.css                 # Global styles and animations
```

## Key Features

### 🎯 Interactive Elements
- Custom mouse cursor with smooth tracking
- Hover effects on interactive elements
- Smooth scroll animations
- Dark/light mode toggle

### 🎨 Visual Effects
- Gradient backgrounds
- Particle effects
- Floating geometric shapes
- Glass morphism effects

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

## Customization

### Colors
The portfolio uses a purple-cyan gradient theme. You can customize colors in:
- `tailwind.config.js` - For theme colors
- `index.css` - For custom animations and effects

### Content
Update your personal information in `Portfolio.jsx`:
- Skills array
- Projects array
- Experience array
- Contact information

### Animations
Customize animations in `index.css` or modify the React Spring configurations in components.

## Performance Optimizations

- Lazy loading for images
- Optimized animations with `will-change` properties
- Efficient re-renders with React hooks
- Minimal bundle size with tree shaking

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT License - feel free to use this portfolio template for your own projects!
