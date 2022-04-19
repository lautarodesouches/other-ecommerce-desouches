// Image
import rainbowCat from "../assets/rainbow-cat.gif";

const Loading = () => {
    return(
        <section className="mt-5 text-center">
            <h2>Cargando...</h2>
            <img src={rainbowCat} alt="Rainbow Cat"  className="w-50 rounded"/>
        </section>
    );
}

export default Loading;