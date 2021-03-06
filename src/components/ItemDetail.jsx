// Components
import ItemCount from "./ItemCount";
// React
import { useContext, useState } from "react";
// Function
import { formatNumber, capitalize, notification } from "utils/functions";
// React Router
import { Link } from "react-router-dom";
// Context
import { CartContext } from "context/CartContextProdived";

const ItemDetail = ({item}) => {

    const [imgNumber, setImgNumber] = useState(1);
    const [desiredQuantity, setDesiredQuantity] = useState(0);
    const [desiredColor, setDesiredColor] = useState(undefined);

    const cartContext = useContext(CartContext);

    const changeImg = (number) => {
        setImgNumber(number);
    }

    const showImages = () => {
        const divImages = [];
        for (let index = 1; index < item.availableImages + 1; index++) {
            divImages.push(
                <div className={`my-2 p-1 border rounded h-50px transition-1 ${imgNumber === index && "border-primary"}`} onClick={() => {changeImg(index)}} key={index}>
                    <img src={`https://lautarodesouches.github.io/ecommerce/img/${item.id}-${index}.png`} alt={item.name} className="mw-100 mh-100" loading="lazy" />
                </div>
            )
        }
        return divImages;
    }

    const onAdd = (qty) => {
        if (desiredColor === undefined) {
            notification("Por favor, elija un color", "bg-danger", 4000);
        } else {
            setDesiredQuantity(qty);
            cartContext.addToCart({item, qty, desiredColor});
        }
    }

    return(
        <article className="row align-items-center justify-content-center bg-white py-4 rounded">
            <section className="col-12 col-md-4 my-4 my-md-0 text-center">
                <div className="row align-items-center">
                    <div className="col-2 d-flex flex-column">
                        {
                            showImages()
                        }
                    </div>
                    <div className="col-10">
                        <img src={`https://lautarodesouches.github.io/ecommerce/img/${item.id}-${imgNumber}.png`} alt={item.name} className="item__img" loading="lazy" />
                    </div>
                </div>
            </section>
            <section className="col-12 col-md-4 my-4 my-md-0">
                <h1 className="text-center h3">{item.name}</h1>
                <div className="my-4">
                    <h4 className="h5 text-start">
                        Color:
                    </h4>
                    <div className="mt-3 row text-center justify-content-between align-item-center px-2 px-md-0">
                        {
                            item.availableColors.map( color => {
                                return(
                                    <div 
                                        className={`col-3 p-1 rounded border transition-1 cursor-pointer ${desiredColor === color && "border-primary"}`}
                                        onClick={ () => {setDesiredColor(color)}}
                                        key={color}
                                    >
                                            {capitalize(color)}
                                    </div>
                                )        
                            })
                        }
                    </div>
                </div>
                <div className="text-start">
                    <h2 className="h5">Descripcion:</h2>
                    <p>{item.description}</p>
                </div>
            </section>
            <section className="col-12 col-md-4 my-4 my-md-0 text-center">
                <div className="pb-3">
                    <h2 className="h3">Precio: {formatNumber(item.price)}</h2>
                </div>
                <div className="pb-3">
                    <h3 className="h5">Disponible: {item.amountAvailable}</h3>
                </div>
                {
                    desiredQuantity < 1
                    ?
                    <ItemCount stock={item.amountAvailable} initial={1} onAdd={onAdd} />
                    :
                    <>
                        <div className="pb-3">
                            <h3 className="h5">Cantidad seleccionada: {desiredQuantity}</h3>
                        </div>
                        <div className="pb-3">
                            <Link to="/cart/">
                                <button className="btn btn-primary shadow w-50">Terminar mi compra</button>
                            </Link>
                        </div>
                    </>
                }
            </section>
        </article>
    );
}

export default ItemDetail;