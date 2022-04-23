// React Router
import { useSearchParams } from "react-router-dom";
// Components
import SearchResults from "../components/SearchResults";

const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const q = searchParams.get("q");

    // Remove warning
    false && setSearchParams("");

    return(
        <SearchResults q={q} />
    );

}

export default Search;