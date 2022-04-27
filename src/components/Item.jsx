// React Routes DOM
import { Link } from "react-router-dom";
// Function
import { formatNumber } from "../utils/functions";

const Item = ( {id, name, price} ) => {
    return(
        <article className="col-12 col-md-3 p-4" id={id}>
            <div className="border rounded p-3 bg-white h-100 d-flex flex-column justify-content-between">
                <div className="item__img">
                    <img src={`https://lautarodesouches.github.io/ecommerce/img/${id}-1.png`} alt={name} className="mh-100 mw-100" loading="lazy" />
                </div>
                <div className="py-2">
                    <p>{name}</p>
                    <p>{formatNumber(price)}</p>
                </div>
                <div>
                    <Link to={"/item/"+id} className="text-decoration-none text-dark">
                        <button className="btn btn-outline-primary">Ver Más</button>
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default Item;