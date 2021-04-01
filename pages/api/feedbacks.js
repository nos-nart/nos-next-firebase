import { auth } from '@/lib/firebase-admin';

import { getAllFeedbackForSites } from '@/lib/firestore-admin';

export default async (req, res) => {
  try {
    const { token } = req.headers;
    const { uid } = await auth.verifyIdToken(token);
    const { feedbacks } = await getAllFeedbackForSites(uid);

    res.status(200).json({ feedbacks });
  } catch (error) {
    res.status(500).json({ error });
  }
}