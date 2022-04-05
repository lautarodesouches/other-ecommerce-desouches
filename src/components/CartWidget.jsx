// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            <span id="cantidadItemsEnCarrito" className='ps-2'>4</span>
        </>
    );
}

export default CartWidget;