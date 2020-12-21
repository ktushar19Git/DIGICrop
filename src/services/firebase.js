import firebase from 'firebase';


const firebaseconfig = {
    apiKey: "AIzaSyAySOGLSCWXXV3XBKt-WpCBd5dHaDTvzfE",
    authDomain: "english-e0fda.firebaseapp.com",
    databaseURL: "https://english-e0fda.firebaseio.com",
    projectId: "english-e0fda",
    storageBucket: "english-e0fda.appspot.com",
    messagingSenderId: "360531084828",
    appId: "1:360531084828:web:6303d556b114458ac581d9",
    measurementId: "G-NCHK03DNHH"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
  }


export default firebase;


