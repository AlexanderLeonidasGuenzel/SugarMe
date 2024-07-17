<script setup lang="ts">
  import { Product } from "@/assets/js/foodapi/product";

  const props = defineProps({
    mainproduct: {
      type: Product,
      required: true
    },
    imageurl: {
      type: String,
      required: true
    }
  });
</script>

<template>
  <div class="w-full h-50 mb-10 mx-8">

    <div class="flex shadow-lg z-0 bg-white rounded-xl text-cyan-600">
      <div class="flex flex-col justify-evenly w-2/3 text-lg flex-wrap p-5">
        <h2 class="font-bold text-cyan-700">Dein Produkt</h2>
        <hr>
        <p class="w-full text-wrap"> {{ props.mainproduct.name }}</p>
        <p>
          <span class="font-bold">Zucker:</span>
          {{ props.mainproduct.zucker === undefined ? 'zuckerfrei!' : props.mainproduct.zucker + 'g pro 100g'}}
        </p>
      </div>
      <div class="flex justify-center items-center w-1/3 bg-fuchsia-200 rounded-r-xl">
      <img :src="props.imageurl" alt="open food image" class="w-20 h-20 rounded-full brightness-125 shadow-xl border-white/60 border-3"/>
      </div>
    </div>
  </div>
</template>