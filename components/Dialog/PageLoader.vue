<template>
    <div v-show="dialog.loading" class=" h-full bg-[rgba(0,0,0,0.345)]  flex justify-center items-center fixed top-[65px] left-[260px]" 
        style="width: calc(100% - 260px)" 
    >
        <ProgressSpinner />
    </div>
</template>

<script setup lang="ts">
const dialog = useDialogStore();

</script>