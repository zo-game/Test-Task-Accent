import styles from './styles.module.css';
import { sendOrder } from '../../api';
import { productInBasket } from '../../store/ProductsInBasket/productsInBasket';
import { useState } from 'react';
import { PopupMessage } from '../PopupMessage/PopupMessage';
import { observer } from 'mobx-react-lite';

export const OrderButton = observer(() => {
    const products = productInBasket.products;
    const [isPopup, setIsPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const onClick = async() => {
        sendOrder(products).then(r => {
            if(r?.data?.result === 'ok'){
                setPopupMessage('Товары успешно оформлены');
                setIsPopup(prev => !prev);
                productInBasket.cleanBasket();
            }
        });
    }

    return (
        <>
        <PopupMessage message={popupMessage} isPopupShowing={isPopup}/>
            <div className={styles.orderButton} onClick={onClick}>
                Оформить заказ
            </div>
            
        </>
   );
});