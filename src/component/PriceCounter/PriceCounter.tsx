import styles from './styles.module.css';

interface PriceCounterProps{
    count : number
}

export const PriceCounter = ({count} : PriceCounterProps) => {
   return (
       <div className={styles.priceCounter}>
            Суммарный чек: {count}
       </div>
   );
};
