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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`); 

      const snapShot = await userRef.get();

      if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        }catch(error){
          console.log('error creating user', error.message);
        }
      }
      return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
    return await batch.commit();
  };

  export const convertCollectionsSnapshopToMap = collectionsSnapshot => {
    const transformedCollection = collectionsSnapshot.docs.map(docSnapshot=> {
      const {title, items} = docSnapshot.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: docSnapshot.id,
        title,
        items
      };
    });

    return transformedCollection.reduce((accumulator, collection)=>{
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, { });
  }; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;