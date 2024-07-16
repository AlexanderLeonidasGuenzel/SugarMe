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
  <div class="w-3/4 h-46 bg-red-500">
    <img src="https://images.openfoodfacts.org/images/products/403/740/034/4980/front_de.3.400.jpg" alt="Testimage" class="w-48 h-40 rounded"/>
    <!--<div> {{ props.mainproduct.name }} </div>-->
  </div>
</template>