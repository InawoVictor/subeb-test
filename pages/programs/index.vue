<template>
    <ResourcesHero title1="Programs" :title2="selectedTab"/>
    <ProgramsTabWrapper @update:title="getSelectedTab">
        <ProgramsTab title="Projects">
            <ProgramsProjects v-if="projectsData.length >= 1" :data="projectsData"/>
            <NoContent v-else subtitle="No Content Available"/>
        </ProgramsTab>
        <ProgramsTab title="Trainings">
            <ProgramsTrainings v-if="trainingsData.length >= 1" :data="trainingsData"/>
            <NoContent v-else subtitle="No Content Available"/>
        </ProgramsTab>
    </ProgramsTabWrapper>
</template>

<script setup lang="ts">
interface Project {
    id: string,
    blogCoverImage: string,
    title: string,
    content: string,
}
interface Training {
    id: string;
    admin: string,
    title: string;
    content: string;
    blogCoverImage: string;
    trainingStatus: string;
    dateCreated: string;
    datePublished: string;
    updatedAt: string;
}

const route = useRoute()
const projects = useProjectsStore()
const trainings = useTrainingsStore()
const projectsData = ref<Project[]>([])
const trainingsData = ref<Training[]>([])
const selectedTab = ref("Projects")

const getSelectedTab = (value: string) => {
    // console.log("value", value)
    selectedTab.value = value
}

const loadProjects = async () => {
    projectsData.value = await projects.getProjects();
    console.log("projects", projectsData.value)
}
const loadTrainings = async () => {
    trainingsData.value = await trainings.getTrainings();
    console.log("projects", trainingsData.value)
}

watch(selectedTab, (newValue: string) => {
    if(newValue === "Projects"){
        loadProjects()
    } else if(newValue === "Trainings"){
        loadTrainings()
    }
})

onMounted(() => {
    loadProjects()
    // loadTrainings()
})
</script>