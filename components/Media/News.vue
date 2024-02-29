<template>
    <div class="bg-whiteBg w-full">
        <div class="container pt-8">
            <h2 class="header-text text-center mb-8">
                News
            </h2>
            <img src="/img/african-man.png" class="w-full h-[570px] object-cover" alt="">
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
        <div class="container pt-0">
            <h2 class="header-text text-center mb-8">
                MORE NEWS
            </h2>

                <Carousel class=" mt-9 pb-8" :value="news" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="md:w-[525px] h-[567px] sm:w-[240px] flex-wrap shadow overflow-hidden rounded-xl">
                            <img :src="slotProps.data.img" class=" w-full object-cover" height="262" alt="">
                            <div class="bg-white pt-8 px-3">
                                <h3 class="font-dmSans text-primary font-bold text-[20px]">
                                    {{slotProps.data.title}}
                                </h3>
                                <p class="mt-1 text-[#212121] font-dmSans font-normal text-[18px] leading-[30px]">
                                    {{slotProps.data.info}}
                                </p>
                                <button class="btn mt-10  flex items-center gap-2">
                                    <span class="font-[500] text-[16px]">Read more</span>
                                    <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
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
        numVisible: 1,
        numScroll: 1
    }
]);


</script>