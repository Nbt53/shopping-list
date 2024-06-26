<template>
  <div id="app">
    <div id="container" v-if="loggedIn">
      <div class="content">
        <router-view />
      </div>
      <nav-bar />
    </div>
    <div v-else>
      <log-in />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import NavBar from "./components/nav-bar.vue";
import useIsLoggedIn from "./composables/user/isLoggedIn";
import LogIn from "./components/user/LogIn.vue";

export default {
  components: {
    NavBar,
    LogIn,
  },

  setup() {
    const { isLoggedIn } = useIsLoggedIn();
    const loggedIn = ref(isLoggedIn);
  

    return { loggedIn };
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