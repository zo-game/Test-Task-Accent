import styles from './styles.module.css';
import {  Input, Radio, Space  } from 'antd';
import { RadioChangeEvent } from 'antd';
import { productItems } from '../../store/Products/products';

export const SortComponent = () => {
    const onChange = (evt : RadioChangeEvent) => {
        const sortType = evt.target.value;
        productItems.sortProducts(sortType);
    }

    return (
        <div className={styles.sortComponentContainer}>
            <div className={styles.sortComponent}>
                <p>Сортировка</p>
                <Radio.Group onChange={onChange}>
                    <Space direction='vertical'>
                        <Radio value={1} className={styles.textRadio}>Сортировка цены по возрастанию</Radio>
                        <Radio value={2} className={styles.textRadio}>Сортировка цены по убыванию</Radio>
                        <Radio value={3} className={styles.textRadio}>По умолчанию</Radio>
                    </Space>
                </Radio.Group>
            </div>
        </div>
       
   );
};