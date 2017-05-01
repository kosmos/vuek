/* eslint-disable no-unused-vars */
import Icon from 'vuek/Icon.vue';
import Router from 'vuek/router';
import I18n from 'vuek/i18n';

export default {
    install (Vue, options) {
        Vue.use(Router);
        Vue.use(I18n, options.locales);

        Vue.component('icon', Icon);
    }
};
