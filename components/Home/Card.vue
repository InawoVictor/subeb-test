<template>
    <div class="min-w-[250px] h-[300px] flex-wrap shadow">
        <img :src="img" class=" w-full object-cover h-[140px]" alt="">
        <div class="bg-white p-3 pb-4">
            <span class="capitalize font-dmSans text-primary text-[12px] font-normal">
                {{useFormatDate(date)}}
            </span>
            <h3 class="font-dmSans text-primary truncate font-bold text-sm">
                {{ title }}
            </h3>
            <p class="mt-1 text-[#212121] truncate font-dmSans font-normal text-sm">
                {{useFormatTextLength(info, 30)}}
            </p>
            <button 
                class="btn bg-primary mt-10  flex items-center gap-2"
                @click="router.push(`${to}`)"
            >
                <span class="font-[500] text-[16px]">Read more</span>
                <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue"

const router = useRouter();
const props = defineProps({
    img: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
})

</script>