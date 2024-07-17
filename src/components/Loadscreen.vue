<script setup lang="ts">

import {type Ref, ref, watch} from "vue";

  const props = defineProps({
    isLoading: {
      type: Boolean,
      required: true
    }
  });

  let loading: Ref<Boolean> = ref(props.isLoading);

  watch(() => props.isLoading, (newvalue) => {
    loading.value = newvalue;
  });

</script>

<template>
  <div class="relative w-full h-[420px] mb-10 mx-8">
    <div class="relative w-full h-1/3 p-3 bg-white rounded-xl">
      <div class="flex justify-center items-center w-full h-full p-1 bg-gradient-to-br from-cyan-200 to-purple-900 rounded-xl">
        <span class="text-xl font-bold text-white mr-3"> Dein Produkt wird gesucht </span>
        <img src="../assets/lollipop_11619922.png" alt="Lollipop Logo" class="w-10 h-10" :class="{ 'animate-spin': loading === true }">
      </div>
    </div>
  </div>
</template>