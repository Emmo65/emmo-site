const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// View Engine & Static Files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/project", (req, res) => {
  res.render("project", { title: "Projects" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/gallery", (req, res) => {
  res.render("gallery", { title: "Gallery" });
});

app.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.get("/impressum", (req, res) => {
  res.render("impressum", { title: "Impressum" });
});

app.get("/datenschutz", (req, res) => {
  res.render("datenschutz", { title: "Datenschutz" });
});


// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server läuft auf http://localhost:${PORT}`);
});
