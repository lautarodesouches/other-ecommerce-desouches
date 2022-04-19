const SearchBar = () => {
    return(
        <form action="/search/" method="get" id="buscadorPrincipal">
            <input className="form-control shadow" type="text" placeholder="Buscar" name="search" aria-label="Search" />
        </form>
    );
}

export default SearchBar;