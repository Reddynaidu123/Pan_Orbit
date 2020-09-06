import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyCQTpriVA-NMu2npm1hawiVL2jbfdkIPv4",
    authDomain: "kalyan-c00c7.firebaseapp.com",
    databaseURL: "https://kalyan-c00c7.firebaseio.com",
    projectId: "kalyan-c00c7",
    storageBucket: "kalyan-c00c7.appspot.com",
    messagingSenderId: "610557851712",
    appId: "1:610557851712:web:2e53674088dfdf3258c7a5",
    measurementId: "G-SNQRXZPCTW"
  };
// var firebaseConfig = {
//     apiKey: "AIzaSyCp3FzycCoAze5PTBOLuq6_937PAOkqDXs",
//     authDomain: "vd-rice-mill.firebaseapp.com",
//     databaseURL: "https://vd-rice-mill.firebaseio.com",
//     projectId: "vd-rice-mill",
//     storageBucket: "vd-rice-mill.appspot.com",
//     messagingSenderId: "60771744824",
//     appId: "1:60771744824:web:cf98718206ab3a0a8f3acd"
//   };
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

generateUserDocument=( user)=>{

    console.log("uuuu",user)

}






// export const generateUserDocument = async (user) => {
//     console.log("uuuu",user)
//     if (!user) return;
//     const userRef = firestore.doc(`users/${user.uid}`);
//     console.log("userRef",userRef)
//     const snapshot = await userRef.get();
//     console.log("snapshot",snapshot)

//     if (!snapshot.exists) {
//         const {email} = user;
//         try {
//             await userRef.set({
               
//                 email
              
//             });
//         } catch (error) {
//             console.error('Error creating user document', error);
//         }
//     }
//     return getUserDocument(user.uid);
// };
// const getUserDocument = async (uid) => {
//     if (!uid) return null;
//     try {
//         const userDocument = await firestore.doc(`users/${uid}`).get();
//         return {
//             uid,
//             ...userDocument.data(),
//         };
//     } catch (error) {
//         console.error('Error fetching user', error);
//     }
// };
// export const getLocations = async () => {
//     try {
//         const locationSnapshot = await firestore.collection('locations').get();
//         return locationSnapshot.docs.map((doc) => doc.data());
//     } catch (error) {
//         console.error('error fetching locations', error);
//     }
// };

// export const addLocation = async (data) => {
//     try {
//         const loc = await firestore.collection('locations').add(data);
//     } catch (error) {
//         console.error('error adding locations', error);
//     }
// };
