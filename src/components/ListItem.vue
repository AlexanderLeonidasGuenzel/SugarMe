<script setup lang="ts">
    import {Product} from "@/assets/js/foodapi/product";

    defineEmits(['click:item'])

    const props = defineProps({
      child: {
        type: Product,
        required: true
      }
    });

    //{{ !props.child.hat_zutatenliste || props.child.zucker  === undefined ? 'leider keine Informationen verfügbar' : props.child.zucker === 0 ? 'zuckerfrei!' : props.child.zucker + 'g' }}
</script>

<template>
    <div class="flex justify-between mb-3 px-5" @click="$emit('click:item', props.child)">
      <p class=""> {{ props.child.name }}</p>
      <p class="mr-5"> <span class=""> {{ props.child.zucker  === undefined ? 'keine Informationen verfügbar' : props.child.zucker === 0 ? 'zuckerfrei!' : props.child.zucker + 'g' }} </span> </p>
    </div>
</template>