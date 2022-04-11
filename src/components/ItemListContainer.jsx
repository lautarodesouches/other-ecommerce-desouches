import ItemList from "./ItemList";
import Loading from './Loading';
import { useState, useEffect } from "react";
import { getData } from "../utils/data";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function waitGetData() {
            let incomingData = await getData(2000);
            setItems(incomingData);
        }
        waitGetData();
    }, [])

    return (
        items.length < 1
        ?
        <Loading />
        :
        <section className="container-fluid py-3 text-center">
            <ItemList items={items} />
        </section>
    );

}

export default ItemListContainer;