import db from '@/lib/firebase-admin';
import { getAllSites } from '@/lib/firestore-admin';

export default async (req, res) => {
  const sites = await getAllSites();

  res.status(200).json({ sites });
}
