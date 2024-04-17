<template>
    <ResourcesHero title1="Resources" title2="EMIS Data" />
    <div>
        <ResourcesTable v-if="resources"/>
        <NoContent v-else subtitle="No Content Available"/>
    </div>
</template>

<script lang="ts" setup>
const resources = ref(null)
</script>
