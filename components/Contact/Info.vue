<template>
  <div class="w-full h-[120vh] flex relative">
    <div class="bg-white flex-1"></div>
    <div class="w-[460px] background"></div>
    <div class="absolute flex gap-x-16 top-[100px] container-2 stay-center">
        <div class="w-[545px] pt-8 ">
            <div class="w-full ">
                <h1 class="font-dmSans text-[54px] mb-8 font-bold text-black">
                    Get in <span class="text-primary">Touch</span>
                </h1>
                <p class="text-[16px] font-bold font-dmSans text-black">
                    CRSUBEB is the principal body charged with 
                    the responsibility of delivering
                    Basic education has its vision, mission, 
                    core values, and benchmarks.
                </p>
            </div>
            <form @submit.prevent class="flex w-full mt-8 flex-col gap-y-6">
                <input type="text" placeholder="Name*" class="input"/>
                <input type="email" placeholder="Email*" class="input"/>
                <input type="text" placeholder="Phone number*" class="input"/>
                <button type="submit" class="submit-btn">Send</button>
            </form>
            <div class="flex justify-between items-center mt-12">
                <div class="flex items-center gap-3">
                    <img src="/svg/phone.svg" class="w-[22px] h-[22px]" alt="">
                    <div class="flex flex-col ">
                        <span class="font-dmSans font-bold text-[13px]">PHONE</span>
                        <span class="font-montserrat font-normal text-[13px]">0803 922 6542</span>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <img src="/svg/whatsapp.svg" class="w-[22px] h-[22px]" alt="">
                    <div class="flex flex-col ">
                        <span class="font-dmSans font-bold text-[13px]">WHATSAPP</span>
                        <span class="font-montserrat font-normal text-[13px]">0803 922 6542</span>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <img src="/svg/email.svg" class="w-[22px] h-[22px]" alt="">
                    <div class="flex flex-col ">
                        <span class="font-dmSans font-bold text-[13px]">EMAIL</span>
                        <span class="font-montserrat font-normal text-[13px]">info@crsubeb.com.ng</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[545px] h-[650px] mt-[-60px]">
            <img src="/img/map.png" alt="">
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import InputText from 'primevue/inputtext';
</script>

<style scoped>
.background {
  background: linear-gradient(to right, rgba(13, 153, 255, .8), rgba(13, 153, 255, .8)),
  url('/img/subeb-building.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} 
.stay-center{
  left: 50%;
  transform: translateX(-50%);
}

</style>