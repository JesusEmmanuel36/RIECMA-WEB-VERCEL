const express = require("express");
const router = express.Router();
const { client } = require("../db"); // usa el cliente ya conectado

router.get("/", async (req, res) => {
  try {
    const db = client.db("RIECMA");  // base de datos
    const collection = db.collection("GATOS");  // coleccion de gatos
    const gatos = await collection.find({}).toArray(); // contenido (archivos)

    //console.log(perros[0].NOMBRE);

    res.json(gatos);     
  } catch (error) {
    console.error("❌ Error obteniendo gatos:", error);
    res.status(500).send("Error al obtener la lista de gatos");
  }
});

module.exports = router;