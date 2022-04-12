// Componentes
import CartWidget from './CartWidget';
// React
import { useEffect, useState } from 'react';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
// Images
import logo from '../img/logo.png';
// React Routes DOM
import { Link } from 'react-router-dom';
// Utils
import { getData } from '../utils/data';

const NavBar = () => {

    const [display, setDisplay]         = useState('d-none');
    const [categories, setCategories]   = useState([]);
    const [faAngles, setFaAngles]       = useState(faAnglesDown);

    function showMenu() {
        if (display === 'd-block') {
            setDisplay('d-none');
            setFaAngles(faAnglesDown);
        }else{
            setDisplay('d-block');
            setFaAngles(faAnglesUp);
        }
    }

    const waitGetData = async () => {
        const initialData = await getData();
        initialData.sort((a, b) => {
            if (a.category > b.category) {
                return 1;
            }
            if (a.category < b.category) {
                return -1;
            }
            // a es igual a b
            return 0;
        })
        const saveCategories = [];
        for (let i = 0; i < initialData.length - 1; i++) {
            initialData[i].category !== initialData[i+1].category && saveCategories.push(initialData[i].category);
        }
        setCategories(saveCategories);
    }

    useEffect( () => {
        waitGetData();
    }, [])

    const ShowCategories = () => {
        const divsCategories = [];
        if (categories.length > 0) {
            categories.forEach(element => {
                divsCategories.push(
                    <div className='col-12 col-md-2' key={element}>
                        <Link to={`/categories/${element}`} className='text-decoration-none text-white'>
                            {element}
                        </Link>
                    </div>
                )
            });
            return divsCategories;
        }
    }

    return(
        <header className='bg-primary py-2 text-white container-fluid text-center'>
            <section className='container' id='menu-top'>
                <nav className='row align-items-center justify-content-center'>
                    <div className='col-2 col-md-2'>
                        <Link to='/' className='text-decoration-none text-white'>
                            <img src={logo} alt='Logo' className='logo' />
                        </Link>
                    </div>
                    <div className='col-7 col-md-8'>
                        <form action='#search' method='get' id='buscadorPrincipal'>
                            <input className='form-control shadow' type='text' placeholder='Buscar' name='search' aria-label='Search' />
                        </form>
                    </div>
                    <div className='col-3 col-md-2'>
                        <Link to='/' className='text-decoration-none text-white position-relative'>
                            <CartWidget />
                        </Link>
                    </div>
                </nav>
            </section>
            <section className='mt-3 container' id='menu-bottom'>
                <div className='d-md-none' id='showMenu' onClick={showMenu}>
                    <FontAwesomeIcon icon={faAngles} />
                </div>
                <nav className={`row d-md-flex mt-2 rounded align-items-center justify-content-center ${display}`} id='menuContent'>
                    <div className='col-12 col-md-2'>
                        <Link to='/' className='text-decoration-none text-white'>
                            Inicio
                        </Link>
                    </div>
                    <ShowCategories />
                </nav>
            </section>
        </header>
    );
}

export default NavBar;