import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';

function Header({ search, setSearch }) {
    return (
        <>
            <h1>Watch Stuff</h1>
            <Link to='/watchlist'>Watch List</Link>
            <SearchBar search={search} setSearch={setSearch} />
        </>
    )
}

export default Header;