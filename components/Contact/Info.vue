<template>
  <div class="w-full h-[120vh] flex lg:flex-row flex-col relative">
    <div class="bg-white flex-1 lg:h-full "></div>
    <div class="lg:w-[460px] w-full background lg:h-full h-[280px]"></div>
    <div class="absolute flex lg:flex-row flex-col gap-x-16 gap-y-8 lg:top-[100px] top-[0] container-2 stay-center">
        <div class="lg:w-[545px] w-full pt-8 ">
            <div class="w-full ">
                <h1 class="font-dmSans lg:text-[54px] md:text-[34px] text-[23px] mb-4  md:mb-8 font-bold text-black">
                    Get in <span class="text-primary">Touch</span>
                </h1>
                <p class="text-[16px] md:text-sm  font-bold font-dmSans text-black">
                    CRSUBEB is the principal body charged with 
                    the responsibility of delivering
                    Basic education has its vision, mission, 
                    core values, and benchmarks.
                </p>
            </div>
            <form @submit.prevent class="flex w-full mt-4 lg:mt-8 flex-col lg:gap-y-6 gap-y-3">
                <input type="text" placeholder="Name*" class="input"/>
                <input type="email" placeholder="Email*" class="input"/>
                <input type="text" placeholder="Phone number*" class="input"/>
                <button type="submit" class="submit-btn">Send</button>
            </form>
            <div class="flex md:flex-row flex-col justify-between items-center mt-6 lg:mt-12">
                <div class="flex items-center gap-3">
                    <img src="/svg/phone.svg" class="w-[22px] h-[22px]" alt="">
                    <div class="flex flex-col ">
                        <span class="font-dmSans font-bold md:text-[13px] text-[11px]">PHONE</span>
                        <span class="font-montserrat font-normal md:text-[13px] text-[11px]">0803 922 6542</span>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <img src="/svg/whatsapp.svg" class="w-[22px] h-[22px]" alt="">
                    <div class="flex flex-col ">
                        <span class="font-dmSans font-bold md:text-[13px] text-[11px]">WHATSAPP</span>
                        <span class="font-montserrat font-normal md:text-[13px] text-[11px]">0803 922 6542</span>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <img src="/svg/email.svg" class="w-[22px] h-[22px]" alt="">
                    <div class="flex flex-col ">
                        <span class="font-dmSans font-bold md:text-[13px] text-[11px]">EMAIL</span>
                        <span class="font-montserrat font-normal md:text-[13px] text-[11px]">info@crsubeb.com.ng</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:w-[545px] w-full lg:h-[650px] h-[244px]  lg:mt-[-60px]">
            <img src="/img/map.png" alt="" class="lg:object-contain object-cover h-full w-full">
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