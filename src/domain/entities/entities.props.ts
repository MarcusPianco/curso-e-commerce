import Product from "./product";

export type ProductProps = {
    price: number;
    description: string;
    storeAmount:number;
}

export type OrderProps = {
    products: Product[];
    total?: number;
    discount?: number;
}

export type BuyerProps = {
  name: string;
  cpf: string;
}