// React Router
import { useSearchParams } from "react-router-dom";
// Components
import SearchResults from "../components/SearchResults";

const Search = () => {

    const [searchParams,] = useSearchParams();

    const q = searchParams.get("q");

    return(
        <SearchResults q={q} />
    );

}

export default Search;