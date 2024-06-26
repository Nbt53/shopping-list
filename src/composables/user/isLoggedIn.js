import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Initialize a ref to hold the user's login state
const isLoggedIn = ref(false);

// Get the Firebase Auth instance
const auth = getAuth();

// Listen for changes in the authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    isLoggedIn.value = true;
  } else {
    // User is signed out
    isLoggedIn.value = false;
  }
});

export default function useIsLoggedIn() {
  return { isLoggedIn };
}