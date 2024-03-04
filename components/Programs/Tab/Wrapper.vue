
import type { Title } from '#build/components';
<template>
    <div class="bg-whiteBg">
        <div class="bg-[#E2E8F0]">
            <ul class="container pt-3 flex pb-0">
                <li style="transition: all .4s ease-out;"
                    :class="
                        title === selectedTitle ? 
                        'tab-header py-5 px-8 cursor-pointer tab-header' :
                        'py-5 px-8 cursor-pointer'
                    "
                    v-for="title in tabTitles" :key="title"
                    @click="selectedTitle = title"
                >
                    {{ title }}
                </li>
            </ul>
        </div>
        <slot/>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['title']);
const { default: defaultSlot } = defineSlots();
const tabTitles = computed(() => defaultSlot().map((tab: any) => tab.props.title));

const selectedTitle = ref(tabTitles.value[0])

provide("selectedTitle", selectedTitle)

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