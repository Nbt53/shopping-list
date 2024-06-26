<template>
  <div id="app">
    <div id="container">
      <div class="content">
             <router-view />
      </div>
      <button @click="login">Login with Google</button>
      <nav-bar />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/nav-bar.vue";
import { useLogin } from "./composables/user/useLogin";

export default {
  components: {
    NavBar,
  },

  setup() {
    const { loginWithGoogle } = useLogin();

    const login = async () => {
      try {
        const result = await loginWithGoogle();
        console.log(result);
        // Proceed with result, e.g., redirect or update UI
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    return { login };
  },
};
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex-grow: 1; /* This will push the nav-bar to the bottom */
}
</style>