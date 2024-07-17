<script setup lang="ts">
  import { Product } from "@/assets/js/foodapi/product";

  const props = defineProps({
    mainproduct: {
      type: Product,
      required: true
    }
  });
</script>

<template>
  <div class="w-10/12 h-50 mb-10">

    <div class="flex shadow shadow-lg z-0 bg-white rounded-xl text-cyan-600">
      <div class="flex flex-col justify-evenly w-3/5 text-lg flex-wrap p-5">
        <h2 class="font-bold text-cyan-700">Dein Produkt</h2>
        <hr>
        <p class="w-full text-wrap"> {{ props.mainproduct.name }}</p>
        <p> <span class="font-bold">Zucker</span> {{ props.mainproduct.zucker + "g "}}pro 100g</p>
      </div>
      <img src="https://images.openfoodfacts.org/images/products/403/740/034/4980/front_de.3.400.jpg" alt="open food image" class="w-2/5 rounded-r-xl"/>
    </div>
  </div>
</template>