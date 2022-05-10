// React Routes DOM
import { Link } from "react-router-dom";

const NotFound = ({message}) => {
    return(
        <div className="fadeIn">
            <h2 className="display-3 mt-5">{message}</h2>
            <Link to="/">
                <h2 className="mt-5">Ir a Inicio</h2>
            </Link>
        </div>
    );
}

export default NotFound;