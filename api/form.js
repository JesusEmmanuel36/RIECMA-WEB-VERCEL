// api/form.js
import { clientPromise } from "../db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("RIECMA");
      const collection = db.collection("FORM");
      const form = await collection.find({}).toArray();
      res.status(200).json(form[0]);
    } catch (error) {
      console.error("❌ Error obteniendo form:", error);
      res.status(500).json({ error: "Error al obtener el form" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
