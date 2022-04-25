// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// React
import { useContext, useEffect, useState } from "react";
// Context
import { CartContext } from "../context/CartContextProdived";

const CartWidget = () => {

    const cartContext = useContext(CartContext);
    const [numberOfItems, setNumberOfItems] = useState(0);

    useEffect( () => {
        setNumberOfItems( cartContext.cartList.reduce( (acc, el) => acc + el.qty, 0 ) );
    }, [cartContext.cartList])

    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            {
                cartContext.cartList.length > 0 && (
                    <span id="itemsInCart" className="ps-2">
                        {numberOfItems}
                    </span>
                )
            }
        </>
    );
}

export default CartWidget;