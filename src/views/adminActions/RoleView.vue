<template>
  <section>
    <div class="home">
      <div class="container">
        <div class="title">
          <div class="title-nav">
            <router-link to="/admin"> Home </router-link>
            <p>></p>
            <h1>Papéis</h1>
          </div>
          <button class="btn">Adicionar Papel</button>
        </div>
        <ComponentsTable
          :headers="tableHeaders"
          :headersModal="headersModal"
          :data="actions"
          :actions="true"
          @closeUpdate="updateUser"
          @deleteItem="deleteRole"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ComponentsTable from "@/components/modals/ComponentsTable.vue";
import roles from "@/req/api/roleControl";

export default {
  components: { ComponentsTable },

  data() {
    return {
      tableHeaders: [
        { label: "ID do Papel", value: "_id" },
        { label: "Papel", value: "name" },
        { label: "Ações", value: "actions" },
      ],
      headersModal: [
        { label: "Papel", value: "name" },
        { label: "Ação", value: "actions" },
      ],
      actions: [{}],
    };
  },

  mounted() {
    this.getRoles();
  },

  methods: {
    async getRoles(tokenValue) {
      try {
        tokenValue = localStorage.getItem("auth");
        const req = await roles.readRoles(tokenValue);
        this.actions = req.data;
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },

    async updateUser(info) {
      try {
        const tokenValue = localStorage.getItem("auth");
        console.log(info);
        const req = await roles.addActionsInRoles(tokenValue, info);

        if (req.status === 204) {
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async deleteRole(item) {
      try {
        const tokenValue = localStorage.getItem("auth");
        const id = item._id;

        let alert = confirm("Tem certeza disso?");
        if (alert) {
          const req = await roles.deleteRoles(tokenValue, id);
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
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: start;
  min-height: 90vh;
}
.title-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.container {
  margin-top: 5vh;
  width: 80%;
  display: flex;
  flex-direction: column;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

h1 {
  display: flex;
  font-size: 1.8rem;
}
</style>