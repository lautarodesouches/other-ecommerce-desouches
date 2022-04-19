// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
// React
import { useState } from "react";

const ItemCount = ( {initial, stock, onAdd} ) => {

    const [productsAdded, setproductsAdded] = useState(initial);

    const addProduct = () => {
        productsAdded < stock && setproductsAdded(productsAdded + 1);
    }

    const removeProduct = () => {
        productsAdded > 1 && setproductsAdded(productsAdded - 1);
    }

    return(
        <div className="row pt-3 align-items-center justify-content-center">
            <div className="col-3">
                <button className="btn btn-outline-danger btn-sm" onClick={removeProduct}><FontAwesomeIcon icon={faMinus} /></button>
            </div>
            <div className="col-2">
                <h5 className="m-0">{productsAdded}</h5>
            </div>
            <div className="col-3">
                <button className="btn btn-outline-success btn-sm" onClick={addProduct}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div className="col-12 mt-3">
                <button className="btn btn-outline-primary btn-sm mt-4 w-50" onClick={() => onAdd(productsAdded)}>Agregar</button>
            </div>
        </div>
    );

}

export default ItemCount;