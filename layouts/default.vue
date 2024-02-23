<template>
  <div>
    <!-- Header -->
    <header class=" w-[916px] overflow-hidden mx-auto sticky top-[50px] z-50">
        <div class="flex ">
            <RouterLink to="/">
                <div class="flex items-center justify-end gap-x-2 p-1 pr-6 bg-white w-[259px] cursor-pointer">
                    <img src="/img/crsubeb-logo.png" alt="Cross River SUBEB logo" class="w-[83px] h-[73px]">
                    <span class="font-dmSans text-xl font-bold text-primary">CRSUBEB</span>
                </div>
            </RouterLink>
            <div class="flex items-center justify-end bg-primary flex-1 pr-6">
                <ul class="flex gap-x-5 text-[12px] text-txtWhite font-dmSans">
                    <li class="pl-3 font-bold bod-l cursor-pointer">
                        <RouterLink to="/" class=" text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>Home</span>
                            <Icon name="oui:arrow-down" size="12" color="white" />
                        </RouterLink>
                    </li>
                    <li class="pl-3 font-bold bod-l cursor-pointer">
                        <RouterLink to="/" class=" text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>About</span>
                            <Icon name="oui:arrow-down" size="12" color="white" />
                        </RouterLink>
                    </li>
                    <li class="pl-3 font-bold bod-l cursor-pointer">
                        <RouterLink to="/resources" class=" text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>Resources</span>
                            <Icon name="oui:arrow-down" size="12" color="white" />
                        </RouterLink>
                    </li>
                    <li class="pl-3 font-bold bod-l cursor-pointer">
                        <RouterLink to="/" class=" text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>Programs</span>
                            <Icon name="oui:arrow-down" size="12" color="white" />
                        </RouterLink>
                    </li>
                    <li class="pl-3 font-bold bod-l cursor-pointer">
                        <RouterLink to="/" class=" text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>Media</span>
                            <Icon name="oui:arrow-down" size="12" color="white" />
                        </RouterLink>
                    </li>
                    <li class=" pl-3 font-bold bod-l">
                        <RouterLink to="/contact-us" class=" text-txtWhite gap-x-3 flex justify-between items-center">
                            <span>Contact</span>
                            <Icon name="oui:arrow-down" size="12" color="white" />
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex bg-white">
            <div class="bg-secondary py-2 flex justify-center items-center cursor-pointer w-[259px]">
                <span class="text-[12px] font-dmSans font-[400] text-txtWhite ">QUICKLINKS</span>
            </div>
            <div class="flex flex-1 items-center pl-5">
                <ul class=" flex w-full px-10 justify-between">
                    <li class="text-[12px] font-[400] uppercase  text-black font-dmSans cursor-pointer">Reports</li>
                    <li class="text-[12px] font-[400] uppercase text-black font-dmSans cursor-pointer">Blog</li>
                    <li class="text-[12px] font-[400] uppercase text-black font-dmSans cursor-pointer">News</li>
                    <li class="text-[12px] font-[400] uppercase text-black font-dmSans cursor-pointer">Board</li>
                    <li class="text-[12px] font-[400] uppercase text-black font-dmSans cursor-pointer">Projects</li>
                    <li class="text-[12px] font-[400] uppercase text-black font-dmSans cursor-pointer">Reports</li>
                </ul>
            </div>
        </div>
    </header>

    <!-- Nuxt Route -->
    <NuxtPage />

    <!-- Footer -->
    <div class="bg-[#1F1C1C] py-10">
        <div class="w-[80%] mx-auto flex flex-col gap-7 justify-between">
            <div class="flex justify-between items-center gap-10 ">
                <div>
                    <h3 class="font-bold font-dmSans text-[36px] text-txtWhite">
                        Subscribe to CRSUBEB Education Data
                    </h3>
                    <p class="text-[#D1D5DB] text-sm mt-5 font-normal">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui 
                        Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
                    </p>
                </div>
                <div>
                    <div class="flex  gap-3">
                        <InputText placeholder="Enter your email" class="pl-2" />
                        <button class="btn text-nowrap ">Notify me</button>
                    </div>
                    <p class="font-inter text-[12px] font-normal mt-1 text-[#D1D5DB]">
                        We care about the protection of your data. Read our <span class="underline">Privacy Policy.</span> 
                    </p>
                </div>
            </div>
            <div class="flex justify-between items-center">
                <div class="w-[307px] flex flex-col items-start gap-3">
                    <div class="flex items-center gap-2">
                        <img src="/img/crsubeb-logo.png" alt="Cross River SUBEB logo" class="w-[83px] h-[73px]">
                        <span class="font-dmSans text-xl font-bold text-txtWhite">CRSUBEB</span>
                    </div>
                    <p class="font-normal font-workSans text-[#B3B3B3] text-sm">
                        120 Murtala Mohammed Hwy, Ikot Ekan Edem, Calabar 540211, Cross River
                    </p>
                </div>
                <div class="w-[307px] flex items-center flex-col gap-3">
                    <span class="font-avenir font-[900] text-sm text-[#E0E0E0]">
                        Working hours
                    </span>
                    <div class=" flex flex-col items-center font-normal text-[#B3B3B3] text-sm">
                        <span class="flex gap-2 items-center">
                            <Icon name="ph:clock" height="16" width="16"/>
                            <span class="font-workSans">Monday - Friday</span>
                        </span>
                        <span class="flex gap-2 items-center font-normal text-sm text-[#B3B3B3]">
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
                    <div class="flex items-center gap-3">
                        <span class="">
                            <Icon 
                                name="basil:facebook-solid" 
                                width="45" height="45" 
                                color="white" 
                                class=" p-2 border border-solid border-white rounded-full"
                            />
                        </span>
                        <span>
                            <Icon name="ant-design:instagram-outlined" 
                                width="45" height="45" 
                                color="white" 
                                class=" p-2 border border-solid border-white rounded-full"
                            />
                        </span>
                        <span>
                            <Icon name="akar-icons:linkedin-fill" 
                                width="45" height="45" 
                                color="white" 
                                class=" p-2 border border-solid border-white rounded-full"
                            />
                        </span>
                        <span>
                            <Icon name="ri:twitter-fill" 
                                width="45" height="45" 
                                color="white" 
                                class=" p-2 border border-solid border-white rounded-full"
                            />
                        </span>
                    </div>
                </div>
            </div>
            <div class="self-end">
                <span class="font-avenir font-[900] text-[16px] text-[#E0E0E0]">
                    Powered by Future-X
                </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';


</script>

<style scoped>
.bod-l{
    border-left: 2px solid #0D99FF ;
}

</style>
