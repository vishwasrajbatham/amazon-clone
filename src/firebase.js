import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAIVJGkGLMqiDwUaum_Sbp7QiaCWQLjqrU",
    authDomain: "website-project-7ae14.firebaseapp.com",
    projectId: "website-project-7ae14",
    storageBucket: "website-project-7ae14.appspot.com",
    messagingSenderId: "261159883668",
    appId: "1:261159883668:web:43b557a801070721557581",
    measurementId: "G-SLEBS7H5J0"
};

//initialising

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
