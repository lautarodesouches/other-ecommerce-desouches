// Components
import ItemList from "./ItemList";
import Loading from "./Loading";
import Error from "./Error";
// React
import { useState, useEffect } from "react";
// React Router DOM
import { useParams } from "react-router-dom";
// Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
// Utils
import db from "utils/firebaseConfig";
// Funciones
import { shuffle } from "utils/functions";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { categoryName }  = useParams();
    const [error, setError] = useState([false]);

    useEffect(() => {
        setError([false]);
        // Auto-executing anonymous function - get data from Firebase
        (async function () {
            // If category name is undefined, get all
            const querySnapshot = (
                categoryName === undefined
                ? query(collection(db, "products"))
                : query(collection(db, "products"), where("category", "==", categoryName))
            )
            return await getDocs(querySnapshot);
        })()
            .then(result => {
                setItems( shuffle(result.docs.map( (doc) => ({ id: doc.id, ...doc.data() }) )) );
            })
            .catch(error => {
                setError([true, error]);
            })
    }, [categoryName]);

    return (
        error[0]
        ? <Error message={error[1]} />
        :(
            items.length < 1
            ?
            <Loading />
            :
            <section className="container-fluid">
                <ItemList items={items} />
            </section>
        )
    );

}

export default ItemListContainer;