import UniqueEntityId, { uniqueEntityIdGenerator } from "../common/helpers/unique-id-generator";
import { ProductProps } from "./entities.props";
import Entity from "./entity";

export default class Product extends Entity<ProductProps>{
    constructor(id:number | UniqueEntityId,props: ProductProps){
        super(id,props)
    }    

    static build(props: ProductProps, id?:number | UniqueEntityId, ): Product{
        const entityId=id || uniqueEntityIdGenerator(Product);
        const product  = new this(entityId, props)
        return product;
    }

}