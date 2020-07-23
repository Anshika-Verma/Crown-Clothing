import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAsw1CF0hq0pelAHrzhgcqDjQZZ_FAwnMc",
  authDomain: "crown-clothing-27434.firebaseapp.com",
  databaseURL: "https://crown-clothing-27434.firebaseio.com",
  projectId: "crown-clothing-27434",
  storageBucket: "crown-clothing-27434.appspot.com",
  messagingSenderId: "28104180448",
  appId: "1:28104180448:web:09c740d555bc3dd8090685",
  measurementId: "G-TM1PPP0XRT"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
