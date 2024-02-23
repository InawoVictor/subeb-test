<template>
    <div class="hero overflow-hidden mt-[-121px] relative h-[544px]">
        <div class="flex flex-col items-start absolute stay-center top-[300px] w-[895px]">
            <h1 class="font-inter font-[600] text-[48px] text-txtWhite">
                Resources
            </h1>
            <p class="text-txtWhite mt-12 font-medium text-xl font-inter">
                <RouterLink class="text-txtWhite font-medium text-xl font-inter" to="/resources">{{title1}} / </RouterLink>
                <span>{{title2}}</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(["title1", "title2"])
</script>

<style scoped>
.hero{
  background: linear-gradient(to right, rgba(2, 0, 102, 0.72), rgba(2, 0, 102, 0.72)),
   url("img/subeb-building-2.png");
   background-repeat: no-repeat;
   /* background-size: cover; */
}

.stay-center{
  left: 50%;
  transform: translateX(-50%);
}

</style>