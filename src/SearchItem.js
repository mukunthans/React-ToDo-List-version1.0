const SearchItem = ({search,setSearch}) => {
    return (
        <form className='searchForm' onSubmit={(e)=>{e.preventDefault()}}>
            <label htmlFor='search'>Search</label>
                <input 
                id='search'
                type="text"
                role="searchbox"
                placeholder='Search Items'
                value={search}
                onChange={(e) => {  const val= e.target.value;     setSearch(val)}}
                >
                </input>
            

        </form>

    )
}

export default SearchItem