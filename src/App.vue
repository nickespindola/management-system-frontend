<template>
  <div id="app">
    <transition mode="out-in">
      <TheHeader v-if="$route.name !== 'login'" />
    </transition>
    <transition mode="out-in">
      <router-view />
    </transition>
    <TheFooter v-if="$route.name !== 'login'" />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },

  computed: {},

  created() {
    console.log(this.$route);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;800&family=Poppins&family=Roboto&family=Sora:wght@400;700&display=swap");

:root {
  --green400: #4ade80;
  --green500: #22c55e;
  --green600: #16a34a;
  --green700: #15803d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.btn {
  display: block;
  padding: 15px 30px;
  background: var(--green500);
  border-radius: 4px;
  color: #000;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
}

.btn:hover {
  background: var(--green700);
  transform: scale(1.05);
  color: #000;
  font-weight: 700;
}

a {
  color: #000;
  text-decoration: none;
}

nav a {
  color: #fff;
  text-decoration: none;
  transition: 0.2s;
}

nav a:hover {
  color: var(--green600);
}

nav a.router-link-exact-active {
  color: var(--green600);
  font-size: 1.5rem;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s;
}
</style>
