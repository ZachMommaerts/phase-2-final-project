function SearchBar({ search, setSearch }) {
    function onSubmitForm(e) {
        e.preventDefault();
        console.log(search)
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
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