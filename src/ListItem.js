import {FaTrashAlt } from 'react-icons/fa';


const ListItem = ({item,handleDelete,handleCheck}) => {
    return (

               <li className="item" 
               > 
               <input type="checkbox"
               onChange={()=>handleCheck(item.id)}
               checked={item.checked}>
               </input>
               <label
               style={item.checked ? {textDecoration:'line-through'} : null}
               onDoubleClick={()=>{handleCheck(item.id)}}
               > {item.item}   </label>
               <FaTrashAlt
               onClick={()=>handleDelete(item.id)}
               role="button"
               tabIndex="0"
               
               aria-label={`Delete ${item.item}`}/>
             
          </li>
   )
}

export default ListItem

//aria-label for screen readers
//10 checked for displaying default value in o/p