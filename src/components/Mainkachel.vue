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
  <div class="relative flex w-3/4 h-46">
    <img src="https://images.openfoodfacts.org/images/products/403/740/034/4980/front_de.3.400.jpg" alt="Testimage" class="w-1/2 h-full rounded"/>
    <div class="relative flex justify-center w-1/2 h-full bg-cyan-700 text-xs">
      {{ props.mainproduct.name }}
    </div>
  </div>
</template>