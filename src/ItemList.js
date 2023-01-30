
import  ListItem  from './ListItem';


const ItemList = ({items,handleDelete,handleCheck}) => {
    return (
 <ul>
        {items.map((item) =>  (
           <ListItem
                     
                     key={item.id}
                     item={item}
                     handleDelete={handleDelete}
                     handleCheck={handleCheck}
            />
        ))}
      </ul>
    )

}

export default  ItemList