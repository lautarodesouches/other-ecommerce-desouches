// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// React
import { useContext } from "react";
// Context
import { CartContext } from "context/CartContextProdived";

const CartWidget = () => {

    const cartContext = useContext(CartContext);
    
    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            {
                cartContext.cartList.length > 0 && (
                    <span id="itemsInCart" className="ps-2">
                        {cartContext.countItems()}
                    </span>
                )
            }
        </>
    );
}

export default CartWidget;