import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Check if Firebase is properly configured
const isFirebaseConfigured = () => {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  return apiKey && 
         apiKey !== 'your_api_key_here' && 
         apiKey !== 'AIzaSyDEMO' &&
         apiKey.length > 10;
};

// Mock Firebase config for demo mode
const mockFirebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "demo.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:demo"
};

// Get actual or mock config
const firebaseConfig = isFirebaseConfigured() ? {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
} : mockFirebaseConfig;

// Initialize Firebase only if configured
let app = null;
let auth = null;

try {
  if (isFirebaseConfigured()) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  }
} catch (error) {
  console.warn('Firebase initialization failed, running in demo mode:', error);
}

// Export auth - will be null in demo mode
export { auth };

export default app;