// Componentes
import CartItem from "./CartItem";
// React Router DOM
import { Link } from "react-router-dom";
// Function
import { formatNumber } from "../utils/functions";

const CartContainer = ({clear, cartList, removeItem}) => {
    return(
        <>
            <section className="row pb-5">
                <div className="col-6">
                    <Link to="/">
                        <button className="btn btn-outline-secondary">Seguir comprando</button>
                    </Link>
                </div>
                <div className="col-6">
                    <button className="btn btn-outline-danger" onClick={() => {clear()}}>Eliminar items</button>
                </div>
            </section>
            <section>
                {
                    cartList.map((el) => {
                        return <CartItem key={el.item.id} item={el.item} qty={el.qty} removeItem={removeItem} />;
                    })
                }
            </section>
            <section className="mt-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-12 col-md-3">
                        <h5>Total:</h5>
                    </div>
                    <div className="col-12 col-md-3">
                        <h5>{formatNumber(cartList.reduce( (acc, el) => acc + (el.item.price * el.qty), 0 ))}</h5>
                    </div>
                </div>
                <button className="btn btn-primary btn-lg w-50-md-25">Checkout</button>
            </section>
        </>
    );
}

export default CartContainer;