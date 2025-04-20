// This file is used by Vercel to run the server in production
import express from 'express';
import { createServer } from 'http';
import path from 'path';
import fs from 'fs';

// Import route handlers
import { registerRoutes } from './server/routes.js';
import { storage } from './server/storage.js';

const app = express();

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Log API requests
app.use((req, res, next) => {
  const start = Date.now();
  if (req.path.startsWith('/api')) {
    const originalSend = res.send;
    res.send = function(body) {
      const duration = Date.now() - start;
      console.log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
      return originalSend.call(this, body);
    };
  }
  next();
});

// Register API routes
const server = await registerRoutes(app);

// Handle errors
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message });
  console.error(err);
});

// Serve static files
const distPath = path.resolve('./dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Start server
const port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});

export default app;