import styles from './styles.module.css';
import {Basket} from './UI/Basket';
import { useNavigate } from 'react-router-dom';

export const HeaderComponent = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('../');

    }

    return (
       <header className={styles.header}>
            <div className={styles.mainRedirect} onClick={onClick}>🏠 Главная</div>
            <Basket />
       </header>
   );
};