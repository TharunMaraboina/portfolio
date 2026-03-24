# Portfolio Deployment Guide 🚀

The easiest and most professional way to host your modern Vite/React portfolio for free is using **Vercel** or **Netlify**. 

Since this project leverages high-performance frontend graphics (React Three Fiber, Framer Motion), Vercel's global CDN is highly recommended for the fastest loading speeds.

---

## Method 1: Vercel (Highly Recommended 🔥)

Vercel is the creator of Next.js and has world-class support for React/Vite applications. It updates your live website automatically every time you push code to GitHub.

### Step 1: Push your code to GitHub
1. Open a terminal in `c:\tharunportfolio12318689\frontend`
2. Run these commands to push it to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - MERN Portfolio"
   # Create a repository on GitHub.com, and paste the remote add command they give you, for example:
   git remote add origin https://github.com/TharunMaraboina/my-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com/) and create a free account (Sign up with GitHub).
2. Click **Add New** -> **Project**.
3. Import the GitHub repository you just created.
4. Vercel will automatically detect that you're using **Vite**. You don't need to configure anything!
5. Click **Deploy**.
6. Within 2 minutes, Vercel will give you a live HTTPS link (e.g., `https://my-portfolio-tharun.vercel.app`).

---

## Method 2: GitHub Pages (Free Classic Method)

If you prefer keeping everything inside GitHub using `username.github.io`:

1. Open a terminal in your frontend folder.
2. Install the GitHub Pages deployment package:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Open `package.json` and add these scripts and the homepage URL:
   ```json
   "homepage": "https://TharunMaraboina.github.io/portfolio-name",
   "scripts": {
     // ... your other scripts
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Open `vite.config.ts` and add your repository name to the `base` configuration:
   ```typescript
   export default defineConfig({
     plugins: [react(), tailwindcss()],
     base: '/portfolio-name/' // <-- Must match your repo name exactly!
   })
   ```
5. Run the deployment command:
   ```bash
   npm run deploy
   ```
6. Go to Settings > Pages in your GitHub Repository and ensure it's serving from the `gh-pages` branch. 

Your portfolio will instantly be live!
