import { db } from '@/lib/firebase-admin';
import { getAllSites } from '@/lib/firestore-admin';

export default async (req, res) => {
  try {
    const { token } = req.headers;
    const sites = await getAllSites();
  
    res.status(200).json({ sites });
  } catch (error) {
    res.status(500).json({ error });
  }
}