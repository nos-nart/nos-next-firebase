import dayjs from 'dayjs';
import { db } from './firebase-admin';

export async function getAllFeedback(siteId) {
  try {
    const snapshot = await db.collection('feedbacks').where('siteId', '==', siteId).get();

    const feedbacks = [];
    snapshot.forEach(doc => {
      feedbacks.push({ id: doc.id, ...doc.data() });
    });

    feedbacks.sort((a, b) => (dayjs(a.createdAt).isBefore(dayjs(b.createdAt)) ? 1 : -1));
    return { feedbacks };
  } catch (error) {
    return { error };
  }
}

export async function getAllSites() {
  try {
    const snapshot = await db.collection('sites').get();
    const sites = [];
  
    snapshot.forEach(doc => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    return { sites };
  } catch (error) {
    return { error }
  }
}

export async function getUserSites(userId) {
  const snapshot = await db.collection('sites').where('authorId', '==', userId).get();
  const sites = [];

  snapshot.forEach(doc => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return { sites };
}

export async function getAllFeedbackForSites(uid) {
  const { sites } = await getUserSites(uid);

  if (!sites.length) {
    return { feedbacks: [] };
  }

  const siteIds = sites.map((site) => site.id);
  const snapshot = await db.collection('feedbacks').where('siteId', 'in', siteIds).get();

  const feedbacks = [];
  snapshot.forEach((doc) => {
    feedbacks.push({ id: doc.id, ...doc.data() });
  })

  return { feedbacks };
}
