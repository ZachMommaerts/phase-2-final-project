function SearchBar({ search, setSearch }) {
    function onSubmitForm(e) {
        e.preventDefault();
        console.log(search)
        fetch(`https://api.watchmode.com/v1/search/?apiKey=${process.env.REACT_APP_API_KEY}&search_field=name&search_value=${search}`)
        .then(r => r.json())
        .then(movie => console.log(movie))
        .catch(error => alert(error))
      }

    return (
        <form>
            <input 
                type='text' 
                placeholder='Search...' 
                value={search} 
                onChange={e => setSearch(e.target.value)}
            />
            <input 
                type='submit' 
                value='Submit' 
                onClick={e => onSubmitForm(e)}
            />
        </form>
    )
}

export default SearchBar;