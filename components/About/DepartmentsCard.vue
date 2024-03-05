<template>
        <div class="flex-1 lg:px-[66px] px-[20px] pb-1 lg:py-[19px]">
            <h3 class="font-dmSans font-bold text-[8px] sm:text-sm lg:text-[20px] md:mb-4 lg:mb-8 text-primary">{{ title }}</h3>
            <p class="text-[8px] sm:text-sm lg:text-lg mb-1 lg:mb-4 font-dmSans font-normal text-txtDark3" style="font-style: italic;">
                {{author}}
            </p>
            <p
                class="font-dmSans lg:text-[20px] md:text-sm text-[8px]
                    font-normal leading-[8px] md:leading-[25px] lg:leading-[30px]
                    text-[#212121]
                "
            >
                {{content}}
            </p>
            <button
                class="
                    md:mt-6 sm:mt-5 mt-3 lg:mt-10  flex items-center sm:gap-2 gap-1 
                    md:px-4 px-2 py-[1px] md:py-2  text-sm bg-secondary text-white cursor-pointer
                    border border-transparent rounded-md focus:outline-none
                "
                @click="router.push(`/about/departments${to}`)"
            >
                <span
                    class="font-[500] text-[7px] md:text-sm lg:text-[16px]">Read more</span>
                <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
            </button>
        </div>
        <img :src="image" class="xl:w-[523px] md:w-[300px] w-[166px] h-full" alt="">
</template>

<script lang="ts" setup>
const router = useRouter()

const props = defineProps(["title","image","content","author","to"])

</script>
