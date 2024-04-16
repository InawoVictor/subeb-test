<template>
<div class="container-2 py-14 font-dmSans">
    <div class="flex justify-between items-center py-4 bor-b">
        <span class=" font-dmSans font-[500] text-[34px] text-primary">Gallery</span>
        <NuxtLink to="/media/gallery">
            <span class="font-dmSans text-primary font-normal text-[17px]">See More</span>
        </NuxtLink>
    </div>
    <div class="mt-9 lg:flex hidden justify-between items-center ">
        <img src="/img/subeb-group-1.png" class="object-cover w-[200px] xl:w-[247px] h-[186px]" alt="">
        <img src="/img/gallery.png" class="object-cover w-[200px] xl:w-[247px] h-[186px]" alt="">
        <img src="/img/students-3.png" class="object-cover w-[200px] xl:w-[247px] h-[186px]" alt="">
        <img src="/img/subeb-group-2.png" class="object-cover w-[200px] xl:w-[247px] h-[186px]" alt="">
    </div>
    <Carousel class="lg:hidden flex mt-9 justify-center" :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
            <img :src="slotProps.data.img" class="md:w-[350px] sm:w-[240px] w-full object-cover" height="186" alt="">
        </template>
    </Carousel>
</div>
</template>

<script lang="ts" setup>
const products = ref([
    {
        img: "/img/subeb-group-1.png",       
    },
    {
        img: "/img/gallery.png",       
    },
    {
        img: "/img/students-3.png",       
    },
    {
        img: "/img/subeb-group-2.png",       
    },
]);
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<style scoped>
.bor-b {
    border-bottom: 1px solid #B3B3B3;
}

</style>