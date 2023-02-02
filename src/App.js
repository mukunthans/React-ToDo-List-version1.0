

import Header from './header';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItems';
import {useState ,useEffect} from 'react';

function App() {


    const [items,setItems] = useState(JSON.parse(localStorage.getItem('shopingList')) || []);

    const [newItem,setNewItem] = useState('');
    const [search,setSearch] = useState('');


    useEffect(()=>{
              localStorage.setItem('shopingList',JSON.stringify(items));

    },[items])


    const addItem = (item) => {
      const id = items.length ? items[items.length-1].id + 1 : 1;
      const myNewItem = {id ,checked:false,item}
      //console.log(myNewItem);
      const listItems = [...items, myNewItem];
      //console.log(listItems);

      setItems(listItems);
      

    }

    const handleCheck = (id) => {
        const listItems = items.map((item)=>{
         return  item.id === id ? {...item,checked:!item.checked } : item;
        })
        setItems(listItems);

    }
    const handleDelete = (id) => {


      const listItems = items.filter((item)=> item.id!==id);
     setItems(listItems);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!newItem) return;
      addItem(newItem);
      setNewItem('');
      
    }


  return (
    <div className="App">
     <Header title="ToDo List"/>

     <AddItem  newItem={newItem}
              setNewItem={setNewItem}
              handleSubmit={handleSubmit}/>
      <SearchItem  search={search}
                                setSearch = {setSearch} />
     <Content items={items.filter((item) => ((item.item).toLowerCase().includes(search.toLowerCase()))
     )} 
              handleCheck={handleCheck}
              handleDelete={handleDelete}/>
     <Footer length={items.length}  />
    </div>
  );
}

export default App;


//65 when a form is submitted, the default behavior is to reload the page, to prevent it we use it