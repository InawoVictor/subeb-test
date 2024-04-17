<template>
  <div class="w-full bg-[#F2FDFF] p-16" >
    <div class="container flex lg:flex-row flex-col gap-12">
        <img src="/img/classroom.png" class="lg:h-[418px] h-[261px] lg:w-[420px] w-full lg:object-contain object-cover" alt="">
        <div>
            <span class="text-primary font-dmSans mb-3 font-bold lg:text-[30px] text-[23px]">
                Our Objectives
            </span>
            <ul class="font-dmSans mt-8 flex flex-col lg:gap-y-8 gap-y-5">
                <li class="flex gap-4 items-start">
                    <img src="/svg/list.svg" class="sm:h-[40px] sm:w-[40px] w-[20px] h-[20px]" alt="">
                    <p class="font-normal lg:text-lg leading-[12px] md:text-[12px] text-[8px]">
                        Formulate and implement policy guidelines
                        and minimum standards of education for 
                        the successful operation of the Universal Basic 
                        Education Programme in the state.
                    </p>
                </li>
                <li class="flex gap-4 items-start">
                    <img src="/svg/settings.svg" alt="" class="sm:h-[40px] sm:w-[40px] w-[20px] h-[20px]" >
                    <p class="font-normal lg:text-lg leading-[12px] md:text-[12px] text-[8px]">
                        The provision of equal and adequate 
                        basic education opportunities and 
                        facilities in the state
                    </p>
                </li>
                <li class="flex gap-4 items-start">
                    <img src="/svg/clipboard.svg" alt="" class="sm:h-[40px] sm:w-[40px] w-[20px] h-[20px]">
                    <p class="font-normal lg:text-lg leading-[12px] md:text-[12px] text-[8px]">
                        The development, procurement and dissemination 
                        of curricula, syllabi and instructional materials for 
                        basic education which are in use in 
                        Primary and Junior Secondary Schools in the state.
                    </p>
                </li>
            </ul>            
            <button @click="navigateTo('/about/crsubeb')" v-if="isButton" class="btn-2 md:mt-10 mt-6  flex items-center gap-2">
                <span class="font-[500] lg:text-[16px] md:text-sm text-[7px]">Read more</span>
                <Icon name="mingcute:arrow-right-line" width="16" color="#020066"/>
            </button>
        </div> 
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
    isButton: {
        type: Boolean,
        default: true,
        required: false
    }
})
</script>

<style>

</style>