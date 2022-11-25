import Product from "./product";

export type ProductProps = {
    price: number;
    description: number;
    storeAmount:number;
}

export type OrderProps = {
    products: Product[];
    total?: number;
    discount?: number;

}