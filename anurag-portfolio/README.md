# Anurag Kumar — Portfolio

A modern, professional portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# 1. Navigate into the folder
cd anurag-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
anurag-portfolio/
├── public/
│   └── resume.pdf          ← Add your resume here!
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ✏️ Customization

- **Personal info**: Update `src/components/Hero.jsx`, `About.jsx`
- **Projects**: Edit the `projects` array in `src/components/Projects.jsx`
- **Skills**: Edit the `skillGroups` array in `src/components/Skills.jsx`
- **Resume**: Place `resume.pdf` in the `public/` folder

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to `dist/` folder.

---

## 🌐 Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy** 🎉

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Bundler | Vite |
| Styling | Tailwind CSS v3 |
| Animations | CSS + (optional Framer Motion) |
| Icons | Lucide React |
| Fonts | Syne, JetBrains Mono, DM Sans |

---

## 📬 Contact

**Anurag Kumar** · [anuragkumar24092003@gmail.com](mailto:anuragkumar24092003@gmail.com)
