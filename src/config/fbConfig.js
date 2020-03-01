import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVaTe6OSWH9V5eW7Ie5FFTT86j-bgaH7k",
    authDomain: "mario-app-62311.firebaseapp.com",
    databaseURL: "https://mario-app-62311.firebaseio.com",
    projectId: "mario-app-62311",
    storageBucket: "mario-app-62311.appspot.com",
    messagingSenderId: "234365837840",
    appId: "1:234365837840:web:f64ef56becdba139c1a095"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
