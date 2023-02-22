import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/firestore"





const firebaseConfig = {
    apiKey: "AIzaSyCygvI6ixs-mid9WyCY1tcr8wb3KdeDUvc",
    authDomain: "chat-c3cab.firebaseapp.com",
    projectId: "chat-c3cab",
    storageBucket: "chat-c3cab.appspot.com",
    messagingSenderId: "1066067302456",
    appId: "1:1066067302456:web:b8b7ada1ea850713426ecd"
};

const app = firebase.initializeApp(firebaseConfig)

// export const db = app.firestore()
export const auth = firebase.auth()
export const db = firebase.firestore();