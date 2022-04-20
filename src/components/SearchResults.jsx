// Components
import ItemList from "./ItemList";
import Loading from "./Loading";
import NotFound from "./NotFound";
// React
import { useState, useEffect } from "react";
// Utils
import { getData } from "../utils/data";

const SearchResults = ( {query} ) => {

    const [items, setItems] = useState([]);
    const [searchFound, setSearchFound] = useState(true);

    useEffect(() => {
        (async function waitGetData() {
            setItems([]);
            setSearchFound(true)
            let incomingData = await getData(2000);
            query && (incomingData = incomingData.filter(item => item.category.toLowerCase() === query.toLowerCase() || item.name.toLowerCase().includes(query.toLowerCase())  || item.brand.toLowerCase() === query.toLowerCase() ));
            incomingData.length === 0 && setSearchFound(false);
            setItems(incomingData);
        })();
    }, [query])

    return (
        items.length < 1
        ?
            searchFound
            ? <Loading />
            : <NotFound message="No se han encontrado productos con esa búsqueda" />
        :
        <section className="container-fluid">
            <h2 className="h5 mb-4">Resultados para: {query}</h2>
            <ItemList items={items} />
        </section>
    );
}

export default SearchResults;