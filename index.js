// index.js – Express Server mit EJS Layout

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// Template Engine: EJS aktivieren + Layout einbinden
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout'); // layout.ejs wird als Basis verwendet

// Statische Dateien (CSS, Bilder, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routen
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Hallo Emmo',
    subtitle: 'Dein erster Express-Server mit EJS und Layout!'
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'Über mich',
    content: 'Geboren am 26.08.1984 in Berlin. Projekt: Linux lernen.'
  });
});

app.get('/project', (req, res) => {
  res.render('project', { 
    title: 'Projekt',
    content: 'Übungsumgebung mit Ubuntu, Apache, Node.js und Bash. Ziel: Routine in Administration, Automatisierung und Deployment.'
  });
});

// Server starten
app.listen(PORT, () => {
  console.log(`✅ Server läuft auf http://localhost:${PORT}`);
});

