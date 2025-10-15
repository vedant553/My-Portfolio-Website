# 🚀 Quick Start Guide

## Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:5173**

---

## What You'll See

Your portfolio website with:

✨ **Animated Background** - Liquid ether particle effect
🎯 **Hero Section** - Your name with rotating job titles
📱 **Responsive Navigation** - Hamburger menu + top nav
👤 **About Section** - Bio with profile card and tech logos
💼 **Projects Section** - Interactive spotlight cards
📧 **Contact Form** - Functional contact form with social links

---

## Next Steps

### 1. Customize Your Content

**Update Personal Info:**
- Open `src/components/sections/Hero.tsx` - Update name and titles
- Open `src/components/sections/About.tsx` - Update bio and skills
- Open `src/components/ui/ProfileCard.tsx` - Update social links

**Add Your Projects:**
- Open `src/components/sections/Projects.tsx`
- Replace the sample projects with your actual work
- Update titles, descriptions, tags, images, and links

**Update Contact Info:**
- Open `src/components/sections/Contact.tsx`
- Update email and social media links

### 2. Customize Design

**Change Colors:**
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#60a5fa',    // Your primary color
  secondary: '#34d399',  // Your secondary color
  accent: '#a78bfa',     // Your accent color
}
```

**Add Your Photo:**
Replace the placeholder in `ProfileCard.tsx` with your image

### 3. Deploy Your Site

**Option A: Vercel (Recommended)**
1. Push to GitHub
2. Import to Vercel
3. Auto-deploy! ✨

**Option B: Netlify**
1. Run `npm run build`
2. Drag `dist` folder to Netlify

**Option C: GitHub Pages**
1. Install: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

---

## Features Included

### Animations
- ✅ Liquid Ether background
- ✅ Rotating text
- ✅ Scroll reveal
- ✅ Spotlight cards
- ✅ Staggered menu
- ✅ Logo loop
- ✅ Hover effects

### Sections
- ✅ Hero with CTA buttons
- ✅ About with profile card
- ✅ Featured projects
- ✅ Contact form
- ✅ Social media links

### Technical
- ✅ React 18 + TypeScript
- ✅ Tailwind CSS
- ✅ Framer Motion
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ Fast performance

---

## Troubleshooting

**Port already in use?**
- Vite will use the next available port automatically

**Dependencies not installing?**
- Make sure you have Node.js 16+ installed
- Try: `npm cache clean --force` then `npm install`

**Build errors?**
- Check that all files are saved
- Restart the dev server: Stop with Ctrl+C, then `npm run dev`

---

## Need Help?

Check the detailed guides:
- `README.md` - Project overview
- `SETUP.md` - Detailed setup instructions
- `PROJECT_STRUCTURE.md` - File structure and components

---

**Happy building! 🎉**

Your portfolio is ready to impress!
