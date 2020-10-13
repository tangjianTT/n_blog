import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index";
import $ from 'jquery'
import mavonEditor from 'mavon-editor'

import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false

Vue.use(mavonEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
