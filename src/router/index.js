import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('views/Index');
const Blog = () => import('views/Blog');
const Detail = () => import('views/detail/Detail')

export default new Router({
  routes: [{
    path: '',
    component: Blog
  }, {
    path: '/blog',
    component: Index
  }, {
    path: '/blog/:id',
    component: Detail
  }],
  mode: 'history'
})
