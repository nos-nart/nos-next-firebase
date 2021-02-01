import dayjs from 'dayjs';
import { db } from './firebase-admin';

export async function getAllFeedback(siteId) {
  try {
    const snapshot = await db.collection('feedbacks').where('siteId', '==', siteId).get();
  
    const feedback = [];
    snapshot.forEach(doc => {
      feedback.push({ id: doc.id, ...doc.data() });
    });
  
    feedback.sort((a, b) => (dayjs(a.createdAt).isBefore(dayjs(b.createdAt)) ? 1 : -1));
    return { feedback };
  } catch (error) {
    return { error };
  }
}

export async function getAllSites() {
  const snapshot = await db.collection('sites').get();
  const sites = [];

  snapshot.forEach(doc => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return sites;
}
