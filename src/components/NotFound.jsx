// React Routes DOM
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <section className='py-5 text-center'>
            <h2 className='diplay-4'>404</h2>
            <h2 className='display-3 mt-5'>Page Not Found</h2>
            <Link to='/'>
                <h2 className='mt-5'>Ir a Inicio</h2>
            </Link>
        </section>
    );
}

export default NotFound;