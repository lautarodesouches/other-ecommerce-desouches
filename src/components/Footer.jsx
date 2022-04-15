import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="container-fluid bg-primary py-2 text-center">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-4">
                    <Link to='/help/' className="text-decoration-none text-white">Ayuda</Link>
                </div>
                <div className="col-12 col-md-4">
                    <Link to='/contact/' className="text-decoration-none text-white">Contacto</Link>
                </div>
                <div className="col-12 col-md-4 text-white">
                    ©2022 Copyright
                </div>
            </div>
        </footer>
    );
}

export default Footer;