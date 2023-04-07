import basket from '../../../public/assets/images/shopping-cart.png';
import styles from './styles.module.css';
import { useState } from 'react';
import { ProductType } from '../../Types';
import { productInBasket } from '../../store/ProductsInBasket/productsInBasket';
import { PopupMessage } from '../PopupMessage/PopupMessage';

type ItemBasketProps = {
    item: ProductType
}

export const ItemBasket = ({item} : ItemBasketProps) => {
    const currentItemInBasket = productInBasket.products.filter((product) => product.product.id === item.id)[0];
    const currentCount = currentItemInBasket?.count ?? 0;
    const [countInBasket, setCountInBasket] = useState(currentCount);
    const [isPopup, setIsPopup] = useState(false);
    const [message, setMessage] = useState('');

    const onClick = () => {
        setCountInBasket(prev => prev + 1);
        productInBasket.increaseCount(item);   
        setIsPopup(prev => !prev);  
        setMessage(`Товар "${item.title}" добавлен в корзину в количестве ${countInBasket + 1} штук`);        
    }
    
    return (
        <>
            <PopupMessage message={message} isPopupShowing={isPopup}/>
            <div className={styles.itemBasketContainer} onClick={onClick}>
                <img src={basket} alt="basket" className={styles.itemBasket}/>                
                    <div className={styles.countInBasket}>{countInBasket}</div>                
            </div>        
        </>
    );
};