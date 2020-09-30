import Vue from 'vue';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { router } from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import App from './components/App.vue';

window.Vue = require('vue');

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
// axios.defaults.baseURL = 'http://ecommerce.fillycoder.com/api';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
  
const app = new Vue({
  el: '#app',
  router,
  // store,
  // mode: 'production',
  ...App
});
  