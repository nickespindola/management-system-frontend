<template>
  <section>
    <div class="home">
      <div class="container">
        <h1>Boas-vindas</h1>
        <div class="actions-container">
          <router-link to="/admin/usuarios" class="action">
            <ph-users :size="100" color="black" class="icon" />
            <h3>Usuários</h3>
          </router-link>
          <router-link to="/admin/matriculas-turma" class="action">
            <ph-chalkboard-teacher :size="100" color="black" class="icon" />
            <h3>Matrícula Turma</h3>
          </router-link>
          <router-link to="/admin/turmas" class="action">
            <ph-address-book :size="100" color="black" class="icon" />
            <h3>Turmas</h3>
          </router-link>
          <router-link to="/admin/materias" class="action">
            <ph-books :size="100" color="black" class="icon" />
            <h3>Disciplinas</h3>
          </router-link>
          <router-link to="/admin/papeis" class="action">
            <ph-scroll :size="100" color="black" class="icon" />
            <h3>Papéis</h3>
          </router-link>
          <router-link to="/admin/acoes" class="action">
            <ph-crosshair :size="100" color="black" class="icon" />
            <h3>Ações</h3>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  PhAddressBook,
  PhScroll,
  PhChalkboardTeacher,
  PhUsers,
  PhCrosshair,
  PhBooks,
} from "phosphor-vue";

export default {
  components: {
    PhAddressBook,
    PhScroll,
    PhChalkboardTeacher,
    PhUsers,
    PhCrosshair,
    PhBooks,
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
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 80vh;
}

/* ================ TITLE CONTAINER ================ */
h1 {
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

/* ================ CONTENT CONTAINER ================ */
.actions-container {
  margin-top: 40px;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  justify-content: space-around;
  gap: 50px;
}

.action {
  min-height: 250px;
  /* border: 2px solid black; */
  border-radius: 6px 36px;

  background-image: -webkit-linear-gradient(
    135deg,
    var(--green500) 70%,
    var(--green400) 26%
  );

  /* background-color: var(--green400); */
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 24px rgb(0 0 0 / 40%);
}

.action:hover {
  /* background-image: -webkit-linear-gradient(
    135deg,
    var(--green600) 68%,
    #fff 30%
  ); */
  cursor: pointer;
  letter-spacing: 1px;
  transform: scale(1.05, 1.05);
  /* transform: rotate(1turn); */
  box-shadow: 0px 4px 50px rgb(0 0 0 / 50%);
}

.icon {
  display: flex;
  padding-top: 10px;
  padding-left: 20px;
}

h3 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  font-size: 2rem;
}
</style>