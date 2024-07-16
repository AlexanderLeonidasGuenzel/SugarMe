/* eslint-disable */

<script setup lang="ts">

/*
Energy Drink: 5060337500401
Gummibärchen: 4037400344980
 */

import {onBeforeMount, type Ref, ref} from "vue";
import {createProduct, halfSugar, receiveJsonByBarcode, receiveJsonByCategory} from "@/assets/js/foodapi/foodapi";
import { Product } from "@/assets/js/foodapi/product";
import Mainkachel from "@/components/Mainkachel.vue";
import Listenelement from "@/components/Listenelement.vue";
import Filterbutton from "@/components/Filterbutton.vue";
import Headercomponent from "@/components/Headercomponent.vue";

let loadData: Ref<Boolean> = ref(false);

let mainproduct: Product;
let productlist: Product[] = [];

onBeforeMount(async () => {
  const barcodejson = await receiveJsonByBarcode("4037400344980");
  mainproduct = createProduct(barcodejson);
  const json = await receiveJsonByCategory(mainproduct.kategorie);
  for (let i = 0; i < json.products.length; i++) {
    productlist.push(createProduct(json.products[i]));
  }
  loadData.value = true;
})

</script>

<template>
  <div class="relative flex justify-center items-center w-full h-full">
    <!-- MAIN -->
    <div class="flex flex-col justify-between items-center w-1/3 h-full bg-gray-100 p-5">
      <Headercomponent />

      <Mainkachel :mainproduct="mainproduct" v-if="loadData"/>

      <!-- FILTERBUTTON -->
      <Filterbutton :sugar="mainproduct.zucker" @click:half="halfSugar(mainproduct)" v-if="loadData"/>

      <div class="w-full h-3/5 overflow-y-auto" v-if="loadData">
        <div v-for="(item, index) in productlist" :key="index">
          <Listenelement class="flex items-center w-full h-12 hover:bg-gray-200 border-b border-cyan-700 cursor-pointer" :child="item" v-if="item.name !== undefined && item.name !== ''"></Listenelement>
        </div>
      </div>
    </div>
  </div>
</template>
