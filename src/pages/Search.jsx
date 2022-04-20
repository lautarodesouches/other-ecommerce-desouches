// React Router
import { useSearchParams } from "react-router-dom";
// Components
import SearchResults from "../components/SearchResults";

const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("q");

    // Remove warning
    false && setSearchParams('');

    return(
        <SearchResults query={query} />
    );

}

export default Search;