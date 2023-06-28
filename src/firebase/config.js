import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIND,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASURE
};

const app = initializeApp(firebaseConfig);

const firebaseConnection = () => app

export default firebaseConnection

//incripción de Firebass, -  crear archivo .env - copiar y pegar para entrar a la base de datos las siguientes lineas de codigo

//VITE_APP_API_KEY=AIzaSyAK93MCQ5lRsDvWmzZzYH-CpgKcKSj-VEk
//VITE_APP_AUTH_DOMAIND=alaska-d8049.firebaseapp.com
//VITE_APP_PROJECT_ID=alaska-d8049
//VITE_APP_STORAGE_BUCKET=alaska-d8049.appspot.com
//VITE_APP_MESSAGING_SENDER_ID=472857591982
//VITE_APP_APP_ID=1:472857591982:web:e02faad944a08c9d99ad3f
