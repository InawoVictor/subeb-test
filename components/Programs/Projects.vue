<template>
    <div class="w-full mb-32">
        <div class=" sm:bg-whiteBg bg-secondary">
            <div class="container pt-0 pb-7 sm:pt-12 sm:pb-8">
                <BaseTab 
                    @update:title="getSelectedYear"
                    :tabTitles="['2024', '2023', '2022', '2021']"
                />
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
            <li class="p-2" v-for="(projectCard) in data" :key="projectCard.id">
                <div class="projects-card flex-col flex">
                    <img :src="projectCard?.blogCoverImage[0].Location" class="w-full lg:h-[300px] md:h-[200px] sm:h-[150px] h-[104px] object-cover" alt="Project Image">
                    <div class="md:py-6 py-3 pb-4 flex-1 flex flex-col justify-between px-4 ">
                        <div class="">
                            <h3 class="truncate pb-1 font-bold font-dmSans text-txtDark2 md:text-[30px] sm:text-xl text-[10px] md:leading-35 sm:leading-[28px] leading-[13px]">
                                {{projectCard.title}}
                            </h3>
                            <p class="md:mt-3 sm:mt-2 mt-1 text text-txtDark truncate font-normal lg:text-[20px] text-wrap md:text-sm sm:text-[12px] text-[6px] lg:leading-[28px] sm:leading-[18px] leading-[11px]">
                                {{useFormatTextLength(projectCard.content, 60)}}
                            </p>
                        </div>
                        <button 
                            @click="router.push(`/programs/projects/${projectCard.id}`)"
                            class="btn bg-blueBg self-start p-1 sm:p-2  flex items-center gap-2"
                        >
                            <span class="font-[500] md:text-[16px] sm:text-sm text-[10px]">Read more</span>
                            <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>

<script lang="ts" setup>
interface Image{
    Location: string;
    id: string;
}

interface Project {
    id: string,
    blogCoverImage: Image[];
    title: string,
    content: string,
}
const props = defineProps({
    data: {
        type: Array as () => Project[],
        required: true,
    }
})
// interface project {
//     image: string,
//     title: string,
//     content: string,
// }
const emit = defineEmits(['update:year']);
const router = useRouter();
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
]);

const getSelectedYear = (value: string) => {  
    selectedYear.value = value;
}

watch(selectedYear, (newyear: string) => {
    // console.log("New year: " + newyear);
    emit("update:year", newyear);
})

// const projectsCard =ref<project[]>([
//     {
//         image: "/img/subeb-building.png",
//         title: "Quality Education Enhancement Program",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/classroom-2.png",
//         title: "School Infrastructure Development Project",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/chairman-2.png",
//         title: "Teacher Capacity Building Scheme",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/students-teacher.png",
//         title: "Quality Education Enhancement Program",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/students-teacher-2.png",
//         title: "Teacher Capacity Building Scheme",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/students.png",
//         title: "Quality Education Enhancement Program",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
// ])
</script>