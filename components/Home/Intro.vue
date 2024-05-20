<template>
  <div class="container md:pb-0 pb-6 mb-3 flex lg:flex-row flex-col-reverse justify-between gap-y-6 items">
    <div class="lg:w-[666px] w-full">
        <span class="text-sm font-dmSans font-500 text-secondary">Welcome Message</span>
        <div class="md:mt-5 mt-3">
            <span class="header-text">
                Etta, Inyang Eyo | Acting <br/> Chairman for Subeb
            </span>
        </div>
        <p class="font-dmSans font-medium lg:text-[20px] md:text-lg text-[11px]  md:mt-8 mt-4">
            As the driving force behind educational development 
            in Cross River State, SUBEB is dedicated to fostering 
            a transformative learning environment for every child. 
            With a commitment to strategic initiatives, modern 
            methodologies, and the empowerment of educators, we're shaping the future leaders of tomorrow. 
            Join us in our mission to unlock the full 
            potential of every learner and build a brighter 
            tomorrow for Cross River State!
        </p>
        <button v-if="isButton" class="btn-2 md:mt-10 mt-6 flex items-center gap-2" @click="navigateTo('/about/management/etta-inyang-eyo')">
            <span class="font-[500] lg:text-[16px] md:text-sm text-[7px]">Read more</span>
            <Icon name="mingcute:arrow-right-line" width="16" color="#020066"/>
        </button>
    </div>
    <div class="flex P-2 flex-col items-center gap-y-4">
        <img src="/img/person-1.png" alt="" class="w-[233px] lg:w-[393px] lg:h-[434px] h-[257px]">
        <div class="flex flex-col items-center font-dmSans">
            <span class="text-sm font-bold text-black">Etta, Inyang Eyo.</span>
            <span class="text-sm font-[400] text-black tracking-wider" style="font-style: italic;">
                Acting Chairman / Director of Admin.
            </span>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const router = useRouter()

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