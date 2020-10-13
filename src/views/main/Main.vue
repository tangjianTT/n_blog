<template>
  <div id="main1">
    <!-- Post -->
    <main-content>
      <div slot="list">
        <!-- Post -->
        <article class="post" v-for="(item,index) in post" :key="index">
          <header>
            <div class="title">
              <h2>
                <a href="#">{{item.title}}</a>
              </h2>
              <p>{{item.introduction}}</p>
            </div>
            <div class="meta">
              <time class="published" datetime="2015-11-01">{{item.created}}</time>
              <a href="#" class="author">
                <span class="name">Tj</span>
                <img src="~assets/img/blog/head.jpg" alt />
              </a>
            </div>
          </header>
          <!--  <a href="#" class="image featured">
        <img src="~assets/img/pic01.jpg" alt />
          </a>-->

          <!-- <mavon-editor v-model="item.content"></mavon-editor> -->
          <div v-html="item.content" class="content"></div>

          <footer class="footer">
            <ul class="actions">
              <li>
                <a class="button big" @click="detailClick(item.id)">继续阅读</a>
              </li>
            </ul>
            <ul class="stats">
              <li>
                <a href="#">General</a>
              </li>
              <li>
                <a href="#" class="icon fa-heart">28</a>
              </li>
              <li>
                <a href="#" class="icon fa-comment">128</a>
              </li>
            </ul>
          </footer>
        </article>

        <ul class="actions pagination">
          <li>
            <a href class="disabled button big previous">Previous Page</a>
          </li>
          <li>
            <a href="#" class="button big next">Next Page</a>
          </li>
        </ul>
      </div>
    </main-content>
  </div>
</template>

<script>
import { getPosts } from "network/main.js";
import MainContent from "views/main/MainContent";
export default {
  name: "Main",
  data() {
    return {
      post: []
    };
  },
  components: {
    MainContent
  },
  methods: {
    detailClick(id) {
      this.$router.push("/blog/" + id).catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    getPosts().then(res => {
      var data = res.data;

      if (data.respCode == 200) {
        this.post = data.data;
        console.log(this.post);

        this.post.forEach(pt => {
          var MardownIt = require("markdown-it");
          var md = new MardownIt();
          // console.log(typeof pt.content);
          var result = md.render(pt.content);
          pt.content = result;
          console.log(result);
        });
      }
    });
  }
};
</script>

<style scoped>
.content {
  width: 856px;
  height: 116px; /*假设，5个字符的宽度是50*/
  text-overflow: ellipsis; /*文本du超出隐藏zhi*/
  overflow: hidden; /*隐藏，跟text-overflow配合使用*/
}

.footer {
  padding-top: 20px;
}
</style>