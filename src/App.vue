<template>
  <div id="app">
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
// import TheHeader from "./components/TheHeader.vue";
export default {
  // components: { TheHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;800&family=Poppins&family=Roboto&family=Sora:wght@400;700&display=swap");

:root {
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

a {
  color: #000;
  text-decoration: none;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #f5f5f4;
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
  background: #d6d3d1;
  transform: scale(1.05);
  color: #000;
  font-weight: 700;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
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
  transition: all 1s;
}
</style>
