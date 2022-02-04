import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCeWprB9nf_TSCjJcI21flYMRSmyQuBYv8",
    authDomain: "finance-tracker-ffa42.firebaseapp.com",
    projectId: "finance-tracker-ffa42",
    storageBucket: "finance-tracker-ffa42.appspot.com",
    messagingSenderId: "148664742816",
    appId: "1:148664742816:web:4fa20b7109f29e5d036ac5"
    };

    firebase.initializeApp(firebaseConfig)

    const projectFirestore = firebase.firestore()

    const projectAuth = firebase.auth()

    export { projectAuth, projectFirestore}