<template>
  <section>
    <div class="container">
      <div class="content">
        <h1>Editar Usuário</h1>
        <div class="edit-container">
          <form>
            <div class="info">
              <label for="name">Nome</label>
              <input type="text" v-model="user.name" />
            </div>
            <div class="info">
              <label for="surname">Sobrenome</label>
              <input type="text" v-model="user.surname" />
            </div>
            <div class="info">
              <label for="email">E-mail</label>
              <input type="text" v-model="user.email" />
            </div>
            <div class="info">
              <label for="telephone">Telefone</label>
              <input type="text" v-model="user.telephone" />
            </div>
            <div class="info">
              <label for="address">Endereço</label>
              <input type="text" v-model="user.address" />
            </div>
            <div class="btns">
              <router-link to="/admin/listar" class="btn">Cancelar</router-link>
              <button class="btn" type="submit" @click="updateUser">
                Atualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <ListarUsuario />
  </section>
</template>

<script>
import ListarUsuario from "./ListarUsuario.vue";
// import BackReqs from "@/req/api/backApi";

export default {
  data() {
    return {
      user: {
        name: "",
        surname: "",
        email: "",
        telephone: "",
        address: "",
      },
    };
  },
  components: {
    ListarUsuario,
  },
  methods: {
    updateUser() {
      this.$router.push({ name: "usuario-listar" });
    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  height: 90vh;
  margin-top: 10vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  height: 600px;
  width: 500px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -100px;
}

/* ==================== FORM ==================== */
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.info {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 10px;
  text-align: left;
}

input {
  height: 30px;
}

.btns {
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

label {
  color: var(--green600);
  font-weight: 700;
  letter-spacing: 1px;
}
</style>