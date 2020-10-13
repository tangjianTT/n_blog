<template>
  <header id="header">
    <h1>
      <a href="/">Noob's Home</a>
    </h1>
    <nav class="links">
      <ul>
        <li>
          <a href="#">首 &#12288; 页</a>
        </li>
        <li>
          <a href="#">小 &#12288; N</a>
        </li>
        <li>
          <a href="#">学 &#12288; 术</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <!-- <li>
          <a href="#">Adipiscing</a>
        </li>-->
      </ul>
    </nav>
    <nav class="main">
      <ul>
        <li class="search">
          <a class="fa-search" href="#search">Search</a>
          <form id="search" method="get" action="#">
            <input type="text" name="query" placeholder="Search" />
          </form>
        </li>
        <li class="menu">
          <a class="fa-bars" @click="menuShow">Menu</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuShow: 0
    };
  },
  methods: {
    menuShow() {
      this.$store.commit("menuToggle");
      $(".mask").fadeIn(700);
    }
  }
};
</script>

<style scoped>
</style>