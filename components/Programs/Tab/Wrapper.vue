
import type { Title } from '#build/components';
<template>
    <div class="sm:bg-whiteBg ">
        <div class="sm:bg-[#E2E8F0] bg-secondary">
            <ul class="hidden container pt-3 sm:flex pb-0">
                <li style="transition: all .4s ease-out;"
                    :class="
                        title === selectedTitle ? 
                        'tab-header py-5 px-8 cursor-pointer tab-header' :
                        'py-5 px-8 cursor-pointer'
                    "
                    v-for="title in tabTitles" :key="title"
                    @click="selectTitle(title)"
                >
                    {{ title }}
                </li>
            </ul>
            <div class="container sm:hidden block py-7">
                <div class="flex justify-content-center">
                    <Dropdown v-model="selectedTitle" :options="items" optionLabel="label" optionValue="value"
                        :virtualScrollerOptions="{ itemSize: 38 }" :placeholder="selectedTitle" class="w-full p-2 border-none focus:border-none focus:outline-none " />
                </div>
            </div>
        </div>
        <slot/>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:title'])
const props = defineProps(['title']);
const { default: defaultSlot } = defineSlots();
const tabTitles = computed(() => defaultSlot().map((tab: any) => tab.props.title));

const selectedTitle = ref(tabTitles.value[0])
const selectTitle = (title: string) => {
    selectedTitle.value = title
    emit('update:title', title)
}


provide("selectedTitle", selectedTitle)

const items = ref([
    // {
    //     label: "Overview",
    //     value: "Overview",
    // },
    {
        label: "Projects",
        value: "Projects"
    },
    {
        label: "Trainings",
        value: "Trainings",
    },
])

</script>

<style scoped>
li{
    /* transition: aftear .4s ease-in; */
    position: relative;
}
.tab-header::after {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    background: #020066;
    bottom: 0;
    left: 0;
}
</style>