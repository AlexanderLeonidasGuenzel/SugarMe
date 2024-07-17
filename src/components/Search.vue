<script setup lang="ts">
import {type Ref, ref} from "vue";

  defineEmits(['click:search', 'enter:search'])

  let barcode: Ref<string> = ref('');
</script>

<template>
  <div class="flex justify-center items-center w-full mb-10">
    <input type="text" class="w-3/4 h-10 outline-none rounded mr-3 px-1" v-model="barcode" @keydown.enter="$emit('enter:search', barcode)">
    <button class="flex justify-center items-center bg-cyan-700 text-white text-md w-10 h-10 rounded-md mr-2" @click="$emit('click:search', barcode)"><span class="searchicon">search</span></button>
    <button class="flex justify-center items-center bg-cyan-700 text-white text-md w-10 h-10 rounded-md" v-if="false"><span class="barcodeicon">barcode_scanner</span></button>
  </div>
</template>