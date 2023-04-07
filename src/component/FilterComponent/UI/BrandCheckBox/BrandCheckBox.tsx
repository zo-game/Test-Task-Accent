import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import style from './styles.module.css';

interface BrandCheckBox{
    brandTitle: string,
    onChange: (e: CheckboxChangeEvent) => void,
    isChecked : boolean
}

export const BrandCheckBox = ({brandTitle, onChange, isChecked} : BrandCheckBox) => {
   
   return (
       <div className={style.brandCheckBox}>
            <Checkbox onChange={onChange} checked={isChecked}/> {brandTitle}
       </div>
   );
};
