<template>
    <ResourcesHero :title1="title1" :title2="title2" :title3="title3" />
    <AboutIntro />
    <AboutMembers />
</template>

<script setup lang="ts">
const title1 = ref({
    text: "About",
    to: "/about/crsubeb",
});
const title2 = ref({
    text: "The Management",
    to: "/about/management",
});
const title3 = ref({
    text: "Etta, Inyang Eyo",
});
</script>