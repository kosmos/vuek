import Vue from 'vue';
import Vuek from './vuek';
import App from './App';

Vue.use(Vuek, {
    locales: ['en', 'fr']
});

/* eslint-disable no-new */
new Vue({
    render: h => h(App)
}).$mount('#app');
