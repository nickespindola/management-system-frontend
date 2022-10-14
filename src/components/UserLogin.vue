<template v-cloak >
  <div class="login">
    <div class="content">
      <div class="logo">
        <img src="../assets/udesc-vertical.jpg" alt="" />
      </div>

      <form class="login-container">
        <h1>Bem-vindo!</h1>
        <label for="email">Email</label>
        <input required type="email" name="email" id="email" />
        <label for="password">Senha</label>
        <input required type="password" name="password" id="password" />

        <a href="#" class="forgot-password">Esqueceu a senha?</a>
        <router-link class="btn" to="/home">Entrar</router-link>
        <div class="signup-link">
          <p>Não tem uma conta?</p>
          <a class="registration" href="#">Cadastra-se</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
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
  align-items: center;
  justify-content: space-around;
  background: rgba(0, 0, 0, 1);
  width: 40%;
  box-shadow: 0px 4px 24px rgb(0 0 0 / 80%);
}

img {
  height: 400px;
}

/* ================= FORM ================= */
.login-container {
  display: flex;
  margin: auto;
  /* margin-left: -200px; */
  flex-direction: column;
  width: 400px;
  /* justify-content: space-between; */
  padding: 20px;
  border-radius: 15px;
  /* 
  background: lightblue; */
}

h1 {
  /* margin-bottom: 10px; */
  color: var(--green600);
}

label {
  text-align: left;
  font-size: 1.2rem;
  margin-top: 20px;
}

input {
  margin-top: -35px;
  border: none;
  border-bottom: 2px solid white;
  height: 40px;
  font-size: 1.2rem;
  background: none;
  outline: none;
  color: white;

  transition: 0.5s;
}

input::placeholder {
  font-size: 1.2rem;
  padding-left: 10px;
  color: white;
}

input:focus {
  color: white;
  margin-top: 10px;
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
  margin-top: 40px;
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
  color: var(--green600);
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