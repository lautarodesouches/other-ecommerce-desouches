import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { getData } from "../utils/data";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function waitGetData() {
            let incomingData = await getData();
            setItems(incomingData);
        }
        waitGetData();
    }, [])

    return (
        <section className="container-fluid py-3 text-center">
            <ItemList items={items} />
        </section>
    );

}

export default ItemListContainer;