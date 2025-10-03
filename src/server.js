import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import api from './api/index.js';
import { loadEnv } from './config/env.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

loadEnv();

const app = express();

// Views
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

// Static assets
app.use(express.static(path.join(__dirname, '..', 'public')));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample homepage route (replace with your routes)
app.get('/', (req, res) => {
  /* sample */
  return res.render('pages/home', { title: 'Home' });
});

// Mount API under /api
app.use('/api', api);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[server] Listening on http://localhost:${port}`);
});
