<template>
  <section>
    <div class="home">
      <div class="container">
        <!-- <div class="title">
          <div class="title-nav">
            <router-link to="/admin"> Home </router-link>
            <p>></p>
            <h1>Disciplinas</h1>
          </div>
          <button class="btn">Adicionar Matéria</button>
        </div> -->
        <ComponentsTable
          :headers="tableHeaders"
          :headersModal="headersModal"
          :data="tableBody"
          :actions="true"
          @closeUpdate="updateSubject"
          @deleteItem="deleteSubject"
          @closeCreation="createSubject"
          :pageTitle="pageTitle"
          :buttonTitle="buttonTitle"
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
        { label: "Disciplina", value: "name" },
        { label: "Carga Horária", value: "workLoad" },
        { label: "Ementa", value: "menu" },
        { label: "Turmas", value: "classes" },
      ],
      headersModal: [
        { label: "Disciplina", value: "name" },
        { label: "Carga Horária", value: "workLoad" },
        { label: "Ementa", value: "menu" },
        { label: "Turmas", value: "classes" },
      ],

      actions: [],
      tableBody: [],
      pageTitle: "Disciplinas",
      buttonTitle: "Disciplina",
    };
  },

  async mounted() {
    await this.getSubjects();

    this.tableBody = this.actions.map((object) => {
      const newObject = {
        name: object.name,
        workLoad: object.workLoad,
        menu: object.menu,
        classes: object.classes.name,
      };

      return newObject;
    });
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

    // Create Subject
    async createSubject(info) {
      try {
        const tokenValue = localStorage.getItem("auth");
        console.log(info);
        const req = await subjects.createSubject(tokenValue, info);

        console.log(req);
        if (req.status === 201) {
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    },

    // Update Subject
    async updateSubject(info) {
      try {
        const tokenValue = localStorage.getItem("auth");
        console.log(info);
        const req = await subjects.updateSubject(tokenValue, info);

        if (req.status === 204) {
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    },

    // Delete Subject
    async deleteSubject(item) {
      try {
        const tokenValue = localStorage.getItem("auth");
        const id = item._id;

        let alert = confirm("Tem certeza disso?");
        if (alert) {
          const req = await subjects.deleteSubject(tokenValue, id);
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