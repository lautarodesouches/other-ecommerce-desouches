// Components
import CheckoutForm from "components/CheckoutForm";
import Thankyou from "components/Thankyou";
import Error from "components/Error";
// Utils
import db from "utils/firebaseConfig";
// Firebase
import { doc, increment, serverTimestamp, updateDoc, collection, setDoc, query, where, getDocs } from "firebase/firestore";
// React
import { useContext, useState } from "react";
// Context
import { CartContext } from "context/CartContextProdived";

const Checkout = () => {
    
    const {cartList, clear, cartTotal} = useContext(CartContext);

    const [formInomplete, setFormIncomplete] = useState(true);
    const [formOk, setFormOk] = useState(false);
    const [buyerName, setBuyerName] = useState("");
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");

    const createOrder = (e) => {

        e.preventDefault();
        
        const inputValue = (n) => {
            return e.target.children[n].children[1].value;
        }

        setBuyerName(inputValue(0));

        // Set order
        let order = {
            buyer: {
                name: inputValue(0),
                email: inputValue(1),
                phone: inputValue(2)
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
            await updateDoc(itemRef, { amountAvailable: increment( - item.qty) });
        });

        // Create new order in firebase
        (async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        })()
        .then( result => {
            setFormOk(true);
            setFormIncomplete(false);
            setOrderId(result.id);
            clear();
        })
        .catch( error => {
            setFormIncomplete(false);
            setError(error);
            console.log(error);
        });

    }

    return(
        <section className="row justify-content-center fadeIn">
            {   
                formInomplete
                ?
                <CheckoutForm createOrder={createOrder} />
                :
                (
                    formOk
                    ?
                    <Thankyou buyerName={buyerName} orderId={orderId} />
                    :
                    <Error message={error} />
                )
            }
        </section>
    );
}

export default Checkout;