<template>
    <ResourcesHero title1="Media" title2="News"/>
    <div>
        <MediaNews v-if="media"/>
        <NoContent v-else subtitle="No Content Available"/>
    </div>
</template>

<script setup lang="ts">
const media = ref(null)
</script>