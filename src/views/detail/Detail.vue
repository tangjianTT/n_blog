<template>
  <div>
    <main-content>
      <div slot="list">xxxx</div>
    </main-content>
  </div>
</template>

<script>
import MainContent from "views/main/MainContent";
export default {
  name: "Detail",
  computed: {},
  components: {
    MainContent
  }
};
</script>

<style scoped>
.menu {
  z-index: 1000;
}
</style>