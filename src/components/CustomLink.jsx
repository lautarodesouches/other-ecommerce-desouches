// React Router DOM
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({category, showMenu}) => {

    let resolved = useResolvedPath(`/categories/${category}`);
    let match = useMatch({ path: resolved.pathname.replace(" ", "%20"), end: true });

    return(
        <div className="col-12 col-md-2" key={category}>
            <Link to={`/categories/${category}`} className={`${match ? "bg-white text-dark rounded px-2 py-1" : "text-white"} text-decoration-none`} onClick={showMenu}>
                {category}
            </Link>
        </div>
    );
}

export default CustomLink;