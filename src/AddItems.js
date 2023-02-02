import {useRef} from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
 
    const inputRef = useRef();
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
            autoFocus
            ref={inputRef}
            id="addItem"
            type="text"
            placeholder="Add Item"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}>
            </input>
            <button
            type="submit"
            aria-label="Add Item"
            onClick={() => inputRef.current.focus()}
            >
                <FaPlus/>
            </button>
        </form> 
    )
}

export default AddItem

//8 onSubmit() -> noo need to pass event object it is implict therefore no need to use arrow syntax to pass parameter

// useref is used to set focus in input after it is submitted