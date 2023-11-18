import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSuYkw3Q4enJBLXj-pswOsIq2w-UcPOEI",
  authDomain: "pm-ecommerce-b2bb6.firebaseapp.com",
  projectId: "pm-ecommerce-b2bb6",
  storageBucket: "pm-ecommerce-b2bb6.appspot.com",
  messagingSenderId: "109354461759",
  appId: "1:109354461759:web:d169ac8a3639b80540668a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
  
)
