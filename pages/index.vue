<template>
    <HomeHero />
    <HomeIntro/>
    <HomeTraction/>
    <HomeAbout />
    <HomeObjective />
    <div>
        <div v-if="galleryData && galleryData.gallery.length >= 1">
            <HomeGallery :data="galleryData.gallery"/>
        </div>
        <NoContent  subtitle="No Gallery Yet" v-else/>
    </div>
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



const projects = useProjectsStore();
const newsStore = useNewsStore();
const gallery = useGalleryStore();
const projectsData = ref<any>(null);
const newsData = ref<any>(null)
const galleryData = ref<any>(null)

const loadProjects = async () => {
    projectsData.value = await projects.getProjects();
}

const loadNews = async () => {
    newsData.value = await newsStore.getNews();
}

const loadGallery = async () => {
    galleryData.value = await gallery.getGallery();
    // console.log("gallery", galleryData.value)
}

onMounted(() => {
    loadProjects();
    loadNews();
    loadGallery();
})
</script>

<style scoped>

</style>