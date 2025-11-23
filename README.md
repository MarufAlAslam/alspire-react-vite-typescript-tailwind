# Alspire - Modern React App

A fully responsive React application built with modern web technologies.

## 🚀 Tech Stack

- **Vite** - Lightning-fast build tool
- **React 18** - Latest React with TypeScript
- **Tailwind CSS v4** - Utility-first CSS framework (latest beta)
- **shadcn/ui** - High-quality component library
- **Framer Motion** - Production-ready animations
- **Lucide React** - Beautiful icon library

## ✨ Features

- ⚡ Lightning-fast development with Vite
- 🎨 Beautiful UI with shadcn/ui components
- 🌈 Tailwind CSS v4 with custom design tokens
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 TypeScript for type safety
- 🎪 Modern component architecture

## 🛠️ Setup

### Prerequisites

- Node.js 20.19+ or 22.12+ (current: check with \`node -v\`)
- npm or yarn

### Installation

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Hero.tsx         # Hero section with animations
│   ├── Showcase.tsx     # Features showcase
│   └── Footer.tsx       # Footer component
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component
├── index.css            # Tailwind CSS imports
└── main.tsx             # App entry point
\`\`\`

## 🎨 Customization

### Colors

The app uses CSS variables for theming. Edit \`src/index.css\` to customize:

- \`--primary\` - Primary brand color
- \`--secondary\` - Secondary color
- \`--background\` - Background color
- \`--foreground\` - Text color

### Components

All UI components are located in \`src/components/ui/\`. You can add more shadcn/ui components or create your own.

### Animations

Framer Motion animations are configured in each component. Adjust the \`initial\`, \`animate\`, and \`transition\` props to customize.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

Build the project for production:

\`\`\`bash
npm run build
\`\`\`

The build output will be in the \`dist/\` directory, ready to deploy to any static hosting service.

## 🌐 Development Server

The dev server is running at: http://localhost:5173/

Open the URL in your browser to see the application.

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.
# alspire-react-vite-typescript-tailwind
