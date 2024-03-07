
<template>
    <div class="" v-show="title === selectedTitle">
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['title'])
const selectedTitle = inject("selectedTitle")
</script>

