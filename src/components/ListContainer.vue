<script setup lang="ts">
    import {Product} from "@/assets/js/foodapi/product";
    import ListItem from "@/components/ListItem.vue";
    import {
      createProduct,
      receiveJsonByBarcode,
      receiveJsonByCategory,
      sortByZucker
    } from "@/assets/js/foodapi/foodapi";
    import {reactive, ref, type Ref} from "vue";

    defineEmits(['click:item'])

    const props = defineProps({
      child: {
        type: Product,
        required: true
      },
      loadData: {
        type: Boolean,
        required: true
      },
      productlist: {
        type: Array as () => Product[],
        required: true
      }
    });

    let loadData: Ref<Boolean> = ref(props.loadData);
    let searching: Ref<Boolean> = ref(false);
    let loadFailure: Ref<Boolean> = ref(false);

    let searchbarcode: Ref<string> = ref('');
    let mainproduct: Product;
    let productlist: Product[] = reactive(props.productlist);

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
  <div class="flex justify-between w-full bg-white px-5 py-2 font-bold rounded mb-1" >
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
</template>