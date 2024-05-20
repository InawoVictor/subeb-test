<template>
    <div class="bg-grayBg">
        <div class="container mt-12 py-16">
            <h2 class="header-text xl:text-left text-center mb-12">
                Meet the team
            </h2>
            <ul class="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] items-center justify-items-center justify-center gap-8">
                <li class="card-4 " @click="navigateTo('/about/management/etta-inyang-eyo')">
                    <img src="/img/etta.png" class="w-full h-[300px] object-cover" alt="Etta, Inyang Eyo">
                    <div class="py-4 px-6 ">
                        <h3 class="card3-header">Etta, Inyang Eyo</h3>
                        <div class="mt-4 flex gap-1 ">
                            <img src="/svg/folder.svg" class="mt-2 w-[11px] h-[8px]"  alt="">
                            <p class="card3-subheader">Acting Chairman/Director of Admin</p>
                        </div>
                    </div>
                </li>
                <li class="card-4 " v-for="(member, i) in teamMembers" :key="i">
                    <img :src="member.img" class="w-full h-[300px] object-cover" :alt="member.name">
                    <div class="py-4 px-6 ">
                        <h3 class="card3-header">{{member.name}}</h3>
                        <div class="mt-4 flex gap-1 ">
                            <img src="/svg/folder.svg" class="mt-2 w-[11px] h-[8px]"  alt="">
                            <p class="card3-subheader text-wrap">{{member.position}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const teamMembers = ref([
    {   
        img: "/img/carol.png",
        name: 'Carol Asikpo',
        position: 'Director of planning, research and Statistics'
    },
    {   
        img: "/img/itor.png",
        name: 'Itor, Fidelis Offiono',
        position: 'Director of Finance and supply'
    },
    {   
        img: "/img/pamela.png",
        name: 'Dr. Pamela Njinse Ekuri',
        position: 'Director of strategic planning/BESDA Desk officer'
    },
    // {   
    //     img: "/img/edu.png",
    //     name: 'Egbe Richard Edu',
    //     position: 'EMIS Desk Officer'
    // },
    // {   
    //     img: "/img/blessing.png",
    //     name: 'Dr. Mrs Ugbe Blessing',
    //     position: 'Director of social mobilization'
    // },
    // {   
    //     img: "/img/evong.png",
    //     name: 'Moduck Evong',
    //     position: 'Procurement Officer'
    // },
    {   
        img: "/img/regina.png",
        name: 'Regina Ogbudu',
        position: 'Director of Quality Assurance'
    },
    {   
        img: "/img/ansa.png",
        name: 'Emmanuel Ansa',
        position: 'Director of internal audit'
    },
    
])
</script>