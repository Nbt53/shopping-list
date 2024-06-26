<template>
  <div class="login">
    <div class="login-box">
      <h1>Super cool Shopping list</h1>
      <button @click="login">Log in with Google</button>
    </div>
  </div>
</template>

<script>
import { useLogin } from '../../composables/user/useLogin';
export default {
    setup() {
        const { loginWithGoogle } = useLogin();

        const login = async () => {
            try {
                const result = await loginWithGoogle();
                console.log(result);
            } catch (error) {
                console.error("Login failed:", error);
            }
        };
        return { login };
    } // This closing brace was missing
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  text-align: center;
}

.login-box {
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: 300px;
  background-color: var(--color-primary);
}

.login-box h1 {
  margin: 0 0 2rem 0;
}
</style>