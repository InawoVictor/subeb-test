<template>
    <div class="w-full mb-32">
        <div class="sm:bg-whiteBg bg-secondary">
            <div class="container pt-0 pb-7 sm:pt-12 sm:pb-8">
                <BaseTab 
                    :tabTitles="['All', 'Upcoming', 'Ongoing', 'Completed']"
                    @update:title="getSelectedStatus"
                />
                <div class=" sm:hidden block ">
                    <div class="">
                        <Dropdown v-model="selectedStatus" :options="items" optionLabel="label" optionValue="value"
                            :virtualScrollerOptions="{ itemSize: 38 }" :placeholder="selectedStatus" class="w-full p-2 border-none focus:border-none focus:outline-none " />
                    </div>
                </div>
            </div>
        </div>
        <ul class="container py-10 sm:py-0 grid lg:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] 
                sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] 
            grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] 
            items-center gap-8">
            <li class="p-2" v-for="(trainingCard) in data" :key="trainingCard.id">
                <div class="trainings-card flex-col flex">
                    <img :src="trainingCard.blogCoverImage[0].Location" class="w-full lg:h-[340px] md:h-[200px] sm:h-[150px] h-[104px] xl:object-contain object-cover" alt="Project blogCoverImage">
                    <div class="md:py-6 py-3 pb-4 flex-1 flex flex-col justify-between px-4 ">
                        <div>
                            <h3 class="truncate pb-1 font-bold font-dmSans text-txtDark2 md:text-[30px] sm:text-xl text-[10px] md:leading-35 sm:leading-[28px] leading-[13px]">
                                {{trainingCard.title}}
                            </h3>
                            <p class="md:mt-3 sm:mt-2 mt-1 text-txtDark font-normal lg:text-[20px] md:text-sm sm:text-[12px] text-[6px] lg:leading-[28px] sm:leading-[18px] leading-[11px]">
                                {{trainingCard.content}}
                            </p>
                        </div>
                        <button
                            class="btn bg-[#1D67B4] mt-10 p-1 sm:p-2 self-start flex items-center gap-2"
                            @click="router.push(`/programs/trainings/${trainingCard.id}`)"
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
.trainings-card {
    @apply w-full lg:h-[530px] sm:h-[400px] h-[350] hover:translate-y-[-3px] transition-all duration-300 ease-out md:rounded-[20px] rounded-[10px] cursor-pointer shadow-[0_4px_10px_0px_rgba(0,0,0,0.06)] overflow-hidden;
}
</style>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface Image{
    Location: string;
    id: string;
}

interface Training {
    id: string,
    blogCoverImage: Image[];
    title: string,
    content: string,
}

const router = useRouter();
const emit = defineEmits(['update:status']);
const props = defineProps({
    data: {
        type: Array as () => Training[],
        required: true,
    }
})

const selectedStatus = ref("all");
const items = ref([
    {
        label: "All",
        value: "All",
    },
    {
        label: "Ongoing",
        value: "Ongoing"
    },
    {
        label: "Upcoming",
        value: "Upcoming",
    },
    {
        label: "Completed",
        value: "Completed",
    },
])

const getSelectedStatus = (value: string) => {  
    selectedStatus.value = value;
}
watch(selectedStatus, (newStatus: string) => {
    // console.log("New year: " + newStatus);
    emit("update:status", newStatus);
})

// const trainingsCard =ref<training[]>([
//     {
//         image: "/img/students.png",
//         title: "Quality Education Enhancement Program",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/conference.png",
//         title: "School Infrastructure Development Project",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/graduation.png",
//         title: "Teacher Capacity Building Scheme",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/portrait.png",
//         title: "Quality Education Enhancement Program",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/people.png",
//         title: "Teacher Capacity Building Scheme",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/conference-2.png",
//         title: "Quality Education Enhancement Program",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/staff-1.png",
//         title: "Quality Education Enhancement Program",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/staff-2.png",
//         title: "Quality Education Enhancement Program",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
//     {
//         image: "/img/staff-award.png",
//         title: "Quality Education Enhancement Program",
//         content: "Improve overall education quality through curriculum development, teacher training, and enhanced learning materials.",
//     },
// ]);
</script>