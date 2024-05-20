<template>
    <div>
        <ul class="sm:flex hidden gap-3 items-center">
            <li 
                v-for="tabTitle in tabTitles" :key="tabTitle"
                @click="selectTitle(tabTitle)"
                style="transition: all .4s ease-out;"
                :class="
                    tabTitle === selectedTitle ? 
                    ' selected-tab-header text-primary border-primary' :
                    'border-[#E4E2DD]  text-[#7E7D7D]'
                "
                class="
                    px-[24px] font-normal text-[20px] py-[10px] rounded-[40px] border
                    border-solid leading-[23px] cursor-pointer
                "
            >
                {{ tabTitle }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {ref, defineEmits, defineProps} from 'vue'

const emit = defineEmits(['update:title']);
const {tabTitles} = defineProps({
    tabTitles: {
        type: Array,
        required: true,
    }
});

const selectedTitle = ref(tabTitles[0]);

const selectTitle = (title: string) => {
    selectedTitle.value = title
    emit('update:title', title);
    // console.log("title", title)
}

</script>
