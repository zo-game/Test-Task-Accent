import styles from './style.module.css';

interface SubmitButtonProps {
    onSubmit: React.MouseEventHandler<HTMLDivElement>
}

export const SubmitButton = ({onSubmit} : SubmitButtonProps) => {

   return (
       <div className={styles.submitBnt} onClick={onSubmit}>
            Применить
       </div>
   );
};
