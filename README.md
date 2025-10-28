# My Professional Dev Portfolio

Landing built with React + Vite + Tailwind CSS.

Author: Robert Alessandro Strapasson

Contact: robertstrapasson@gmail.com

Links:
- GitHub: https://github.com/alessandrostrapa-ops
- LinkedIn: https://www.linkedin.com/in/robert-strapasson-936747311/

This is a lightweight portfolio scaffold intended to be customized with your projects and contact details. It includes:

- Tailwind CSS (configured with PostCSS)
- React + Vite dev environment
- Simple component structure: Header, Hero, About, Skills, Projects, Contact

Quick start

1. Install dependencies

```cmd
npm install
```

2. Run development server

```cmd
npm run dev
```

3. Build for production

```cmd
npm run build
```

Deployment

- Vercel: Connect this repository to Vercel (it detects Vite automatically). Set the build command to `npm run build` and the output directory to `dist`.
- GitHub Pages: Build locally (`npm run build`) and push the `dist` contents to the `gh-pages` branch (or use an action like peaceiris/actions-gh-pages).

Suggested extra links to include in the header or contact section:
- Resume (PDF)
- Upwork profile (if applicable)
- Personal domain (yourname.dev or similar)
- Twitter / X (optional)

How to customize

- Replace name/email/links in `src/components/*` (Header, Contact, Footer).
- Replace project placeholders in `src/components/Projects.jsx` with real repo/demo links.
- Add your avatar image in `src/components/Hero.jsx` (replace the placeholder 'YOU').

If you'd like, I can:

- Replace placeholders with your real content (I've already updated name/email/links)
- Add react-icons (done) and map icons to skills
- Prepare a deployment-ready README and Vercel/GitHub Pages instructions (done here)

Next steps

- Add real project repos to `Projects.jsx` or create a `src/data/projects.js` file and map it into the component.
- Polish copy and accessibility checks.
- Add analytics / contact form (optional).

What's included now

- Gradient background and global transitions
- Project cards with hover scale + shadow
- Dark mode support (class-based) and a header toggle
- Typewriter effect in hero and framer-motion animations
- Reusable components: `ProjectCard`, `SkillIcon`
- Functional contact form using formsubmit.co
- Favicon and basic Open Graph meta tags

Suggested next actions before publishing

1. Replace project placeholders in `src/components/Projects.jsx` with direct repo/demo links.
2. Add an avatar image to `public/` or `src/assets/` and update `Hero.jsx`.
3. Add a resume PDF to `public/` and link from header.
4. Review privacy settings for contact form provider (formsubmit.co) or connect your own email backend if you prefer.

Deploy

Vercel (recommended):
- Push this repo to GitHub.
- Create a new Vercel project, connect the GitHub repo.
- Vercel will auto-detect Vite + build with `npm run build`. No extra config usually required.

GitHub Pages (alternative):
- Use an action like `peaceiris/actions-gh-pages` to publish the `dist` folder to the `gh-pages` branch.

