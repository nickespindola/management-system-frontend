<template>
  <section>
    <div class="container">
      <div class="content">
        <h1>Editar Usuário</h1>
        <div class="edit-container">
          <form>
            <div class="info">
              <label for="name">Nome</label>
              <input type="text" v-model="info.name" />
            </div>
            <div class="info">
              <label for="surname">Sobrenome</label>
              <input type="text" v-model="info.surname" />
            </div>

            <div class="info">
              <label for="email">E-mail</label>
              <input type="text" v-model="info.email" />
            </div>
            <div class="info">
              <label for="telephone">Telefone</label>
              <input type="text" v-model="info.telephone" />
            </div>
            <div class="info">
              <label for="address">Endereço</label>
              <input type="text" v-model="info.address" />
            </div>
            <div class="btns">
              <button type="submit" class="btn" @click.prevent="cancelEdition">
                Cancelar
              </button>
              <button class="btn" @click.prevent="updateUser">Atualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EditUser",
  data() {
    return {
      info: {
        name: "",
        surname: "",
        email: "",
        telephone: "",
        address: "",
      },
    };
  },
  components: {},
  methods: {
    updateUser() {
      console.log(this.info.name);
      this.$emit("close");
    },
    cancelEdition() {
      this.$emit("close");
    },
  },
  props: {
    userInfo: {},
  },
  mounted() {
    this.info.name = this.userInfo.name;
    this.info.surname = this.userInfo.surname;
    this.info.email = this.userInfo.email;
    this.info.telephone = this.userInfo.telephone;
    this.info.address = this.userInfo.address;
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