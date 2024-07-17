/* eslint-disable */

<script setup lang="ts">

/*
Energy Drink: 5060337500401
Gummibärchen: 4037400344980
 */

import {onBeforeMount, type Ref, ref} from "vue";
import {createProduct, halfSugar, receiveJsonByBarcode, receiveJsonByCategory} from "@/assets/js/foodapi/foodapi";
import { Product } from "@/assets/js/foodapi/product";
import Mainkachel from "@/components/YourProduct.vue";
import Listenelement from "@/components/ListItem.vue";
import Filterbutton from "@/components/Filter.vue";
import Headercomponent from "@/components/Search.vue";
import HeaderImage from "@/components/HeaderImage.vue";

let loadData: Ref<Boolean> = ref(false);

let mainproduct: Product;
let productlist: Product[] = [];

async function loadProductData(barcode: string) {
  loadData.value = false;
  const barcodejson = await receiveJsonByBarcode(barcode);
  mainproduct = createProduct(barcodejson);
  const json = await receiveJsonByCategory(mainproduct.kategorie);
  for (let i = 0; i < json.products.length; i++) {
    productlist.push(createProduct(json.products[i]));
  }
  loadData.value = true;
}

onBeforeMount(async () => {
  await loadProductData("4037400344980");
})

</script>

<template>
  <div class="relative flex justify-center items-center w-full h-full">
    <!-- MAIN -->
    <div class="flex flex-col justify-between items-center w-1/3 min-w-[375px] h-full bg-gray-100 p-5">
      <HeaderImage />
      <Headercomponent />

      <Mainkachel :mainproduct="mainproduct" v-if="loadData"/>

      <!-- FILTERBUTTON -->
      <Filterbutton :sugar="mainproduct.zucker" @click:half="halfSugar(mainproduct)" v-if="loadData"/>

      <div class="w-full h-3/5 overflow-y-auto" v-if="loadData">
        <div v-for="(item, index) in productlist" :key="index">
          <Listenelement class="flex items-center w-full h-12 pr-1 hover:bg-gray-200 border-b border-cyan-700 cursor-pointer" :child="item" v-if="item.name !== undefined && item.name !== ''"></Listenelement>
        </div>
      </div>
    </div>
  </div>
</template>
