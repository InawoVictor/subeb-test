<template>
    <div class="mb-32 mt-10">
        <ul class="container py-10 sm:py-0 grid lg:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] 
            sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] 
            grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] 
            items-center gap-8 ">
            <li class="p-2" v-for="(newsCard) in data" :key="newsCard.id">
                <div class="projects-card flex-col flex">
                    <img :src="newsCard.blogCoverImage.Location" class="w-full lg:h-[300px] md:h-[200px] sm:h-[150px] h-[104px] object-cover" alt="Project Image">
                    <div class="md:py-6 py-2 flex-1 px-2 md:px-4 flex flex-col justify-between">
                        <div>
                            <h3 class="truncate pb-1 font-bold font-dmSans text-txtDark2 md:text-[30px] sm:text-xl text-[10px] md:leading-35 sm:leading-[28px] leading-[13px]">
                                {{newsCard.title}}
                            </h3>
                            <p class="md:mt-3 sm:mt-2 mt-1 text text-txtDark truncate font-normal lg:text-[20px] md:text-sm sm:text-[12px] text-[6px] lg:leading-[28px] sm:leading-[18px] leading-[11px]">
                                {{useFormatTextLength(newsCard.content, 30)}}
                            </p>
                        </div>
                        <button
                            class="btn bg-blueBg mt-10 p-1 sm:p-2 self-start flex items-center gap-2"
                            @click="router.push(`/media/news/${newsCard.id}`)"
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
.projects-card {
    @apply w-full lg:h-[530px] sm:h-[400px] h-[350]  md:rounded-[20px] rounded-[10px] cursor-pointer shadow-[0_4px_10px_0px_rgba(0,0,0,0.06)] overflow-hidden;
}
</style>

<script lang="ts" setup>
import {defineProps} from "vue";

interface Image{
    Location: string;
    id: string;
}

interface Project {
    id: string,
    blogCoverImage: Image;
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
const router = useRouter();

</script>