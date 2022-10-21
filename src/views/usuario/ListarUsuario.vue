<template>
  <section>
    <TheHeader />
    <EditarUsuario
      v-if="activeModel"
      @close="updateUser(), cancelEdition()"
      :userInfo="actualUser"
    />
    <div class="home">
      <div class="container">
        <div class="title">
          <div class="title-nav">
            <router-link to="/admin"> Home </router-link>
            <p>></p>
            <h1>Usuários</h1>
          </div>
          <button class="btn">Adicionar Usuário</button>
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Sobrenome</th>
              <th scope="col">CPF</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">Endereço</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td>{{ user.name }}</td>
              <td>{{ user.surname }}</td>
              <td>{{ user.cpf }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.telephone }}</td>
              <td>{{ user.address }}</td>
              <td class="actions">
                <ph-pencil class="icon" :size="22" @click="openEdition(user)" />
                <ph-trash class="icon" :size="22" @click="deleteUser(user)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <TheFooter />
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import BackReqs from "@/req/api/backApi";
import { PhPencil, PhTrash } from "phosphor-vue";
import EditarUsuario from "@/components/EditarUsuario.vue";

export default {
  data() {
    return {
      users: [],
      activeModel: false,
      actualUser: {},
    };
  },

  mounted() {
    this.getUsers();
  },

  components: {
    TheHeader,
    TheFooter,
    PhPencil,
    PhTrash,
    EditarUsuario,
  },

  methods: {
    async getUsers(tokenValue) {
      try {
        tokenValue = localStorage.getItem("auth");
        const req = await BackReqs.readUsers(tokenValue);
        this.users = req.data;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteUser(user) {
      try {
        const tokenValue = localStorage.getItem("auth");
        const id = user._id;
        const req = await BackReqs.deleteUser(tokenValue, id);
        console.log(req);

        if (req.status === 204) {
          const deletedUser = this.users.find((user) => user._id === id);
          const index = this.users.indexOf(deletedUser);
          this.users.splice(index, 1);
        }
      } catch (error) {
        console.log(error);
      }
    },

    openEdition(user) {
      this.actualUser = user;
      console.log(this.actualUser);
      this.activeModel = true;
    },

    cancelEdition() {
      this.activeModel = false;
    },

    updateUser() {
      console.log(this.user.name);
      this.activeModel = false;
    },
  },
  computed: {
    user() {
      return this.getUsers();
    },
  },
};
</script>

<style scoped>
.home {
  /* height: auto;
  width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.container {
  margin-top: 5vh;
  width: 80%;
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
}

h1 {
  display: flex;
  font-size: 1.8rem;
}

/* ================== TABLE ================== */
table {
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 24px rgb(0 0 0 / 50%);
}

th {
  padding: 1.5rem 2rem;
  background: var(--green600);
  text-align: left;
  font-size: 1rem;
}

td {
  text-align: left;
  padding: 1rem 2rem;
}

tr:nth-child(odd) {
  background: #ecedf1;
}

/* ================== ACTIONS ================== */
.actions {
  display: flex;
  justify-content: space-between;
}

.icon {
  text-align: center;
}

.icon:hover {
  transform: scale(1.2);
}

/* ================== FOOTER ================== */
footer {
  margin-top: 300px;
}
</style>