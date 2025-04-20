// This file is used by Vercel to run the server in production
import { createServer } from 'http';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { default: app } = require('./dist/index.js');

const server = createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});