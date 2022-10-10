<template>
  <section>
    <TheHeader />
    <div class="home">
      <div class="container">
        <div class="subjects">
          <h2>Matérias:</h2>
          <ul>
            <li>
              <p class="subject-title">Matemática</p>
              <p class="subject-registration">MAT-2022-2N</p>
            </li>
            <li>
              <p class="subject-title">Desenvolvimento de pessoas</p>
              <p class="subject-registration">DEP-2022-2N</p>
            </li>
            <li>
              <p class="subject-title">Logística</p>
              <p class="subject-registration">LOG-2022-2N</p>
            </li>
            <li>
              <p class="subject-title">Direito</p>
              <p class="subject-registration">DIR-2022-2N</p>
            </li>
            <li>
              <p class="subject-title">Teoria Geral da Admnistração</p>
              <p class="subject-registration">TGA-2022-2N</p>
            </li>
          </ul>
        </div>
        <div class="actions">
          <div class="action"><ph-exam :size="90" />Consultar Notas</div>
          <div class="action"><ph-alarm :size="90" />Frequência</div>
          <div class="action"><ph-archive :size="90" /> Requerimentos</div>
        </div>
        <div class="participants">
          <h2>Participantes:</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import { PhExam, PhAlarm, PhArchive } from "phosphor-vue";
export default {
  name: "HomeView",
  components: {
    TheHeader,
    PhExam,
    PhAlarm,
    PhArchive,
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
  justify-content: space-between;
  width: 70%;
  height: 80vh;

  border: 3px solid black;
  border-radius: 6px 36px;
}
/* ================ SUBJECTS CONTAINER ================ */
.subjects {
  width: 25%;
  font-size: 1.1rem;
  text-align: left;
  border-radius: 6px 36px;
  padding: 10px;
}

li {
  margin: 15px;
  list-style: none;
}

/* ================ ACTIONS CONTAINER ================ */
.actions {
  background: lightseagreen;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 10px;
}

.action {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 200px;
  width: 200px;

  background: black;
  color: white;
  border-radius: 6px 36px;

  background: linear-gradient(#000000 0 0) var(--p, 0) / var(--p, 0) no-repeat;
  transition: 0.7s, background-position 0s;
  border: 3px solid black;
}

.action:hover {
  --p: 100%;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;
}

/* ================ PARTICIPANTS CONTAINER ================ */
.participants {
  display: flex;
  width: 20%;
  padding: 10px;

  background: lightblue;
  border-radius: 6px 36px;
}
</style>