import { makeAutoObservable, configure } from 'mobx';
import products from '../../../public/assets/products.json';
import { ProductType } from '../../Types/productType';

class Products {
    moneyToConvert : number = 0;
    products : ProductType[] = [];

    constructor(products : ProductType[]){
        makeAutoObservable(this);
        this.products = products;
    }

    set(products : ProductType[]){
        this.products = products;
    }

    filterProducts(checkedBrads : number[]){
        let currentFiltered;
        let updatedBrands : ProductType[] = [];
        checkedBrads.forEach((brand) => {
            currentFiltered = products.filter(product => product.brand === brand);
            updatedBrands = [...updatedBrands, ...currentFiltered];
        })

        this.set(updatedBrands);
    }

    sortProducts(sortType : Number){
        switch (sortType) {
            case 1:
                this.products = [...this.products.sort((prev, curr) => 
                    prev.regular_price.value - curr.regular_price.value)]
                break;
            case 2:
                this.products = [...this.products.sort((prev, curr) => 
                    curr.regular_price.value - prev.regular_price.value)]
                break;
            case 3:
                this.products = [...products]
                break;
        
            default:
                break;
        }
    }

    resetFilter(){
        this.products = products;
    }
}

configure({
    enforceActions: "never",
})

export const productItems = new Products(products);
