// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
// React
import { useState } from 'react';

const ItemCount = (props) => {

    const [productsAdded, setproductsAdded] = useState(props.initial);

    const addProduct = () => {
        if (productsAdded < props.stock) {
            setproductsAdded(productsAdded + 1);
        }
    }

    const removeProduct = () => {
        if (productsAdded > 1) {
            setproductsAdded(productsAdded - 1);
        }
    }

    return(
        <div>
            <div className='row pt-3 align-items-center justify-content-center'>
                <div className='col-3' onClick={removeProduct}>
                    <button className='btn btn-danger btn-sm'><FontAwesomeIcon icon={faMinus} /></button>
                </div>
                <div className='col-2'>
                    <p className='m-0'>{productsAdded}</p>
                </div>
                <div className='col-3' onClick={addProduct}>
                    <button className='btn btn-success btn-sm'><FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </div>
            <button className='btn btn-outline-primary btn-sm mt-4 w-100'>Agregar</button>
        </div>
    );

}

export default ItemCount;