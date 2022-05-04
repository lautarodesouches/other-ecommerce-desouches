// Componentes
import CartItem from "./CartItem";
import CartForm from "./CartForm";
// React Router DOM`
import { Link } from "react-router-dom";
// Function
import { formatNumber } from "utils/functions";
// React
import { useState } from "react";

const CartContainer = ({clear, cartList, removeItem, cartTotal}) => {

    const [showForm, setShowForm] = useState(false);

    return(
        <>
            {
                showForm
                ?
                <CartForm cartList={cartList} cartTotal={cartTotal} clear={clear} />
                :
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
                                return <CartItem key={`${el.id}-${el.color}`} item={el} removeItem={removeItem} />;
                            })
                        }
                    </section>
                    <section className="mt-5">
                        <div className="row justify-content-center mb-4">
                            <div className="col-12 col-md-3">
                                <h5>Total:</h5>
                            </div>
                            <div className="col-12 col-md-3">
                                <h5>{formatNumber(cartTotal())}</h5>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-lg w-50-md-25" onClick={() => {setShowForm(true);}}>Checkout</button>
                    </section>
                </>
            }
        </>
    );
}

export default CartContainer;