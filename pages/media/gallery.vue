<template>
    <ResourcesHero title1="Media" title2="Gallery" />
    <div>
        <MediaGallery v-if="galleryData.length >= 1" :data="galleryData"/>
        <NoContent v-else subtitle="No Content Available"/>
    </div>
</template>

<script setup lang="ts">
const gallery = useGalleryStore()
const galleryData = ref<any>([])

const loadGallery = async () => {
    galleryData.value = await gallery.getGallery();
    // console.log("gallery", galleryData.value)
}

onMounted(() => {
    loadGallery()
})


</script>