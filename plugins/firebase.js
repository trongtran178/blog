import firebase from "firebase/app"
import 'firebase/firestore'


if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyC909sqHbEY8BgfbJsckqhUuP_9-pDacSI",
        authDomain: "my-blog-59201.firebaseapp.com",
        databaseURL: "https://my-blog-59201.firebaseio.com",
        projectId: "my-blog-59201",
        storageBucket: "my-blog-59201.appspot.com",
        messagingSenderId: "270975523377",
        appId: "1:270975523377:web:c94b99b6d2ca3ce7e0d310",
        measurementId: "G-DVM5J6P644"
    }

    firebase.initializeApp(firebaseConfig)
}

const firebaseDb = firebase.firestore()
export { firebaseDb }