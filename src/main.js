import Vue from 'vue';
import Bourgeon from './bourgeon';
import App from './App';

Vue.use(Bourgeon, {
    locales: ['en', 'fr']
});

/* eslint-disable no-new */
new Vue({
    render: h => h(App)
}).$mount('#app');
