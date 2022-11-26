import UniqueEntityId, { uniqueEntityIdGenerator } from "../common/helpers/unique-id-generator";
import { BuyerProps } from "./entities.props";
import Entity from "./entity";

export default class Buyer extends Entity<BuyerProps>{
    constructor(id:number | UniqueEntityId,props: BuyerProps){
        super(id,props)
    }    

    static build(props: BuyerProps, id?:number | UniqueEntityId, ): Buyer{
        const entityId=id || uniqueEntityIdGenerator(this);
        const buyer  = new this(entityId, props)
        return buyer;
    }
}