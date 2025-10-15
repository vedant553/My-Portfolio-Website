# Portfolio Website Setup Guide

## Quick Start

Follow these steps to get your portfolio website up and running:

### 1. Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (for icons)
- Vite (build tool)

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Update Personal Information

1. **Name and Title**: Edit `src/components/sections/Hero.tsx`
   - Update the main heading and rotating text phrases

2. **About Section**: Edit `src/components/sections/About.tsx`
   - Update the description paragraphs
   - Modify the technologies list with your skills

3. **Projects**: Edit `src/components/sections/Projects.tsx`
   - Replace project data with your actual projects
   - Update titles, descriptions, tags, and images
   - Add your project links

4. **Contact Information**: Edit `src/components/sections/Contact.tsx`
   - Update social media links (GitHub, LinkedIn)
   - Update email address

5. **Profile Card**: Edit `src/components/ui/ProfileCard.tsx`
   - Replace the initials "VN" with your own or add a profile image
   - Update social links

### Add Your Profile Picture

Replace the placeholder in `src/components/ui/ProfileCard.tsx`:

```tsx
// Replace this:
<div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold text-white">
  VN
</div>

// With this:
<img src="/path-to-your-image.jpg" alt="Your Name" className="w-full h-full rounded-full object-cover" />
```

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: '#60a5fa',    // Light blue
  secondary: '#34d399',  // Teal
  accent: '#a78bfa',     // Purple
}
```

### Add More Projects

In `src/components/sections/Projects.tsx`, add more objects to the `projects` array:

```tsx
{
  title: 'Your Project Name',
  description: 'Project description',
  tags: ['Tech1', 'Tech2', 'Tech3'],
  image: 'https://your-image-url.com',
  link: 'https://your-project-link.com',
}
```

## Features Implemented

✅ **Liquid Ether Background** - Animated particle background
✅ **Staggered Menu** - Left-side animated navigation menu
✅ **Rotating Text** - Dynamic text rotation in hero section
✅ **Scroll Reveal** - Elements animate on scroll
✅ **Spotlight Cards** - Interactive project cards with hover effects
✅ **Profile Card** - Animated profile card with social links
✅ **Logo Loop** - Infinite scrolling technology logos
✅ **Contact Form** - Functional contact form
✅ **Fully Responsive** - Optimized for all screen sizes
✅ **Dark Theme** - Modern dark color scheme
✅ **Smooth Animations** - Framer Motion powered animations

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Troubleshooting

### Port Already in Use

If port 5173 is busy, Vite will automatically use the next available port.

### Module Not Found Errors

Run `npm install` again to ensure all dependencies are installed.

### Build Errors

Make sure you're using Node.js version 16 or higher:
```bash
node --version
```

## Support

For issues or questions:
- Check the [Vite documentation](https://vitejs.dev)
- Check the [React documentation](https://react.dev)
- Check the [Framer Motion documentation](https://www.framer.com/motion)

---

**Happy coding! 🚀**
