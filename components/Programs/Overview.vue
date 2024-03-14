<template>
    <ul class="container mb-32 grid  xl:grid-cols-[repeat(auto-fill,_minmax(566px,_1fr))] 
            sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] 
            grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))]  
            items-center gap-8"
    >
        <li class="overview-card" v-for="(overviewCard, index) in overviewCards" :key="index">
            <img :src="overviewCard.image" class="w-full lg:h-[340px] md:h-[200px] sm:h-[150px] h-[104px] object-cover" alt="Etta, Inyang Eyo">
            <div class="md:py-6 py-2 px-2 md:px-4 ">
                <h3 class=" truncate pb-1 font-bold font-dmSans text-txtDark2 md:text-[30px] sm:text-xl text-[10px] md:leading-35 sm:leading-[28px] leading-[13px]">{{overviewCard.title}}</h3>
                <p class="md:mt-3 sm:mt-2 mt-1 text-txtDark font-normal lg:text-[20px] md:text-sm sm:text-[12px] text-[6px] lg:leading-[28px] sm:leading-[18px] leading-[11px]">
                    {{overviewCard.content}}
                </p>
            </div>
        </li>
    </ul>
</template>

<style scoped>
.overview-card{
    @apply w-full lg:h-[580px] md:h-[400px] sm:h-[270px] h-[192px] sm:rounded-[20px] rounded-[10px] cursor-pointer shadow-[0_4px_10px_0px_rgba(0,0,0,0.06)] overflow-hidden;
}

</style>

<script lang="ts" setup>
interface overview {
    image: string,
    title: string,
    content: string,
}

const overviewCards =ref<overview[]>([
    {
        image: "/img/people.png",
        title: "Girl’s education initiative",
        content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
    },
    {
        image: "/img/school-2.png",
        title: "School Infrastructure Development Project",
        content: "Construct, renovate, and maintain school infrastructure for safe and conducive learning environments.",
    },
    {
        image: "/img/chairman.png",
        title: "Teacher Capacity Building Scheme",
        content: "Ongoing training to enhance teacher skills, keeping them updated on modern teaching methodologies and technologies.",
    },
    {
        image: "/img/female-student.png",
        title: "Girl’s education initiative",
        content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
    },
    {
        image: "/img/staffs.png",
        title: "Teacher Capacity Building Scheme",
        content: "Ongoing training to enhance teacher skills, keeping them updated on modern teaching methodologies and technologies.",
    },
    {
        image: "/img/child.png",
        title: "Girl’s education initiative",
        content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
    },
])
</script>