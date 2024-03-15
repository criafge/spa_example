import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import AppComponent from './components/AppComponent.vue'
import Home from './components/Home.vue';
import About from './components/About.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/about',
        name: 'about',
        component: About,
      },
    ]
});

export default router;


const app = createApp({
  components: {AppComponent},
});

app.use(router);
app.mount('#app');

// app.component('app-component', AppComponent);
