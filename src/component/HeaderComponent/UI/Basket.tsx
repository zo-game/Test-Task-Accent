import basket from '../../../../public/assets/images/shopping-basket.png'
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export const Basket = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('../basket');
    }
    return (
       <div className={styles.basketContainer} onClick={onClick}>
            <p>Корзина</p>
            <img src={basket} alt="Корзина" className={styles.itemsBasket}/>           
       </div>
   );
};