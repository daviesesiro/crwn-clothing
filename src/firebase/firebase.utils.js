import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD7y7t47045lD4b4XMRBXfG4Ttx8oOlhAM",
    authDomain: "crwn-db-cac19.firebaseapp.com",
    databaseURL: "https://crwn-db-cac19.firebaseio.com",
    projectId: "crwn-db-cac19",
    storageBucket: "crwn-db-cac19.appspot.com",
    messagingSenderId: "26003333446",
    appId: "1:26003333446:web:0b9cb59e7ecad48d934547",
    measurementId: "G-F67J7W8D18"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;