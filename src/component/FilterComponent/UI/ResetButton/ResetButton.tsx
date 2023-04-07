import styles from './styles.module.css';
import svg from '../../../../../public/assets/images/cross.svg'


interface SubmitButtonProps {
    onReset: React.MouseEventHandler<HTMLDivElement>
}

export const ResetButton = ({onReset} : SubmitButtonProps) => {
   return (
       <div className={styles.resetBtnContainer}>
        <div className={styles.resetBtn} onClick={onReset}>
            <img src={svg} className={styles.cross}/>Сбросить
        </div>
       </div>
   );
};