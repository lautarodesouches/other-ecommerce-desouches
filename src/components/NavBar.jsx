// Componentes
import SearchBar from "./SearchBar";
import CartWidget from "./CartWidget";
// React
import { useEffect, useState } from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
// Images
import logo from "../assets/logo.png";
// React Routes DOM
import { Link } from "react-router-dom";
// Utils
import { getData } from "../utils/data";

const NavBar = () => {

    const [display, setDisplay]         = useState("d-none");
    const [categories, setCategories]   = useState([]);
    const [faAngles, setFaAngles]       = useState(faAnglesDown);

    function showMenu() {
        if (display === "d-block") {
            setDisplay("d-none");
            setFaAngles(faAnglesDown);
        }else{
            setDisplay("d-block");
            setFaAngles(faAnglesUp);
        }
    }

    const waitGetData = async () => {
        const data = await getData();
        setCategories([...new Set(data.map(item => item.category))]);
    }

    useEffect( () => {
        waitGetData();
    }, [])

    return(
        <header className="bg-primary py-2 text-white container-fluid text-center">
            <section className="container" id="menu-top">
                <nav className="row align-items-center justify-content-center">
                    <div className="col-2 col-md-2">
                        <Link to="/" className="text-decoration-none text-white">
                            <img src={logo} alt="Logo" className="logo" />
                        </Link>
                    </div>
                    <div className="col-7 col-md-8">
                        <SearchBar />
                    </div>
                    <div className="col-3 col-md-2">
                        <Link to="/cart/" className="text-decoration-none text-white position-relative">
                            <CartWidget />
                        </Link>
                    </div>
                </nav>
            </section>
            <section className="mt-3 container" id="menu-bottom">
                <div className="d-md-none" id="showMenu" onClick={showMenu}>
                    <FontAwesomeIcon icon={faAngles} />
                </div>
                <nav className={`row d-md-flex mt-2 rounded align-items-center justify-content-center ${display}`} id="menuContent">
                    {
                        categories.map((category) => {
                            return(
                                <div className="col-12 col-md-2" key={category}>
                                    <Link to={`/categories/${category}`} className="text-decoration-none text-white" onClick={showMenu}>
                                        {category}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </nav>
            </section>
        </header>
    );
}

export default NavBar;