/* eslint-disable */

import { Product } from "@/assets/js/foodapi/product";

export async function receiveJsonByBarcode(barcode: string) : Promise<any> {
    try {
        const response: Response = await fetch("https://world.openfoodfacts.org/api/v3/product/" + barcode + ".json");
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}

export async function receiveJsonByCategory(category: string) : Promise<any> {
    try {
        const response: Response = await fetch("https://world.openfoodfacts.net/api/v2/search?categories_tags=" + category + "&countries_tags_en=Germany&sort_by=nothing"); //&sugars_100g<60
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}

export function createProduct(json: any) : Product {
    let categoriearray: string[] = [];
    let categroriestags: string = "";
    let productjson: any = "";
    let product: Product = new Product();

    if (json.hasOwnProperty("product")) {
        productjson = json["product"];
    } else {
        productjson = json;
    }

    const nutrimentsjson: any = productjson["nutriments"];

    product.name = productjson["product_name"];
    product.barcode = productjson["code"];

    product.allergene = productjson["allergens"];
    categoriearray = productjson["categories_tags"]

    for (let i: number = 0; i < 2; i++) {
        let categorie: string = categoriearray[i].indexOf(":") > 0 ? categoriearray[i].split(":")[1] : categoriearray[i];
        if (i !== 0) {
            categroriestags += "," + categorie;
        } else {
            categroriestags += categorie;
        }
    }
    product.kategorie = categroriestags;
    product.zutatenliste_string = productjson["ingredients_text"];

    product.kcal = nutrimentsjson["energy-kcal_100g"];
    product.kcal_unit = nutrimentsjson["energy-kcal_100g"];
    product.fett = nutrimentsjson["fat_100g"];
    product.fett_unit = nutrimentsjson["fat_unit"];
    product.proteine = nutrimentsjson["proteins_100g"];
    product.proteine_unit = nutrimentsjson["proteins_unit"];
    product.salz = nutrimentsjson["salt_100g"];
    product.salz_unit = nutrimentsjson["salt_unit"];
    product.gesaettigte_fettsaeuren = nutrimentsjson["saturated-fat_100g"];
    product.gesaettigte_fettsaeuren_unit = nutrimentsjson["saturated-fat_unit"];
    product.natrium = nutrimentsjson["sodium_100g"];
    product.natrium_unit = nutrimentsjson["sodium_unit"];
    product.zucker = nutrimentsjson["sugars_100g"];
    product.zucker_unit = nutrimentsjson["sugars_unit"];
    product.koffein = nutrimentsjson["caffeine_100g"];
    product.koffein_unit = nutrimentsjson["caffeine_unit"];
    product.vitamin_b6 = nutrimentsjson["vitamin-b6_100g"];
    product.vitamin_b6_unit = nutrimentsjson["vitamin-b6_unit"];
    product.vitamin_b12 = nutrimentsjson["vitamin-b12_100g"];
    product.vitamin_b12_unit = nutrimentsjson["vitamin-b12_unit"];

    return product;
}

export function halfSugar(product: Product) {
    let sugar: number = Math.floor(product.zucker / 2);

    console.log(product.zucker);
    console.log(sugar);
}