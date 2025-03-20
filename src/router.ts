

import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Single from './views/Single.vue';


const routes = [
  {
    path: '/',       
    component: Home   
  },
  {
    path: '/about', 
    component: About  
  },
  {
    path: '/contact', 
    component: Contact  
  },
  {
    path: '/blog/single/:id', 
    component: Single  
  }
];

const router = createRouter({
  history: createWebHistory(),  
  routes
});

export default router;
