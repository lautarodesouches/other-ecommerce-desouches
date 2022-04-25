// Componentes
import NotFound from "../components/NotFound";
// React
import { useContext } from "react";
// Context
import { CartContext } from "../context/CartContextProdived";
import CartContainer from "../components/CartContainer";

const Cart = () => {

    const {cartList, clear, removeItem} = useContext(CartContext);

    return(
        <>
            {
                cartList.length < 1
                ?
                <NotFound message="El carrito se encuentra vacio" />
                :
                <CartContainer cartList={cartList} clear={clear} removeItem={removeItem} />
            }
        </>
    );
}

export default Cart;