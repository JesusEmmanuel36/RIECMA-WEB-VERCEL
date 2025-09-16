const express = require("express");
const router = express.Router();
const { client } = require("../db"); // usa el cliente ya conectado

router.get("/", async (req, res) => {
  try {
    const db = client.db("RIECMA");  // base de datos
    const collection = db.collection("FORM");   
    const form = await collection.find({}).toArray();  

    res.json(form[0]);     
  } catch (error) {
    console.error("❌ Error obteniendo form:", error);
    res.status(500).send("Error al obtener el form");
  }
});

module.exports = router;