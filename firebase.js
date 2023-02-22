import * as firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCygvI6ixs-mid9WyCY1tcr8wb3KdeDUvc",
    authDomain: "chat-c3cab.firebaseapp.com",
    projectId: "chat-c3cab",
    storageBucket: "chat-c3cab.appspot.com",
    messagingSenderId: "1066067302456",
    appId: "1:1066067302456:web:b8b7ada1ea850713426ecd"
};

let app

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export {
    db,
    auth
}