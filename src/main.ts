import { createApp } from 'vue';
import 'highlight.js/styles/github.css'; // 你可以选择其他主题
import 'github-markdown-css';
import './style.css';
import App from './App.vue';
import router from '@/router';
import directive from '@/directive';

const app = createApp(App);

app.use(router);

app.use(directive);

app.mount('#app');
