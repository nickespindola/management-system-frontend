<template>
  <section>
    <div class="home">
      <div class="container">
        <div class="title">
          <div class="title-nav">
            <router-link to="/admin"> Home </router-link>
            <p>></p>
            <h1>Turmas</h1>
          </div>
          <button class="btn">Adicionar Turma</button>
        </div>
        <ComponentsTable
          :headers="tableHeaders"
          :headersModal="headersModal"
          :data="actions"
          :actions="true"
          @closeUpdate="updateClass"
          @deleteItem="deleteClass"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ComponentsTable from "@/components/modals/ComponentsTable.vue";
import classes from "@/req/api/classControl";

export default {
  components: { ComponentsTable },

  data() {
    return {
      tableHeaders: [
        { label: "Nome", value: "name" },
        { label: "Vagas", value: "vacancy" },
        { label: "Data de Início", value: "dateStart" },
        { label: "Data de Conclusão", value: "dateEnd" },
        { label: "Matriculados", value: "enrolled" },
        { label: "Matéria", value: "subject" },
      ],
      headersModal: [
        { label: "Nome", value: "name" },
        { label: "Vagas", value: "vacancy" },
        { label: "Data de Início", value: "dateStart" },
        { label: "Data de Conclusão", value: "dateEnd" },
        { label: "Matriculados", value: "enrolled" },
        { label: "Matéria", value: "subject" },
      ],

      actions: [{}],
    };
  },

  mounted() {
    this.getClasses();
  },

  methods: {
    async getClasses(tokenValue) {
      try {
        tokenValue = localStorage.getItem("auth");
        const req = await classes.readClasses(tokenValue);
        this.actions = req.data;
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },

    async updateClass(info) {
      try {
        const tokenValue = localStorage.getItem("auth");
        console.log(info);
        const req = await classes.updateClass(tokenValue, info);

        if (req.status === 204) {
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async deleteClass(item) {
      try {
        const tokenValue = localStorage.getItem("auth");
        const id = item._id;

        let alert = confirm("Tem certeza disso?");
        if (alert) {
          const req = await classes.deleteClass(tokenValue, id);
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