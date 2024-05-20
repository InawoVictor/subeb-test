<template>
  <div class=" lg:mt-[-150px] mt-[-170px] relative md:h-[823px] h-[780px] ">
    <img src="/img/hero.png" alt="" class="w-full bg-primary md:h-[823px] h-[780px] object-cover ">
    <div class="absolute top-1/2 -translate-x-1/2 w-[70%] stay-center text-txtWhite">
      <span class="lg:text-[35px] md:text-[23px] text-sm font-dmSans font-[400]">
        Welcome To
      </span>
      <div>
        <h1 class="font-inter lg:text-[43px] md:text-[35px] text-[23px] font-semibold mt-5 lg:mt-10 leading-[30px] md:leading-[36px] lg:leading-[60px]">
          CROSS RIVER STATE UNIVERSAL BASIC EDUCATION BOARD (CRSUBEB)
        </h1>
      </div>
      <!-- <p class="lg:text-[20px] md:text-lg text-[11px] font-dmSans mt-5 lg:mt-10">
        As the driving force behind educational 
        development in Cross River State, SUBEB is 
        dedicated to fostering a transformative learning 
        environment for every child. With a commitment to strategic 
        initiatives, modern methodologies, and the empowerment of 
        educators, we're shaping the future leaders of tomorrow.
        Join us in our mission to unlock the full 
        potential of every learner and build a brighter tomorrow for Cross River State!
      </p>
      <button @click="navigateTo('/about/management')" class="btn mt-10 font-inter font-[500] text-[7px] md:text-sm lg:text-[16px] lg:px-[32px] md:px-6 px-4 lg:py-[16px] md:py-3 py-2">
        Learn more
      </button> -->
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.hero{
  background: linear-gradient(to right, rgba(2, 0, 102, .6), rgba(2, 0, 102, .6)),
   url("img/hero.png");
   background-repeat: no-repeat;
}

.stay-center{
  left: 50%;
  transform: translateX(-50%);
}

</style>