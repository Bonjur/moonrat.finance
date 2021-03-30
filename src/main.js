import Vue from 'vue'
import App from './App.vue'
import router from './router';

import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/responsive.css';
import './assets/css/slick.css';
import './assets/css/style.css';

Vue.config.productionTip = false

import Particles from "particles.vue";
import VueSplash from 'vue-splash';

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

Vue.use(VueSplash);
Vue.use(Particles);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')