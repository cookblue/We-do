// Get a RTDB instance
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBUDFWeu55JuHEFDI4YQrGBXFM1JL9W1MA',
  authDomain: 'taquitos-chat.firebaseapp.com',
  databaseURL: 'https://taquitos-chat.firebaseio.com/',
  storageBucket: 'taquitos-chat.appspot.com',
  messagingSenderId: '588166412136',
};

export const db = firebase
  .initializeApp(config)
  .database();