<script setup lang="ts">
    import {Product} from "@/assets/js/foodapi/product";
    import ListItem from "@/components/ListItem.vue";

    defineEmits(['click:item'])

    const props = defineProps({
      child: {
        type: Product,
        required: true
      },
      productlist: {
        type: Array as () => Product[],
        required: true
      }
    });
</script>

<template>
  <div class="flex justify-between w-full bg-white px-5 py-2 font-bold rounded mb-1" >
    <p>Alternative Produkte:</p>
    <p>Zucker pro 100g</p>
  </div>

  <div class="relative w-full h-3/5 my-5 overflow-y-auto" >
    <div>
      <div v-for="(item, index) in productlist" :key="index">
        <ListItem class="flex items-center w-full h-12 pr-1 hover:bg-gray-200 border-b border-cyan-700 cursor-pointer" :child="item" v-if="item.name !== undefined && item.name !== ''" @click:item="handleClickListitem"></ListItem>
      </div>
    </div>
  </div>
</template>