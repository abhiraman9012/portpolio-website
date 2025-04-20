#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Building static version of the portfolio site for Vercel deployment...\n');

// 1. Create a temporary index.html that uses the static entry point
const clientDir = path.join(process.cwd(), 'client');
const indexPath = path.join(clientDir, 'index.html');
const originalIndex = fs.readFileSync(indexPath, 'utf-8');

// Update index.html to use static.tsx as entry point instead of main.tsx
const staticIndex = originalIndex.replace(
  'src="/src/main.tsx"',
  'src="/src/static.tsx"'
);

console.log('📝 Updating index.html to use static version...');
fs.writeFileSync(indexPath, staticIndex);

try {
  // 2. Build the project
  console.log('\n🔨 Building the project...');
  execSync('npm run build', { stdio: 'inherit' });

  // 3. Copy vercel.json to the dist directory
  console.log('\n📋 Copying Vercel configuration to dist directory...');
  const clientVercelPath = path.join(clientDir, 'vercel.json');
  const distVercelPath = path.join(process.cwd(), 'dist', 'vercel.json');
  
  fs.copyFileSync(clientVercelPath, distVercelPath);
  
  console.log('\n✅ Static build completed successfully!');
  console.log('The "dist" directory now contains a static version of the portfolio');
  console.log('You can deploy this folder to Vercel for hosting.\n');
  
  console.log('To deploy to Vercel:');
  console.log('1. Visit https://vercel.com/new');
  console.log('2. Import the GitHub repository');
  console.log('3. Set the following settings:');
  console.log('   - Framework Preset: Other');
  console.log('   - Build Command: none (leave empty)');
  console.log('   - Output Directory: dist');
  console.log('4. Click "Deploy"\n');
} finally {
  // 4. Restore the original index.html
  console.log('🔄 Restoring original index.html...');
  fs.writeFileSync(indexPath, originalIndex);
}