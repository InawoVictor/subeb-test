<template>
  <div class="w-full">
    <div class="bg-[#E2E8F0]">
        <div class="md:container md:py-6  pt-6 flex md:flex-row flex-col items-center md:gap-12 gap-7">
                <span class=" font-dmSans font-bold text-nowrap text-[26px] text-[#7B7B7B]">
                    Download EMIS Data
                </span>
            <div class="w-full md:bg-transparent bg-secondary md:p-0 p-8">
                <InputGroup class="md:w-[327px] w-full h-[36px]">
                    <InputGroupAddon class="bg-white">
                        <Icon name="pajamas:search" />
                    </InputGroupAddon>
                    <InputText placeholder="Search" style="border-left: none;" class="pl-1"/>
                </InputGroup>
            </div>
        </div>
    </div>
    <div class="container pt-10 pb-20">
        <ul class="flex flex-col gap-y-3">
            <li v-for="item in data" :key="item.id" class="py-3 bor-b flex md:flex-row flex-col gap-y-7 justify-between items-center">
                <span class="font-bold text-[#111827] flex items-center gap-3 font-dmSans md:text-[32px] text-[26px]">
                    <img src="/svg/file.svg" height="26" width="21" alt="">
                    <span>{{ item.name }}</span>
                </span>
                <div class="flex gap-2">
                    <span 
                    class="shadow-[0_1px_2x_0px_rgba(0,0,0, .05)] btn-3"
                    >
                        Preview
                    </span>
                    <span 
                        class="shadow-[0_1px_2px_0_rgba(0, 0, 0, .05)] btn-3"
                    >
                        Download
                    </span>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';

const data = ref([
    {
        id: 1,
        name: 'EMIS 2024'
    },
    {
        id: 1,
        name: 'EMIS 2023'
    },
    {
        id: 1,
        name: 'EMIS 2022'
    },
    {
        id: 1,
        name: 'EMIS 2021'
    },
])

</script>

<style scoped>
.bor-b{
    border-bottom: 2px solid #E5E7EB;
}

</style>