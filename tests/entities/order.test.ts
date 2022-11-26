import Order from "../../src/domain/entities/order"
import Product from "../../src/domain/entities/product"

describe('Order Entity', () => {
    //TODO: Refatorar quando adicionar o repository;
    test('should create a order with 3 products', () => {
        const order = Order.build({products:[]})
        order.addProduct(Product.build(
            { 
             description:'item 1',
             price: 10,
             storeAmount: 1,
             },1
         ),
        )
        order.addProduct(Product.build(
            { 
             description:'item 2',
             price: 10,
             storeAmount: 1,
             }
         ,1),
         )
         order.addProduct(
            Product.build(
            { 
             description:'item 3',
             price: 10,
             storeAmount: 1,
             },1
         ))

        expect(order.value.products.length).toEqual(3)
        expect(order.calculateTotal()).toEqual(30)
    })

    test('should create a order with 3 products with 10% de desconto', () => {
        //TODO: Refatorar quando adicionar a entidade cupom de desconto
        const order = Order.build({products:[], discount:10})
        order.addProduct(Product.build(
            { 
             description:'item 1',
             price: 10,
             storeAmount: 1,
             },1
         ),
        )
        order.addProduct(Product.build(
            { 
             description:'item 2',
             price: 10,
             storeAmount: 1,
             }
         ,1),
         )
         order.addProduct(
            Product.build(
            { 
             description:'item 3',
             price: 10,
             storeAmount: 1,
             },1
         ))

        expect(order.value.products.length).toEqual(3)
        expect(order.calculateTotal()).toEqual(27)
    })
})

