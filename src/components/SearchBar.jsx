const SearchBar = () => {
    return(
        <form action="/search/" method="get" id="buscadorPrincipal">
            <input className="form-control shadow" type="text" placeholder="Buscar" name="q" aria-label="Search" />
        </form>
    );
}

export default SearchBar;