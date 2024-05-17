<template>
    <div class="bg-white pb-16">
        <div class="container pt-14">
            <h2 class="font-dmSans text-[30px] text-primary font-bold text-center mb-14 ">
                GALLERY
            </h2>
            <ul class="
                grid xl:grid-cols-[repeat(auto-fill,_minmax(500px,_1fr))] 
                sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] 
                grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))]  
                items-center gap-8"
            >
                <li v-for="item in data" :key="item.id" 
                    class="
                        w-full rounded-[20px] cursor-pointer 
                        shadow-[0_4px_10px_0px_rgba(0,0,0,0.06)] overflow-hidden
                    "
                 >
                    <img :src="item.mediaCoverImage?.Location" class="w-full lg:h-[300px] md:h-[250px] sm:h-[200px] h-[125px] object-cover" alt="Gallery Image">
                    <div class="md:py-6 sm:py-3 py-1 sm:px-4 px-3 ">
                        <h3 class="font-bold font-dmSans text-txtDark2 md:text-[30px] sm:text-xl text-[10px] md:leading-35 sm:leading-[28px] leading-[13px]">{{item.title}}</h3>
                        <div class="md:mt-3 sm:mt-1 mt-2 flex justify-between text-txtDark3 font-dmSans font-normal sm:text-[10px] text-[6px] md:text-sm lg:text-[18px]">
                            <span class="" style="font-style: italic;" >{{item.shotBy}}</span>
                            <div class="flex items-center sm:text-sm text-[8px]">
                                <img src="/svg/date.svg" class=" md:w-[10px] md:h-[10px] sm:h-[8px] sm:w-[8px] w-[4px] h-[4px]"  alt="">
                                &nbsp;<span>{{useFormatDate(item.shotDate)}}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Image{
    Location: string;
    id: string;
}
interface GalleryItem {
    id: string,
    mediaCoverImage: Image;
    shotBy: string,
    shotDate: string,
    title: string,
}
const props = defineProps({
    data: {
        type: Array as () => GalleryItem[],
        required: true,
    }
})

// const galleryItems =ref<gallery[]>([
//     {
//         image: "/img/african-child.png",
//         title: "Learners during quiz competition",
//         author: "Shot by John Doe",
//         date: "21/4/2020",
//     },
//     {
//         image: "/img/study-group.png",
//         title: "School infrastructure development",
//         author: "Shot by John Doe",
//         date: "21/4/2020",
//     },
//     {
//         image: "/img/school.png",
//         title: "Primary school A & B",
//         author: "Shot by John Doe",
//         date: "21/4/2020",
//     },
//     {
//         image: "/img/african-woman.png",
//         title: "Girl’s education initiative",
//         author: "Shot by John Doe",
//         date: "21/4/2020",
//     },
//     {
//         image: "/img/workmates.png",
//         title: "Teacher Capacity Building Scheme",
//         author: "Shot by John Doe",
//         date: "21/4/2020",
//     },
//     {
//         image: "/img/african-child.png",
//         title: "Quality Education Enhancement Program",
//         author: "Shot by John Doe",
//         date: "21/4/2020",
//     },
// ])
</script>