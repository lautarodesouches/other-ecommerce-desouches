// Components
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Error from "./Error";
// React
import { useEffect, useState } from "react";
// React Router DOM
import { useParams } from "react-router-dom";
// Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
// Utils
import db from "../utils/firebaseConfig";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { itemId }      = useParams();
    const [error, setError] = useState([false]);

    useEffect(() => {
        // Auto-executing anonymous function - get data from Firebase
        (async function () {
            const querySnapshot = query(collection(db, "products"), where("id", "==", parseInt(itemId) ));
            return await getDocs(querySnapshot);
        })()
            .then(result => {
                setItem( result.docs.map( (doc) => ({ id: doc.id, ...doc.data() }) )[0] );
            })
            .catch(error => {
                setError([true, error]);
            })
    }, [itemId]);

    return(
        error[0]
        ? <Error message={error} />
        :(
            item
            ?
            (
                item.id === undefined
                ?
                <Loading />
                :
                <section className="container">
                    <ItemDetail item={item} />
                </section>
            )
            :
            <NotFound message="Item No Econtrado" />
        )
    );
}

export default ItemDetailContainer;