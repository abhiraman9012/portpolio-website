// This file is used by Vercel for serverless functions
import express from 'express';
import { createServer } from 'http';
import { registerRoutes } from '../server/routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register API routes
const server = await registerRoutes(app);

export default app;