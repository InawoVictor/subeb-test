<template>
  <div>
    <!-- Header -->
    <div class="h-[50px] w-full bg-transparent"></div>
    <header class=" lg:w-[916px] w-full lg:mx-auto sticky top-0 z-50">
        <div class="flex relative ">
            <NuxtLink to="/">
                <div class="flex items-center sm:justify-end justify-center gap-x-2 p-1 sm:pr-6 px-6 bg-white flex-1 2md:w-[259px] cursor-pointer">
                    <img src="/img/crsubeb-logo.png" alt="Cross River SUBEB logo" class="2md:w-[83px] 2md:h-[73px] w-[63px] h-[55px]">
                    <span class="font-dmSans text-xl font-bold text-primary">CRSUBEB</span>
                </div>
            </NuxtLink>
            <div class="flex items-center justify-end 2md:bg-primary bg-secondary flex-1 2md:pr-6 sm:pr-10 pr-7 ">
                <ul :class="showNav ? `2md:flex 2md:flex-row flex-col nav show gap-x-5 text-[12px] 2md:text-txtWhite font-dmSans`: `2md:flex 2md:flex-row flex-col nav gap-x-5 text-[12px] 2md:text-txtWhite font-dmSans`">
                    <li class="pl-3 font-bold bod-l cursor-pointer">
                        <NuxtLink to="/" class=" text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>Home</span>
                        </NuxtLink>
                    </li>
                    <li 
                        class="pl-3 font-bold bod-l cursor-pointer "
                        :class="
                            isAboutMenu ?
                            'relative' :
                            ''
                        "
                        @mouseenter="isAboutMenu= true"
                        @mouseleave="isAboutMenu= false"
                    >
                        <div class="text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>About</span>
                            <Icon name="oui:arrow-down" size="12" color="white" />
                        </div>
                        <div
                            id="AboutMenu"
                            v-if="isAboutMenu"
                            class="absolute 2md:bg-whiteBg bg-secondary2 w-[151px] 
                            text-[#333333] z-40 2md:top-[26px] top-[0] 2md:left-[0] right-[-151px]"
                        >
                            <ul class="text-txtWhite 2md:text-txtDark 2md:txt-Dark sub-items">
                                <li class="py-2 px-3 font-dmSans font-normal text-sm"
                                    @click="navigateTo('/about/crsubeb')"
                                >
                                    CRSUBEB
                                </li>
                                <li class="py-2 px-3 font-dmSans font-normal text-sm"
                                    @click="navigateTo('/about/management')"
                                >
                                    The Management
                                </li>
                                <li class="py-2 px-3 font-dmSans font-normal text-sm"
                                    @click="navigateTo('/about/departments')"
                                >
                                    Departments
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li 
                        class="pl-3 font-bold bod-l cursor-pointer"
                        :class="
                            isResourcesMenu ?
                            'relative' :
                            ''
                        "
                        @mouseenter="isResourcesMenu= true"
                        @mouseleave="isResourcesMenu= false"
                    >
                        <div class="text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>Resources</span>
                            <Icon name="oui:arrow-down" size="12" color="white" />
                        </div>
                        <div
                            id="ResourcesMenu"
                            v-if="isResourcesMenu"
                            class="absolute 2md:bg-whiteBg bg-secondary2 w-[151px]
                            text-[#333333] z-40 2md:top-[26px] top-[0] 2md:left-[0] right-[-151px]"
                        >
                            <ul class="text-txtWhite 2md:text-txtDark 2md:txt-Dark sub-items">
                                <li class="py-2 px-3 font-dmSans font-normal text-sm">
                                    Lesson Notes
                                </li>
                                <li class="py-2 px-3 font-dmSans font-normal text-sm"
                                    @click="navigateTo('/resources/emis-data')"
                                >
                                    EMIS Report
                                </li>
                            </ul> 
                        </div>
                    </li>
                    <li 
                        class="pl-3 font-bold bod-l cursor-pointer"
                        :class="
                            isProgramsMenu ?
                            'relative' :
                            ''
                        "
                        @mouseenter="isProgramsMenu= true"
                        @mouseleave="isProgramsMenu= false"
                    >
                        <div class="text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>Programs</span>
                            <Icon name="oui:arrow-down" size="12" color="white" />
                        </div>
                        <div
                            id="ProgramsMenu"
                            v-if="isProgramsMenu"
                            class="absolute 2md:bg-whiteBg bg-secondary2 w-[151px]
                            text-[#333333] z-40 2md:top-[26px] top-[0] 2md:left-[0] right-[-151px]"
                        >
                            <ul class="text-txtWhite 2md:text-txtDark sub-items">
                                <li class="py-2 px-3 font-dmSans font-normal text-sm"
                                    @click="navigateTo('/programs/Overview')"
                                >
                                    Overview
                                </li>
                                <li class="py-2 px-3 font-dmSans font-normal text-sm"
                                    @click="navigateTo('/programs/Projects')"
                                >Projects</li>
                                <li class="py-2 px-3 font-dmSans font-normal text-sm"
                                    @click="navigateTo('/programs/Trainings')"
                                >Trainings
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li 
                        class="pl-3 font-bold bod-l cursor-pointer"
                        :class="
                            isMediaMenu ?
                            'relative' :
                            ''
                        "
                        @mouseenter="isMediaMenu= true"
                        @mouseleave="isMediaMenu= false"
                    >
                        <div class="text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>Media</span>
                            <Icon name="oui:arrow-down" size="12" color="white" />
                        </div>
                        <div
                            id="MediaMenu"
                            v-if="isMediaMenu"
                            class="absolute 2md:bg-whiteBg bg-secondary2 w-[151px]
                            text-[#333333] z-40 2md:top-[26px] top-[0] 2md:left-[0] right-[-151px]"
                        >
                            <ul class="text-txtWhite 2md:text-txtDark 2md:txt-Dark sub-items">
                                <li class="py-2 px-3 font-dmSans font-normal text-sm"
                                    @click="navigateTo('/media/gallery')"
                                >
                                    Gallery
                                </li>
                                <li class="py-2 px-3 font-dmSans font-normal text-sm"
                                    @click="navigateTo('/media/news')"
                                >
                                    News
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class=" pl-3 font-bold bod-l">
                        <NuxtLink to="/contact-us" class=" text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>Contact</span>
                        </NuxtLink>
                    </li>
                </ul>
                <div class="bg-primary p-2 px-4 flex 2md:hidden items-center gap-2 cursor-pointer" @click="showNav = !showNav">
                    <Icon name="game-icons:hamburger-menu" color="white" size="15"/>
                    <span class="text-txtWhite font-dmSans text-[12px] font-bold">Menu</span>
                </div>
            </div>
        </div>
        <div class="flex bg-white">
            <div class="bg-secondary py-2 2md:flex hidden justify-center items-center cursor-pointer w-[259px]">
                <span class="text-[12px] font-dmSans font-[400] text-txtWhite ">QUICKLINKS</span>
            </div>
            <div class="flex flex-1 items-center py-2 2md:pl-5 px-10">
                <ul class=" flex flex-wrap w-full sm:gap-0 gap-x-6 gap-y-4 2md:px-10 sm:justify-between items-center">
                    <li class="text-[12px] px-2 font-[400] uppercase  text-black font-dmSans cursor-pointer"
                    @click="navigateTo('/media/gallery')"
                    >
                        Gallery
                    </li>
                    <li class="text-[12px] sm:px-0 px-2 font-[400] uppercase text-black font-dmSans cursor-pointer">Blog</li>
                    <li class="text-[12px] sm:px-0 px-2 font-[400] uppercase text-black font-dmSans cursor-pointer"
                        @click="navigateTo('/media/news')"
                    >
                        News
                    </li>
                    <li class="text-[12px] sm:px-0 px-2 font-[400] uppercase text-black font-dmSans cursor-pointer">Board</li>
                    <li class="text-[12px] sm:px-0 px-2 font-[400] uppercase text-black font-dmSans cursor-pointer">Projects</li>
                    <li class="text-[12px] flex gap-x-1 items-center sm:px-0 px-2 font-[400] uppercase text-black font-dmSans cursor-pointer">
                        <span>Reports</span>
                        <img src="/svg/download.svg" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <!-- <div class="w-[259px] flex">
            <div class="bg-whiteBg text-primary header-btn flex-1">Login</div>
            <div class="bg-primary text-txtWhite header-btn flex-1">Register</div>
        </div> -->
    </header>

    <!-- Nuxt Route -->
    <slot />

    <!-- Footer -->
    <div class="bg-[#1F1C1C] py-10">
        <div class="w-[80%] mx-auto flex flex-col gap-7 justify-between">
            <div class="flex lg:flex-row flex-col justify-between items-center md:gap-10 gap-7 ">
                <div>
                    <h3 class="font-bold font-dmSans lg:text-[36px] md:text-[28px] sm:text-[16px] leading-9 text-txtWhite">
                        Subscribe to CRSUBEB Education Data
                    </h3>
                    <p class="text-[#D1D5DB] lg:block hidden text-sm mt-5 font-normal">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui 
                        Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
                    </p>
                </div>
                <div>
                    <div class="flex  gap-3">
                        <InputText placeholder="Enter your email" class="pl-2 flex-1" />
                        <button class="btn text-nowrap">Notify me</button>
                    </div>
                    <p class="font-inter sm:text-[12px] text-[8px] font-normal mt-1 text-[#D1D5DB]">
                        We care about the protection of your data. Read our <span class="underline">Privacy Policy.</span> 
                    </p>
                </div>
            </div>
            <div class="flex lg:flex-row flex-col gap-y-8 justify-between items-center">
                <div class="w-[307px] flex flex-col lg:items-start items-center gap-3">
                    <div class="flex items-center gap-2">
                        <img src="/img/crsubeb-logo.png" alt="Cross River SUBEB logo" class="md:w-[83px] w-[63px] md:h-[73px] h-[55px]">
                        <span class="font-dmSans md:text-xl text-lg font-bold text-txtWhite">CRSUBEB</span>
                    </div>
                    <p class="font-normal font-workSans text-[#B3B3B3] md:text-sm text-[10px]">
                        120 Murtala Mohammed Hwy, Ikot Ekan Edem, Calabar 540211, Cross River
                    </p>
                </div>
                <div class="w-[307px] flex items-center flex-col md:gap-3 gap-1">
                    <span class="font-avenir font-[900] md:text-sm text-[12px] text-[#E0E0E0]">
                        Working hours
                    </span>
                    <div class=" flex flex-col items-center font-normal text-[#B3B3B3] lg:text-sm text-[9px]">
                        <span class="flex gap-2 items-center">
                            <Icon name="ph:clock" height="16" width="16"/>
                            <span class="font-workSans">Monday - Friday</span>
                        </span>
                        <span class="flex gap-2 items-center font-normal lg:text-sm text-[9px] text-[#B3B3B3]">
                            <Icon name="material-symbols:calendar-month" height="16" width="16"/> 
                            <span class="font-workSans">
                                8:00am - 4:00pm
                            </span>
                        </span>
                    </div>
                </div>
                <div class="w-[307px] flex items-center justify-self-end flex-col gap-3">
                    <span class="font-avenir font-[900] text-sm text-[#E0E0E0]">
                        Follow us on
                    </span>
                    <div class="flex items-center justify-center">
                        <span class="">
                            <Icon 
                                name="basil:facebook-solid"                                 
                                color="white" 
                                class=" p-2 border border-solid border-white rounded-full md:w-[45px] md:h-[45px] w-[30px] h-[30px]"
                            />
                        </span>
                    </div>
                </div>
            </div>
            <div class="lg:self-end self-center flex gap-x-1 items-center">
                <p class="font-avenir font-[900] lg:text-[16px] md:text-sm text-[8px] text-[#E0E0E0]">
                    Powered by <span class="text-[#6AB43E]">Future-</span><span class="text-[#195176]">X</span>
                </p>
                <div class="w-[45px] h-[45px] rounded-full bg-whiteBg flex items-center justify-center">
                    <img src="/svg/futurex-logo.svg" class="w-[23px] h-[28px]" alt="">
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const showNav = ref(false)
const isAboutMenu = ref(false)
const isResourcesMenu = ref(false)
const isProgramsMenu = ref(false)
const isMediaMenu = ref(false)


</script>

<style scoped>
.bod-l{
    border-left: 2px solid #0D99FF ;
}


@media screen and (max-width: 930px){
    .bod-l{
        border: none;
    }
}


@media  screen and (max-width: 930px) {  
    .nav{
        @apply absolute left-[-100vw] top-[3.9rem] w-[208px] bg-primary;
        transition: all .4s ease-out;
    }
    .nav > li{
        @apply p-2 px-4;
    }    
    .nav > li:not(:last-child){        
        border-bottom: 1px solid #F3F4F6;
    }
}

.sub-items > li:not(:last-child){        
    border-bottom: 1px solid #F3F4F6;
}

.show{
    @apply left-0;
}

</style>
