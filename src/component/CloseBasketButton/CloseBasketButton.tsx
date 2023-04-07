import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { productInBasket } from '../../store/ProductsInBasket/productsInBasket';

export const CloseBasketButton = () => {
    const navigate = useNavigate();
    const onClick = () => {
        productInBasket.cleanBasket();
        navigate('../')
    }

   return (
       <div className={styles.closeButton} onClick={onClick}>
            Закрыть
       </div>
   );
};