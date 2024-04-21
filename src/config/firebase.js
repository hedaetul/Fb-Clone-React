// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgClZZIhLP70hmwV0EOzaP9Yqx6PqUg_E',
  authDomain: 'fb-clone-react-56122.firebaseapp.com',
  projectId: 'fb-clone-react-56122',
  storageBucket: 'fb-clone-react-56122.appspot.com',
  messagingSenderId: '424933495850',
  appId: '1:424933495850:web:7737b714eb441416a85f53',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

