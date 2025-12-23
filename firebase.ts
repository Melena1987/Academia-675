
import { initializeApp, FirebaseOptions } from "firebase/app";

/**
 * Configuración de Firebase utilizando variables de entorno de Vite.
 * Estas variables deben estar definidas en tu archivo .env como VITE_FIREBASE_...
 */
const firebaseConfig: FirebaseOptions = {
  apiKey: (import.meta as any).env.VITE_FIREBASE_API_KEY,
  authDomain: (import.meta as any).env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: (import.meta as any).env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: (import.meta as any).env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: (import.meta as any).env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: (import.meta as any).env.VITE_FIREBASE_APP_ID
};

// Inicializar la instancia de Firebase
const app = initializeApp(firebaseConfig);

export default app;
