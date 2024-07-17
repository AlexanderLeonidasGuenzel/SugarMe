<script setup lang="ts">
    defineEmits(["click:half"])

    const props = defineProps({
      sugar: {
        type: Number,
        required: true
      }
    })
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <label>Zucker: {{ props.sugar }}g á 100g </label>
    <button @click="$emit('click:half')"></button>
  </div>
</template>