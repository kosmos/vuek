<template lang="pug">
include ../bourgeon/bemto.pug

.hello
    h1 {{ msg }}
    p
        router-link(to="/") {{ $t('buttons.home') }}
</template>

<script>
export default {
    computed: {
        msg () {
            return this.$t('messages.hello', { name: this.name });
        },
        name () {
            const name = this.$route.params.name;
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
    color: green;
}
</style>
