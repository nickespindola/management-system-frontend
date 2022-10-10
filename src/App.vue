<template>
  <div id="app">
    <router-view />
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
