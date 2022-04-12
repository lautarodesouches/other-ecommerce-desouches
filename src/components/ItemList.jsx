// Components
import Item from './Item';

const ItemList = ({ items }) => {

    return(
        <div className='row align-items-stretch text-center'>
            {
                items.map((item) =>
                    <Item key={item.id} id={item.id} name={item.name} price={item.price} />
                )
            }
        </div>
    );
}

export default ItemList;