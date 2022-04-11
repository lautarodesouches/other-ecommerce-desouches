import ItemDetail from "./ItemDetail";
import Loading from './Loading';
import { useEffect, useState } from "react";
import { getData } from "../utils/data";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect( () => {
        async function waitGetData() {
            let incomingData = await getData(2000);
            setItem(incomingData[0]);
        }
        waitGetData();
    }, [])

    return(
        item.id === undefined
        ?
        <Loading />
        :
        <section className="container py-5">
            <ItemDetail item={item} />
        </section>
    );
}

export default ItemDetailContainer;