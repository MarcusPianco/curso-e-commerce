import UniqueEntityId, { uniqueEntityIdGenerator } from "../common/helpers/unique-id-generator";
import { OrderProps } from "./entities.props";
import Entity from "./entity";
import Product from "./product";

export default class Order extends Entity<OrderProps>{
    constructor(id:number | UniqueEntityId,props: OrderProps){
        super(id,props)
    }    

    static build(props: OrderProps, id?:number | UniqueEntityId, ): Order{
        const entityId=id || uniqueEntityIdGenerator(this);
        const order  = new this(entityId, props)
        return order;
    }

    public addProduct(product: Product):void{
        this.value.products.push(product)
    }

    public calculateTotal():number{
        return this.value.products.reduce((total,current)=>total+current.value.price,0)
    }

}