// Components
import Error from "./Error";
// Utils
import db from "utils/firebaseConfig";
// Firebase
import { doc, increment, serverTimestamp, updateDoc, collection, setDoc, query, where, getDocs } from "firebase/firestore";
// React
import { useState } from "react";

const CartForm = ({cartList, cartTotal}) => {

    const [formInomplete, setFormIncomplete] = useState(true);
    const [formOk, setFormOk] = useState(false);
    const [buyerName, setBuyerName] = useState("");
    const [orderId, setOrderId] = useState("");

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
        .then( result => {setFormOk(true); setFormIncomplete(false); setOrderId(result.id);})
        .catch( error => setFormIncomplete(false));

    }

    return(
        <section className="row justify-content-center">
            {   
                formInomplete
                ?
                <form className="col-12 col-md-4 bg-white rounded p-4" onSubmit={(e) => {createOrder(e)}}>
                    <div className="mb-3 text-start">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" aria-describedby="name" />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="email" />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input type="tel" className="form-control" id="phone" aria-describedby="phone" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4 w-25">Submit</button>
                </form>
                :
                (
                    formOk
                    ?
                    <>
                        <h2>Gracias por tu compra {buyerName}</h2>
                        <h5 className="mt-3"> Tu ID de compra es:</h5>
                        <h5 className="b">{orderId}</h5>
                        <p className="mt-5">Podes usar tu id de compra para seguir el estado de la misma</p>
                    </>
                    :
                    <Error message="La base de datos a devuelto un error" />
                )
            }
        </section>
    );
}

export default CartForm;