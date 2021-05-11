import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

const theme = `hsl(${Math.floor( Math.random() * 36 ) * 10},50%,50%)`;
document.body.style.setProperty('--theme', theme);
document.querySelector('link[rel=icon]').href = `data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M61 30c11.046 0 20-8.954 20-20h20c5.523 0 10 4.477 10 10v80c0 5.523-4.477 10-10 10H81c0-11.046-8.954-20-20-20s-20 8.954-20 20H21c-5.523 0-10-4.477-10-10V20c0-5.523 4.477-10 10-10h20c0 11.046 8.954 20 20 20zm0 40c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z' fill='${theme}'/%3E%3C/svg%3E`


createApp(App).mount('#app')
