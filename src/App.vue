<template lang="pug">
    #app
        icon.logo(name="logo")
        router-view
        div
            button(@click="setLang(lang)", v-for="lang in locales", :disabled="isLang(lang)") {{ $t('locales.'+ lang) }}
        hr
        div
            button(@click="increment") {{ $tc('messages.counter', countPlural, { n: $store.state.count }) }}
</template>

<script>
import store from 'store';
import { mapActions, mapGetters } from 'vuex';
export default {
    store,
    computed: mapGetters([
        'countPlural'
    ]),
    methods: {
        ...mapActions([
            'increment'
        ]),
        onLangClick (lang) {
            this.setLang(lang); // mixin method
            this.increment(); // store action
        }
    }
};
</script>

<style lang="stylus">
@import "../node_modules/typus" // base styles
@import "styles/theme"

html
    +below(600px) // rupture
        font-size 50%

#app
    align() // jeet
    text-align center

.icon-logo
    margin-bottom 2.5rem
</style>
