# Atelier - Visual Artist Portfolio

A modern, responsive portfolio website for visual artists built with React and cutting-edge web technologies.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Built with Framer Motion for fluid interactions
- **Modern UI**: Clean, minimalist design with shadcn/ui components
- **Image Optimization**: Smart loading and caching for gallery images
- **Horizontal Scroll Gallery**: Unique scrolling experience for showcasing artwork
- **Performance Optimized**: Fast loading with Vite and optimized assets

## Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Framer Motion** - Advanced animations and transitions
- **Tailwind CSS** - Utility-first styling framework
- **shadcn/ui** - High-quality accessible UI components
- **GSAP** - Professional-grade animations
- **Lenis** - Smooth scrolling library

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd visual-canvas-curate
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── HorizontalScrollGrid.jsx  # Gallery component
│   └── ...
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── assets/             # Static assets and images
└── lib/                # Utility functions
```

## Customization

### Adding New Gallery Items

Edit the `galleryItems` array in `src/components/HorizontalScrollGrid.jsx`:

```javascript
const galleryItems = [
  {
    id: 1,
    title: "Your Artwork Title",
    category: "Category",
    date: "Month Year",
    image: yourImage,
    span: 1, // 1 or 2 for grid layout
    description: "Description of your artwork"
  },
  // ... more items
];
```

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js` and global styles in `src/index.css`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request