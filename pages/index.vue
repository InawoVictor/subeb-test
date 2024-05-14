<template>
    <HomeHero />
    <HomeIntro/>
    <HomeTraction/>
    <HomeAbout />
    <HomeObjective />
    <HomeGallery />
    <div>
        <div v-if="newsData ">
            <HomeNewsCard title="News" :data="newsData?.news" />
        </div>
        <NoContent title="Latest News"  subtitle="No News Yet" v-else/>
    </div>
    <div >
        <div  v-if="projectsData">
            <HomeProjectCard title="Projects" :data="projectsData?.projects"/>
        </div>
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
const projectsData = ref(null);
const newsData = ref(null)

const loadProjects = async () => {
    projectsData.value = await projects.getProjects();
}

const loadNews = async () => {
    newsData.value = await newsStore.getNews();
}

onMounted(() => {
    loadProjects()
    loadNews()
    // loadTrainings()
})
</script>

<style scoped>

</style>