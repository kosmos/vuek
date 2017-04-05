<template lang="pug">
    div
        h1 {{ $t('messages.welcome') }}
        p
            router-link(to="/hello/bourgeon") {{ $t('buttons.hello') }}
</template>

<script>
export default {};
</script>

<style>
</style>
