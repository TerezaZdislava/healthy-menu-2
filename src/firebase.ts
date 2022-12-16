import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAbTQGABIvXzkUTDVwAJRQQvO0mt7957mQ',
  authDomain: 'online-menu-1f4ad.firebaseapp.com',
  projectId: 'online-menu-1f4ad',
  storageBucket: 'online-menu-1f4ad.appspot.com',
  messagingSenderId: '126737975859',
  appId: '1:126737975859:web:572477656a8fb5fa43b146',
  measurementId: 'G-N2119RZ8Z8',
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);

export default db;
