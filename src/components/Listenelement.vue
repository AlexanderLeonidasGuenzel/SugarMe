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
    <div class="flex w-full h-12 bg-yellow-500 my-8">
        <p> {{ props.child.name }}</p>
    </div>
</template>