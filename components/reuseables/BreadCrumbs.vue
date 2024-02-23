<template>
    <div class="bg-transparent flex justify-content-center">
        <Breadcrumb :model="items">
            <template #item="{ item }">
                <a class="cursor-pointer" style="color: white;" :href="item.link" :disabled="item.disabled">
                    <span>{{item.title}}</span>
                </a>
            </template>
            <template #separator> / </template>
        </Breadcrumb>
    </div>
</template>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb';

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
})


</script>

<style scoped>
.p-breadcrumb{
    background: transparent;
    color: white;
    padding-left: 0;
    font-weight: 400;
    font-family: "inter" sans-serif;
    font-size: 20px;
}


.p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    color: white !important;
}
.p-disabled{
    color: white !important;
}

</style>