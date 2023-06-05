import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCMTeha4wQlQ4uORCXZcdGCX4hIGwhPEKU",
    authDomain: "chatsite-48667.firebaseapp.com",
    projectId: "chatsite-48667",
    storageBucket: "chatsite-48667.appspot.com",
    messagingSenderId: "878421563258",
    appId: "1:878421563258:web:09c55e57a6257f55b028c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();