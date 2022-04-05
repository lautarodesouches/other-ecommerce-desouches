import Item from './Item';

const ItemList = ({ products }) => {

    return(
        <div className="row align-items-stretch text-center">
            {
                products.map((product) =>
                    <Item key={product.id} id={product.id} name={product.name} price={product.price} />
                )
            }
        </div>
    );
}

export default ItemList;