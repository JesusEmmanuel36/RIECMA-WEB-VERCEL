// server.js
const { connectDB } = require("./db");
const express = require("express");
const path = require("path");

const perrosRouter = require("./routes/perros");
const gatosRouter = require("./routes/gatos");
const formRouter = require("./routes/form");

const app = express();
const PORT = process.env.PORT || 3000; // Render usa process.env.PORT

connectDB();

// Middleware para leer JSON
app.use(express.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas API
app.use("/api/perros", perrosRouter);
app.use("/api/gatos", gatosRouter);
app.use("/api/form", formRouter);

// Rutas frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/perros", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "perros.html"));
});

app.get("/gatos", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "gatos.html"));
});

app.get("/donativos", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "donativos.html"));
});

// Arrancar servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
