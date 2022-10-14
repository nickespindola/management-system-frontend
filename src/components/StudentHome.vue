<template>
  <section>
    <div class="home">
      <div class="container">
        <h1>Matemática</h1>
        <div class="content">
          <div class="participants">
            <h2>Participantes:</h2>
            <ul>
              <li>Timothy</li>
              <li>Maurice</li>
              <li>JARBAS</li>
              <li>Alfonso</li>
              <li>Ananias</li>
              <li v-on:click="easterEgg()">Hetfield</li>
              <li>Cacilda</li>
              <li>Dorotéia</li>
              <li>Robert</li>
            </ul>
          </div>
          <div class="actions">
            <div class="action">
              <ph-exam :size="100" color="black" class="icon" />
              <h3>Consultar Notas</h3>
            </div>
            <div class="action">
              <ph-alarm :size="100" color="black" class="icon" />
              <h3>Frequência</h3>
            </div>
            <div class="action">
              <ph-archive :size="100" color="black" class="icon" />
              <h3>Requerimentos</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { PhExam, PhAlarm, PhArchive } from "phosphor-vue";
export default {
  name: "HomeView",
  components: {
    PhExam,
    PhAlarm,
    PhArchive,
  },
  methods: {
    easterEgg() {
      document.body.innerHTML =
        "<iframe width='1120' height='630' src='https://www.youtube.com/embed/CvEA0MT2qAA?autoplay=1' title='YouTube video player' frameborder='0' allow='autoplay'></iframe>";
    },
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
.content {
  display: flex;
  justify-content: space-between;
}

/* ================ ACTIONS CONTAINER ================ */
.actions {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 30px;
}

.action {
  min-height: 200px;
  /* min-width: 400px; */
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

h3 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  font-size: 2rem;
}

/* ================ PARTICIPANTS CONTAINER ================ */
.participants {
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 10px;

  background: var(--green600);
  border-radius: 6px 36px;

  border: 3px solid black;
}

h2 {
  display: flex;
}

li {
  display: flex;
  list-style: none;
  padding: 5px;
}
</style>