<template>
  <div class="w-full">
    <div class="bg-[#E2E8F0]">
        <div class="container py-6 flex items-center gap-12">
            <span class="font-dmSans font-bold text-[26px] text-[#7B7B7B]">
                Download EMIS Data
            </span>
            <InputGroup class="w-[327px] h-[36px]">
                <InputGroupAddon class="bg-white">
                    <Icon name="pajamas:search" />
                </InputGroupAddon>
                <InputText placeholder="Search" style="border-left: none;" class="pl-1"/>
            </InputGroup>
        </div>
    </div>
    <div class="container pt-10 pb-20">
        <ul>
            <li v-for="item in data" :key="item.id" class="py-3 bor-b flex justify-between items-center">
                <span class="font-bold text-[#111827] flex items-center gap-3 font-dmSans text-[32px]">
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