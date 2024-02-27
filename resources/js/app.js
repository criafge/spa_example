import './bootstrap';
import { createApp } from 'vue';
import VueRouter from 'vue-router';
use.createApp(VueRouter)

const app = createApp({});

import AppComponent from './components/AppComponent.vue'
app.component('app-component', AppComponent);

app.mount('#app');
