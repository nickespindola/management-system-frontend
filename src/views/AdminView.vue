<template>
  <section>
    <TheHeader />
    <AdminActions />
    <TheFooter />
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import AdminActions from "../components/AdminActions.vue";
export default {
  components: { TheHeader, TheFooter, AdminActions },
};
</script>

<style scoped>
</style>