import { makeAutoObservable, configure } from 'mobx';
import { ProductInBasketType, ProductType } from '../../Types';
import products from '../../../public/assets/products.json';


class ProductInBasket {
    products : ProductInBasketType[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    increaseCount(product : ProductType){
        let updatedProduct : ProductInBasketType = this.products.filter((productInBasket) =>
        productInBasket.product.id === product.id)[0];
        if(updatedProduct === undefined){
            updatedProduct = {count: 1, product: product};
            this.products = [...this.products, updatedProduct];
        }
        else{
            updatedProduct = {...updatedProduct, count: updatedProduct.count + 1};
            const updatedProductInBasket = [...this.products.filter((item) => item.product.id !== product.id),
            updatedProduct].sort((prev, curr) => prev.product.id - curr.product.id);
            this.products = [...updatedProductInBasket];
        }   
    }
    
    cleanBasket(){
        this.products = [];   
    }    

    calculatePrice(){
        return this.products.reduce((acc, curr) => 
            acc + curr.count * curr.product.regular_price.value
        , 0)
    }
}

configure({
    enforceActions: "never",
})

export const productInBasket = new ProductInBasket();
