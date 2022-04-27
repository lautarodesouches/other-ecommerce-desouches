// React Router DOM
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    let navigate = useNavigate();

    return(
        <form action="/search/" method="get" id="buscadorPrincipal" onSubmit={ (e) => {e.preventDefault(); navigate(`/search/?q=${e.target[0].value}`);} }>
            <input className="form-control shadow" type="text" placeholder="Buscar" name="q" aria-label="Search" />
        </form>
    );
}

export default SearchBar;