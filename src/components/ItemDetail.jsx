import { formatNumber } from '../utils/functions';

const ItemDetail = ({item}) => {
    return(
        item.id === undefined
        ? <div>Cargar</div>
        :
        <article className="row align-items-center justify-content-center bg-white py-4 rounded">
            <section className="col-12 col-md-4 my-4 my-md-0 text-center">
                <div className="row align-items-center">
                    <div className="col-2 d-flex flex-column">
                        <div className="my-2 p-1 border border-primary rounded" style={{height:50}}>
                            <img src={`https://lautarodesouches.github.io/ecommerce/img/${item.id}-1.png`} alt={item.name} className="w-auto mw-100 h-100" />
                        </div>
                        <div className="my-2 p-1 border border-secondary rounded" style={{height:50}}>
                            <img src={`https://lautarodesouches.github.io/ecommerce/img/${item.id}-2.png`} alt={item.name} className="w-auto mw-100 h-100" />
                        </div>
                        <div className="my-2 p-1 border border-secondary rounded" style={{height:50}}>
                            <img src={`https://lautarodesouches.github.io/ecommerce/img/${item.id}-3.png`} alt={item.name} className="w-auto mw-100 h-100" />
                        </div>
                    </div>
                    <div className="col-10">
                        <img src={`https://lautarodesouches.github.io/ecommerce/img/${item.id}-1.png`} alt={item.name} className="w-75" />
                    </div>
                </div>
            </section>
            <section className="col-12 col-md-4 my-4 my-md-0">
                <h1 className="text-center h3">{item.name}</h1>
                <div className="my-4">
                    <h4 className='h5'>Color:</h4>
                    <div className="mt-3 row text-center justify-content-between align-item-center px-2 px-md-0">
                        <div className="col-3 p-1 rounded" style={{background:item.availableColors[0]}}>{item.availableColors[0]}</div>
                        <div className="col-3 p-1 rounded" style={{background:item.availableColors[1]}}>{item.availableColors[1]}</div>
                        <div className="col-3 p-1 rounded" style={{background:item.availableColors[2]}}>{item.availableColors[2]}</div>
                    </div>
                </div>
                <div>
                    <h2 className='h5'>Descripcion:</h2>
                    <p>{item.description}</p>
                </div>
            </section>
            <section className="col-12 col-md-4 my-4 my-md-0 text-center">
                <h2 className='h3'>{formatNumber(item.price)}</h2>
                <div className="row align-items-center my-4">
                    <div className="col-6 d-flex justify-content-center gap-4">
                        <div><h5>Cantidad:</h5></div>
                        <div><h5>1</h5></div>
                    </div>
                    <div className="col-6 d-flex justify-content-center gap-4">
                        <div><h3 className='h5'>Disponible:</h3></div>
                        <div><h5>{item.amountAvailable}</h5></div>
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-lg btn-primary w-75 my-2'>Comprar Ahora</button>
                        <button className='btn btn-lg btn-outline-primary w-75 my-2'>Agregar al carrito</button>
                    </div>
                </div>
            </section>
        </article>
    );
}

export default ItemDetail;