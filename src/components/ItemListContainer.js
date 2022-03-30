const ItemListContainer = (props) => {
    return (
        <main className="container-fluid">
            <section className="py-5 text-center">
                <h1 className="maven">{props.greeting}</h1>
            </section>
        </main>
    );
}

export default ItemListContainer;