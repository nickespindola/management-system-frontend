<template>
  <section>
    <div class="home">
      <div class="container">
        <h1>Matérias:</h1>
        <div class="subjects">
          <router-link to="/subject" class="subject-card">
            <div class="subject-img">
              <ph-graduation-cap :size="100" color="black" />
            </div>
            <div class="subject-text">
              <h2 class="subject-title">Matemática</h2>
              <p class="subject-registration">MAT-2022-2N</p>
            </div>
          </router-link>
          <div class="subject-card">
            <div class="subject-img">
              <ph-graduation-cap :size="100" color="black" />
            </div>
            <div class="subject-text">
              <h2 class="subject-title">Desenvolvimento de pessoas</h2>
              <p class="subject-registration">DEP-2022-2N</p>
            </div>
          </div>
          <div class="subject-card">
            <div class="subject-img">
              <ph-graduation-cap :size="100" color="black" />
            </div>
            <div class="subject-text">
              <h2 class="subject-title">Logística</h2>
              <p class="subject-registration">LOG-2022-2N</p>
            </div>
          </div>
          <div class="subject-card">
            <div class="subject-img">
              <ph-graduation-cap :size="100" color="black" />
            </div>
            <div class="subject-text">
              <h2 class="subject-title">Inteligência de Negócios</h2>
              <p class="subject-registration">DIR-2022-2N</p>
            </div>
          </div>
          <div class="subject-card">
            <div class="subject-img">
              <ph-graduation-cap :size="100" color="black" />
            </div>
            <div class="subject-text">
              <h2 class="subject-title">Teoria Geral da Admnistração</h2>
              <p class="subject-registration">TGA-2022-2N</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { PhGraduationCap } from "phosphor-vue";

export default {
  name: "HomeView",
  components: {
    PhGraduationCap,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
}

/* ================ TITLE CONTAINER ================ */
h1 {
  margin-top: 60px;
  margin-bottom: 20px;
  display: flex;
  font-size: 2rem;
}

/* ================ SUBJECTS CONTAINER ================ */
.subjects {
  display: grid;
  justify-items: space-between;
  gap: 40px;
  grid-template: 1fr 1fr / 1fr 1fr;
  row-gap: 40px;
  margin-bottom: 75px;
}

.subject-card {
  min-height: 250px;
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

.subject-card:hover {
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

.subject-text {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  color: white;
  padding: 20px;
}

.subject-img {
  display: flex;
  padding-top: 10px;
  padding-left: 20px;
}

h2 {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 1.8rem;
  /* margin-bottom: 10px; */
  text-align: right;
  max-width: 450px;
  color: #000;
}
</style>