<template>
    <HomeHero />
    <HomeIntro/>
    <HomeTraction/>
    <HomeAbout />
    <HomeObjective />
    <HomeGallery />
    <div v-if="projects && news">
        <HomeReuseable title="News" :data="newsData"/>
        <HomeReuseable title="Projects" :data="projectsData"/>
    </div>
    <NoContent title="Latest News" subtitle="No News Yet" v-else/>
</template>

<script setup lang="ts">
const newsData = ref([
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/group.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/child-2.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/teacher-2.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/group-2.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
]);
const projectsData = ref([
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/school-3.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/school-4.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/group-3.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/cultural.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
]);

const projects = ref(null);
const news = ref(null);
</script>

<style scoped>

</style>