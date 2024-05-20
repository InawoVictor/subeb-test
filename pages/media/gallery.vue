<template>
    <ResourcesHero :title1="title1" :title2="title2" />
    <div>
        <MediaGallery v-if="galleryData" :data="galleryData.gallery"/>
        <NoContent v-else subtitle="No Content Available"/>
    </div>
</template>

<script setup lang="ts">
const gallery = useGalleryStore();
const galleryData = ref<any>(null);
    const title1 = ref({
    text: "Media",
    to: "/media/gallery",
});
const title2 = ref({
    text: "Gallery",
});


const loadGallery = async () => {
    galleryData.value = await gallery.getGallery();
    // console.log("gallery", galleryData.value)
}

onMounted(() => {
    loadGallery()
});


</script>