// Components
import CartItem from "components/CartItem";
// React
import { useState } from "react";
// Utils
import db from "utils/firebaseConfig";
// Firebase
import { doc, getDoc } from "firebase/firestore";
// Functions
import { formatNumber } from "utils/functions";

const Orders = () => {

    const [formCompleted, setFormCompleted] = useState(false);
    const [error, setError] = useState(undefined);
    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);


    const processForm = (e) => {
        
        e.preventDefault();

        (async () => {
            const docRef = doc(db, "orders", e.target.children[0].children[1].value);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log(docSnap.data());
                return docSnap.data();
            } else {
                return "No se encontro documento";
            }
        })()
            .then( (res) => {
                console.log(res.items, "items");
                setCartList(res.items);
                console.log(res.total, "total");
                setCartTotal(res.total);
            })
            .catch( (error) => {
                setError(error);
            })

        setFormCompleted(true);

    }

    return(
        <section className="row justify-content-center fadeIn">
            {
                formCompleted
                ?
                    
                    error === undefined
                    ?
                    <>
                        <div className="container">
                            <h2>Resultado</h2>
                            {
                                cartList.map((el) => {
                                    return <CartItem key={`${el.id}-${el.color}`} item={el} />;
                                })
                            }
                            <h5>Total: {formatNumber(cartTotal)}</h5>
                        </div>
                        <div>
                            <button className="mt-5 btn btn-primary" onClick={() => setFormCompleted(false)}>Buscar otro</button>
                        </div>
                    </>
                    :
                    <h2>{error}</h2>
                    
                :
                <form className="col-12 col-md-4 p-3 bg-white rounded" onSubmit={(e) => {processForm(e)}}>
                    <div className="text-start">
                        <label htmlFor="id" className="form-label">ID de compra</label>
                        <input type="text" className="form-control" id="id" />
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-outline-primary">Buscar orden</button>
                    </div>
                </form>
            }
        </section>
        
    );
}

export default Orders;