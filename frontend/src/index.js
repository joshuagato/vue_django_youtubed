import Vue from 'vue';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { router } from './router';

import App from './components/App.vue';

window.Vue = require('vue');

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
// axios.defaults.baseURL = 'http://ecommerce.fillycoder.com/api';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

// import { faUsers, faBars, faSearch, faUpload, faSignInAlt, faSignOutAlt, faHome, faHistory, faFolder,
//   faQuestionCircle, faClock, faFireAlt, faFire } from '@fortawesome/free-solid-svg-icons';
// import { faYoutube, faHackerNews, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

// library.add(faYoutube, faHackerNews, faYoutubeSquare, faHome, faUsers, faBars, faSearch, faUpload, faSignInAlt, faSignOutAlt, faHome, 
//   faHistory, faFolder, faQuestionCircle, faClock, faFireAlt, faFire);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);


// if (process.env.MIX_ENV_MODE === 'production') {
//   Vue.config.devtools = false;
//   Vue.config.debug = false;
//   Vue.config.silent = true;
// }
  
const app = new Vue({
  el: '#app',
  router,
  // store,
  // mode: 'production',
  ...App
});
  