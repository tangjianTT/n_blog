<template>
  <section id="sidebar">
    <!-- Intro -->
    <section id="intro">
      <a href="#" class="logo">
        <img src="~assets/img/logo.jpg" alt />
      </a>
      <header>
        <h2>NOOB BLACK</h2>
        <p>小菜鸟的成长之路</p>
      </header>
    </section>

    <!-- Mini Posts -->
    <section>
      <div class="mini-posts" v-for="(item,index) in post " :key="index">
        <!-- Mini Post -->

        <article class="mini-post">
          <header>
            <h3>
              <a href="#">{{item.title}}</a>
            </h3>
            <time class="published" datetime="2015-10-20">{{item.created}}</time>
            <a href="#" class="author">
              <img :src="item.postImg" alt />
            </a>
          </header>
          <a href="#" class="image">
            <img :src="item.postImg" alt />
          </a>
        </article>

        <!-- Mini Post -->
        <!--  <article class="mini-post">
          <header>
            <h3>
              <a href="#">Rutrum neque accumsan</a>
            </h3>
            <time class="published" datetime="2015-10-19">October 19, 2015</time>
            <a href="#" class="author">
              <img src="~assets/img/avatar.jpg" alt />
            </a>
          </header>
          <a href="#" class="image">
            <img src="~assets/img/pic05.jpg" alt />
          </a>
        </article>-->

        <!-- Mini Post -->
        <!--  <article class="mini-post">
          <header>
            <h3>
              <a href="#">Odio congue mattis</a>
            </h3>
            <time class="published" datetime="2015-10-18">October 18, 2015</time>
            <a href="#" class="author">
              <img src="~assets/img/avatar.jpg" alt />
            </a>
          </header>
          <a href="#" class="image">
            <img src="~assets/img/pic06.jpg" alt />
          </a>
        </article>-->

        <!-- Mini Post -->
        <!--    <article class="mini-post">
          <header>
            <h3>
              <a href="#">Enim nisl veroeros</a>
            </h3>
            <time class="published" datetime="2015-10-17">October 17, 2015</time>
            <a href="#" class="author">
              <img src="~assets/img/avatar.jpg" alt />
            </a>
          </header>
          <a href="#" class="image">
            <img src="~assets/img/pic07.jpg" alt />
          </a>
        </article>-->
      </div>
    </section>

    <!-- Posts List -->
    <section>
      <ul class="posts">
        <li>
          <article>
            <header>
              <h3>
                <a href="#">Lorem ipsum fermentum ut nisl vitae</a>
              </h3>
              <time class="published" datetime="2015-10-20">October 20, 2015</time>
            </header>
            <a href="#" class="image">
              <img src="~assets/img/pic08.jpg" alt />
            </a>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <a href="#">Convallis maximus nisl mattis nunc id lorem</a>
              </h3>
              <time class="published" datetime="2015-10-15">October 15, 2015</time>
            </header>
            <a href="#" class="image">
              <img src="~assets/img/pic09.jpg" alt />
            </a>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <a href="#">Euismod amet placerat vivamus porttitor</a>
              </h3>
              <time class="published" datetime="2015-10-10">October 10, 2015</time>
            </header>
            <a href="#" class="image">
              <img src="~assets/img/pic10.jpg" alt />
            </a>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <a href="#">Magna enim accumsan tortor cursus ultricies</a>
              </h3>
              <time class="published" datetime="2015-10-08">October 8, 2015</time>
            </header>
            <a href="#" class="image">
              <img src="~assets/img/pic11.jpg" alt />
            </a>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <a href="#">Congue ullam corper lorem ipsum dolor</a>
              </h3>
              <time class="published" datetime="2015-10-06">October 7, 2015</time>
            </header>
            <a href="#" class="image">
              <img src="~assets/img/pic12.jpg" alt />
            </a>
          </article>
        </li>
      </ul>
    </section>

    <!-- About -->
    <section class="blurb">
      <h2>关于</h2>
      <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
      <ul class="actions">
        <li>
          <a href="#" class="button">Learn More</a>
        </li>
      </ul>
    </section>

    <!-- Footer -->
    <section id="footer">
      <ul class="icons">
        <li>
          <a href="#" class="fa-twitter">
            <span class="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" class="fa-facebook">
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" class="fa-instagram">
            <span class="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" class="fa-rss">
            <span class="label">RSS</span>
          </a>
        </li>
        <li>
          <a href="#" class="fa-envelope">
            <span class="label">Email</span>
          </a>
        </li>
      </ul>
      <p class="copyright">
        &copy; Untitled. More Templates
        <a
          href="http://www.cssmoban.com/"
          target="_blank"
          title="模板之家"
        >模板之家</a> - Collect from
        <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a>.
      </p>
    </section>
  </section>
</template>

<script>
import { getSideBar } from "network/sidebar.js";

export default {
  name: "Sidebar",
  data() {
    return {
      post: []
    };
  },
  mounted() {
    getSideBar().then(res => {
      // console.log(res.data);

      var data = res.data;
      if (data.respCode == 200) {
        this.post = data.data;
      }
      console.log(this.post);
    });
  }
};
</script>

<style scoped>
</style>