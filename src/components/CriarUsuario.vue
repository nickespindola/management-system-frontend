<template>
  <section>
    <div class="container">
      <div class="content">
        <h1>Criar Usuário</h1>
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
            <div class="info">
              <label for="password">Senha</label>
              <input type="text" v-model="info.password" />
            </div>
            <div class="btns">
              <button type="submit" class="btn" @click.prevent="cancelCreation">
                Cancelar
              </button>
              <button class="btn" @click.prevent="createUser">Criar</button>
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
  name: "CreateUser",
  data() {
    return {
      info: {
        cpf: "",
        email: "",
        name: "",
        surname: "",
        password: "",
        telephone: "",
        address: "",
        register: "",
        _id: "",
      },
    };
  },
  components: {},
  methods: {
    async createUser(tokenValue, info) {
      try {
        tokenValue = localStorage.getItem("auth");
        info = this.info;
        console.log(info);
        const req = await BackReqs.createUser(tokenValue, info);

        console.log(req);
        if (req.status === 201) {
          this.$emit("close");
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    },

    cancelCreation() {
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
    this.info.password = this.userInfo.password;
    this.info.register = this.userInfo.register;
    this.info._id = this.userInfo._id;
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.content {
  height: 600px;
  width: 500px;
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