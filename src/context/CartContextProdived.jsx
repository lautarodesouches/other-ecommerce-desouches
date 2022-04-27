// React
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProdived = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = ({item, qty, desiredColor}) => {
        let findItem = cartList.find( (el) => el.id === item.id && el.itemColor === desiredColor);

        if (findItem === undefined) {
            setCartList([...cartList, {itemColor: desiredColor, itemQty: qty, ...item}])
        } else {
            findItem.itemQty += qty;
            setCartList([...cartList]);
        }
    }

    const removeItem = (itemId, itemColor) => {
        console.log(itemId, itemColor);
        let filterItem = cartList.filter( (el) => {return el.id !== itemId || el.itemColor !== itemColor});
        setCartList(filterItem);
    }

    const clear = () => {
        setCartList([]);
    }

    const countItems = () => {
        console.log(cartList);
        return cartList.reduce( (acc, el) => acc + el.itemQty, 0 );
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, countItems}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProdived;