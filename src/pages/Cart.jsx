// Componentes
import NotFound from "components/NotFound";
import CartContainer from "components/CartContainer";
// React
import { useContext } from "react";
// Context
import { CartContext } from "context/CartContextProdived";

const Cart = () => {

    const {cartList, clear, removeItem, cartTotal} = useContext(CartContext);

    return(
        <section className="fadeIn">
            {
                cartList.length < 1
                ?
                <NotFound message="El carrito se encuentra vacio" />
                :
                <CartContainer cartList={cartList} clear={clear} removeItem={removeItem} cartTotal={cartTotal} />
            }
        </section>
    );
}

export default Cart;