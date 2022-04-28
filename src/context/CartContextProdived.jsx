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
        let findItem = cartList.find( (el) => el.id === item.id && el.itemColor === desiredColor);

        if (findItem === undefined) {
            updateAndSave([...cartList, {itemColor: desiredColor, itemQty: qty, ...item}]);
        } else {
            findItem.itemQty += qty;
            updateAndSave([...cartList])
        }
    }

    const removeItem = (itemId, itemColor) => {
        let filterItem = cartList.filter( (el) => {return el.id !== itemId || el.itemColor !== itemColor});
        updateAndSave(filterItem);
    }

    const clear = () => {
        updateAndSave([]);
    }

    const countItems = () => {
        return cartList.reduce( (acc, el) => acc + el.itemQty, 0 );
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, countItems}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProdived;