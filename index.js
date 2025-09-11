// index.js - Minimaler Express-Server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: Statische Dateien (optional)
app.use(express.static('public'));

// Route: Startseite
app.get('/', (req, res) => {
  res.send('<h1>Hallo Emmo!</h1><p>Dein erster Node.js-Webserver läuft 🎉</p>');
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
