<template>
    <div class="container-2 py-14 font-dmSans">
        <div class="flex justify-between items-center py-4 bor-b">
            <span class=" font-dmSans font-[500] text-[34px] text-primary">{{title}}</span>
            <span class="font-dmSans text-primary font-normal text-[17px]">See more</span>
        </div>
        <div  class="mt-9 lg:flex hidden justify-between gap-8 items-center ">
            <HomeCard 
                v-for="(item, index) in displayedItems" 
                :key="index" :title="item.title" 
                :img="item.blogCoverImage[0].Location" 
                :date="item.dateCreated" :info="item.content" 
                class="flex-1"
            />
        </div>

        <Carousel class="lg:hidden flex mt-9" :value="displayedItems" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="md:w-[300px] h-[290px] sm:w-[240px] flex-wrap shadow">
                <img :src="slotProps.data.blogCoverImage[0].Location" class=" w-full object-cover h-[140px]"  alt="">                
                <div class="bg-white p-3">
                    <span class="capitalize font-dmSans text-primary text-[12px] font-normal">
                        {{useFormatDate(slotProps.data.dateCreated)}}
                    </span>
                    <h3 class="font-dmSans text-primary font-bold text-sm">
                        {{slotProps.data.title}}
                    </h3>
                    <p class="mt-1 text-[#212121] font-dmSans font-normal text-sm">
                        {{slotProps.data.content}}
                    </p>
                    <button class="btn bg-primary mt-10  flex items-center gap-2">
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
        numScroll: 1
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