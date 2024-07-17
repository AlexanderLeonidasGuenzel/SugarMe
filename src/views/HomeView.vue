/* eslint-disable */

<script setup lang="ts">

/*
Energy Drink: 5060337500401
Gummibärchen: 4037400344980
Milchreis: 4000521031749
 */

import {reactive, type Ref, ref} from "vue";
import {createProduct, receiveJsonByBarcode, receiveJsonByCategory, sortByZucker} from "@/assets/js/foodapi/foodapi";
import { Product } from "@/assets/js/foodapi/product";
import YourProduct from "@/components/YourProduct.vue";
import ListItem from "@/components/ListItem.vue";
import Search from "@/components/Search.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Loadscreen from "@/components/Loadscreen.vue";
import NotFound from "@/components/NotFound.vue";

let loadData: Ref<Boolean> = ref(false);
let searching: Ref<Boolean> = ref(false);
let loadFailure: Ref<Boolean> = ref(false);

let searchbarcode: Ref<string> = ref('');
let mainproduct: Product;
let productlist: Product[] = [];

async function loadProductData(barcode: string) {
  if (barcode !== searchbarcode.value) {
    searchbarcode.value = barcode;
    productlist = [];
    loadFailure.value = false;
    loadData.value = false;
    searching.value = true;
    const barcodejson = await receiveJsonByBarcode(barcode);

    console.log(barcodejson);

    if (barcodejson.status !== "failure") {
      mainproduct = reactive(createProduct(barcodejson));
      const json = await receiveJsonByCategory(mainproduct.kategorie);
      for (let i = 0; i < json.products.length; i++) {
        productlist.push(reactive(createProduct(json.products[i])));
      }
      productlist = sortByZucker(productlist);
      loadData.value = true;
    } else {
      loadFailure.value = true;
      console.log("Vorgang fehlgeschlagen");
    }

    searching.value = false;
  }
}

async function handleClickListitem(value: Product) {
  await loadProductData(value.barcode!!);
}
</script>

<template>


  <div class="relative flex justify-center items-center w-full h-full bg-gradient-to-br from-cyan-200 to-purple-900">
    <!-- MAIN -->
    <div class="flex flex-col items-center w-[489px] min-w-[375px] max-w-[489px] h-screen bg-gray-100 px-10 pt-5">
      <Header />
      <Search @click:search="loadProductData" @enter:search="loadProductData" />

      <Loadscreen :isLoading="searching" v-if="searching && searchbarcode !== ''" />
      <NotFound v-if="loadFailure" />

      <YourProduct :mainproduct="mainproduct" :imageurl="mainproduct.product_image" v-if="loadData"/>

      <div class="flex justify-between w-full bg-white px-5 py-2 font-bold rounded mb-1" v-if="loadData">
        <p>Alternative Produkte:</p>
        <p>Zucker pro 100g</p>
      </div>

      <div class="relative w-full h-3/5 my-5 overflow-y-auto" v-if="loadData">
        <div v-if="loadData">
          <div v-for="(item, index) in productlist" :key="index">
            <ListItem class="flex items-center w-full h-12 pr-1 hover:bg-gray-200 border-b border-cyan-700 cursor-pointer" :child="item" v-if="item.name !== undefined && item.name !== ''" @click:item="handleClickListitem"></ListItem>
          </div>
        </div>
      </div>
    <Footer></Footer>
    </div>
  </div>
</template>
