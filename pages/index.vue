<template>
    <HomeHero />
    <HomeIntro/>
    <HomeTraction/>
    <HomeAbout />
    <HomeObjective />
    <HomeGallery />
    <div v-if="projects && news">
        <HomeReuseable title="News" :data="news" v-if="news.length >= 1"/>
        <NoContent title="Latest News"  subtitle="No News Yet" v-else/>
    </div>
    <div >
        <HomeReuseable title="Projects" :data="projectsData" v-if="projectsData.length >= 1"/>
        <NoContent  subtitle="No Projects Yet" v-else/>
    </div>
</template>

<script setup lang="ts">
interface Project {
    id: string,
    blogCoverImage: string,
    title: string,
    content: string,
}

interface News {
    id: string;
    title: string;
    content: string;
    blogCoverImage: string;
    dateCreated: string;
    datePublished: string;
    updatedAt: string;
}

const projects = useProjectsStore()
const newsStore = useNewsStore()
const projectsData = ref<Project[]>([]);
const news = ref<News[]>([])

const loadProjects = async () => {
    projectsData.value = await projects.getProjects();
}

const loadNews = async () => {
    news.value = await newsStore.getNews();
}

onMounted(() => {
    loadProjects()
    loadNews()
    // loadTrainings()
})
</script>

<style scoped>

</style>