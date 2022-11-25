import  UniqueEntityId  from '../common/helpers/unique-id-generator'


export default abstract class Entity<T>{
    private _id: number | UniqueEntityId;
    private _value: T;

    constructor(id: number| UniqueEntityId, value:T){
        this._id=id;
        this._value=value;
    }

    get id(): number | UniqueEntityId{
        return this._id;
    }

    set id(id: number | UniqueEntityId){
        this._id=id;
    }

    get value(): T{
        return this._value;
    }

    set value(value: T){
        this._value=value;
    }

    tostring(){
    return this.constructor.name;
    }
}