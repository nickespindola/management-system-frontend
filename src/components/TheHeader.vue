<template>
  <header>
    <nav class="flexcontainer">
      <router-link to="/home">
        <img src="../assets/udesc-horizontal.jpg" />
      </router-link>
      <ul class="listitems">
        <li>
          <router-link to="/about"><p>Sobre</p></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  height: 50px;
  transition: 0.3s;
}

img:hover {
  transform: scale(1.2);
}

header {
  background-color: black;
  color: white;
  height: 10vh;
  display: flex;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

p {
  transition: 0.3s;
}

p:hover {
  transform: scale(1.2);
}

.flexcontainer {
  display: flex;
  margin: auto;
  width: 70%;
  justify-content: space-between;
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