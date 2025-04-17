import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';
import directive from '@/directive';

const app = createApp(App);

app.use(router);

app.use(directive);

app.mount('#app');
