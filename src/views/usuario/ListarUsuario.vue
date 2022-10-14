<template>
  <section>
    <TheHeader />
    <div class="home">
      <div class="container">
        <div class="user-name">oi</div>
      </div>
    </div>
    <TheFooter />
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default { components: { TheHeader, TheFooter } };
</script>

<style scoped>
.home {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>