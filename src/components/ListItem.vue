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
    <div class="flex justify-between mb-3 px-5">
      <p class=""> {{ props.child.name }}</p>
      <p class="mr-5"> <span class=""> {{ props.child.zucker }}g </span> </p>
    </div>
</template>