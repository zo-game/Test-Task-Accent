import { FilterComponent, BrandComponent, SortComponent } from "../../component";
import { ProductType } from "../../Types";
import { HeaderComponent } from "../../component";
import { useParams, useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import { observer } from "mobx-react-lite";
import { productItems } from "../../store/Products/products";
import styles from './styles.module.css';

export const MainPage = observer(() => {    
    const currentPage = Number(useParams().page ?? 1);
    const items = productItems.products;
    const slicedItems = items.slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6);
    const navigate = useNavigate();
    const onChange = (pageNumber : Number) => {
        navigate(`../${pageNumber}`);
    }
    
   return (
    <>
    <HeaderComponent />
       <div className={styles.mainPageContainer}>
        <div className={styles.mainPageContent}>
            <FilterComponent/>
            <SortComponent />
            {slicedItems.map((item : ProductType) => {
                return <BrandComponent item={item} key={String(item.id)}/>                
            })}
            
            <Pagination defaultCurrent={currentPage} total={items.length} pageSize={6} className={styles.pagination} onChange={onChange}/>
        </div>            
       </div>
    
    </>
   );
});

