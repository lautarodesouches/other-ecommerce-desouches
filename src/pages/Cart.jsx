// Componentes
import CartItem from '../components/CartItem';
// React Router DOM
import { Link } from 'react-router-dom';
// Function
import { formatNumber } from '../utils/functions';
// React
import { useContext } from 'react';
// Context
import { CartContext } from '../context/CartContextProdived';

const Cart = () => {

    const cartContext = useContext(CartContext);

    return(
        <>
            {
                
                cartContext.cartList.length < 1
                ?
                <section>
                    <h2>El carrito se encuentra vacio</h2>
                    <h2 className='mt-5'><Link to='/'>Ir al inicio</Link></h2>
                </section>
                :
                <>
                    <section className='row pb-5'>
                        <div className='col-6'>
                            <Link to='/'>
                                <button className='btn btn-outline-secondary'>Seguir comprando</button>
                            </Link>
                        </div>
                        <div className='col-6'>
                            <button className='btn btn-outline-danger' onClick={() => {cartContext.clear()}}>Eliminar items</button>
                        </div>
                    </section>
                    <section>
                        {
                            cartContext.cartList.map((el) => {
                                return <CartItem key={el.item.id} item={el.item} qty={el.qty} removeItem={cartContext.removeItem} />;
                            })
                        }
                    </section>
                    <section className='mt-5'>
                        <div className='row justify-content-center mb-4'>
                            <div className='col-12 col-md-3'>
                                <h5>Total:</h5>
                            </div>
                            <div className='col-12 col-md-3'>
                                <h5>{formatNumber(cartContext.cartList.reduce( (acc, el) => acc + (el.item.price * el.qty), 0 ))}</h5>
                            </div>
                        </div>
                        <button className='btn btn-primary btn-lg w-25'>Finalizar</button>
                    </section>
                </>
            }
        </>
    );
}

export default Cart;