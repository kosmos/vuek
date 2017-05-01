<template lang="pug">
include ../bourgeon/bemto.pug

+b.test
    h1 {{ $t('messages.welcome') }}
    +e("p").parag
        router-link(to="/hello/bourgeon") {{ $t('buttons.hello') }}
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>
