// React Routes DOM
import { Link } from 'react-router-dom';
// Function
import { formatNumber } from '../utils/functions';

const Item = (props) => {
    return(
        <article className='col-12 col-md-3 p-4' id={props.id}>
            <Link to={`/item/${props.id}`} className='text-decoration-none text-dark'>
                <div className='border rounded p-3 bg-white h-100 d-flex flex-column justify-content-between'>
                    <div className='item__img'>
                        <img src={`https://lautarodesouches.github.io/ecommerce/img/${props.id}-1.png`} alt={props.name} className='mh-100 mw-100'/>
                    </div>
                    <div className='py-2'>
                        <p>{props.name}</p>
                        <p>{formatNumber(props.price)}</p>
                    </div>
                    <div>
                        <button className='btn btn-outline-primary'>Ver Más</button>
                    </div>
                </div>
            </Link>
        </article>
    );
}

export default Item;