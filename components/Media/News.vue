<template>
    <div class="bg-whiteBg w-full">
        <div class=" pt-8">
            <div>
                <h2 class="header-text text-center mb-8">
                    News
                </h2>
            </div>
            <div class="sm:w-[90%] w-full sm:mx-auto mx-0 "><img src="/img/african-man.png" class="w-full h-[245px] sm:h-[570px] object-cover" alt=""></div>
            <div class="container py-5">
                <p class="content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <p class="content mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, t. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborumer
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <p class="content mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div class="container pt-0">
            <h2 class="header-text text-center mb-8">
                MORE NEWS
            </h2>

                <Carousel class=" mt-9 pb-8" :value="news" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="xl:w-[525px] xl:h-[567px] md:h-[500px] md:w-[250px] sm:w-[240px] sm:h-[270px] w-[130px] h-[179px] shadow overflow-hidden rounded-xl">
                            <img :src="slotProps.data.img" class=" w-full object-cover sm:h-[115px] xl:h-[262px] h-[82px] "  alt="">
                            <div class="bg-white lg:pt-8 sm:pt-4 sm:px-3 pt-2 px-1 ">
                                <h3 class="font-dmSans text-primary font-bold lg:text-[20px] md:text-[16px] sm:text-sm text-[6px] leading-[8px]">
                                    {{slotProps.data.title}}
                                </h3>
                                <p class="mt-1 text-[#212121] font-dmSans font-normal lg:text-[18px] md:text-sm text-[5px] md:leading-[16px] leading-[9px] lg:leading-[30px]">
                                    {{slotProps.data.info}}
                                </p>
                                <button class="md:px-4 sm:py-2 px-2 py-[1px]  bg-secondary text-white cursor-pointer border border-transparent sm:rounded-md rounded-sm focus:outline-none md:mt-10  sm:mt-6 mt-3  flex items-center gap-2">
                                    <span class="font-[500] text-[5px]  md:text-[16px]">Read more</span>
                                    <Icon name="mingcute:arrow-right-line" class="w-[10px] sm:w-[16px]" color="white"/>
                                </button>
                            </div>
                        </div>
                    </template>
            </Carousel>
        </div>
    </div>
</template>

<script setup lang="ts">


const news = ref([
    {
        title: "HOME-GROWN SCHOOL FEEDING NOW IN 31 STATE",
        img: "/img/vp.png",
        info: "In a bid to ensure quality education in primary and secondary schools across the states, the ministry of education in collaboration with NAPSS..."
    },
    {
        title: "CALABAR TO SPEND 60MILLION TO RENOVATE 20 SCHOOLS",
        img: "/img/classroom-2.png",
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
        numVisible: 2,
        numScroll: 1
    }
]);


</script>