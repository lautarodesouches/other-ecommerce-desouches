// React
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProdived = ({children}) => {

    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem("cartList")) || []);

    const updateAndSave = (data) => {
        setCartList(data);
        localStorage.setItem("cartList", JSON.stringify(data));
    }

    const addToCart = ({item, qty, desiredColor}) => {
        let findItem = cartList.find( (el) => el.id === item.id && el.color === desiredColor);

        if (findItem === undefined) {
            updateAndSave([...cartList, {color: desiredColor, qty: qty, ...item}]);
        } else {
            findItem.qty += qty;
            updateAndSave([...cartList])
        }
    }

    const removeItem = (itemId, itemColor) => {
        let filterItem = cartList.filter( (el) => {return el.id !== itemId || el.color !== itemColor});
        updateAndSave(filterItem);
    }

    const clear = () => {
        updateAndSave([]);
    }

    const countItems = () => {
        return cartList.reduce( (acc, item) => acc + item.qty, 0 );
    }

    const cartTotal = () => {
        return cartList.reduce( (acc, item) => acc + (item.price * item.qty), 0 )
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, countItems, cartTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProdived;