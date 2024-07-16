<script setup lang="ts">
    import {Product} from "@/assets/js/foodapi/product";

    const props = defineProps({
      child: {
        type: Product,
        required: true
      }
    });
</script>

<template>
    <div class="flex justify-between">
        <p> {{ props.child.name }}</p>
      <p class="text-xs"> Zucker: <span class="text-xs"> {{ props.child.zucker }} g á 100g </span> </p>
    </div>
</template>