// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/common.css'
import 'jquery'
import axios from 'axios'
import mockdata from "./mock";
import MetaInfo from 'vue-meta-info'
 
Vue.use(MetaInfo)
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  /* 这句非常重要，否则预渲染将不会启动 */
  mounted () {
      document.dispatchEvent(new Event('render-event'))
  }
})
