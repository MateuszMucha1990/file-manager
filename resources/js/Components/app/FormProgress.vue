<template>
    <div v-if="form.progress" class="absolute border-gray-900 border right-8 bottom-4 bh-white shadow-lg rounded flex flex-col w-[240px]">
        <div class="text-xs mb-2">Uploading {{ form.files.length }} files</div>
        <div class="h-3 bg-gray-100 rounded-md">
            <div class="h-full bg-gray-900 rounded-md transition-all" :style="{width:form.progress.percentage+'%'}"></div>
        </div>
    </div>

</template>

<script setup>


//props
const props=defineProps({
    form:Object
})

</script>
