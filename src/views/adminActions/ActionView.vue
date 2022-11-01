<template>
  <section>
    <!-- <CreateModal v-if="createModal" /> -->
    <div class="home">
      <div class="container">
        <!-- <div class="title">
          <div class="title-nav">
            <router-link to="/admin"> Home </router-link>
            <p>></p>
            <h1>Ações</h1>
          </div>
          <button class="btn" @click="openCreation">Adicionar Ação</button>
        </div> -->
        <ComponentsTable
          :headers="tableHeaders"
          :headersModal="headersModal"
          :data="actions"
          :actions="true"
          @closeUpdate="updateAction"
          @deleteItem="deleteAction"
          @closeCreation="createAction"
          :pageTitle="pageTitle"
          :buttonTitle="buttonTitle"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ComponentsTable from "@/components/modals/ComponentsTable.vue";
// import CreateModal from "@/components/modals/CreateModal.vue";
import actions from "@/req/api/actionsControl";

export default {
  components: {
    ComponentsTable,
    // CreateModal,
  },

  data() {
    return {
      tableHeaders: [
        { label: "ID", value: "_id" },
        { label: "Nome", value: "name" },
        { label: "Métodos", value: "methods" },
      ],
      headersModal: [
        { label: "Nome", value: "name" },
        { label: "Métodos", value: "methods" },
      ],
      actions: [{}],
      createModal: false,
      pageTitle: "Ações",
      buttonTitle: "Ação",
    };
  },

  mounted() {
    this.getActions();
  },

  methods: {
    async getActions(tokenValue) {
      try {
        tokenValue = localStorage.getItem("auth");
        const req = await actions.readActions(tokenValue);
        this.actions = req.data;
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },

    // Create Action
    async createAction(info) {
      try {
        const tokenValue = localStorage.getItem("auth");
        console.log(info);
        const req = await actions.createAction(tokenValue, info);

        console.log(req);
        if (req.status === 201) {
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    },

    // Update Action
    async updateAction(info) {
      try {
        const tokenValue = localStorage.getItem("auth");
        console.log(info);
        const req = await actions.updateActions(tokenValue, info);

        if (req.status === 204) {
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    },

    // Delete Action
    async deleteAction(item) {
      try {
        const tokenValue = localStorage.getItem("auth");
        const id = item._id;

        let alert = confirm("Tem certeza disso?");
        if (alert) {
          const req = await actions.deleteActions(tokenValue, id);
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

    openCreation() {
      this.createModal = true;
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