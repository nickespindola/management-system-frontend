<template>
  <section>
    <div class="home">
      <div class="container">
        <div class="title">
          <div class="title-nav">
            <router-link to="/admin"> Home </router-link>
            <p>></p>
            <h1>Ações</h1>
          </div>
          <button class="btn">Adicionar Ação</button>
        </div>
        <ComponentsTable
          :headers="tableHeaders"
          :data="actions"
          :actions="true"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ComponentsTable from "@/components/ComponentsTable.vue";
import actions from "@/req/api/actionsControl";

export default {
  components: { ComponentsTable },

  data() {
    return {
      tableHeaders: [
        { label: "ID", value: "_id" },
        { label: "Nome", value: "name" },
        { label: "Métodos", value: "methods" },
      ],
      actions: [{}],
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
  },
};
</script>

<style scoped>
.home {
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