// Components
import ItemList from "./ItemList";
import Loading from "./Loading";
// React
import { useState, useEffect } from "react";
// React Router DOM
import { useParams } from "react-router-dom";
// Utils
import { getData } from "../utils/data";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { categoryName }  = useParams();

    useEffect(() => {
        (async function waitGetData() {
            setItems([]);
            let incomingData = await getData(2000);
            categoryName && (incomingData = incomingData.filter(item => item.category === categoryName));
            setItems(incomingData);
        })();
    }, [categoryName])

    return (
        items.length < 1
        ?
        <Loading />
        :
        <section className="container-fluid">
            <ItemList items={items} />
        </section>
    );

}

export default ItemListContainer;