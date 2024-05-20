<template>
    <div class="hero overflow-hidden md:mt-[-213px] mt-[-316px] relative h-[544px]">
        <div class="flex flex-col items-start absolute stay-center top-[75%] sm:top-[70%] md:top-[300px] lg:w-[895px]">
            <h1 class="font-inter font-[600] lg:text-[48px] md:text-[35px] text-[23px] text-txtWhite">
                {{title1.text}}
            </h1>
            <p class="text-txtWhite lg:mt-12 sm:mt-8 mt-4 font-medium md:text-xl text-sm font-inter">
                <NuxtLink class="text-txtWhite font-medium text-xl font-inter" :to="title1?.to">{{title1.text}} </NuxtLink>
                <NuxtLink :to="title2.to" v-if="title2">/ {{title2.text}}</NuxtLink> 
                <NuxtLink :to="title3.to" v-if="title3"> / {{title3.text}}</NuxtLink> 
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        title1: {
            type: Object as () => ({
                text: string,
                to?: string,
            }),
            required: true
        },
        title2: {
            type: Object as () => ({
                text: string,
                to?: string,
            }),
        },
        title3: {
            type: Object as () => ({
                text: string,
                to?: string,
            })
        }
    })
</script>

<style scoped>
.hero{
  background: linear-gradient(to right, rgba(2, 0, 102, 0.62), rgba(2, 0, 102, 0.62)),
   url("/img/subeb-building-2.png");
   background-repeat: no-repeat;
   /* background-size: cover; */
}

.stay-center{
  left: 50%;
  transform: translateX(-50%);
}

</style>