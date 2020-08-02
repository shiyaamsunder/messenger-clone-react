import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyACjJZeIf1Yjq2Saip_6mT0UwaWl_yunvA",
        authDomain: "messenger-clone-react-da08e.firebaseapp.com",
        databaseURL: "https://messenger-clone-react-da08e.firebaseio.com",
        projectId: "messenger-clone-react-da08e",
        storageBucket: "messenger-clone-react-da08e.appspot.com",
        messagingSenderId: "874573144216",
        appId: "1:874573144216:web:328e5644792336a4cef0ed"
    }
)

const db = firebaseApp.firestore()

export default db;