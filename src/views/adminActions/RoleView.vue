<template>
  <section>
    <div class="home">
      <div class="container">
        <!-- <div class="title">
          <div class="title-nav">
            <router-link to="/admin"> Home </router-link>
            <p>></p>
            <h1>Papéis</h1>
          </div>
          <button class="btn">Adicionar Papel</button>
        </div> -->
        <ComponentsTable
          :headers="tableHeaders"
          :headersModal="headersModal"
          :data="tableBody"
          :actions="true"
          @closeUpdate="updateUser"
          @deleteItem="deleteRole"
          :pageTitle="pageTitle"
          :buttonTitle="buttonTitle"
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
      tableBody: [],
      actions: [],
      pageTitle: "Papéis",
      buttonTitle: "Papel",
    };
  },

  async mounted() {
    await this.getRoles();

    this.tableBody = this.actions.map((object) => {
      const newObject = {
        _id: object._id,
        name: object.name,
        actions: object.actions[0].name,
      };

      return newObject;
    });

    console.log(this.tableBody);
  },

  methods: {
    async getRoles(tokenValue) {
      try {
        tokenValue = localStorage.getItem("auth");
        const req = await roles.readRoles(tokenValue);
        this.actions = req.data;
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
            const deletedItem = this.tableHeaders.find(
              (item) => item._id === id
            );
            const index = this.tableHeaders.indexOf(deletedItem);
            this.tableHeaders.splice(index, 1);
            location.reload();
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