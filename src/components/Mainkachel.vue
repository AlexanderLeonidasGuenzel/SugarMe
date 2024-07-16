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
  <div class="relative w-3/4 h-46">
    <p class="text-md text-black font-bold"> Dein Produkt: </p>
    <div class="relative flex w-full h-46 shadow shadow-cyan-700">
      <img src="https://images.openfoodfacts.org/images/products/403/740/034/4980/front_de.3.400.jpg" alt="Testimage" class="w-1/2 h-full rounded"/>
      <div class="relative justify-center w-1/2 h-full text-xs">
        <div class="w-full text-nowrap"> {{ props.mainproduct.name }} </div>
        <div class="w-full text-nowrap"> Zucker: {{ props.mainproduct.zucker }} á 100g </div>
      </div>
    </div>
  </div>
</template>