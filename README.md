# 🧡 BrandBuzz: Digital Marketing Agency Landing Page

A fully responsive, interactive landing page for a fictional digital marketing agency, built with **React** and **Vite**. I made this to practice turning a UI design into clean, working code, with a focus on layout, interactivity and small details like hover states and animations.



🔗 

---

## 📌 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Design Notes](#-design-notes)
- [What I Learned](#-what-i-learned)
- [Future Improvements](#-future-improvements)
- [Credits](#-credits)
- [Contact](#-contact)

---

## ✨ Features

**Sections**
- Hero with a headline, call-to-action and "Explore more" scroll cue
- Services grid (SEO/SEM, Marketing, Viral Campaign, Others)
- "Simple Solutions" section with a four-step process
- "Our Agency" section
- Client testimonials carousel
- Footer with a call-to-action banner, link columns and social icons

**Interactivity**
- Sticky navbar with smooth scrolling
- Active nav link highlighting as you scroll
- Mobile hamburger menu
- Modal forms for **Sign Up**, **Get Started** and **Contact Us**
  - Closes with the `Esc` key or by clicking outside
  - Shows a thank-you message after submitting
- Interactive steps that highlight on hover or click
- Testimonials carousel
  - Auto-plays every 5 seconds
  - Pauses on hover
  - Has previous and next arrows
  - Shows one card at a time on mobile
- Scroll-reveal animations using the Intersection Observer API
- Floating illustrations and hover lift effects on cards and buttons

**Quality**
- Responsive layout for desktop, tablet and mobile
- Accessible basics: focus outlines, `aria-label`s and a `prefers-reduced-motion` fallback
- Optimized WebP images

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI components and state |
| [Vite](https://vitejs.dev/) | Dev server and build tool |
| [Lucide React](https://lucide.dev/) | Icons |
| CSS3 (Grid, Flexbox, variables) | Styling and animations |
| [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | Typography |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Syeda-Fiza-Gilani/BrandBuzz-Digital-Marketing-Agency-Landing-Page.git

# 2. Move into the project folder
cd brandbuzz

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173`).

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Previews the production build locally |

---

## 📁 Project Structure

```
brandbuzz/
├── public/
│   └── images/
│       ├── hero.webp          # Hero illustration
│       ├── solutions.webp     # "Simple Solutions" illustration
│       └── agency.webp        # "Our Agency" illustration
├── src/
│   ├── App.jsx                # All sections, hooks and the modal
│   ├── index.css              # Styles, design tokens and animations
│   └── main.jsx               # App entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🧠 How It Works

- **Data-driven sections:** services, steps, testimonials and footer links are stored in arrays and rendered with `.map()`, so content is easy to change.
- **Scroll reveal:** a custom `useReveal` hook uses `IntersectionObserver` to add an `in` class to elements as they enter the viewport.
- **Active nav link:** a scroll listener checks which section is closest to the top and updates the highlighted link. The listener is removed when the component unmounts.
- **Testimonials carousel:** a single index in state decides which three reviews are shown, wrapping around at the end. A `setInterval` handles auto-play and is cleared on hover and on cleanup.
- **Modal:** one reusable `Modal` component takes a title, so the three buttons share the same form.

---

## 🎨 Design Notes

| Token | Value |
|---|---|
| Primary orange | `#ea5b14` |
| Peach background | `#fdece3` |
| Text | `#1c1c1c` |
| Muted text | `#6f6f6f` |

Colors are defined as CSS variables in `src/index.css`, so the theme is easy to change in one place.

---

## 📚 What I Learned

- Breaking a full page design into reusable React pieces and data arrays
- Managing UI state with `useState` and side effects with `useEffect`
- Cleaning up event listeners and intervals to avoid memory leaks
- Writing a custom hook (`useReveal`)
- Building responsive layouts with CSS Grid and Flexbox
- Using the Intersection Observer API for scroll animations
- Basic accessibility: focus states, labels and reduced-motion support
- Optimizing images with WebP for faster loading

---

## 🔮 Future Improvements

- [ ] Connect the contact form to a backend or an email service
- [ ] Add real client photos to the testimonials
- [ ] Build separate Blog and About pages with React Router
- [ ] Add a dark mode toggle
- [ ] Add form validation messages and loading states
- [ ] Add unit tests with Vitest and React Testing Library

---

## 🙏 Credits

- UI design inspiration: *Digital Marketing Agency landing page design* by **Nabeel Ahmad**
- Icons: [Lucide](https://lucide.dev/)
- Fonts: [Google Fonts](https://fonts.google.com/)

> This is a practice project for learning. BrandBuzz is a fictional company, and all content is placeholder text.

---

## 📬 Contact

Built by a Computer Science student who loves learning in public. Feedback and suggestions are welcome!

- [Github](https://github.com/Syeda-Fiza-Gilani)
- [LinkedIn](https://linkedin.com/in/www.linkedin.com/in/syeda-fiza-gilani-9081aa41b)

⭐ If you found this project helpful, consider giving it a star!
