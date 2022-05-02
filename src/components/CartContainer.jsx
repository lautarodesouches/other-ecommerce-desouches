// Componentes
import CartItem from "./CartItem";
// React Router DOM
import { Link } from "react-router-dom";
// Function
import { formatNumber } from "../utils/functions";
// Utils
import db from "../utils/firebaseConfig";
// Firebase
import { doc, getFirestore, increment, serverTimestamp, updateDoc, collection, setDoc, query, where, getDocs } from "firebase/firestore";

const CartContainer = ({clear, cartList, removeItem, cartTotal}) => {

    
    const createOrder = () => {
        
        // Set order
        let order = {
            buyer: {
                name: "Name",
                email: "Email",
                phone: "123456789"
            },
            total: cartTotal(),
            items: cartList.map( item => ({
                id: item.id,
                name: item.name,
                brand: item.brand,
                price: item.price,
                qty: item.qty,
                color: item.color,
              })),
            date: serverTimestamp()
        }
        
        // Update stock
        cartList.forEach(async (item) => {
            // Get item doc by id
            let docId;
            const querySnapshot = query(collection(db, "products"), where("id", "==", item.id ));
            await getDocs(querySnapshot).then( res => docId = res.docs[0].id);
            // Update
            const itemRef = doc(db, "products", docId);
            await updateDoc(itemRef, { amountAvailable: increment(item.qty) });
        });

    }

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
                <button className="btn btn-primary btn-lg w-50-md-25" onClick={() => {createOrder()}}>Checkout</button>
            </section>
        </>
    );
}

export default CartContainer;