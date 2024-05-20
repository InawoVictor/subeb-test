<template>
    <div v-show="dialog.loading.show" class=" flex justify-center items-center w-full h-screen fixed top-0 left-0" 
        style="background: rgba(0,0,0, .345)"
    >
        <ProgressSpinner />
    </div>
</template>

<script setup lang="ts">
const dialog = useDialogStore();

</script>
