import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAXNBsqwtZu4xhVpQcxZ5fng74xq4BYezo',
  authDomain: 'auth-test-e2c72.firebaseapp.com',
  projectId: 'auth-test-e2c72',
  storageBucket: 'auth-test-e2c72.appspot.com',
  messagingSenderId: '30690446161',
  appId: '1:30690446161:web:7699b3ce9cf1ba660b6170',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
