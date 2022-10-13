<template>
  <section>
    <div class="home">
      <div class="container">
        <h1>Ações:</h1>
        <div class="actions-container">
          <router-link to="/admin/listar" class="action">
            <ph-address-book :size="100" color="black" class="icon" />
            <h3>Usuários</h3>
          </router-link>
          <div class="action">
            <ph-user-plus :size="100" color="black" class="icon" />
            <h3>Cadastrar Usuário</h3>
          </div>
          <div class="action">
            <ph-pencil-line :size="100" color="black" class="icon" />
            <h3>Editar Usuário</h3>
          </div>
          <div class="action">
            <ph-trash :size="100" color="black" class="icon" />
            <h3>Deletar Usuário</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { PhAddressBook, PhTrash, PhPencilLine, PhUserPlus } from "phosphor-vue";
export default {
  components: {
    PhAddressBook,
    PhTrash,
    PhPencilLine,
    PhUserPlus,
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
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  justify-content: space-around;
  gap: 30px;
}

.action {
  min-height: 200px;
  border: 3px solid black;
  border-radius: 6px 36px;

  background-image: -webkit-linear-gradient(
    135deg,
    var(--green600) 74%,
    #fff 26%
  );
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 24px rgb(0 0 0 / 40%);
}

.action:hover {
  background-image: -webkit-linear-gradient(
    135deg,
    var(--green600) 70%,
    #fff 30%
  );
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
</style>