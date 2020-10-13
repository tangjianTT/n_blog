<template>
  <header class="index">
    <div>
      <img :src="info.backgroundImg" alt width="100%" height="100%" />
    </div>
    <div class="noob-main">
      <div class="noob-main-content">
        <a href title="前往小白Noob的主页" class="blog-button">
          <img :src="info.headerImg" alt width="80" class="panel-cover__logo logo" />
        </a>
        <h2 class="noob-title">{{info.title}}</h2>
        <span class="noob-cover__subtitle noob-subtitle">{{info.wisdom}}</span>
        <hr class="noob-hr" />
        <span class="noob-subtitle noob-introduce">{{info.introduce}}</span>
        <hr class="noob-hr two" />
        <span>{{info.code}}</span>
        <div>
          <nav class="cover-navigation cover-navigation--primary">
            <ul class="navigation">
              <li class="navigation__item">
                <span @click="spanClick('/blog')">博客</span>
              </li>
              <li class="navigation__item">
                <span @click="spanClick('/resume')">简历</span>
              </li>
              <li class="navigation__item">
                <span>随记</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- <router-view></router-view> -->
  </header>
</template>

<script>
import { getInfo } from "network/blog.js";

export default {
  name: "Index",
  data() {
    return {
      info: {
        backgroundImg: "",
        headerImg: "",
        title: "",
        wisdom: "",
        introduce: "",
        code: ""
      }
    };
  },
  mounted() {
    getInfo().then(res => {
      // console.log(res.data);
      var data = res.data;
      if (data.respCode == 200) {
        this.info = res.data.data;
      }
      console.log(this.info);
    });
  },
  methods: {
    spanClick(path) {
      this.$router.push(path).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style scoped>
.index {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 0;
}
.noob-main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(61, 66, 96, 0.7);
  z-index: 1;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}

.noob-main-content {
  margin: auto auto;
  max-width: 620px;
  widows: 588px;
  text-align: center;
  color: #fff;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -299px;
}

.logo {
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 12px;
}

.noob-title {
  margin: 0 0 5px 0;
  font-size: 2.5em;
  letter-spacing: 4px;
  color: #fff;
  font-weight: 300;
  margin-bottom: 12px;
}
.noob-subtitle {
  font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande",
    "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  font-size: 1em;
  font-weight: lighter;
  letter-spacing: 3px;
  color: #cccccc;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 12px;
}

.noob-hr {
  border: none;
  width: 80%;
  margin: 20px auto;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}

.noob-introduce {
  display: block;
  font-size: 1.2em;
  color: #fff;
}

.two {
  width: 50%;
}
.cover-navigation {
  margin-top: 42px;
}

nav {
  display: inline-block;
  position: relative;
}

.navigation {
  display: inline-block;
  position: relative;
  margin: 0;
  list-style-type: none;
}

.navigation__item {
  cursor: pointer;
  display: inline-block;
  margin: 5px 15px 0 0;
  line-height: 1em;
}

.navigation__item span {
  display: block;
  position: relative;
  border-color: #fff;
  color: #fff;
  opacity: 0.8;
}

.navigation__item span {
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: none;
  color: #fff;
  -webkit-font-smoothing: antialiased;
}

.navigation__item span:hover {
  color: skyblue;
}
</style>