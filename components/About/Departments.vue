<template>
    <div class="bg-whiteBg">
        <div class="container">
            <h2 class="header-text">
                Departments
            </h2>
            <ul class="flex flex-col gap-y-16">
                <li class="w-full h-[413px] flex shadow-[0_4px_10px_0px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden">
                    <div class="flex-1 px-[66px] py-[48px]">
                        <h3 class="font-dmSans font-bold text-[20px] mb-8 text-primary">SUPPORT SERVICE DEPARTMENTS</h3>
                        <p class="text-lg mb-4 font-dmSans font-normal text-txtDark3" style="font-style: italic;">
                            Posted by John Doe 21/4/2020
                        </p>
                        <p class="content text-sm text-[#212121]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Curabitur a quam molestie metus auctor vehicula a at 
                            nunc. Pellentesque blandit odio ac bibendum tincidunt. 
                            Quisque id scelerisque quam, 
                            et elementum massa. Integer gravida mollis enim at hendrerit.
                        </p>
                        <button class="btn mt-10  flex items-center gap-2" 
                            @click="router.push('/about/departments/support-service')"
                        >
                            <span class="font-[500] text-[16px]">Read more</span>
                            <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                        </button>
                    </div>
                    <img src="/img/business-man.png" class="w-[523px]  h-full" alt="">
                </li>
                <li class="w-full h-[413px] flex shadow-[0_4px_10px_0px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden">
                    <div class="flex-1 px-[66px] py-[48px]">
                        <h3 class="font-dmSans font-bold text-[20px] mb-8 text-primary">FINANCE AND ACCOUNT DEPARTMENT</h3>
                        <p class="text-lg mb-4 font-dmSans font-normal text-txtDark3" style="font-style: italic;">
                            Posted by John Doe  on 21/4/2020 at 12:45am
                        </p>
                        <p class="content text-sm text-[#212121]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Curabitur a quam molestie metus auctor vehicula a at 
                            nunc. Pellentesque blandit odio ac bibendum tincidunt. 
                            Quisque id scelerisque quam, 
                            et elementum massa. Integer gravida mollis enim at hendrerit.
                        </p>
                        <button class="btn mt-10  flex items-center gap-2"
                            @click="router.push('/about/departments/finance-and-account')"
                        >
                            <span class="font-[500] text-[16px]">Read more</span>
                            <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                        </button>
                    </div>
                    <img src="/img/african-man.png" class="w-[523px]  h-full" alt="">
                </li>
                <li class="w-full h-[413px] flex shadow-[0_4px_10px_0px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden">
                    <div class="flex-1 px-[66px] py-[48px]">
                        <h3 class="font-dmSans font-bold text-[20px] mb-8 text-primary">QUALITY ASSURANCE DEPARTMENT</h3>
                        <p class="text-lg mb-4 font-dmSans font-normal text-txtDark3" style="font-style: italic;">
                            Posted by John Doe  on 21/4/2020 at 12:45am
                        </p>
                        <p class="content text-sm text-[#212121]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Curabitur a quam molestie metus auctor vehicula a at 
                            nunc. Pellentesque blandit odio ac bibendum tincidunt. 
                            Quisque id scelerisque quam, 
                            et elementum massa. Integer gravida mollis enim at hendrerit.
                        </p>
                        <button class="btn mt-10  flex items-center gap-2">
                            <span class="font-[500] text-[16px]">Read more</span>
                            <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                        </button>
                    </div>
                    <img src="/img/workmates.png" class="w-[523px]  h-full" alt="">
                </li>
                <li class="w-full h-[413px] flex shadow-[0_4px_10px_0px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden">
                    <div class="flex-1 px-[66px] py-[48px]">
                        <h3 class="font-dmSans font-bold text-[20px] mb-8 text-primary">SCHOOL’S MANAGEMENT DEPARTMENT</h3>
                        <p class="text-lg mb-4 font-dmSans font-normal text-txtDark3" style="font-style: italic;">
                            Posted by John Doe on 21/4/2020 at 12:45am
                        </p>
                        <p class="content text-sm text-[#212121]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Curabitur a quam molestie metus auctor vehicula a at 
                            nunc. Pellentesque blandit odio ac bibendum tincidunt. 
                            Quisque id scelerisque quam, 
                            et elementum massa. Integer gravida mollis enim at hendrerit.
                        </p>
                        <button class="btn mt-10  flex items-center gap-2">
                            <span class="font-[500] text-[16px]">Read more</span>
                            <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                        </button>
                    </div>
                    <img src="/img/group.png" class="w-[523px]  h-full" alt="">
                </li>
                <li class="w-full h-[413px] flex shadow-[0_4px_10px_0px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden">
                    <div class="flex-1 px-[66px] py-[48px]">
                        <h3 class="font-dmSans font-bold text-[20px] mb-8 text-primary">PROJECT MONITORING DEPARTMENT</h3>
                        <p class="text-lg mb-4 font-dmSans font-normal text-txtDark3" style="font-style: italic;">
                            Posted by John Doe on 21/4/2020 at 12:45am
                        </p>
                        <p class="content text-sm text-[#212121]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Curabitur a quam molestie metus auctor vehicula a at 
                            nunc. Pellentesque blandit odio ac bibendum tincidunt. 
                            Quisque id scelerisque quam, 
                            et elementum massa. Integer gravida mollis enim at hendrerit.
                        </p>
                        <button class="btn mt-10  flex items-center gap-2">
                            <span class="font-[500] text-[16px]">Read more</span>
                            <Icon name="mingcute:arrow-right-line" width="16" color="white"/>
                        </button>
                    </div>
                    <img src="/img/woman.png" class="w-[523px]  h-full" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter()

</script>

<style scoped>
.shadow-small{
    box-shadow: 2px 10px 50px 2px rgba(0,0,0, .7)
}

</style>