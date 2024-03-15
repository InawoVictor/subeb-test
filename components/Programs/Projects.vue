<template>
    <div class="w-full mb-32">
        <div class=" sm:bg-whiteBg bg-secondary">
            <div class="container pt-0 pb-7 sm:pt-12 sm:pb-8">
                <ul class="sm:flex hidden gap-3 items-center">
                    <li class="
                        px-[24px] font-normal text-[20px] py-[10px] rounded-[40px] border
                        border-solid border-primary leading-[23px] text-primary cursor-pointer
                    ">
                        2024
                    </li>
                    <li
                    class="
                        px-[24px] font-normal text-[20px] py-[10px] rounded-[40px] border
                        border-solid border-[#E4E2DD] leading-[23px] text-[#7E7D7D] cursor-pointer
                    "
                    >
                        2023
                    </li>
                    <li
                    class="
                        px-[24px] font-normal text-[20px] py-[10px] rounded-[40px] border
                        border-solid border-[#E4E2DD] leading-[23px] text-[#7E7D7D] cursor-pointer
                    "
                    >
                        2022
                    </li>
                    <li
                    class="
                        px-[24px] font-normal text-[20px] py-[10px] rounded-[40px] border
                        border-solid border-[#E4E2DD] leading-[23px] text-[#7E7D7D] cursor-pointer
                    "
                    >
                        2021
                    </li>
                    <li
                    class="
                        px-[24px] font-normal text-[20px] py-[10px] rounded-[40px] border
                        border-solid border-[#E4E2DD] leading-[23px] text-[#7E7D7D] cursor-pointer
                    "
                    >
                        2020
                    </li>
                    <li
                    class="
                        px-[24px] font-normal text-[20px] py-[10px] rounded-[40px] border
                        border-solid border-[#E4E2DD] leading-[23px] text-[#7E7D7D] cursor-pointer
                    "
                    >
                        2019
                    </li>
                </ul>
                <div class=" sm:hidden block ">
                    <div class="">
                        <Dropdown v-model="selectedYear" :options="items" optionLabel="label" optionValue="value"
                            :virtualScrollerOptions="{ itemSize: 38 }" :placeholder="selectedYear" class="w-full p-2 border-none focus:border-none focus:outline-none " />
                    </div>
                </div>
            </div>
        </div>
        <ul class="container py-10 sm:py-0 grid lg:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] 
            sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] 
            grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] 
            items-center gap-8">
            <li class="projects-card" v-for="(projectCard, index) in projectsCard" :key="index">
                <img :src="projectCard.image" class="w-full lg:h-[340px] md:h-[200px] sm:h-[150px] h-[104px] object-cover" alt="Etta, Inyang Eyo">
                <div class="md:py-6 py-2 px-2 md:px-4 ">
                    <h3 class="truncate pb-1 font-bold font-dmSans text-txtDark2 md:text-[30px] sm:text-xl text-[10px] md:leading-35 sm:leading-[28px] leading-[13px]">
                        {{projectCard.title}}
                    </h3>
                    <p class="md:mt-3 sm:mt-2 mt-1 text-txtDark font-normal lg:text-[20px] md:text-sm sm:text-[12px] text-[6px] lg:leading-[28px] sm:leading-[18px] leading-[11px]">
                        {{projectCard.content}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.projects-card {
    @apply w-full lg:h-[560px] md:h-[400px] sm:h-[270px] h-[192px] md:rounded-[20px] rounded-[10px] cursor-pointer shadow-[0_4px_10px_0px_rgba(0,0,0,0.06)] overflow-hidden;
}
</style>

<script lang="ts" setup>
interface project {
    image: string,
    title: string,
    content: string,
}
const selectedYear = ref("2024")

const items = ref([
    {
        label: "2024",
        value: "2024",
    },
    {
        label: "2023",
        value: "2023"
    },
    {
        label: "2022",
        value: "2022",
    },
    {
        label: "2021",
        value: "2021",
    },
    {
        label: "2020",
        value: "2020",
    },
    {
        label: "2019",
        value: "2019",
    },
])

const projectsCard =ref<project[]>([
    {
        image: "/img/subeb-building.png",
        title: "Quality Education Enhancement Program",
        content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
    },
    {
        image: "/img/classroom-2.png",
        title: "School Infrastructure Development Project",
        content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
    },
    {
        image: "/img/chairman-2.png",
        title: "Teacher Capacity Building Scheme",
        content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
    },
    {
        image: "/img/students-teacher.png",
        title: "Quality Education Enhancement Program",
        content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
    },
    {
        image: "/img/students-teacher-2.png",
        title: "Teacher Capacity Building Scheme",
        content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
    },
    {
        image: "/img/students.png",
        title: "Quality Education Enhancement Program",
        content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
    },
])
</script>