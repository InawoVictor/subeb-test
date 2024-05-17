<template>
    <ResourcesHero title1="Media" title2="News"/>
    <div v-if="news">
        <MediaNewsList v-if="news.news.length >= 1" :data="news.news"/>
        <NoContent v-else subtitle="No News Available"/>
    </div>
</template>

<script setup lang="ts">
interface News {
    id: string;
    title: string;
    content: string;
    blogCoverImage: string;
    dateCreated: string;
    datePublished: string;
    updatedAt: string;
}

const newsStore = useNewsStore()
const news = ref(null);

const loadNews = async () => {
    news.value = await newsStore.getNews();
    // console.log("gallery", galleryData.value)
}

onMounted(() => {
    loadNews()
});


</script>