<template>
  <section>
    <div class="home">
      <div class="container">
        <div class="title">
          <div class="title-nav">
            <router-link to="/admin"> Home </router-link>
            <p>></p>
            <h1>Disciplinas</h1>
          </div>
          <button class="btn">Adicionar Matéria</button>
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
import ComponentsTable from "@/components/modals/ComponentsTable.vue";
import subjects from "@/req/api/subjectControl";

export default {
  components: { ComponentsTable },

  data() {
    return {
      tableHeaders: [
        { label: "ID", value: "_id" },
        { label: "Disciplina", value: "name" },
        { label: "Carga Horária", value: "workLoad" },
        { label: "Ementa", value: "menu" },
        { label: "Turmas", value: "classes" },
      ],
      actions: [{}],
    };
  },

  mounted() {
    this.getSubjects();
  },

  methods: {
    async getSubjects(tokenValue) {
      try {
        tokenValue = localStorage.getItem("auth");
        const req = await subjects.readSubjects(tokenValue);
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