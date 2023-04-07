import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';
import { ProductType } from '../../Types';
import img from '../../../public/assets/images/1.png'

interface ModalWindowProps{
    setModal: Dispatch<SetStateAction<boolean>>,
    product: ProductType
}

export const ModalWindow = ({setModal, product} : ModalWindowProps) => {
    const onCloseClick = () => {
        setModal(false);
    }
   return (
       <div className={styles.modalWindowContainer}>
        <div className={styles.modalWindow}>
            <div className={styles.closeButton} onClick={onCloseClick}>❌</div>
            <p className={styles.description}>Подробное описание</p>
            <div className={styles.productTitle}>Название товара: {product.title}</div>
            <div className={styles.productType}>Тип товара: {product.type}</div>
            <div className={styles.productBrand}>Бренд товара: {product.brand}</div>
            <div className={styles.productPrice}>Цена: {product.regular_price.value} {product.regular_price.currency}</div>
            <img className={styles.productImage} src={`../../../public/assets${product.image}`} alt={`${product.title}`} />
        </div>
       </div>
   );
};