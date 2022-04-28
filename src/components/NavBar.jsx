// Componentes
import SearchBar from "./SearchBar";
import CartWidget from "./CartWidget";
import CustomLink from "./CustomLink";
// React
import { useEffect, useState } from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
// Images
import logo from "../assets/logo.png";
// React Routes DOM
import { Link } from "react-router-dom";
// Firebase
import { collection, getDocs, query } from "firebase/firestore";
// Utils
import db from "../utils/firebaseConfig";

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

    useEffect( () => {
        // Auto-executing anonymous function - get data from Firebase
        (async function () {
            const querySnapshot = query(collection(db, "products"));
            return await getDocs(querySnapshot);
        })()
            .then(result => {
                // Get all categories
                const arrayCategories = [...new Set(result.docs.map( (doc) => doc.data().category ))]
                // Limit categories to show on the menu
                setCategories(arrayCategories.filter( (el, id) => id < 6));
            })
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
                                <CustomLink category={category} showMenu={showMenu} key={category} />
                            )
                        })
                    }
                </nav>
            </section>
        </header>
    );
}

export default NavBar;