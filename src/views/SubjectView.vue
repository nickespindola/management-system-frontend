<template>
  <section>
    <TheHeader />
    <StudentHome />
    <TheFooter />
  </section>
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import StudentHome from "@/components/StudentHome.vue";

export default {
  components: {
    TheFooter,
    TheHeader,
    StudentHome,
  },
};
</script>

<style scoped>
</style>