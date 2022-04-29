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
// Funciones
import { capitalize } from "../utils/functions";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {

    const [items, setItems]             = useState([]);
    const [searchFound, setSearchFound] = useState(true);
    const [error, setError]             = useState([false]);

    const [searchParams,] = useSearchParams();

    const q = searchParams.get("q").toLowerCase();

    useEffect(() => {
        setError([false]);
        // Auto-executing anonymous function - get data from Firebase
        (async function () {
            const querySnapshot = query(collection(db, "products"))
            return await getDocs(querySnapshot);
        })()
            .then(result => {
                let results = result.docs.map( (doc) => ({ id: doc.id, ...doc.data() }) )
                let filter = results.filter(item => item.category.toLowerCase() === q || item.name.toLowerCase().includes(q)  || item.brand.toLowerCase() === q );
                setSearchFound(filter.length > 0);
                setItems(filter);
            })
            .catch(error => {
                setError([true, error]);
            })
    }, [q])

    return (
        error[0]
        ? <Error message={error[1]} />
        :(
            items.length < 1
            ?
                searchFound
                ? <Loading />
                : <NotFound message="No se han encontrado productos con esa búsqueda" />
            :
            <section className="container-fluid">
                <h2 className="h5 mb-4">Resultados para: {capitalize(q)}</h2>
                <ItemList items={items} />
            </section>
        )
    );
}

export default SearchResults;