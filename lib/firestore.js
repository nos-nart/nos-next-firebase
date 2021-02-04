import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export function createSite(data) {
  const sites = firestore.collection('sites').doc();
  sites.set(data);

  return sites;
}

export function createFeedback(data) {
  const feedbacks = firestore.collection('feedbacks').doc();
  feedbacks.set(data);

  return feedbacks;
}

export function updateFeedback(id, newValues) {
  const feedbacks = firestore.collection('feedbacks').doc(id);
  feedbacks.update({ ...newValues });

  return feedbacks;
}

export async function deleteSite(id) {
  firestore.collection('sites').doc(id).delete();
  const snapshot = await firestore
    .collection('feedbacks')
    .where('siteId', '==', id)
    .get();

  const batch = firestore.batch();

  snapshot.forEach((doc) => {
    batch.delete(doc.ref);
  });

  return batch.commit();
}


export function deleteFeedback(id) {
  return firestore.collection('feedbacks').doc(id).delete();
}