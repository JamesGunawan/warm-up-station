// server.mjs
import { createServer } from 'node:http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __fileURLToPath = fileURLToPath(import.meta.url);
console.log("fileURL", fileURLToPath);

const __dirname = path.dirname(__fileURLToPath);
const app = express();

// Serving static filed
const _public = app.use(express.static('public'));

// Serving a static html
app.get('/', (req, res) => {
  // response to the request http://127.0.0.0
    res.sendFile(__dirname + '/public/index.html');
});

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:3000');
});

// run with `node server.mjs`
