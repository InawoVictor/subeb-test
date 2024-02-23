<template>
  <div class="w-full h-[110vh] flex relative" >
    <div class="w-[430px] background">
    </div>
    <div class="bg-primary flex-1"></div>
    <div class="absolute flex gap-x-16 top-16 stay-center"> 
      <div class="w-[402px] h-[535px]">
        <img src="/img/subeb-building.png" class="w-full h-full" alt="">
      </div>
      <div class="font-dmSans">
        <span class="text-white text-[30px] font-dmSans font-bold">What We Do At CRSUBEB</span>
        <ul class="w-[570px] flex flex-col gap-y-4 justify-center mt-7">
          <li class="w-full bg-white p-6 rounded-b-md">
            <div class="font-[500] text-[24px] text-primary pb-6 flex justify-between items-center">
              <span>Infrastructure Development</span>
              <Icon name="oui:arrow-down" size="24" color="#1D67B4" class="cursor-pointer"/>
            </div>
            <p class="pt-2">
              To enhance educational accessibility by developing 
              innovative infrastructure projects, 
              ensuring that every child 
              has access to safe and conducive learning 
              environments across Cross River State.
            </p>
          </li>
          <li class="w-full bg-white p-6 ">
            <div class="font-[500] text-[24px] text-primary flex justify-between items-center">
              <span>Teacher Professional Development</span>
              <Icon name="oui:arrow-down" size="24" color="#1D67B4" class="cursor-pointer" />
            </div>
          </li>
          <li class="w-full bg-white p-6 ">
            <div class="font-[500] text-[24px] text-primary flex justify-between items-center">
              <span>Monitoring and Evaluation</span>
              <Icon name="oui:arrow-down" size="24" color="#1D67B4" class="cursor-pointer"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
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