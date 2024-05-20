<template>
    <ResourcesHero :title1="title1" :title2="title2" :title3="title3" />
    <div class="bg-grayBg">
        <div class="container ">
            <div class="flex xl:flex-row flex-col items-center xl:items-start md:gap-20 gap-12 rounded-r-[20px] overflow-hidden">
                <div class="flex-1 ">
                    <h2 class="header-text xl:text-left text-center">
                        Support Service Department
                    </h2>
                    <p class="content mt-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                    </p>
                </div>
                <img src="/img/business-man.png" class="sm:w-[523px] h-[198px] w-[198px] sm:h-[413px]" alt="">
            </div>
            <p class="content md:mt-8 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum. Lorem ipsum 
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <div class="w-full bg-whiteBg">
            <div class="container md:mb-16 mb-10 pt-4 md:pt-10">
                <div class="flex flex-wrap gap-y-4 gap-x-3 justify-center">
                    <img src="/img/people.png" class="md:w-[396px] w-[198px] md:h-[360px] h-[198px] rounded-[20px]" alt="">
                    <img src="/img/portrait.png" class="md:w-[396px] w-[198px] md:h-[360px] h-[198px] rounded-[20px]" alt="">
                    <img src="/img/students.png" class="md:w-[396px] w-[198px] md:h-[360px] h-[198px] rounded-[20px]" alt="">
                </div>
                <p class="md:mt-14 mt-8 font-dmSans md:text-[16px] sm:text-sm text-[11px] font-normal leading-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const title1 = ref({
    text: "About",
    to: "/about/crsubeb",
});
const title2 = ref({
    text: "Departments",
    to: "/about/departments",
});
const title3 = ref({
    text: "Support Service Department",
});
</script>