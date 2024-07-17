/* eslint-disable */

<script setup lang="ts">

/*
Energy Drink: 5060337500401
Gummibärchen: 4037400344980
 */

import {onBeforeMount, type Ref, ref} from "vue";
import {createProduct, halfSugar, receiveJsonByBarcode, receiveJsonByCategory} from "@/assets/js/foodapi/foodapi";
import { Product } from "@/assets/js/foodapi/product";
import YourProduct from "@/components/YourProduct.vue";
import ListItem from "@/components/ListItem.vue";
import Filter from "@/components/Filter.vue";
import Search from "@/components/Search.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

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


  <div class="relative flex justify-center items-center w-full h-full bg-gradient-to-br from-cyan-200 to-purple-900">
    <!-- MAIN -->
    <div class="flex flex-col justify-between items-center min-w-[375px] h-screen bg-gray-100 px-10 pt-5">
      <Header />
      <Search />

      <YourProduct :mainproduct="mainproduct" v-if="loadData"/>

      <!-- FILTERBUTTON
      <Filter :sugar="mainproduct.zucker" @click:half="halfSugar(mainproduct)" v-if="loadData"/>
      -->
      <div class="w-full h-3/5 overflow-y-auto my-5" v-if="loadData">
        <div class="flex justify-between bg-white px-5 py-2 font-bold rounded-s mb-3">
          <p>Produkt</p>
          <p>Zucker pro 100g</p>
        </div>
        <div v-for="(item, index) in productlist" :key="index">
          <ListItem class="flex items-center w-full h-12 pr-1 hover:bg-gray-200 border-b border-cyan-700 cursor-pointer" :child="item" v-if="item.name !== undefined && item.name !== ''"></ListItem>
        </div>
      </div>
    <Footer></Footer>
    </div>
  </div>
</template>
