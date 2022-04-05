import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { getData } from "../utils/data";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function waitGetData() {
            let incomingData = await getData();
            setProducts(incomingData);
        }
        waitGetData();
    }, [])

    return (
        <section className="container-fluid py-3 text-center bg-light">
            <ItemList products={products} />
        </section>
    );

}

export default ItemListContainer;