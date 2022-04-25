// React
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProdived = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = ({item, qty}) => {
        let findItem = cartList.find( (el) => el.item.id === item.id);

        if (findItem === undefined) {
            setCartList([...cartList, {itemQty: qty, ...item}])
        } else {
            findItem.itemQty += qty;
            setCartList([...cartList]);
        }
    }

    const removeItem = (itemId) => {
        let filterItem = cartList.filter( (el) => el.item.id !== itemId);
        setCartList(filterItem);
    }

    const clear = () => {
        setCartList([]);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProdived;