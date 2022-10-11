<template v-cloak >
  <div class="login">
    <div class="content">
      <div class="logo">
        <img src="../assets/udesc-vertical.jpg" alt="" />
      </div>
      <div class="login-container">
        <h1>Bem-vindo!</h1>
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />

        <a href="#" class="forgot-password">Esqueceu a senha?</a>

        <!-- <button class="btn">
          <router-link to="/home">Entrar</router-link>
        </button> -->

        <router-link class="btn" to="/home">Entrar</router-link>

        <div class="signup-link">
          <p>Não tem uma conta?</p>
          <a class="registration" href="#">Cadastra-se</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  components: {},
};
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  background-image: url("../assets/desk-wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: rgba(0, 0, 0, 1);
  width: 40%;
  box-shadow: 0px 4px 24px rgb(0 0 0 / 80%);
}

img {
  height: 400px;
}

.login-container {
  display: flex;
  margin: auto;
  /* margin-left: -200px; */
  flex-direction: column;
  width: 400px;
  /* justify-content: space-between; */
  padding: 20px;
  border-radius: 15px;
}

h1 {
  margin-bottom: 20px;
}

input {
  margin-top: 10px;
  border: none;
  border-bottom: 2px solid white;
  height: 40px;
  font-size: 1.2rem;
  background: none;
  outline: none;
  color: white;
}

input::placeholder {
  font-size: 1.2rem;
  padding-left: 10px;
  color: white;
}

input:focus {
  color: white;
}

.forgot-password {
  margin-top: 20px;
  font-size: 1.1rem;
  color: inherit;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
  color: white;
}

.btn {
  margin-top: 70px;
}

button:hover {
  background: lightgrey;
  color: black;
}

.signup-link {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

p {
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
}

.registration {
  text-decoration: none;
  color: inherit;
}

.registration:hover {
  text-decoration: underline;
  color: white;
}
</style>