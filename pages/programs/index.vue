<template>
    <ResourcesHero :title1="title1" :title2="title2"/>
    <ProgramsTabWrapper @update:title="getSelectedTab">
        <ProgramsTab title="Projects">
            <ProgramsProjects 
                v-if="projectsData && projectsData.length >= 1" :data="projectsData"
                @update:year="filterProjects"
            />
            <NoContent v-else subtitle="No Content Available"/>
        </ProgramsTab>
        <ProgramsTab title="Trainings">
            <ProgramsTrainings 
                v-if="trainingsData && trainingsData.length >= 1" 
                :data="trainingsData"
                @update:status="filterTrainings"
            />
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
const projects = useProjectsStore()
const trainings = useTrainingsStore()
const projectsData = ref<any>(null)
const trainingsData = ref<any>(null)
const selectedTab = ref("Projects");
const title1 = ref({
    text: "Programs",
    to: "/programs",
});
const title2 = ref({
    text: selectedTab.value,
});

const getSelectedTab = (value: string) => {
    // console.log("value", value)
    selectedTab.value = value
}

const loadProjects = async () => {
    let data: any = await projects.getProjects();
    projectsData.value = data.projects;
    // console.log("projects", projectsData.value)
}
const loadTrainings = async () => {
    let data: any = await trainings.getTrainings();
    trainingsData.value = data.trainings
    // console.log("projects", trainingsData.value)
}

const filterProjects = async (year: string) => {
    // console.log("filtered year", year)
    let data: any = await projects.filterProjectsYear(year);
    projectsData.value = data.foundPost
}

const filterTrainings = async (status: string) => {
    // console.log("filtered status", status)
    let data: any = await trainings.filterTrainingsStatus(status);
    trainingsData.value = data.foundPost
    // console.log("training filter", trainingsData.value);
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