<template>
  <div class="menu">
    <section
      id="menu"
      :style="{transform: getShowFlag?'translateX(0)':'translateX(25em)', visibility: isShowFlag?'':'hidden'}"
    >
      <!-- Search -->
      <section>
        <form class="search" method="get" action="#">
          <input type="text" name="query" placeholder="Search" />
        </form>
      </section>

      <!-- Links -->
      <section>
        <ul class="links">
          <li>
            <a href="#">
              <h3>Lorem ipsum</h3>
              <p>Feugiat tempus veroeros dolor</p>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>Dolor sit amet</h3>
              <p>Sed vitae justo condimentum</p>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>Feugiat veroeros</h3>
              <p>Phasellus sed ultricies mi congue</p>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>Etiam sed consequat</h3>
              <p>Porta lectus amet ultricies</p>
            </a>
          </li>
        </ul>
      </section>

      <!-- Actions -->
      <section>
        <ul class="actions vertical">
          <li>
            <a href="#" class="button big fit">Log In</a>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isShowFlag: 0
    };
  },
  computed: {
    getShowFlag() {
      this.isShowFlag = this.$store.state.isMenuShow;
      console.log(this.isShowFlag);

      return this.$store.state.isMenuShow;
    }
  }
};
</script>

<style scoped>
.menu {
  z-index: 1000;
}
</style>