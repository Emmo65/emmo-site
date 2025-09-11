const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Template Engine: EJS aktivieren
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Statische Dateien (CSS, Bilder)
app.use(express.static(path.join(__dirname, 'public')));

// Startseite
app.get('/', (req, res) => {
  res.render('index', { title: 'Hallo Emmo', subtitle: 'Dein erster Express-Server mit EJS!' });
});

// Über mich
app.get('/about', (req, res) => {
  res.render('about', { title: 'Über mich', content: 'Geboren am 26.08.1984 in Berlin. Projekt: Linux lernen.' });
});

// Projekt
app.get('/project', (req, res) => {
  res.render('project', { title: 'Projekt', content: 'Übungsumgebung mit Ubuntu, Apache, Node.js und Bash.' });
});

app.listen(PORT, () => {
  console.log(`✅ Server läuft auf http://localhost:${PORT}`);
});

