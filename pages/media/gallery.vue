<template>
    <ResourcesHero title1="Media" title2="Gallery" />
    <div>
        <MediaGallery v-if="gallery"/>
        <NoContent v-else subtitle="No Content Available"/>
    </div>
</template>

<script setup lang="ts">
const gallery = ref(null)
</script>