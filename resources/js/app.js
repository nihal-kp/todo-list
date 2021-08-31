require('./bootstrap');

// import Vue from 'vue'
// import App from './vue/app'

// const app = new Vue({
//     el: '#app',
//     components: {
//         App
//     }
// });

import { createApp } from 'vue'

import Home from './components/Home.vue'

const app = createApp({});

app.component('home', Home);


app.mount('#app');