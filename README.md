# Dev_Terminal_v4.0

A modern, terminal-inspired developer portfolio designed for a Fullstack Engineer specializing in distributed architectures & high-performance UI.

## Overview

This project is a personal portfolio website characterized by a dark, retro terminal aesthetic (`bg-bg-dark`), complete with grid patterns, scanlines, and noise overlays. It delivers a highly interactive and cinematic user experience using Framer Motion (`motion/react`) for smooth page transitions and micro-interactions.

### Key Content Sections
- **Home:** Interactive hero section with a dynamic status indicator.
- **Projects:** Showcases live shipments and technical projects.
- **Experience:** Details professional history (4+ Years experience).
- **About:** Personal details and tech stack overview.

## Tech Stack

- **Framework:** [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion (Framer Motion)](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript
- **Typography:** Instrument Serif, Space Grotesk, Space Mono (Google Fonts)

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository and navigate into the project directory.
2. Install the dependencies:

   ```bash
   npm install
   ```

### Running Locally

To start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000` (or `http://0.0.0.0:3000` as configured in `package.json`).

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Features

- **Thematic UI:** Custom glitch effects, terminal cursors, and raw monochrome aesthetic elements.
- **Fluid Navigation:** Uninterrupted single-page experience via `AnimatePresence`.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports.
- **Modular Architecture:** Clean component structure (`Hero.tsx`, `Projects.tsx`, etc.) for easy updates and maintenance.

## License

This project is for personal use as a portfolio.
