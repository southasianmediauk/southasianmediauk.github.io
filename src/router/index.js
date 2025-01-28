import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Services from '@/views/Services.vue';
import Portfolio from '@/views/Portfolio.vue';
import Careers from '@/views/Careers.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/portfolio', component: Portfolio },
  { path: '/careers', component: Careers },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
