#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Building static version of the portfolio site for Vercel deployment...\n');

// 1. Create a temporary .env.production to force static mode 
const envFilePath = path.join(process.cwd(), '.env.production');
console.log('📝 Creating production environment config...');
fs.writeFileSync(envFilePath, 'VITE_USE_STATIC=true\n');

try {
  // 2. Build the project
  console.log('\n🔨 Building the project...');
  execSync('npm run build', { stdio: 'inherit' });

  // 3. Copy vercel.json to the dist directory
  console.log('\n📋 Copying Vercel configuration to dist directory...');
  const clientDir = path.join(process.cwd(), 'client');
  const clientVercelPath = path.join(clientDir, 'vercel.json');
  const distVercelPath = path.join(process.cwd(), 'dist', 'vercel.json');
  
  fs.copyFileSync(clientVercelPath, distVercelPath);
  
  // 4. Create a simple 404.html that redirects to index.html (for SPA routing)
  const notFoundContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirecting...</title>
  <script>
    // Redirects all 404s to the index page for client-side routing
    window.location.href = "/";
  </script>
</head>
<body>
  <p>Redirecting to home page...</p>
</body>
</html>`;

  const notFoundPath = path.join(process.cwd(), 'dist', '404.html');
  fs.writeFileSync(notFoundPath, notFoundContent);
  
  console.log('\n✅ Static build completed successfully!');
  console.log('The "dist" directory now contains a static version of the portfolio');
  console.log('You can deploy this folder to Vercel for hosting.\n');
  
  console.log('To deploy to Vercel:');
  console.log('1. Visit https://vercel.com/new');
  console.log('2. Import the GitHub repository');
  console.log('3. Set the following settings:');
  console.log('   - Framework Preset: Other');
  console.log('   - Build Command: node build-static.js');
  console.log('   - Output Directory: dist');
  console.log('4. Click "Deploy"\n');
} finally {
  // 5. Remove the temporary .env.production file
  console.log('🔄 Cleaning up temporary files...');
  if (fs.existsSync(envFilePath)) {
    fs.unlinkSync(envFilePath);
  }
}