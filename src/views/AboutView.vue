<template>
  <section>
    <TheHeader />
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <TheFooter />
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
.about {
  height: 90vh;
}
</style>
