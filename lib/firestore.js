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