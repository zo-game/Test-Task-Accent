import styles from './styles.module.css'
import { ProductType } from '../../Types';
import { ItemBasket } from '../ItemBasket/ItemBasket';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useState } from 'react';

interface BrandComponentProps {
    item: ProductType
}

export const BrandComponent = ({item} : BrandComponentProps) => {
    const [isModal, setIsModal] = useState(false);
    const onMoreButtonClick = () => {
        setIsModal(prev => !prev);
    }

    return (
        <div className={styles.brandComponentContainer}>
            {isModal ? <ModalWindow setModal={setIsModal} product={item}/> : <></>}
            <p className={styles.brandComponentTitle}>
                {item.title}
            </p>
            <img src={`../../../public/assets${item.image}`} alt="some" className={styles.itemImage}/>
            <div className={styles.price}>{item.regular_price.value} {item.regular_price.currency}</div>
            <div className={styles.moreButton} onClick={onMoreButtonClick}>Подробнее</div>
            <ItemBasket item={item}/>
        </div>
       
   );
};