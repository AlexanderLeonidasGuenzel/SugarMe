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
    <div>
        <p> {{ props.child.name }}</p>
    </div>
</template>