import { useEffect, useState } from "react";
import { getData } from "../utils/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect( () => {
        async function waitGetData() {
            let incomingData = await getData();
            setItem(incomingData[0]);
        }
        waitGetData();
    }, [])

    console.log(item);

    return(
        <section className="container py-5">
            <ItemDetail item={item} />
        </section>
    );
}

export default ItemDetailContainer;