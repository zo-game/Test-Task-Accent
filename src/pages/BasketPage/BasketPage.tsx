import { productInBasket } from "../../store/ProductsInBasket/productsInBasket";
import styles from './styles.module.css';
import { ItemInBasketComponent, HeaderComponent, OrderButton, PriceCounter, CloseBasketButton} from "../../component";
import { ProductInBasketType } from "../../Types";

export const BasketPage = () => {
    const wholePrice = productInBasket.calculatePrice();
   return (
    <>
        <HeaderComponent />
        <div className={styles.basketPageContant}>
            <h1>Корзина</h1>            
            <div className={styles.title}>
                <div>Изображение</div>
                <div>Название</div>
                <div>Тип</div>
                <div>Цена</div>
                <div>Количество в корзине</div>
            </div>
            <div className={styles.productsContainer}>
                {productInBasket.products.map((item : ProductInBasketType) => {
                    return <ItemInBasketComponent item={item}/>                
                })}                
            </div>                
        </div>
        <div className={styles.buttonsContainer}>
            <OrderButton />    
            <PriceCounter count={wholePrice}/>
            <CloseBasketButton />
        </div>
    </>
   );
};