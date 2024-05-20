<template>
    <div>
        <ResourcesHero :title1="title1" :title2="title2"/>
        <div class="bg-whiteBg w-full" v-if="newsData">
            <div class=" pt-8">
                <div class="">
                    <h2 class="header-text text-center mb-8">
                        News
                    </h2>
                </div>
                <div class="text-center px-2 mb-3 sm:mb-6">
                    <p class="font-bold font-dmSans sm:leading-12 sm:mb-3 mb-1 leading-6 md:text-[32px] sm:text-2xl text-[20px] text-black">
                        {{ newsData.title }}
                    </p>
                    <!-- <span class="font-normal  font-dmSans md:text-[20px] sm:text-sm text-[10px]  italic text-[#66666]">
                        By Joseph  Odum, Cross River state SUBEB information Officer PRO-SUBEB
                    </span> -->
                </div>
                <div class="sm:w-[90%] w-full sm:mx-auto mx-0 "><img :src="newsData.blogCoverImage.Location" class="w-full h-[245px] sm:h-[570px] object-cover" alt=""></div>
                <div class="container py-5">
                    <p class="content mt-3">
                        {{newsData.content}}
                    </p>
                    <!-- <p class="content mt-5">
                        Declaring the event open, the Acting Executive Chairman of SUBEB, 
                        Mr Inyang Eyo Etta urged those selected for the teachers internship scheme to take the training 
                        seriously to achieve government objectives for which the program was initiated and intended for.
                    </p> -->
                    <!-- <p class="content mt-5">
                        He said the teachers were privilege to have been selected and trained as 
                        one of the procedures and strategy of SUBEB introduction of new modules 
                        and ICT to grap concepts of the artificial 
                        intelligence to scaled up time after, that will enable teachers 
                        go down the lane to teach others the process.
                    </p> -->
                    <!-- <p class="content mt-5">
                        Mr Etta , admonished the participant to be committed to the 
                        training as it seems consequential in the turning a round of 
                        their lives in the future for a better living and 
                        enhancement of Educational growth at the basic education level and the society at large.
                    </p> -->
                    <!-- <p class="content mt-5">
                        The Acting Executive Chairman , reminded the teachers of their roles as 
                        important because they were recruited as intert, which the teachers are 
                        on interim bases , and requires seriousness and 
                        good performance at their duty post to earn them being recommended for a permanent job.
                    </p> -->
                    <!-- <p class="content mt-5">
                        He explained that the new innovative training is a deviation from what 
                        use to be in the classroom between teachers and learn hence , SUBEB is 
                        trying to take education to the next level , 
                        adding that the smart Schools are in partnership with the Korean government.
                    </p> -->
                    <!-- <p class="content mt-5">
                        Speaking earlier , the facilitator , UBEC, Teachers Internship Scheme , Dr Michael O. 
                        Ajileye, identified attitude on the part of participants to the success or failure of 
                        government programs and projects and advice the Teachers not to undermine the opportunity 
                        granted them , 
                        rather exert effort and determination towards achieving them.
                    </p> -->
                </div>
            </div>
            <div class="container pt-0">
                <h2 class="header-text text-center mb-8">
                    MORE NEWS
                </h2>

                <div>
                    <Carousel class=" mt-9 pb-8" 
                        v-if="newsData.moreNews.length >= 1"
                        :value="newsData.moreNews" :numVisible="2" 
                        :numScroll="3" 
                        :responsiveOptions="responsiveOptions"
                    >
                        <template #item="slotProps">
                            <div 
                                class="xl:w-[525px] md:w-[250px] sm:w-[240px] w-[130px]  md:h-[500px] sm:h-[270px]  
                                h-[290px]  flex-wrap shadow rounded-xl"
                            >
                                <img :src="slotProps.data.blogCoverImage.Location" class=" w-full object-cover sm:h-[115px] xl:h-[262px] h-[140px]"  alt="">
                                <div class="bg-white lg:pt-8 sm:pt-4 sm:px-3 pt-2 px-1 ">
                                    <h3 class="font-dmSans text-primary font-bold lg:text-[20px] md:text-[16px] sm:text-sm text-[6px] leading-[8px]">
                                        {{slotProps.data.title}}
                                    </h3>
                                    <p class="mt-1 text-[#212121] font-dmSans font-normal lg:text-[18px] md:text-sm text-[5px] md:leading-[16px] leading-[9px] lg:leading-[30px]">
                                        {{slotProps.data.content}}
                                    </p>
                                    <button 
                                        @click="router.push(`/media/news/${slotProps.data.id}`)"
                                        class="
                                        md:px-4 sm:py-2 px-2 py-[1px]  bg-blueBg text-white 
                                        cursor-pointer border border-transparent sm:rounded-md rounded-sm 
                                        focus:outline-none md:mt-10  sm:mt-6 mt-3  flex items-center gap-2"
                                    >
                                        <span class="font-[500] text-[5px]  md:text-[16px]">Read more</span>
                                        <Icon name="mingcute:arrow-right-line" class="w-[10px] sm:w-[16px]" color="white"/>
                                    </button>
                                </div>
                            </div>
                        </template>
                    </Carousel>
                    <NoContent title="Related News"  subtitle="No Related News Available" v-else/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const news = useNewsStore();
const newsData = ref(null);
const title1 = ref({
    text: "Media",
    to: "/media/gallery",
});
const title2 = ref({
    text: "News",
});

const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 2,
        numScroll: 1
    }
]);

const getSingleNews = async () => {
    let id = route.params.id;
    const data = await news.getSingleNews(id);
    newsData.value = data;
    console.log("news data: " + newsData.value);
}

onMounted(() => {
    getSingleNews();
})
</script>