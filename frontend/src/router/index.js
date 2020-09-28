import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './router';

// Load VueRouter
Vue.use(VueRouter);

// Activate routes
export const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});