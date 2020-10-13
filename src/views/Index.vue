<template>
  <div id="wrapper">
    <noob-header></noob-header>
    <noob-menu></noob-menu>
    <noob-main></noob-main>
    <noob-sidebar></noob-sidebar>
    <div
      :class="{isMenuVisible:isMenuVisible}"
      class="mask"
      :style="{display:isMenuVisible?'block':'none'}"
      @click="maskClick"
    ></div>
  </div>
  <!-- <noob-main></noob-main> -->
</template>

<script>
import NoobHeader from "views/header/Header";
import NoobMenu from "views/menu/Menu";
import NoobMain from "views/main/Main";
import NoobSidebar from "views/sidebar/Sidebar";
export default {
  name: "Index",
  components: {
    NoobHeader,
    NoobMenu,
    NoobMain,
    NoobSidebar
  },
  computed: {
    isMenuVisible() {
      return this.$store.state.isMenuShow;
    }
  },
  methods: {
    maskClick() {
      this.$store.state.isMenuShow = !this.$store.state.isMenuShow;
    }
  }
};
</script>

<style >
.isMenuVisible {
  background-color: rgba(220, 220, 220, 0.7);
  /* opacity: 0.15; */
}
.isMenuVisible {
  -moz-transform: translateX(0);
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  /* transform: translateX(0); */
  visibility: visible;
  transform: translateX(-25em);
  transition: all 0.8s;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 101;
  display: none;
}
</style>


