const ItemListContainer = (props) => {
    return (
        <section className="container-fluid py-1 text-center">
            <h1 className="maven">{props.greeting}</h1>
        </section>
    );
}

export default ItemListContainer;