<script setup lang="ts">

/*
Energy Drink: 5060337500401
Gummibärchen: 4037400344980
 */

import { onBeforeMount } from "vue";
import {createProduct, receiveJsonByBarcode, receiveJsonByCategory} from "@/assets/js/foodapi/foodapi";
import type {Product} from "@/assets/js/foodapi/product";

let mainproduct: Product;
let productlist: Product[] = [];

onBeforeMount(async () => {
  const barcodejson = await receiveJsonByBarcode("5060337500401");
  console.log(barcodejson);
  mainproduct = createProduct(barcodejson);
  console.log(mainproduct);
  const json = await receiveJsonByCategory(mainproduct.kategorie);
  console.log(json);
  for (let i = 0; i < json.products.length; i++) {
    productlist.push(createProduct(json.products[i]));
  }
  console.log(productlist);
})

</script>

<template>
  <div class="w-full h-full">
  </div>
</template>
