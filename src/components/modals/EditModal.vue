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
              <label for="cpf">CPF</label>
              <input type="text" v-model="info.cpf" />
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
import BackReqs from "@/req/api/backApi.js";
export default {
  name: "EditUser",
  data() {
    return {
      info: {
        name: "",
        surname: "",
        cpf: "",
        email: "",
        telephone: "",
        address: "",
        _id: "",
      },
    };
  },
  components: {},
  methods: {
    async updateItem(tokenValue, info) {
      try {
        tokenValue = localStorage.getItem("auth");
        info = this.info;
        const req = await BackReqs.updateUser(tokenValue, info);

        if (req.status === 204) {
          this.$emit("close");
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
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
    this.info.cpf = this.userInfo.cpf;
    this.info.email = this.userInfo.email;
    this.info.telephone = this.userInfo.telephone;
    this.info.address = this.userInfo.address;
    this.info._id = this.userInfo._id;
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.content {
  height: 37.5rem;
  width: 31.25rem;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  padding: 5px;
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