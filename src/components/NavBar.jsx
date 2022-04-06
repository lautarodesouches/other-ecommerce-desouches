// Componentes
import CartWidget from './CartWidget';
import { useState } from "react";
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {

    const [display, setDisplay] = useState('d-none');
    const [faAngles, setFaAngles] = useState(faAnglesDown)

    function showMenu() {
        if (display === 'd-block') {
            setDisplay('d-none');
            setFaAngles(faAnglesDown);
        }else{
            setDisplay('d-block');
            setFaAngles(faAnglesUp);
        }
    }

    return(
        <header className="bg-primary py-2 text-white container-fluid text-center">
            <section className="container" id="menu-top">
                <nav className="row align-items-center justify-content-center">
                    <div className="col-2 col-md-2">
                        <a href="#nothing" className="text-decoration-none text-white">
                            <img src="https://lautarodesouches.github.io/ecommerce/img/logo.png" alt="Logo" className="logo" />
                        </a>
                    </div>
                    <div className="col-7 col-md-8">
                        <form action="#nothing" method="get" id="buscadorPrincipal">
                            <input className="form-control shadow" type="text" placeholder="Buscar" name="search" aria-label="Search" />
                        </form>
                    </div>
                    <div className="col-3 col-md-2">
                        <a href="#nothing" className="text-decoration-none text-white position-relative">
                            <CartWidget />
                        </a>
                    </div>
                </nav>
            </section>
            <section className="mt-3 container" id="menu-bottom">
                <div className="d-md-none" id="showMenu" onClick={showMenu}>
                    <FontAwesomeIcon icon={faAngles} />
                </div>
                <nav className={`row d-md-flex mt-2 rounded align-items-center justify-content-center ${display}`} id="menuContent">
                    <div className="col-12 col-md-2">
                        <a href="#nothing" className="text-decoration-none text-white">
                            Inicio
                        </a>
                    </div>
                    <div className="col-12 col-md-2">
                        <a href="#nothing" className="text-decoration-none text-white">
                            Categorias
                        </a>
                    </div>
                    <div className="col-12 col-md-2">
                        <a href="#nothing" className="text-decoration-none text-white">
                            Ofertas
                        </a>
                    </div>
                    <div className="col-12 col-md-2">
                        <a href="#nothing" className="text-decoration-none text-white">
                            Favoritos
                        </a>
                    </div>
                    <div className="col-12 col-md-2">
                        <a href="#nothing" className="text-decoration-none text-white">
                            Productos
                        </a>
                    </div>
                </nav>
            </section>
        </header>
    );
}

export default NavBar;