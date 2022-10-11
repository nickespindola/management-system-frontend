<template>
  <header>
    <div class="flexcontainer">
      <router-link to="/home">
        <img src="../assets/udesc-horizontal.jpg" />
      </router-link>
      <ul class="listitems">
        <li>Suporte</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  height: 50px;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li a {
  text-decoration: none;
  color: white;
}

.flexcontainer {
  display: flex;
  margin: auto;
  width: 70%;
  justify-content: space-between;
}

header {
  background-color: black;
  color: white;
  height: 10vh;
  display: flex;
}

header .listitems {
  display: flex;
  /* max-width: 500px; */
  /* width: 100%; */
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  gap: 10px;
}
</style>