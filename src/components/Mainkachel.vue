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
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Wiki_Test_Image.jpg" alt="Testimage" class="w-40 h-40 rounded"/>
    <div> {{ props.mainproduct.name }} </div>
  </div>
</template>