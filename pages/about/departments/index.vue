<template>
    <div>
        <ResourcesHero :title1="title1" :title2="title2" />
        <AboutDepartments />
    </div>
</template>

<script setup lang="ts">
const title1 = ref({
    text: "About",
    to: "/about/crsubeb",
});
const title2 = ref({
    text: "Departments",
});
</script>