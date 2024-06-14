import { createApp } from 'vue';
import App from './App2.vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router/index.js';
import './main.css';
import store from '../store';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
