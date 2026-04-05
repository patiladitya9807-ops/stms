import { connectToDatabase } from '../utils/db';

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const collection = db.collection('tournaments');

  if (req.method === 'GET') {
    const tournaments = await collection.find({}).toArray();
    res.status(200).json(tournaments);
  } else if (req.method === 'POST') {
    const newTournament = req.body;
    await collection.insertOne(newTournament);
    res.status(201).json({ message: 'Tournament created successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
