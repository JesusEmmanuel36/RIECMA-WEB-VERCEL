import { clientPromise } from "../db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("RIECMA");
      const collection = db.collection("GATOS");
      const gatos = await collection.find({}).toArray();
      res.status(200).json(gatos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener gatos" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}