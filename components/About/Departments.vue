<template>
    <div class="bg-whiteBg">
        <div class="container">
            <h2 class="header-text lg:text-left text-center mb-8">
                Departments
            </h2>
            <ul class="flex flex-col md:gap-y-16 gap-y-8">
                <li v-for="(department, index) in departments" :key="index" class="w-full lg:h-[413px] md:h-[300px] h-[153px] flex shadow-[0_4px_10px_0px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden">
                    <AboutDepartmentsCard  :title="department.title"
                        :content="department.content" :to="department.to"
                        :image="department.image" :author="department.author"
                    />
                </li>                
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter()

const departments = ref([
    {
        title: "SUPPORT SERVICE DEPARTMENTS",
        author: "Posted by John Doe 21/4/2020",
        image: "/img/business-man.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a quam molestie metus auctor vehicula a at nunc. Pellentesque blandit odio ac bibendum tincidunt. Quisque id scelerisque quam, et elementum massa. Integer gravida mollis enim at hendrerit. ",
        to:"/support-service",
    },
    {
        title: "FINANCE AND ACCOUNT DEPARTMENT",
        author: "Posted by John Doe 21/4/2020",
        image: "/img/african-man.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a quam molestie metus auctor vehicula a at nunc. Pellentesque blandit odio ac bibendum tincidunt. Quisque id scelerisque quam, et elementum massa. Integer gravida mollis enim at hendrerit. ",
        to:"/finance-and-account",
    },
    {
        title: "QUALITY ASSURANCE DEPARTMENT",
        author: "Posted by John Doe 21/4/2020",
        image: "/img/workmates.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a quam molestie metus auctor vehicula a at nunc. Pellentesque blandit odio ac bibendum tincidunt. Quisque id scelerisque quam, et elementum massa. Integer gravida mollis enim at hendrerit. ",
        to: "",
    },
    {
        title: "SCHOOL’S MANAGEMENT DEPARTMENT",
        image: "/img/group.png",
        author: "Posted by John Doe 21/4/2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a quam molestie metus auctor vehicula a at nunc. Pellentesque blandit odio ac bibendum tincidunt. Quisque id scelerisque quam, et elementum massa. Integer gravida mollis enim at hendrerit. ",
    },
    {
        title: "PROJECT MONITORING DEPARTMENT",
        image: "/img/woman.png",
        author: "Posted by John Doe 21/4/2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a quam molestie metus auctor vehicula a at nunc. Pellentesque blandit odio ac bibendum tincidunt. Quisque id scelerisque quam, et elementum massa. Integer gravida mollis enim at hendrerit. ",
        to: "",
    },
])

</script>

<style scoped>
.shadow-small{
    box-shadow: 2px 10px 50px 2px rgba(0,0,0, .7)
}

</style>