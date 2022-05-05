import { Link } from "react-router-dom";

const Footer = () => {

    const date = new Date();

    return(
        <footer className="container-fluid py-2 text-center">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-4">
                    <Link to="/orders/" className="text-dark text-decoration-none">
                        Buscar ordenes
                    </Link>
                </div>
                <div className="col-12 col-md-4 text-dark">
                    ©{date.getFullYear()} Copyright
                </div>
            </div>
        </footer>
    );
}

export default Footer;