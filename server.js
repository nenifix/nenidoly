const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://dvkwljinagywttyhbdop.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2a3dsamluYWd5d3R0eWhiZG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NTA5MzIsImV4cCI6MjA5NTAyNjkzMn0.fCEDU3RKxg0LW8wsJ2lJ0YgE6nnGe3Jv7wVErO0NFmE';

app.get('/', (req, res) => {
  const fs = require('fs');
  let html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');
  html = html.replace(
    '</head>',
    `<script>window.__SUPABASE_URL="${SUPABASE_URL}";window.__SUPABASE_ANON_KEY="${SUPABASE_ANON_KEY}";</script>\n</head>`
  );
  res.send(html);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, '0.0.0.0', () => {
  console.log('nenido running on port ' + PORT);
});