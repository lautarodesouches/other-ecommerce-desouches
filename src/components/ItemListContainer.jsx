// Components
import ItemList from "./ItemList";
import Loading from "./Loading";
// React
import { useState, useEffect } from "react";
// React Router DOM
import { useParams } from "react-router-dom";
// Firebase
import { collection, getDocs } from "firebase/firestore";
// Utils
import db from "../utils/firebaseConfig";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { categoryName }  = useParams();

    useEffect(() => {
        const fetchFromFireStore = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFromFireStore = querySnapshot.docs.map( (doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return dataFromFireStore;
        }
        fetchFromFireStore()
            .then(result => setItems(result))
            .catch(error => console.log(error))
    }, [items, categoryName])

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