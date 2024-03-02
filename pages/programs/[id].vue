<template>
    <ResourcesHero title1="Programs" :title2="route.params.id"/>
    <ProgramsTabWrapper>
        <ProgramsTab title="Overview">
            <ProgramsOverview />
        </ProgramsTab>
        <ProgramsTab title="Projects">
            <ProgramsProjects />
        </ProgramsTab>
        <ProgramsTab title="Trainings">
            <ProgramsTrainings />
        </ProgramsTab>
    </ProgramsTabWrapper>
</template>

<script setup>
const route = useRoute()
</script>