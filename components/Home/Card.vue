<template>
    <div class="min-w-[300px] h-[290px] flex-wrap shadow">
        <img :src="img" class=" w-full object-cover h-[140px]" alt="">
        <div class="bg-white p-3">
            <span class="capitalize font-dmSans text-primary text-[12px] font-normal">
                {{useFormatDate(date)}}
            </span>
            <h3 class="font-dmSans text-primary font-bold text-sm">
                {{ title }}
            </h3>
            <p class="mt-1 text-[#212121] font-dmSans font-normal text-sm">
                {{info}}
            </p>
            <button class="btn bg-primary mt-10  flex items-center gap-2">
                <span class="font-[500] text-[16px]">Read more</span>
                <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(["img","date","title","info"])

</script>