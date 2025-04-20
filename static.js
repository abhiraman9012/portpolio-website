// This file prepares the app for static deployment
// It creates a version without the backend API for simple hosting

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Build the frontend
console.log('Building frontend...');
execSync('npm run build', { stdio: 'inherit' });

// Create a mock API response for the contact form
const mockApiDir = path.join('dist', 'api');
const mockContactDir = path.join(mockApiDir, 'contact');

// Create directories
fs.mkdirSync(mockApiDir, { recursive: true });
fs.mkdirSync(mockContactDir, { recursive: true });

// Create a mock JSON response file
const mockResponse = {
  message: "Message received successfully",
  id: 1
};

// Write the mock API response to a file
fs.writeFileSync(
  path.join(mockContactDir, 'index.html'),
  JSON.stringify(mockResponse)
);

console.log('Static build completed successfully!');
console.log('The "dist" directory now contains a static version of the app');
console.log('You can deploy this folder to any static hosting service like Vercel, Netlify, or GitHub Pages.');