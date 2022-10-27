<template>
  <section>
    <div class="home">
      <div class="container">
        <div class="title">
          <div class="title-nav">
            <router-link to="/admin"> Home </router-link>
            <p>></p>
            <h1>Matrícula Turma</h1>
          </div>
          <button class="btn">Adicionar Matrícula</button>
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
import enrolleds from "@/req/api/enrolledControl";

export default {
  components: { ComponentsTable },

  data() {
    return {
      tableHeaders: [
        { label: "Usuário da Matrícula", value: "idUser" },
        { label: "Papel", value: "role" },
        { label: "Turma", value: "classGroup" },
        { label: "Nota Final", value: "finalGrade" },
        { label: "Frequência", value: "frequency" },
      ],
      actions: [{}],
    };
  },

  mounted() {
    this.getEnrolleds();
  },

  methods: {
    async getEnrolleds(tokenValue) {
      try {
        tokenValue = localStorage.getItem("auth");
        const req = await enrolleds.readEnrolleds(tokenValue);
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