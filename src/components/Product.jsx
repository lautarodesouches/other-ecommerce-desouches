import ItemCount from './ItemCount';

function formatNumber(number) {
    let formatOfNumber = new Intl.NumberFormat('es-AR');
    return '$' + formatOfNumber.format(number);
}

const Product = (props) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return(
        <article className="col-12 col-md-3 p-4" id={props.id}>
            <div className="border rounded p-3 bg-white h-100 d-flex flex-column justify-content-between">
                <div>
                    <p>{props.name}</p>
                    <p>{formatNumber(props.price)}</p>
                </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
        </article>
    );
}

export default Product;