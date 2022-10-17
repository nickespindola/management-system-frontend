<template>
  <section>
    <TheHeader />
    <div class="home">
      <div class="container">
        <h1>Usuários</h1>
        <table>
          <thead>
            <tr>
              <th scope="col" @click="getUsers">Nome</th>
              <th scope="col">Sobrenome</th>
              <th scope="col">CPF</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">Endereço</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td>{{ user.name }}</td>
              <td>{{ user.surname }}</td>
              <td>{{ user.cpf }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.telephone }}</td>
              <td class="address">{{ user.address }}</td>
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

export default {
  data() {
    return {
      users: [],
    };
  },

  mounted() {
    this.getUsers();
  },

  components: {
    TheHeader,
    TheFooter,
  },

  methods: {
    async getUsers(tokenValue) {
      try {
        tokenValue = localStorage.getItem("auth");
        const req = await BackReqs.readUsers(tokenValue);
        this.users = req.data;
        console.log(req.data);
        console.log(this.users);
      } catch (error) {
        console.log(error);
      }
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
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  /* width: 70%; */
  /* background: red; */
  height: 80vh;
}

h1 {
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

/* ================== TABLE ================== */
table {
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 12px;
}

th {
  width: 250px;
  padding: 1.5rem 2rem;
  background: var(--green600);
  text-align: left;
}

td {
  text-align: left;
  padding: 1rem 2rem;
}

.address {
  width: 400px;
}

tr:nth-child(odd) {
  background: #ecedf1;
}
</style>