// Components
import ItemDetail from './ItemDetail';
import Loading from './Loading';
import NotFound from './NotFound';
// React
import { useEffect, useState } from 'react';
// React Router DOM
import { useParams } from 'react-router-dom';
// Utils
import { getData } from '../utils/data';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { itemId }      = useParams();

    useEffect( () => {
        (async function waitGetData() {
            let incomingData = await getData(2000);
            setItem(incomingData.filter((el) => el.id === parseInt(itemId))[0]);
        }) ();
    }, [itemId])

    return(
        item
        ?
        (
            item.id === undefined
            ?
            <Loading />
            :
            <section className='container py-5'>
                <ItemDetail item={item} />
            </section>
        )
        :
        <NotFound error='Item No Econtrado' />
    );
}

export default ItemDetailContainer;