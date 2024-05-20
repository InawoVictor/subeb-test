<template>
    <div class="bg-grayBg">
        <ResourcesHero :title1="title1" :title2="title2" />
        <HomeIntro :isButton="false"/>
        <AboutHistory />
        <AboutVision />
        <HomeObjective :isButton="false"/>
    </div>
</template>

<script setup lang="ts">
const title1 = ref({
    text: "About",
    to: "/about/crsubeb",
});
const title2 = ref({
    text: "CRSubeb",
});
</script>