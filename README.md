# AIspare - Modern React App

A fully responsive React application built with modern web technologies.

## 🚀 Tech Stack

- **Vite** - Lightning-fast build tool
- **React 18** - Latest React with TypeScript
- **Tailwind CSS v4** - Utility-first CSS framework (latest beta)
<!--
 	AIspare — polished README
	Purpose: present the project clearly to collaborators and reviewers,
	provide fast setup steps, and highlight important dev notes.
-->

# AIspare — AI Landing (Vite + React + TypeScript)

AIspare is a modern, responsive landing page prototype for an AI product. It showcases a clean component structure, motion-rich interactions, and mobile-first design.

Why this repo
---------------

- Fast dev experience with Vite
- Type-safe components with TypeScript
- Tailwind CSS for rapid styling and consistent design tokens
- Framer Motion for smooth, production-ready animations

Key features
------------

- Hero with dynamic marquee and local font support
- Features, How it Works, Pricing, CTA, FAQ, Testimonials, Footer
- Responsive breakpoints: mobile, tablet, and desktop (custom `xl` at 1200px)
- Image cards use `object-cover` to maintain visual balance across sizes

Quick start
-----------

Prerequisites

- Node.js (v16+ recommended)
- npm (or pnpm)

Install and run

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Project layout
--------------

```
src/
├── assets/            # images, svgs, fonts (local font at src/fonts)
├── components/        # React components (Hero, Features, CTA, Footer, etc.)
├── lib/               # helpers and utilities
├── index.css          # Tailwind + global styles + @font-face
└── main.tsx           # Vite entry
```

Styling & fonts
---------------

- Global styles live in `src/index.css`. The local font `BrittiSansTrial-Bold.otf` is registered via `@font-face` and a utility `.font-britti` is provided.
- Tailwind config: `tailwind.config.js` — add custom fonts to `theme.extend.fontFamily` if you want `font-britti` as a Tailwind utility.

Important development notes
---------------------------

- If images don't appear during development, check filenames (case-sensitive) and restart the dev server.
- The CTA slider has separate behaviors for mobile (horizontal) and desktop (vertical); duplicated image arrays enable seamless loops.
- Use `object-cover` on image elements to ensure images always fill card height and crop appropriately.

Accessibility & performance
---------------------------

- Consider `prefers-reduced-motion` for users who prefer less animation.
- Optimize images for web (WebP where possible) to improve load times.

Contributing
------------

Contributions are welcome. For UI tweaks or fixes:

1. Fork or branch from `main`.
2. Implement and test changes across breakpoints.
3. Open a PR with a clear description.

Need help?
-----------

If you want I can:

- Add deployment instructions for Vercel/Netlify
- Add Tailwind font-family config so `font-britti` is available via Tailwind utilities
- Generate social favicons and meta tags for improved sharing

License
-------

This repository is provided for demo and development purposes. Add a license that suits your project before publishing.

---

Happy building! 🚀
