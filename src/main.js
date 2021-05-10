import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

const theme = `hsl(${Math.floor( Math.random() * 36 ) * 10},50%,50%)`;
document.body.style.setProperty('--theme', theme);
document.querySelector('link[rel=icon]').href = `data:image/svg+xml,%3Csvg width='150' height='100' viewBox='0 0 150 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M55 20c11.046 0 20-8.954 20-20h65c5.523 0 10 4.477 10 10v80c0 5.523-4.477 10-10 10H75c0-11.046-8.954-20-20-20s-20 8.954-20 20H10c-5.523 0-10-4.477-10-10V10C0 4.477 4.477 0 10 0h25c0 11.046 8.954 20 20 20zm0 40c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z' fill='${theme}'/%3E%3C/svg%3E`


createApp(App).mount('#app')
