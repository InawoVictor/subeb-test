<template>
    <div class="container-2 sm:py-14 py-10 font-dmSans">
        <div class="flex justify-between items-center py-4 bor-b">
            <span class=" font-dmSans font-[500] text-[34px] text-primary">{{title}}</span>
            <span class="font-dmSans text-primary font-normal text-[17px] cursor-pointer" @click="router.push('/media/news')">See more</span>
        </div>
        <div  class="mt-9 lg:flex hidden justify-between gap-8 items-center ">
            <HomeCard 
                v-for="(item, index) in displayedItems" 
                :key="index" :title="item.title" 
                :img="item.blogCoverImage?.Location" 
                :date="item.dateCreated" :info="item.content" 
                :to="'/media/news/' + item.id"
                class="flex-1"
            />
        </div>

        <Carousel class="lg:hidden flex mt-9" :value="displayedItems" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="md:w-[300px] h-[370px] md:h-[300px] sm:w-[240px]">
                <img :src="slotProps.data.blogCoverImage.Location" class=" w-full object-cover h-[140px]"  alt="">                
                <div class="p-3 flex  flex-col h-[180px] justify-between shadow pb-4">
                    <div>
                        <span class="capitalize font-dmSans text-primary text-[12px] font-normal">
                            {{useFormatDate(slotProps.data.dateCreated)}}
                        </span>
                        <h3 class="font-dmSans text-primary truncate font-bold text-sm">
                            {{slotProps.data.title}}
                        </h3>
                        <p class="mt-1 text-[#212121] font-dmSans truncate font-normal text-sm">
                            {{useFormatTextLength(slotProps.data.content, 30)}}
                        </p>
                    </div>
                    <button 
                        class="btn bg-primary mt-10 self-start  flex items-center gap-2"
                        @click="router.push(`/media/news/${slotProps.data.id}`)"
                    >
                        <span class="font-[500] text-[16px]">Read more</span>
                        <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                    </button>
                </div>
            </div>
            </template>
        </Carousel>
    </div>
    </template>
    
<script setup lang="ts">
import {defineProps} from "vue";

const router = useRouter();
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    data: {
        type: Array,
        required: true
    }
});

const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const displayedItems = computed(() => {
  return props.data.slice(0, 3);
});


</script>

<style scoped>
    .bor-b {
        border-bottom: 1px solid #B3B3B3;
    }

    .shadow{
        box-shadow: 0px 9px 23px 1px #00000014;

    }
    
</style>