import axios from 'axios';
import { ProductInBasketType } from '../Types';

export const sendOrder = async(products : ProductInBasketType[]) =>  {
    const url = 'https://app.aaccent.su/js/confirm.php';
    const resp = await axios.post(url, {products:products}, {
        headers: {
            'Content-Type' : "multipart/form-data"
        }
    })
    .catch(err => console.log(err));

    return resp;
}