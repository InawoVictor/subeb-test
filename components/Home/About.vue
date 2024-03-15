<template>
  <div class="w-full lg:h-[110vh] h-[880px] flex lg:flex-row flex-col relative" >
    <div class="lg:w-[430px] flex-1 lg:h-full h-[400px] background">
    </div>
    <div class="bg-primary lg:h-full h-[400px] flex-1"></div>
    <div class="absolute flex lg:flex-row flex-col gap-x-16 lg:top-16 top-10 stay-center"> 
      <div class="lg:w-[402px] lg:h-[535px] md:w-[370px] w-[360px] h-[244px] ">
        <img src="/img/subeb-building.png" class="w-full h-full lg:object-contain object-cover " alt="">
      </div>
      <div class="font-dmSans lg:bg-transparent md:w-[370px] w-[360px] lg:w-[570px] bg-secondary lg:p-0 pt-4 px-8 pb-8">
        <span class="text-white lg:text-[30px] text-[23px] font-dmSans font-bold">What We Do At CRSUBEB</span>
        <ul class="w-full flex flex-col gap-y-4 justify-center mt-7">
          <li v-for="(item, index) in aboutItems" :key="index"  class="w-full bg-white p-6 rounded-b-md ease-in-out transition-all duration-2000" >
              <div class="font-[500] lg:text-[24px] md:text-lg text-[12px] text-primary pb-6 flex justify-between items-center">
                <span>{{item.title}}</span>
                <Icon name="oui:arrow-down" size="24" color="#1D67B4" class="cursor-pointer" @click="item.isOpen = !item.isOpen"/>
              </div>
              <p class="pt-2 text-[8px] md:text-sm lg:text-lg " v-if="item.isOpen">
                {{item.content}}
              </p>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showContent = ref(false);

const aboutItems = ref([
  { 
    isOpen: false,
    title: "Infrastructure Development",
    content:"To enhance educational accessibiAccordionty by developing innovative infrastructure projects, ensuring that every childhas access to safe and conducive learning environments across Cross River State."
  },
  {
    isOpen: false,
    title: "Teacher Professional Development",
    content:"To enhance educational accessibiAccordionty by developing innovative infrastructure projects, ensuring that every childhas access to safe and conducive learning environments across Cross River State."
  },
  {
    isOpen: false,
    title: "Monitoring and Evaluation",
    content:"To enhance educational accessibiAccordionty by developing innovative infrastructure projects, ensuring that every childhas access to safe and conducive learning environments across Cross River State."
  },
])

</script>

<style scoped>
.background {
  background: linear-gradient(to right, rgba(13, 153, 255, .8), rgba(13, 153, 255, .8)),
  url('/img/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} 
.stay-center{
  left: 50%;
  transform: translateX(-50%);
}


</style>