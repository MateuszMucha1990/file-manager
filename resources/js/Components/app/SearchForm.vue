<template>
   <form action="" class="w-[600px] h-[80px] flex items-center">
    <TextInput type="text" class="block w-full mg-2" v-model="form.search" autocomplete placeholder="Search for file and folders"/>
   </form>
</template>


<script setup>
//imports
import { useForm } from '@inertiajs/vue3';
import TextInput from '../TextInput.vue';


//uses
const form = useForm({
    search:''
})



</script>
