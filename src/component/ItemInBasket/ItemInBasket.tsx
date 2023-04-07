import { ProductInBasketType } from "../../Types";
import styles from './styles.module.css';

interface ItemInBasketComponentProps{
    item : ProductInBasketType
}

export const ItemInBasketComponent = ({item} : ItemInBasketComponentProps) => {
   return (
       <div className={styles.itemInBasketContainer}>
            <div className={styles.imageContainer}><img className={styles.image}
             src={`../../../public/assets${item.product.image}`} alt=''/></div>
            <div>{item.product.title}</div>
            <div>{item.product.type}</div>
            <div>{item.product.regular_price.value} {item.product.regular_price.currency}</div>
            <div>{item.count}</div>
       </div>
   );
};
