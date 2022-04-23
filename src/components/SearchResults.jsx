// Components
import ItemList from "./ItemList";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Error from "./Error";
// React
import { useState, useEffect } from "react";
// Firebase
import { collection, getDocs, query } from "firebase/firestore";
// Utils
import db from "../utils/firebaseConfig";

const SearchResults = ( {q} ) => {

    const [items, setItems] = useState([]);
    const [searchFound, setSearchFound] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Auto-executing anonymous function - get data from Firebase
        (async function () {
            const querySnapshot = query(collection(db, "products"))
            return await getDocs(querySnapshot);
        })()
            .then(result => {
                let results = result.docs.map( (doc) => ({ id: doc.id, ...doc.data() }) )
                // This should be in the backend
                let filter = results.filter(item => item.category.toLowerCase() === q.toLowerCase() || item.name.toLowerCase().includes(q.toLowerCase())  || item.brand.toLowerCase() === q.toLowerCase() );
                setSearchFound(filter.length > 0);
                setItems(filter);
            })
            .catch(error => {
                setError(true);
                console.log(error);
            })
    }, [q])

    return (
        error
        ? <Error />
        :(
            items.length < 1
            ?
                searchFound
                ? <Loading />
                : <NotFound message="No se han encontrado productos con esa búsqueda" />
            :
            <section className="container-fluid">
                <h2 className="h5 mb-4">Resultados para: {q}</h2>
                <ItemList items={items} />
            </section>
        )
    );
}

export default SearchResults;