<template>
    <div>
        <ResourcesHero title1="Media" title2="programs" title3="Project"/>
        <div class="bg-whiteBg w-full" v-if="projectData">
            <div class=" pt-8">
                <div class="">
                    <h2 class="header-text text-center mb-8">
                        Project
                    </h2>
                </div>
                <div class="text-center px-2 mb-3 sm:mb-6">
                    <p class="font-bold font-dmSans sm:leading-12 sm:mb-3 mb-1 leading-6 md:text-[32px] sm:text-2xl text-[20px] text-black">
                        {{ projectData.title }}
                    </p>
                    <!-- <span class="font-normal  font-dmSans md:text-[20px] sm:text-sm text-[10px]  italic text-[#66666]">
                        By Joseph  Odum, Cross River state SUBEB information Officer PRO-SUBEB
                    </span> -->
                </div>
                <div class="sm:w-[90%] w-full sm:mx-auto mx-0 "><img :src="projectData.blogCoverImage[0].Location" class="w-full h-[245px] sm:h-[570px] object-cover" alt=""></div>
                <div class="container py-5">
                    <p class="content mt-3">
                        {{projectData.content}}
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
        </div>
        <NoContent  subtitle="No Projects Yet" v-else/>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const project = useProjectsStore();
const projectData = ref<any>(null);

const getSingleNews = async () => {
    let id = route.params.id;
    const data = await project.getSingleProject(id);
    projectData.value = data;
    // console.log("news data: " + projectData.value);
}

onMounted(() => {
    getSingleNews();
})
</script>