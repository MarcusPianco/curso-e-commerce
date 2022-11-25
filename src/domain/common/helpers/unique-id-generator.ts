import Entity from "../../entities/entity"

export default interface UniqueEntityId extends String{}

export const uniqueEntityIdGenerator = (entity: typeof Entity<any>): UniqueEntityId=>{
 return entity.toString()+Math.random().toString(36);
}
