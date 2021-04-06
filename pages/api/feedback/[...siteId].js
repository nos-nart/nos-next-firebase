import { getAllFeedback } from '@/lib/firestore-admin';

export default async (req, res) => {
  try {
    const siteId = req.query.siteId[0];
    const { feedbacks } = await getAllFeedback(siteId);

    res.status(200).json({ feedbacks });
  } catch (error) {
    res.status(500).json({ error });
  }
}
