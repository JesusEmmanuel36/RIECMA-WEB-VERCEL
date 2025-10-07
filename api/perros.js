// api/perros.js
import { clientPromise } from "../db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("RIECMA");
      const collection = db.collection("PERROS");
      const perros = await collection.find({}).toArray();
      res.status(200).json(perros);
    } catch (error) {
      console.error("❌ Error obteniendo perros:", error);
      res.status(500).json({ error: "Error al obtener la lista de perros" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
