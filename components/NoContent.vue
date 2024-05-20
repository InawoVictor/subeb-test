<template>
    <div class="bg-[#F2FDFF] ">
        <div class="news-container py-16 ">
            <h6 class="text-primary">{{title}}</h6>
            <div class="mt-8 border-solid border-[3px] flex items-center justify-center w-full h-[463px] rounded-[19px] border-primary">
                <div class="flex flex-col gap-y-3 items-center">
                    <img src="/svg/no-news.svg" alt="No news">
                    <div class="flex flex-col gap-y-2">
                        <p class="text-primary sm:text-[40px] text-3xl font-semibold leading-11 font-arimo ">{{subtitle}}</p>
                        <div class="bor-b"></div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    subtitle: {
        type: String,
        required: true
    },
})
</script>

<style scoped>
.bor-b{
    height: 2px;
    /* position: absolute; */
    width: 120px;
    left: 0;
    background: #020066;
}
</style>
