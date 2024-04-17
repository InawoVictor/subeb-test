<template>
    <ResourcesHero title1="Programs" :title2="route.params.id"/>
    <ProgramsTabWrapper>
        <ProgramsTab title="Overview">
            <ProgramsOverview v-if="programs"/>
            <NoContent v-else subtitle="No Content Available"/>
        </ProgramsTab>
        <ProgramsTab title="Projects">
            <ProgramsProjects v-if="programs"/>
            <NoContent v-else subtitle="No Content Available"/>
        </ProgramsTab>
        <ProgramsTab title="Trainings">
            <ProgramsTrainings v-if="programs" />
            <NoContent v-else subtitle="No Content Available"/>
        </ProgramsTab>
    </ProgramsTabWrapper>
</template>

<script setup>
const route = useRoute()

const programs = ref(null)
</script>