# Abhijit Dengale's Portfolio Website

A professional portfolio website showcasing experience, projects, and skills as an AI Agent Developer and Full-Stack Developer.

## Features

- Interactive UI with animations
- Project showcase with filtering
- Skills and experience sections
- Contact form
- Responsive design for all devices

## Tech Stack

- React
- TypeScript
- TailwindCSS
- Shadcn UI
- Framer Motion

## Vercel Deployment Instructions

### Option 1: Deploy Static Version (Recommended)

1. Build the static version of the site:
   ```
   node build-static.js
   ```

2. The static build will be available in the `dist` directory

3. Deploy to Vercel:
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Set the following settings:
     - Framework Preset: Other
     - Build Command: (leave empty)
     - Output Directory: dist
   - Click "Deploy"

This approach creates a purely static site that works perfectly on Vercel without requiring any backend API.

### Option 2: Deploy with Backend API

1. Push code to GitHub:
   ```
   git add .
   git commit -m "Updated for Vercel deployment"
   git push
   ```

2. Deploy to Vercel:
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Set the following settings:
     - Framework Preset: Vite
     - Build Command: npm run build
     - Output Directory: dist
     - Install Command: npm install
   - Add the environment variables:
     - `NODE_ENV`: `production`
   - Click "Deploy"

## Running Locally

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open browser at: `http://localhost:5000`

## Contact Information

- Email: abhijitdengale2003@gmail.com
- Phone: +91 9370162316
- LinkedIn: https://www.linkedin.com/in/abhijit-dengale
- GitHub: https://github.com/abhiraman9012