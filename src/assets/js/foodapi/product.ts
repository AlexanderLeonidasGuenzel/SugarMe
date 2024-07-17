/* eslint-disable */

export class Product {
    name: string | undefined = "";
    barcode: string | undefined = "";
    allergene: string = "";
    kategorie: string = "";
    hat_zutatenliste: boolean = false;
    zutatenliste_string: string = ""; //ingedients-text_de
    kcal: number = 0.00; //energy-kcal_100g
    kcal_unit: string = ""; //energy-kcal_unit
    fett: number = 0.00; //fat_100g
    fett_unit: string = ""; //fat_unit
    proteine: number = 0.00; //proteins_100g
    proteine_unit: string = ""; //proteins_unit
    salz: number = 0.00; //salt_100g
    salz_unit: string = ""; //salt_unit
    gesaettigte_fettsaeuren: number = 0.00; //saturated_fat_100g
    gesaettigte_fettsaeuren_unit: string = ""; //saturated_fat_unit
    natrium: number = 0.00; //sodium_100g
    natrium_unit: string = ""; //sodium_unit
    zucker: number | undefined = 0.00; //sugars_100g
    zucker_unit: string = ""; //sugars_unit
    koffein: number = 0.00; //caffeine_100g
    koffein_unit: string = ""; //caffeine_unit
    vitamin_b6: number = 0.00; //vitamin-b6_100g
    vitamin_b6_unit: string = ""; //vitamin-b6_unit
    vitamin_b12: number = 0.00; //vitamin-b12_100g
    vitamin_b12_unit: string = ""; //vitamin-b12_unit
    product_image: string = "";
}