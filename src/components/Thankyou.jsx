// React Router DOM
import { Link } from "react-router-dom";

const Thankyou = ({buyerName, orderId}) => {
    return(
        <div className="fadeIn">
            <h2>Gracias por tu compra {buyerName}</h2>
            <h5 className="mt-3"> Tu ID de compra es:</h5>
            <h5 className="b">{orderId}</h5>
            <Link to="/orders/">
                <p className="my-5">Podes usar este ID para seguir el estado de tu compra acá</p>
            </Link>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default Thankyou;