import { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Check if Firebase is properly configured
const isFirebaseConfigured = () => {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  return apiKey && 
         apiKey !== 'your_api_key_here' && 
         apiKey !== 'AIzaSyDEMO' &&
         apiKey.length > 10;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDemoMode, setIsDemoMode] = useState(false);

  // Demo mode user data
  const demoUser = {
    uid: 'demo-user-123',
    email: 'demo@warmpaws.com',
    displayName: 'Demo User',
    photoURL: null
  };

  // Register new user
  const register = async (email, password, displayName, photoURL) => {
    if (!isFirebaseConfigured()) {
      // Demo mode - simulate successful registration
      setUser({ ...demoUser, email, displayName, photoURL });
      setIsDemoMode(true);
      return { user: { email, displayName } };
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile
      await updateProfile(result.user, {
        displayName: displayName,
        photoURL: photoURL
      });
      
      return result;
    } catch (error) {
      throw error;
    }
  };

  // Login user
  const login = async (email, password) => {
    if (!isFirebaseConfigured()) {
      // Demo mode - accept any credentials
      setUser({ ...demoUser, email });
      setIsDemoMode(true);
      return { user: { email } };
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      throw error;
    }
  };

  // Login with Google
  const loginWithGoogle = async () => {
    if (!isFirebaseConfigured()) {
      // Demo mode - simulate Google login
      setUser(demoUser);
      setIsDemoMode(true);
      return { user: demoUser };
    }

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (error) {
      throw error;
    }
  };

  // Logout user
  const logout = async () => {
    if (!isFirebaseConfigured()) {
      // Demo mode - just clear user
      setUser(null);
      setIsDemoMode(false);
      return;
    }

    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    if (!isFirebaseConfigured()) {
      // Demo mode - simulate success
      return Promise.resolve();
    }

    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw error;
    }
  };

  // Update user profile
  const updateUserProfile = async (displayName, photoURL) => {
    if (!isFirebaseConfigured()) {
      // Demo mode - just update local state
      setUser(prev => prev ? { ...prev, displayName, photoURL } : null);
      return;
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL
      });
    } catch (error) {
      throw error;
    }
  };

  // Listen to auth state changes
  useEffect(() => {
    if (!isFirebaseConfigured()) {
      // Demo mode - enable demo user for testing
      setIsDemoMode(true);
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    isDemoMode,
    register,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};