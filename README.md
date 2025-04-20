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
- Express.js
- TailwindCSS
- Shadcn UI
- Framer Motion

## Deployment Instructions for Vercel

### Automatic Deployment

1. Fork or push this repository to your GitHub account
2. Log in to [Vercel](https://vercel.com)
3. Create a new project and import your GitHub repository
4. During the import, Vercel will auto-detect the project as a React application
5. Use the following settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Add the following environment variables:
   - `NODE_ENV`: `production`
7. Click Deploy

### Manual Deployment with Vercel CLI

1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`
3. Run `vercel` in the project root directory
4. Follow the prompts and select appropriate settings
5. For production deployment, run: `vercel --prod`

## Running Locally

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open browser at: `http://localhost:5000`