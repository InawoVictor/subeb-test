<template>
    <div class="container py-14 font-dmSans">
        <div class="flex justify-between items-center py-4 bor-b">
            <span class=" font-dmSans font-[500] text-[34px] text-primary">News</span>
            <span class="font-dmSans text-primary font-normal text-[17px]">See more</span>
        </div>
        <div class="mt-9 lg:flex hidden justify-between gap-4 items-center ">
            <div class="w-[400px] shadow">
                <img src="/img/gallery.png" class=" w-full object-cover" height="140" alt="">
                <div class="bg-white p-3">
                    <span class="capitalize font-dmSans text-primary text-[12px] font-normal">
                        February 2th 2024
                    </span>
                    <h3 class="font-dmSans text-primary font-bold text-sm">
                        MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS
                    </h3>
                    <p class="mt-1 text-[#212121] font-dmSans font-normal text-sm">
                        In a bid to ensure quality education in primary and secondary schools 
                        across the states, the ministry of education in collaboration with NAPSS...
                    </p>
                    <button class="btn bg-primary mt-10  flex items-center gap-2">
                        <span class="font-[500] text-[16px]">Read more</span>
                        <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                    </button>
                </div>
            </div>
            <div class="w-[400px] shadow">
                <img src="/img/gallery.png" class=" w-full object-cover" height="140" alt="">
                <div class="bg-white p-3">
                    <span class="capitalize font-dmSans text-primary text-[12px] font-normal">
                        February 2th 2024
                    </span>
                    <h3 class="font-dmSans text-primary font-bold text-sm">
                        MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS
                    </h3>
                    <p class="mt-1 text-[#212121] font-dmSans font-normal text-sm">
                        In a bid to ensure quality education in primary and secondary schools 
                        across the states, the ministry of education in collaboration with NAPSS...
                    </p>
                    <button class="btn bg-primary mt-10  flex items-center gap-2">
                        <span class="font-[500] text-[16px]">Read more</span>
                        <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                    </button>
                </div>
            </div>
            <div class="w-[400px] shadow">
                <img src="/img/gallery.png" class=" w-full object-cover" height="140" alt="">
                <div class="bg-white p-3">
                    <span class="capitalize font-dmSans text-primary text-[12px] font-normal">
                        February 2th 2024
                    </span>
                    <h3 class="font-dmSans text-primary font-bold text-sm">
                        MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS
                    </h3>
                    <p class="mt-1 text-[#212121] font-dmSans font-normal text-sm">
                        In a bid to ensure quality education in primary and secondary schools 
                        across the states, the ministry of education in collaboration with NAPSS...
                    </p>
                    <button class="btn bg-primary mt-10  flex items-center gap-2">
                        <span class="font-[500] text-[16px]">Read more</span>
                        <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                    </button>
                </div>
            </div>
            <div class="w-[400px] flex-wrap shadow">
                <img src="/img/gallery.png" class=" w-full object-cover" height="140" alt="">
                <div class="bg-white p-3">
                    <span class="capitalize font-dmSans text-primary text-[12px] font-normal">
                        February 2th 2024
                    </span>
                    <h3 class="font-dmSans text-primary font-bold text-sm">
                        MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS
                    </h3>
                    <p class="mt-1 text-[#212121] font-dmSans font-normal text-sm">
                        In a bid to ensure quality education in primary and secondary schools 
                        across the states, the ministry of education in collaboration with NAPSS...
                    </p>
                    <button class="btn bg-primary mt-10  flex items-center gap-2">
                        <span class="font-[500] text-[16px]">Read more</span>
                        <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                    </button>
                </div>
            </div>
        </div>

        <Carousel class="lg:hidden flex mt-9" :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="md:w-[350px] sm:w-[240px] flex-wrap shadow">
                <img src="/img/gallery.png" class=" w-full object-cover" height="140" alt="">
                <div class="bg-white p-3">
                    <span class="capitalize font-dmSans text-primary text-[12px] font-normal">
                        {{slotProps.data.date}}
                    </span>
                    <h3 class="font-dmSans text-primary font-bold text-sm">
                        {{slotProps.data.title}}
                    </h3>
                    <p class="mt-1 text-[#212121] font-dmSans font-normal text-sm">
                        In a bid to ensure quality education in primary and secondary schools 
                        across the states, the ministry of education in collaboration with NAPSS...
                    </p>
                    <button class="btn bg-primary mt-10  flex items-center gap-2">
                        <span class="font-[500] text-[16px]">Read more</span>
                        <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                    </button>
                </div>
            </div>
            </template>
        </Carousel>
    </div>
    </template>
    
<script setup lang="ts">


const products = ref([
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/gallery.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/gallery.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/gallery.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/gallery.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
    },
    {
        title: "MINISTRY OF EDUCATION PARTNERS NAPSS TO TRAIN PROPRIETORS OF PRIVATE SCHOOLS",
        date: "February 2th 2024",
        img: "/img/gallery.png",
        info: "In a bid to ensure quality education in primary and secondary schools cross the states, the ministry of education in collaboration with NAPSS..."
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

    .shadow{
        box-shadow: 0px 9px 23px 1px #00000014;

    }
    
    </style>