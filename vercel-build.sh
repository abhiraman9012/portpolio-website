#!/bin/bash

# Install dependencies
npm install

# Build the frontend
npx vite build

# Create API directory
mkdir -p .vercel/output/functions/api

# Copy API files to Vercel function directory
cp api/index.js .vercel/output/functions/api/index.js

# Copy static files
mkdir -p .vercel/output/static
cp -r dist/* .vercel/output/static/

# Copy output config
cp vercel.output.json .vercel/output/config.json

echo "Build completed successfully!"