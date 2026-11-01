# Vignesh S. — AI Designer Portfolio

A premium, modern AI Designer portfolio website built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:5173/
```

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18+ | UI Framework |
| Vite | 8+ | Build Tool |
| TypeScript | 7+ | Type Safety |
| Tailwind CSS | 4+ | Styling |
| Framer Motion | 14+ | Animations |
| Lucide React | 1.66+ | Icons |

---

## 📁 Project Structure

```
SILAI/
├── public/
│   ├── assets/              ← Portfolio project images
│   │   ├── project_aura.png
│   │   ├── project_volterra_ev.png
│   │   ├── project_terraleaf.png
│   │   ├── project_fashion.png
│   │   ├── project_neuraforge.png
│   │   ├── project_vetrio.png
│   │   ├── project_ai_after.png
│   │   ├── project_zest.png
│   │   └── hero_visual.png
│   ├── resume.pdf           ← ADD YOUR RESUME HERE
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       ← Floating responsive navbar
│   │   ├── Hero.tsx         ← Hero section
│   │   ├── About.tsx        ← About + skills
│   │   ├── Portfolio.tsx    ← Project gallery + modals
│   │   ├── Tools.tsx        ← AI/Design/Technical tools
│   │   ├── Process.tsx      ← 4-step creative process
│   │   ├── Contact.tsx      ← Contact section
│   │   └── Footer.tsx       ← Footer
│   ├── data/
│   │   └── portfolioData.ts ← ALL project content lives here
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css            ← Design system CSS
├── index.html
├── vite.config.ts
└── tsconfig.json
```

---

## ✏️ How to Personalize

### 1. Add Your Contact Information

Open **`src/components/Contact.tsx`** and replace the placeholders:

```tsx
const PLACEHOLDER_EMAIL = 'your.email@gmail.com';       // ← Your actual email
const PLACEHOLDER_LINKEDIN = 'https://linkedin.com/in/your-profile';  // ← Your LinkedIn
const PLACEHOLDER_GITHUB = 'https://github.com/your-username';        // ← Your GitHub
```

Also update the `mailto:` link and `href` buttons below in the same file.

### 2. Add Your Resume

Copy your resume PDF to:
```
public/resume.pdf
```

The "Download Resume" button in the Contact section will automatically link to it.

### 3. Replace Portfolio Images

Replace images in `public/assets/` with your actual project visuals:

| File | Project |
|---|---|
| `project_aura.png` | AURA Fragrance |
| `project_volterra_ev.png` | Volterra EV |
| `project_terraleaf.png` | TerrLeaf Skincare |
| `project_fashion.png` | AI Fashion Editorial |
| `project_neuraforge.png` | NeuraForge AI |
| `project_vetrio.png` | VETRIO GLOBAL |
| `project_ai_after.png` | AI Transformation |
| `project_zest.png` | ZEST Beverage |
| `hero_visual.png` | Hero Section Visual |

**Recommended image size:** 1200×750px or larger (16:10 aspect ratio)

### 4. Edit Project Details

All project content is in **`src/data/portfolioData.ts`**.

Each project has:
- `title`, `subtitle`, `category`
- `description` — short card description  
- `overview` — detailed modal overview
- `objective` — creative objective
- `visualDirection` — visual style direction
- `prompt` — the AI prompt used
- `tools` — tools used
- `process` — step-by-step process
- `image` — path to the project image

To **add a new project**, copy one of the existing project objects and append it to the `projects` array.

### 5. Update Your Name & Footer

Search for `Vignesh S.` across all component files and update if needed.
Update `Footer.tsx` with your actual social links.

---

## 📱 Responsive Design

The site is fully responsive:
- **Desktop:** Two-column hero, 3-column about cards, auto-fill project grid
- **Tablet:** Stacked hero, 2-column process steps
- **Mobile:** Single column, hamburger menu, scrollable filter tabs

---

## 🌐 Deployment (Free)

### Option A — Netlify (Recommended, Easiest)

1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com) → New site → Deploy manually
3. Drag and drop the `dist/` folder
4. Done! Your site gets a free `.netlify.app` URL

### Option B — Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Connect your GitHub repo → Deploy
4. Done! Free `.vercel.app` URL with automatic deploys on every push

### Option C — GitHub Pages

1. Install the gh-pages package: `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Build: `npm run build`
4. Deploy: `npm run deploy`

---

## 🏗 Build for Production

```bash
npm run build
```

Output is in the `dist/` folder. Ready to deploy anywhere.

---

## 🔧 Customization Tips

- **Colors:** All design tokens are in `src/index.css` under `:root {}`
- **Fonts:** Uses Inter + Outfit from Google Fonts (loaded in `index.html`)
- **Animations:** Powered by Framer Motion — adjust `duration` and `delay` props
- **Filter Categories:** Edit the filter array in `Portfolio.tsx`

---

## 📞 Contact

**Vignesh S.**  
AI Designer | AI/ML Engineer | Creative Visual Content Creator  
Chennai, Tamil Nadu, India  
B.Tech Artificial Intelligence & Data Science, 2026 — 93%

---

*Built for SILAII Job Application — Chennai, 2026*
