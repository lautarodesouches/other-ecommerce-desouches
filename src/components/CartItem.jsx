// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// Function
import { formatNumber } from "../utils/functions";

const CartItem = ({item, qty, removeItem}) => {
    return(
        <article className="container my-3 position-relative">
            <div className="row align-items-center justify-content-center bg-white py-3 rounded">
                <div className="col-12 col-md-3 py-1 py-md-0">
                    <img src={`https://lautarodesouches.github.io/ecommerce/img/${item.id}-1.png`} alt={item.name} className="item__img" />
                </div>
                <div className="col-12 col-md-3 py-1 py-md-0">
                    <p className="text-secondary">Nombre:</p>
                    <h5>{item.name}</h5>
                </div>
                <div className="col-12 col-md-3 py-1 py-md-0">
                    <p className="text-secondary">Cantidad:</p>
                    <h5>{qty}</h5>
                </div>
                <div className="col-12 col-md-3 py-1 py-md-0">
                    <p className="text-secondary">Subtotal:</p>
                    <h5>{formatNumber(item.price * qty)}</h5>
                </div>
            </div>
            <span className="position-absolute top-0 end-0 pt-2 pe-3 cursor-pointer">
                <FontAwesomeIcon icon={faCircleXmark} size="lg" className="text-danger" onClick={() => {removeItem(item.id)}} />
            </span>
        </article>
    );
}

export default CartItem;