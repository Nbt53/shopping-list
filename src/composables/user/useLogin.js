import { auth } from '@/configs/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const useLogin = () => {
  const loginWithGoogle = async () => {
    console.log('Logging in with Google');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Handle result, e.g., redirect or update UI
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { loginWithGoogle };
};