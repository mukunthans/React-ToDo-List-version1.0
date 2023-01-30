import {FaTrashAlt } from 'react-icons/fa';


const ListItem = (props) => {
    return (
               <li className="item" key={props.item.id}> 
               <input type="checkbox"
               onChange={()=>props.handleCheck(props.item.id)}
               checked={props.item.checked}>
               </input>
               <label
               style={props.item.checked ? {textDecoration:'line-through'} : null}
               onDoubleClick={()=>{props.handleCheck(props.item.id)}}
               > {props.item.item}   </label>
               <FaTrashAlt
               onClick={()=>props.handleDelete(props.item.id)}
               role="button"
               tabIndex="0"
               
               aria-label={`Delete ${props.item.item}`}/>
             
          </li>
   )
}

export default ListItem

//aria-label for screen readers
//9 checked for displaying default value in o/p