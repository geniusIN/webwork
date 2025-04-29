// 제일 먼저 실행


// import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'//  /index.js는 생략 가능.

createApp(App)
    .use(router)
    .mount('#app')
