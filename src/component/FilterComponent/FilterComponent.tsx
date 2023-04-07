
import styles from './styles.module.css'
import { BrandCheckBox, SubmitButton, ResetButton } from './UI';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useState } from 'react';
import { productItems } from '../../store/Products/products';
import brands from '../../../public/assets/brands.json';
import { BrandType } from '../../Types';

export const FilterComponent = () => {
   const [checkedBrands, changeCheckedBrands] = useState<number[]>([]);

   const onChange = (num: number, event: CheckboxChangeEvent) => {
            if(event.target.checked){
               changeCheckedBrands((prev) => [...prev, num])
            }
            else{
               const index = checkedBrands.findIndex((brand, index) => index === num - 1);
               changeCheckedBrands([...checkedBrands.slice(0, index),
                     ...checkedBrands.slice(index + 1)])
            }
   }

   const onSubmit = () => {
      productItems.filterProducts(checkedBrands);
   }

   const onReset = () => {
      changeCheckedBrands([]);
      productItems.resetFilter();
   }

   return (
    <div className={styles.brandsFilterContainer}>
        <div className={styles.brandsFilter}>
            <p>Фильтрация по брендам</p>         
            {brands.map((brand : BrandType) => 
               <BrandCheckBox brandTitle={`${brand.title}`} 
               isChecked={checkedBrands.includes(Number(brand.id))}
               onChange={(event) => onChange(Number(brand.id), event)}
               key={String(brand.id)}
               />
            )}
         </div>
       <div className={styles.buttons}>
            <SubmitButton onSubmit={onSubmit}/>
            <ResetButton onReset={onReset}/>
       </div>
    </div>
       
   );
};
