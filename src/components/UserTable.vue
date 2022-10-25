<template>
  <section>
    <EditarUsuario
      v-if="editModel"
      @close="updateUser(), cancelEdition()"
      :userInfo="actualUser"
    />
    <CriarUsuario
      v-if="createModel"
      @close="createUser(), cancelCreation()"
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
          <button class="btn" @click="openCreation">Adicionar Usuário</button>
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
              <th scope="col">Editar</th>
              <th scope="col">Deletar</th>
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
              <td class="icon">
                <ph-pencil :size="25" @click="openEdition(user)" />
              </td>
              <td v-if="user.name !== 'admin'" class="icon">
                <ph-trash :size="25" @click="deleteUser(user)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import EditarUsuario from "./EditarUsuario.vue";
import CriarUsuario from "./CriarUsuario.vue";
import BackReqs from "@/req/api/backApi";
import { PhPencil, PhTrash } from "phosphor-vue";

export default {
  data() {
    return {
      users: [],
      editModel: false,
      createModel: false,
      actualUser: {},
    };
  },

  mounted() {
    this.getUsers();
  },

  components: {
    PhPencil,
    PhTrash,
    EditarUsuario,
    CriarUsuario,
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

        const alert = window.confirm("Tem certeza disso?");
        if (alert) {
          if (req.status === 204) {
            const deletedUser = this.users.find((user) => user._id === id);
            const index = this.users.indexOf(deletedUser);
            this.users.splice(index, 1);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    openEdition(user) {
      this.actualUser = user;
      this.editModel = true;
    },

    cancelEdition() {
      this.editModel = false;
      this.actualUser = {};
    },

    updateUser() {
      this.editModel = false;
    },

    openCreation() {
      this.createModel = true;
    },

    cancelCreation() {
      this.createModel = false;
    },

    createUser() {
      this.createModel = false;
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
  margin-bottom: 50px;
}

th {
  padding: 1.5rem 2rem;
  background: var(--green500);
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
  padding: 0;
  margin-top: 5px;
}

.icon:hover {
  transform: scale(1.3);
  color: var(--green500);
}
</style>