import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const config = {
    apiKey: "AIzaSyD1r9ayzM7o6BlR89JwNMctaH0lvjY6-Gs",
    authDomain: "expense-tracker-app-c1673.firebaseapp.com",
    projectId: "expense-tracker-app-c1673",
    storageBucket: "expense-tracker-app-c1673.appspot.com",
    messagingSenderId: "100020911562",
    appId: "1:100020911562:web:8b7a743dc380951c7be333",
    measurementId: "G-VEGJH3E42R"
}

const Fire = initializeApp(config)
export default Fire;